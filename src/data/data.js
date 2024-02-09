export const notifData = () => {

    return [

        {
            idNotif: "NOTIF001",
            user: {
                idUser: "USER001",
                username: "Andy"
            },
            annonce : {
                idAnnonce: "ANON001",
                titre: "Annonce 1",
                descriptions: "Juste un annonce"
            },
            descriptions: " vous a envoyer un message",
            dateheure: "06-02-2024 16:08:00"
        },
        {
            idNotif: "NOTIF002",
            user: {
                idUser: "USER001",
                username: "Jean"
            },
            annonce : {
                idAnnonce: "ANON001",
                titre: "Annonce 1",
                descriptions: "Juste un annonce"
            },
            descriptions: " vous a envoyer un message",
            dateheure: "06-02-2024 16:08:00"
        }
    ];
}

export const annnonceData = () => {

    return [

        {
            idAnnonce: "ANON001",
            titre: "Annonce 1",
            descriptions: "Juste un annonce",
            user: {
                idUser: "USER001",
                username: "Jean"
            },
            voiture : {
                idVoiture: "VTR001",
                modele: {
                    idModele: "MOD1",
                    Marque: {
                        idMarque: "marque1",
                        nomMarque: "Ford"
                    },
                    Categorie: {
                        idCategorie: "CAT1",
                        nomCategorie: "SUV"
                    },
                    nomModele: "Ford Rangers"
                },
                descriptions: "Juste un annonce"
            },
            prix: 50000,
            photo: "assets/images/cars5.jpg",
            dateheure: "06-02-2024 16:08:00"
        },
        {
            idAnnonce: "ANON002",
            titre: "Annonce 1",
            descriptions: "Juste un annonce",
            user: {
                idUser: "USER001",
                username: "Rakoto"
            },
            voiture : {
                idVoiture: "VTR001",
                modele: {
                    idModele: "MOD1",
                    Marque: {
                        idMarque: "marque1",
                        nomMarque: "Ford"
                    },
                    Categorie: {
                        idCategorie: "CAT1",
                        nomCategorie: "SUV"
                    },
                    nomModele: "Ford Raptors"
                },
                descriptions: "Juste un annonce"
            },
            prix: 50000,
            photo: "assets/images/cars1.jpg",
            dateheure: "06-02-2024 16:08:00"
        }
    ];
}

export const annnonceUserData = () => {

    return [

        {
            idAnnonce: "ANON001",
            titre: "Annonce 1",
            descriptions: "Juste un annonce",
            user: {
                idUser: "USER001",
                username: "Jean"
            },
            voiture : {
                idVoiture: "VTR001",
                modele: {
                    idModele: "MOD1",
                    Marque: {
                        idMarque: "marque1",
                        nomMarque: "Ford"
                    },
                    Categorie: {
                        idCategorie: "CAT1",
                        nomCategorie: "SUV"
                    },
                    nomModele: "Ford Rangers"
                },
                descriptions: "Juste un annonce"
            },
            prix: 50000,
            photo: "assets/images/cars5.jpg",
            dateheure: "06-02-2024 16:08:00",
            annonceUser: true
        },
        {
            idAnnonce: "ANON002",
            titre: "Annonce 1",
            descriptions: "Juste un annonce",
            user: {
                idUser: "USER001",
                username: "Rakoto"
            },
            voiture : {
                idVoiture: "VTR001",
                modele: {
                    idModele: "MOD1",
                    Marque: {
                        idMarque: "marque1",
                        nomMarque: "Ford"
                    },
                    Categorie: {
                        idCategorie: "CAT1",
                        nomCategorie: "SUV"
                    },
                    nomModele: "Ford Raptors"
                },
                descriptions: "Juste un annonce"
            },
            prix: 50000,
            photo: "assets/images/cars1.jpg",
            dateheure: "06-02-2024 16:08:00",
            annonceUser: true
        }
    ];
}

