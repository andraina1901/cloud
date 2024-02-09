import Link from "next/link";

export function OneCategorie({nom}) {
    return(
    <div className="col-lg-2 col-md-4 category-column">
        <div className="category-item category-item-one">
                <div className="info text-center">
                <div className="icon">
                    <i className="ti-car"></i>
                </div>
                <h6>{nom}</h6>
                </div>
                <Link href="listing-grid">
                <a className="category-btn">
                    <i className="ti-arrow-right"></i>
                </a>
                </Link>
        </div>
    </div>    
    
    );
}