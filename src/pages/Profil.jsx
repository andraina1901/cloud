import { 
	IonContent,
	IonFooter, 
	IonGrid, 
	IonHeader, 
	IonIcon, 
	IonPage,
    IonRow,
    IonRefresher,
    IonRefresherContent,
    IonMenuButton,
    IonButtons,
    IonToolbar,
    IonImg
} from '@ionic/react';
import './Profil.css';
import { getUser } from '../data/User';
import { getAnnonceUser } from '../data/Annonce';
import Products from '../components/Products';
import { personAddOutline, mailOutline, chatboxOutline, duplicateOutline } from "ionicons/icons";
import React, { useState , useEffect} from "react";

const Profil = () => {
    const [user, setUser] = useState();
    const [dataAnnonce, setDataAnnonce] = useState([]);

    const fetchData = () => {
        getUser()
          .then((response) => {
            setUser(response.rows);
            getAnnonceUser(response.rows.id)
              .then((response2) => {
                setDataAnnonce(response2.rows.data);
                console.log(dataAnnonce);
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      };

      useEffect(() => {
        fetchData();
      }, []); 

    const handleRefresh = (event) => {
        setTimeout(() => {
            fetchData();
            event.detail.complete();
        }, 2000);
    }

	
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
                <IonRefresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200} onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <div id="tab-profile" className="tab tab-profile">
                    <div className="separator-extra-large"></div>
                    <div className="container">
                        <div className="header-profile">
                            <img src="assets/images/avatar1.png" alt="profil"/>
                            <div className="title-name">
                                {user && (
                                    <>
                                    <h4 className="">{user.username}</h4>
                                    <p className="text-small">{user.email}</p>
                                    </>
                                )}
                            </div>

                            <div className="separator-medium"></div>

                            <div className="contact-button">
                                <button className="button">Contact Seller</button>
                            </div>

                            <div className="separator-medium"></div>

                            <div className="profile-media">
                                <li><a href="#" className="bg-gray"><IonIcon icon={personAddOutline} /></a></li>
                                <li><a href="#" className="bg-red"><IonIcon icon={mailOutline} /></a></li>
                                <li><a href="#" className="bg-blue"><IonIcon icon={chatboxOutline} /></a></li>
                            </div>
                        </div>
                        <IonGrid className="ion-padding">
                            <div className="item-link item-content">
                                <div className="item-media">
                                    <ion-icon icon={duplicateOutline} class="color-blue"></ion-icon>
                                </div>
                                <div className="item-inner">
                                    <div className="item-title">Annonces</div>
                                </div>
                            </div>
                            <IonRow className="ion-padding row">
                                { dataAnnonce.map(data => {
                                    return <Products key={data.idAnnonce} data={ data } annonceUser={true}/>;
                                })}
                            </IonRow>
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

export default Profil;