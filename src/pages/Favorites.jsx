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

import { annnonceData } from '../data/data';
import Favorite from '../components/Favorite'

const Accueil = () => {
	const dataAnnonce = annnonceData();

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
                <IonGrid>
                    { dataAnnonce.map(data => {
                        return <Favorite key={data.idAnnonce} data={ data } />;
                    })}
                </IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Accueil;