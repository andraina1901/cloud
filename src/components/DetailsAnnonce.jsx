import {
    IonIcon,
    IonButton,
    IonButtons
  } from '@ionic/react';
  
import { 
    arrowBack,
    heartOutline,
    warningOutline,
	shareSocialOutline,
    callOutline,
    chatboxOutline,
    mailOutline
} from 'ionicons/icons';
import { useHistory } from 'react-router';
import "./DetailsAnnonce.css";
import ImagePreview from './ImagePreview';



const DetailsAnnonce = ({data}) => {
    const history = useHistory();
    const handleRetour = () => {
        history.goBack();
    }

    return (
        <div className="page">
            <div className="navbar navbar-transparent">
                <div className="navbar-bg"></div>
                <div className="navbar-inner sliding">
                    <div className="left">
                        <IonButtons slot='start' className='no-background'>
                            <IonButton onClick={handleRetour}>
                                <IonIcon icon={arrowBack}></IonIcon>
                            </IonButton>
                        </IonButtons>
                    </div>
                    <div className="title">Ads Details</div>
                </div>
            </div>
            <div className="page-content">
                <div className="separator-small"></div>
                
                <ImagePreview data={data.photo} />

                <div className="separator-medium"></div>

                <div className="detail-title">
                    <div className="container">
                        <div className="tag-category">
                            <span>Cars</span>
                        </div>
                        <p className="price-item">{data.prix} Ar</p>

                        <div className="separator-small"></div>

                        <p className="title-item title-item-large">Titre : {data.titre}</p>

                        <div className="separator-small"></div>

                        <div className="short-info">
                            <p className="text-small">Modele : {data?.voiture && (<span>{data.voiture.modele.nomModele}</span>)}</p>
                            <p className="text-small">Publier par : {data?.user && (<span>{data.user.username}</span>)}</p>
                        </div>

                        <div className="separator-small"></div>

                        <div className="item-detail-action">
                            <ul>
                                <li><a href="#"><IonIcon icon={heartOutline}></IonIcon></a></li>
                                <li><a href="#"><IonIcon icon={warningOutline}></IonIcon></a></li>
                                <li><a href="#"><IonIcon icon={shareSocialOutline}></IonIcon></a></li>
                            </ul>
                        </div>

                        <div className="divider-h"></div>

                    </div>
                </div>

                <div className="item-description">
                    <div className="block-title title-small no-margin-top">
                        <h3>Description</h3>
                    </div>
                    <div className="container descri">
                        <p>{data.descriptions}</p>
                    </div>
                </div>

                <div className="item-details">
                    <div className="block-title title-small">
                        <h3>Details</h3>
                    </div>
                    <div className="container">
                        <ul>
                            {data?.voiture && (
                            <>
                            <li>Modele <span>{data.voiture.modele.nomModele}</span></li>
                            <li>Année de sortie <span>{data.voiture.modele.annee}</span></li>
                            <li>Kilometrage <span>{data.voiture.kilometrage} Km</span></li>
                            <li>Energie <span>{data.voiture.energie.nomEnergie}</span></li>
                            <li>Boite de Vitesse <span>{data.voiture.boiteVitesse.nomBoiteVitesse}</span></li>
                            <li>Consommation <span>{data.voiture.consommation}</span></li>
                            <li>Couleur <span>{data.voiture.couleur.nomCouleur}</span></li>
                            </>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="separator-medium"></div>

                <div className="block-title">
                    <h3>Seller Information</h3>
                </div>
                <div className="seller-info">
                    <div className="container">
                        <div className="content">
                            <img src="public/assets/images/avatar1.png" alt="" />
                            <div className="title-name">
                                <h5 className="color-white">{data?.user && (<span>{data.user.username}</span>)}</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block-title block-title-center">
                    <h3>Contact Seller</h3>
                </div>
                <div className="contact-seller profile-media">
                    <div className="container">
                        <ul className='contSeller'>
                            <li><a href="#" className="bg-green"><IonIcon icon={callOutline}></IonIcon></a></li>
                            <li><a href="#" className="bg-blue"><IonIcon icon={chatboxOutline}></IonIcon></a></li>
                            <li><a href="#" className="bg-red"><IonIcon icon={mailOutline}></IonIcon></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsAnnonce;
