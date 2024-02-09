import { 
    IonIcon,
    IonImg,
    IonRouterLink
} from "@ionic/react";
import { person, heartOutline, heart } from "ionicons/icons";
import { useState } from 'react';
import "./Products.css";
import { addFavori } from "../data/Favori";
import { getUser } from "../data/User";



const Products = ({data, annonceUser}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = (idAnnonce) => {
        setIsFavorite((prevIsFavorite) => !prevIsFavorite);
        getUser().then((response)=>{
            const user = response.rows;
            const data = {
                iduser: user.idUser,
                annonce: {
                    idAnnonce: idAnnonce
                }
            }
            addFavori(data)
        }).catch(error =>{
            console.log(error);
        })
    };

    if (annonceUser == true) {
        return (
            <div className="swiper-slide-content">
                <div className="content-item radius-default bg-white">
                    <IonRouterLink routerLink={`/detailsannonce/${data.idAnnonce}`} data-transition="f7-dive">
                        <IonImg className="full-width radius-top-only" src={data.photo} alt="Image" ></IonImg>
                        <div className="text-desc">
                            <p className="title-item">{data.voiture.modele.nomModele}</p>
                            <p className="price-item">${data.prix}</p>
                            <p className="location-item"><IonIcon icon={person}></IonIcon>{data.user.username}</p>
                        </div>
                    </IonRouterLink>
                    <div className="buttonModifEtat">
                        <button>Modif Etat</button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="swiper-slide-content">
                <div className="content-item radius-default bg-white">
                    <div
                        className={`favorite-symbol ${isFavorite ? 'active-symbol' : ''}`}
                        onClick={toggleFavorite(data.idAnnonce)}
                    >
                        <IonIcon icon={isFavorite ? heart : heartOutline} />
                    </div>
                    <IonRouterLink routerLink={`/detailsannonce/${data.idAnnonce}`} data-transition="f7-dive">
                        <IonImg className="full-width radius-top-only" src={data.photo} alt="" ></IonImg>
                        <div className="text-desc">
                            <p className="title-item">{data.voiture.modele.nomModele}</p>
                            <p className="price-item">${data.prix}</p>
                            <p className="location-item"><IonIcon icon={person}></IonIcon>{data.user.username}</p>
                        </div>
                    </IonRouterLink>
                </div>
            </div>
        );
    }
};

export default Products;
