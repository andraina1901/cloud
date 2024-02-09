import { 
	IonButton, 
	IonButtons, 
	IonCol, 
	IonContent,
	IonFooter, 
	IonGrid, 
	IonHeader, 
	IonImg, 
	IonPage, 
	IonToolbar, 
	IonRow, 
    IonMenuButton,
    IonInput,
    IonLoading
} from '@ionic/react';

import CustomInput from '../components/CustomInput';
import FileUpload from '../components/FileUpload';
import { useAnnonceFields } from '../data/fields';
import { useAnnonce3Fields } from '../data/fields';
import { useAnnonceVoitureFields } from '../data/fields';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { getUser } from '../data/User';
import { addVoiture } from '../data/Voiture';
import { addAnnonce } from '../data/Annonce';

import "./NewAnnonce.css";
import "./Spinner.css"

const NewAnnonce = () => {
    const params = useParams();
	const annonceFields = useAnnonceFields();
	const annonce3Fields = useAnnonce3Fields();
	const annonceVoitureFields = useAnnonceVoitureFields();
    const [ errors, setErrors ] = useState(false);

    const [section, setSection] = useState(1);
    
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const handlePrev = () => {
        setSection((prevSection) => prevSection - 1);
    };

    const handleNext = () => {
        setSection((prevSection) => prevSection + 1);
    };

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleFileChange = (event) => {
        const files = event.target.files[0];
        if (files) {
            setUploadedFiles([...uploadedFiles, files]);
        }
        console.log(uploadedFiles)
    };

    const [user, setUser] = useState();

    useEffect (() => {
        getUser().then((response)=>{
        setUser(response.rows);
        }).catch(error =>{
        console.log(error);
        })
    },[]);

    const submit = () => {
        setLoading(true);
        annonceFields.forEach(field => console.log(field.input.state));
        annonce3Fields.forEach(field => console.log(field.input.state));
        annonceVoitureFields.forEach(field => console.log(field.input.state));
        
            const voitureData = {
                modele: {
                    "idModele": annonceFields[2].input.state.value
                },
                kilometrage: annonceVoitureFields[0].input.state.value,
                energie: {
                    "idEnergie" :annonceVoitureFields[1].input.state.value
                },
                boiteVitesse: {
                    "idBoiteVitesse" :annonceVoitureFields[2].input.state.value
                },
                couleur: {
                    "idCouleur" :annonceVoitureFields[3].input.state.value
                },
                consommation: annonceVoitureFields[4].input.state.value,
            };
            addVoiture(voitureData).then((result) => {
                const formData = {
                    titre: annonceFields[0].input.state.value,
                    descriptions: annonceFields[1].input.state.value,
                    idUser: user.id,
                    idVoiture: result.data.idVoiture,
                    prix: annonce3Fields[0].input.state.value
                };
                addAnnonce(formData, uploadedFiles[0]).then(() => {
                    setLoading(false);
                    history.push('/profil');
                })
            }).catch((error) => {
                setLoading(false);
            })
    }

    useEffect(() => {
        return () => {

            annonceFields.forEach(field => field.input.state.reset(""));
            annonce3Fields.forEach(field => field.input.state.reset(""));
            annonceVoitureFields.forEach(field => field.input.state.reset(""));
            setErrors(false);
        }
    }, [params]);

	return (
		<IonPage className='newAnnoncePage'>
			<IonHeader>
				<IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>

                    <IonImg src='assets/images/Logo.png' className='logo' ></IonImg>

                    <IonButtons slot="end">
                        <IonImg style={{"width":"50px"}} src='assets/images/mini.png' className='logo' ></IonImg>
                    </IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
                <IonGrid className="ion-padding contenuNewAnnonce">

                    <IonRow className="ion-margin-top ion-padding-top">
                    {/* Section 1 */}
                    {section === 1 && (
                    <IonCol size="12">
                            { annonceFields.map(field => {
                                return <CustomInput key={field.id} field={ field } errors={ errors } />;
                            })}
                            <IonButton onClick={handleNext}>Suivant</IonButton>
                    </IonCol>
                    )}
                    {section === 2 && (
                    <IonCol size="12">
                            { annonceVoitureFields.map(field => {
                                return <CustomInput key={field.id} field={ field } errors={ errors } />;
                            })}
                            <IonButton onClick={handlePrev}>Precedent</IonButton>
                            <IonButton onClick={handleNext}>Suivant</IonButton>
                    </IonCol>
                    )}
                    {section === 3 && (
                    <IonCol size="12">
                            { annonce3Fields.map(field => {
                                return <CustomInput key={field.id} field={ field } errors={ errors } />;
                            })},
                            <div className="add-image-content">
                            <div className="container">
                                <div className="content">
                                        <h6>Image</h6>
                                        <p className="text-extra-small">The image has to be png, jpg or jpeg</p>
                                        <label htmlFor="upload-image">
                                            <input 
                                                id="upload-image"
                                                type="file"
                                                accept="image/*"
                                                multiple
                                                onChange={handleFileChange}
                                            />
                                        </label>
                                        <IonLoading isOpen={loading} message="Publication en cours..." />
                                </div>
                            </div>
                        </div>
                            <IonButton onClick={handlePrev}>Precedent</IonButton>
                            
                            
                            <IonButton className={loading ? 'loading' : ''} onClick={submit} disabled={loading}>
                                {loading ? <div className="spinner"></div> : 'Valider'}
                            </IonButton>
                    </IonCol>
                    )}
                    </IonRow>
                </IonGrid>
			</IonContent>

			<IonFooter>
				<IonGrid className="ion-no-margin ion-no-padding">
                    <IonImg className='ion-padding-top' src="assets/images/FootLog.png"></IonImg>
				</IonGrid>
			</IonFooter>
		</IonPage>
	);
};

export default NewAnnonce;