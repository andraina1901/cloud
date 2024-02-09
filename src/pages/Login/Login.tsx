import { 
    IonBackButton, 
    IonButton, 
    IonButtons, 
    IonCardTitle, 
    IonCol, 
    IonContent, 
    IonFooter, 
    IonGrid, 
    IonHeader, 
    IonIcon, 
    IonPage,  
    IonRow, 
    IonToolbar,
    IonImg
} from '@ionic/react';
import "./Login.css";
import "../Spinner.css";

import { arrowBack } from "ionicons/icons";
import CustomField from '../../components/CustomField';
import { useLoginFields } from '../../data/fields';
import { useEffect, useState } from 'react';
import { validateForm } from '../../data/utils';
import { useHistory, useParams } from 'react-router';
import { request,setAuthHeader } from "../../helpers/axios_helper";


const Login = () => {
    
    const params = useParams();

    const fields = useLoginFields();
    const [ errors, setErrors ] = useState(false);

    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const login = () => {
        const errors = validateForm(fields);
        setErrors(errors);
        setLoading(true);

        if (!errors.length) {
            request("POST", "/auth/signin", {
                login: fields[0].input.state.value,
                password: fields[1].input.state.value,
              })
                .then((response) => {
                  setAuthHeader(response.data.token);
                  history.push('/accueil');
                })
                .catch((error) => {
                  console.log("Erreur de connexion");
                  setAuthHeader(null);
                }).finally(() => {
                  setLoading(false);
                });
        } else {
            
            setLoading(false);
        }
        
    }

    useEffect(() => {
        return () => {

            fields.forEach(field => field.input.state.reset(""));
            setErrors(false);
        }
    }, [params]);

	return (
		<IonPage className='loginPage'>
			<IonHeader>
				<IonToolbar>
					
                    <IonButtons slot="start">
                        <IonBackButton icon={ arrowBack } text="" className="custom-back" />
                    </IonButtons>

                    <IonImg src='assets/images/Logo.png' className='logo' ></IonImg>

                    <IonButtons slot="end">
                        <IonImg style={{"width":"50px"}} src='assets/images/mini.png' className='logo' ></IonImg>
                    </IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
                <IonGrid className="ion-padding contenuLogin">
                    <IonRow>
                        <IonCol size="12" className='headingText'>
                            <IonCardTitle>Log in</IonCardTitle>
                            <h5>Welcome back, hope you're doing well</h5>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-margin-top ion-padding-top">
                        <IonCol size="12">

                            { fields.map(field => {

                                return <CustomField key={field.id} field={ field } errors={ errors } />;
                            })}

                            
                            <button className={loading ? 'loginbutton loading' : 'loginbutton'} onClick={login} disabled={loading}>
                                {loading ? <div className="spinner"></div> : 'Login'}
                            </button>
                        </IonCol>
                    </IonRow>
                </IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Login;