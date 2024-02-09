import { 
    IonBackButton, 
    IonButtons, 
    IonCardTitle, 
    IonCol, 
    IonContent, 
    IonFooter, 
    IonGrid, 
    IonHeader, 
    IonPage, 
    IonImg, 
    IonRow, 
    IonToolbar 
} from '@ionic/react';
import './Signup.css';
import "../Spinner.css";

import { arrowBack, shapesOutline } from "ionicons/icons";
import CustomField from '../../components/CustomField';
import { useSignupFields } from '../../data/fields';
import { Action } from '../../components/Action';
import { useEffect, useState } from 'react';
import { validateForm } from '../../data/utils';
import {useHistory,  useParams } from 'react-router';
import { request,setAuthHeader } from "../../helpers/axios_helper";

const Signup = () => {

    const params = useParams();
    const fields = useSignupFields();
    const [ errors, setErrors ] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const createAccount = () => {
        setLoading(true);

        const errors = validateForm(fields);
        setErrors(errors);

        if (!errors.length) {
            request("POST", "/auth/signup", {
                username: fields[0].input.state.value,
                email: fields[1].input.state.value,
                dtn: fields[2].input.state.value,
                sexe: fields[3].input.state.value,
                password: fields[4].input.state.value,
              })
                .then((response) => {
                    console.log(response)
                    history.push('/login');
                })
                .catch((error) => {
                  console.log("Erreur de connexion");
                  console.log(error)
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
		<IonPage className='signupPage'>
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
                <IonGrid className="ion-padding contenuSignup">
                    <IonRow>
                        <IonCol size="12" className='headingText'>
                            <IonCardTitle>Sign up</IonCardTitle>
                            <h5>Lets get to know each other</h5>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="12">

                            { fields.map(field => {

                                return <CustomField key={field.id} field={ field } errors={ errors } />;
                            })}

                            <button className={loading ? 'signupbutton loading' : 'signupbutton'} onClick={createAccount} disabled={loading}>
                                {loading ? <div className="spinner"></div> : 'Create account'}
                            </button>
                        </IonCol>
                    </IonRow>
                </IonGrid>
			</IonContent>

			<IonFooter>
				<IonGrid className="ion-no-margin ion-no-padding">

                    <Action message="Already got an account?" text="Login" link="/login" />
                    <IonImg src="assets/images/FootLog.png"></IonImg>
				</IonGrid>
			</IonFooter>
		</IonPage>
	);
};

export default Signup;