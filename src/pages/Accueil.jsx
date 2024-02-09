import { 
    IonMenuButton, 
    IonButtons, 
    IonContent, 
    IonGrid, 
    IonHeader, 
    IonPage, 
    IonImg, 
    IonRow, 
    IonToolbar 
} from '@ionic/react';

import { getAnnonce } from "../data/Annonce";
import Products from '../components/Products'
import React, { useState , useEffect} from "react";

const Accueil = () => {
    const [dataAnnonce, setDataAnnonce] = useState([]);
    useEffect (() => {
        getAnnonce().then((response)=>{
        setDataAnnonce(response.rows.data);
        }).catch(error =>{
        console.log(error);
        })
    },[]);
	
	return (
		<IonPage className='signupPage'>
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
                <IonGrid className="ion-padding">
                    <IonRow className="ion-padding">
                        { dataAnnonce.map(data => {
                            return <Products key={data.idAnnonce} data={ data } annonceUser={false} />;
                        })}
                    </IonRow>
                </IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Accueil;