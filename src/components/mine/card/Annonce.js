import Link from "next/link";

export function Annonce({model,prix,contact}) {
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
            
          </div>
        </div>
      </div>
      
    );
}