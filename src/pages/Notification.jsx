import { 
	IonContent,
	IonFooter, 
	IonGrid, 
	IonHeader, 
	IonIcon, 
	IonPage,
    IonRow,
    IonCol,
    IonMenuButton,
    IonButtons,
    IonToolbar,
    IonImg
} from '@ionic/react';
import Notif from '../components/Notif'
import { notifData } from '../data/data';

const Notification = () => {

    const dataNotif = notifData();
	
	return (
		<IonPage className='homePage'>
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
                <div id="tab-profile" className="tab tab-profile">
                    <div>
                        <IonGrid>
                            <div className="container">
                                { dataNotif.map(data => {
                                    return <Notif key={data.idNotif} data={ data } />;
                                })}
                            </div>
                        </IonGrid>
                    </div>

                </div>
			</IonContent>

			<IonFooter>
				<IonGrid>
					
				</IonGrid>
			</IonFooter>
		</IonPage>
	);
};

export default Notification;