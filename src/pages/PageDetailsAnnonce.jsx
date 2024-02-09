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

import React, { useState , useEffect} from "react";
import DetailsAnnonce from '../components/DetailsAnnonce'
import { useParams } from 'react-router';
import { getAnnonceById } from '../data/Annonce';

const PageDetailsAnnonce = () => {
    const { idAnnonce } = useParams();
    const [dataAnnonce, setDataAnnonce] = useState([]);
    useEffect (() => {
        getAnnonceById(idAnnonce).then((response)=>{
        setDataAnnonce(response.rows.data);
        console.log('data', dataAnnonce)
        }).catch(error =>{
        console.log(error);
        })
    },[]);

	return (
		<IonPage className='signupPage'>
			<IonContent fullscreen>
                <IonGrid>
                    {dataAnnonce && (
                        <DetailsAnnonce data={dataAnnonce}/>
                    )}
                </IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default PageDetailsAnnonce;