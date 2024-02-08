import Link from "next/link";
import { useState } from "react";

export function Booste({user,duree,model,prix,contact}){
    const [headerColor, setHeaderColor] = useState('gray');

    const handleClick = () => {
        const newColor = headerColor === 'gray' ? 'red' : 'gray';
        setHeaderColor(newColor);
    }
    return(
        <div className="col-lg-4 col-md-6 col-sm-12"  style={{cursor:'pointer'}}>
        <div
          className="listing-item listing-grid-one mb-45 wow fadeInUp"
          dta-wow-delay="10ms"
        >
            
        <Link href={`product-details`}>
          <div className="listing-thumbnail">
            <img
              src="assets/images/listing/mavoiture.jpg"
              alt="Listing Image"
            />
            <span className="featured-btn">Booste</span>
            <div className="thumbnail-meta d-flex justify-content-between align-items-center">
              <div className="meta-icon-title d-flex align-items-center">
                <div className="icon">
                <i className="ti-user"></i>

                </div>
                <div className="title">
                  <h6>{user}</h6>
                </div>
              </div>
              <span className="status st-open">il y a {duree}</span>
            </div>
          </div>
          </Link>
          <div className="listing-content">
            <h3 className="title">
                <a>{model}</a>
            </h3>
            <span className="price">{prix} ar</span>
            <span className="phone-meta">
              <i className="ti-tablet"></i>
              <a href="tel:+982653652-05">{contact}</a>
            </span>
            <div className="listing-meta">
              <ul>
                <li>
                  <span>
                    <i className="ti-shopping-cart"></i>Ajouter
                  </span>
                </li>
                <li>
                  <span>
                    <i className="ti-heart" onClick={handleClick} style={{color: headerColor}}></i>
                    <a href="#" style={{color: headerColor}}>Favori</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    );
}