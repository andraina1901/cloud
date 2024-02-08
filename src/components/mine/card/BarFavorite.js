import Link from "next/link";

export function BarFavorite() {
    return(
        <div className="row align-items-center" style={{marginBottom: '3%'}}>
              <div className="col-lg-5 col-md-12">
                <div className="listing-info-name">
                  <div className="info-name d-flex">
                    <div className="thumb">
                      <img
                        src="assets/images/listing/info-1.jpg"
                        alt="thumb image"
                      />
                    </div>
                    <div className="content">
                      <span className="cat-btn">citadine</span>
                      <h3>Peugeot 308</h3>
                      <p className="tag">
                        <a href="#">Prix: 200.000.000ar</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="listing-info-content">
                  <div className="content">
                    
                    <div className="listing-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-user" />
                            Par: Jeremia RAFANO
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-tablet" />
                            <a href="tel:+982653652-05">034 12 040 35</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="button">
                  <Link href="/listing-grid">
                    <a className="icon-btn">
                      <i className="ti-heart" />
                    </a>
                  </Link>
                  <Link href="/listing-grid">
                    <a className="icon-btn">
                      <i className="ti-shopping-cart" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
    );
}