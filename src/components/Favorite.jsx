import {
    IonIcon
  } from '@ionic/react';
  
import { 
    heartOutline,
    starSharp,
    starOutline,
	person
} from 'ionicons/icons';
import "./Favorite.css";



const Notif = ({data}) => {

    return (
        <div className="favorites">
			<div className="container">
				<div className="content-wrapper">
					<a>
						<div className="favorite-symbol active-symbol"><IonIcon icon={heartOutline}></IonIcon></div>
					</a>
					<div className="content-image">
                        <img className="radius-default" src={data.photo} alt=""/>
					</div>
					<div className="boxed">
						<p className="title-item-fav">{data.voiture.modele.nomModele}</p>
						<p className="price-item-fav">${data.prix}</p>
						<ul className="rating-item-fav">
							<li><IonIcon icon={starSharp}></IonIcon></li>
							<li><IonIcon icon={starSharp}></IonIcon></li>
							<li><IonIcon icon={starSharp}></IonIcon></li>
							<li><IonIcon icon={starSharp}></IonIcon></li>
							<li><IonIcon icon={starOutline}></IonIcon></li>
						</ul>
						<p className="location-item"><IonIcon icon={person}></IonIcon>{data.user.username}</p>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Notif;
