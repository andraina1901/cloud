import { AnnonceHisto } from "../src/components/AnnonceHisto";
import { BarFavorite } from "../src/components/mine/card/BarFavorite";
import Layout from "../src/layouts/Layout";

const Profile = () => {
  // Informations fictives de la personne
  const userInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    location: "New York, USA",
    // Autres informations de profil
  };


  return (
    <Layout>
      <div>
        <div className="user-info">
            <div className="user-details">
                <div className="detail">
                <strong>Name:</strong>
                <span>{userInfo.name}</span>
                </div>
                <div className="detail">
                <strong>Email:</strong>
                <span>{userInfo.email}</span>
                </div>
                <div className="detail">
                <strong>Location:</strong>
                <span>{userInfo.location}</span>
                </div>
            </div>
        </div>


        <AnnonceHisto/>

        <section className="page-breadcrumbs page-breadcrumbs-one pt-120 pb-70">
            <div className="container">
            <h3>Favorites</h3>
                <div className="breadcrumbs-wrapper-one">
                    <BarFavorite/>
                    <BarFavorite/>
                </div>
            </div>
        </section>
       
        <section className="page-breadcrumbs page-breadcrumbs-one pt-120 pb-70">
            <div className="container">
            <h3>Achats</h3>
                <div className="breadcrumbs-wrapper-one">
                    <BarFavorite/>
                    <BarFavorite/>
                </div>
            </div>
        </section>
    </div>
    </Layout>
  );
};

export default Profile;
