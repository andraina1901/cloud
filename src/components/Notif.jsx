import { useState } from 'react';
import "./Notif.css";



const Notif = ({data}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    };

    return (
        <div className="notifi-wrap">
            <div className="image">
                <img src="assets/images/avatar2.png" alt=""/>
                <span className="unread-symbol"></span>
            </div>
            <div className="text-right">
                <h6>{ data.user.username }<span>{ data.descriptions }</span></h6>
                <p className="notifi-date text-extra-small">{ data.dateheure }</p>
            </div>
            <div className="clear-left"></div>
        </div>
    );
};

export default Notif;
