import Link from "next/link";
export function ModelItem({libelle, src}){
    return(
        <div className="place-item place-item-one">
        <div className="place-thumbnail">
          <img src={src} alt="Place Image" />
          <div className="place-overlay">
            <div className="place-content text-center">
              <h3 className="title">{libelle}</h3>
              <Link href="/listing-grid">
                <a className="arrow-btn">
                  <i className="ti-arrow-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}