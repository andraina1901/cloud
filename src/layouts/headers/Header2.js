import Link from "next/link";
import React, { useState } from "react";
import { About, Blog, Contact, Home, Listing, Pages } from "../Menu";
import { useRouter } from "next/router";
import { request, setAuthHeader } from "../../helpers/axios_helper";

const Header2 = () => {


  const router = useRouter(); // Initialisez le routeur

  const [isAvatarBoxOpen, setIsAvatarBoxOpen] = useState(false);

  const toggleAvatarBox = () => {
    setIsAvatarBoxOpen(!isAvatarBoxOpen);
  };
  const [username, setUsername] = useState(""); // État pour le nom d'utilisateur
  const [password, setPassword] = useState(""); // État pour le mot de passe
  
  const handleSubmit = (e) => {
      e.preventDefault();
      request("POST", "/auth/signin", {
        username: "utilisateur1",
        password: "motdepasse1",
      })
        .then((response) => {
          setAuthHeader(response.data.accessToken);
         
          router.push("/profile");
        })
        .catch((error) => {
          console.log("Erreur de connexion");
          // setErrorBorderColor("red"); 
          setAuthHeader(null);
        }).finally(() => {
          // setLoading(false);
        });
      
  };


  return (
    <header className="header-area header-area-two d-none d-xl-block">
      <div className="header-navigation">
        <div className="container-fluid">
          <div className="primary-menu">
            <div className="row align-items-center">
              <div className="col-lg-2 col-5">
                <div className="site-branding">
                  <Link href="/">
                    <a className="brand-logo">
                      <img
                        src="assets/images/logo/logo-2.png"
                        alt="Brand Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-2">
                <div className="nav-menu">
                  <div className="navbar-close">
                    <i className="ti-close"></i>
                  </div>
                  <nav className="main-menu">
                    <ul>
                      <Home />
                      <li className="menu-item has-children">
                        <a href="#">Listings</a>
                        <ul className="sub-menu">
                          <Listing />
                        </ul>
                        <span className="dd-trigger">
                          <i className="ti-arrow-down"></i>
                        </span>
                      </li>
                      <li className="menu-item has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <Pages />
                        </ul>
                        <span className="dd-trigger">
                          <i className="ti-arrow-down"></i>
                        </span>
                      </li>
                      <li className="menu-item has-children">
                        <a href="#">Article</a>
                        <ul className="sub-menu">
                          <Blog />
                        </ul>
                        <span className="dd-trigger">
                          <i className="ti-arrow-down"></i>
                        </span>
                      </li>
                      <Contact />
                      <li className="nav-btn">
                        <Link href="/add-listing">
                          <a className="main-btn icon-btn">Add Listing</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-4 col-5">
                <div className="header-right-nav">
                  <ul className="d-flex align-items-center">
                    <li>
                      <Link href="/listing-details-1">
                        <a>
                          <i className="ti-heart"></i>
                          <span>Favoris</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>
                          <i className="ti-shopping-cart"></i>
                          <span>Cart</span>
                        </a>
                      </Link>
                    </li>
                    <li className="user-btn">
                      <a className="icon" onClick={toggleAvatarBox} style={{cursor: 'pointer'}}>
                        <i className="flaticon-avatar"></i>
                      </a>
                      {isAvatarBoxOpen && (
                        <div className="avatar-box" >
                          <form style={{padding: '20px'}} onSubmit={handleSubmit}>
                            <h4 id="mine-too">Login</h4>
                            <div className="form-group">
                              <input
                                type="text"
                                className="mine"
                                id="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} // Mise à jour de l'état du nom d'utilisateur lors de la saisie
                                required
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                className="mine"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Mise à jour de l'état du mot de passe lors de la saisie
                                required
                              />
                            </div>
                            <button type="submit" className="minebout">Login</button>
                          </form>
                        </div>
                      )}
                    </li>
                    <li className="hero-nav-btn">
                      <div className="input-with-icon">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Entrez votre mot clé"
                          name="location"
                          style={{
                            border: "1px solid gray",
                            borderRadius: "50px",
                            paddingLeft: "40px",
                          }}
                        />
                        <i className="ti-search search-icon"></i>
                      </div>
                    </li>
                    <li className="nav-toggle-btn">
                      <div className="navbar-toggler">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
