import Link from "next/link";

export function Suggestion({user,duree,model,prix,contact}){
    return(
          <Link href={`product-details`}>
        <div className="listing-item listing-grid-item-two" style={{cursor:'pointer'}}>
        <div className="listing-thumbnail">
          <img
            
            src="assets/images/listing/mavoiture.jpg"
            alt="Listing Image"
          />
         
          <span className="featured-btn">il y a 2{duree}</span>
          <ul className="ratings ratings-two">
            <li className="star">
              <i className="ti-user"></i>
            </li>
            <li className="star"></li>
            <li className="star"></li>
            <li className="star"></li>
            <li>
              <span>
                <a href="#">{user}</a>
              </span>
            </li>
          </ul>
        </div>
        <div className="listing-content">
          <h3 className="title">
            {/* <Link href="/listing-details-1"> */}
              <a>{model}</a>
            {/* </Link> */}
          </h3>
          <p>Prix: {prix}</p>
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
                  <i className="ti-heart"></i>
                  <a href="#">Favoris</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </Link>
    );
}