CREATE TABLE users(
    id int PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE SEQUENCE seq_annonce;
CREATE TABLE annonce(
    idAnnonce VARCHAR(17) DEFAULT 'ANONC'||nextval('seq_annonce') PRIMARY KEY,
    titre VARCHAR(30),
    descriptions TEXT,
    idUser int,
    idVoiture VARCHAR(17),
    prix FLOAT,
    dateheure TIMESTAMP,
    etat INT,
    FOREIGN KEY (idUser) REFERENCES users(id),
    FOREIGN KEY (idVoiture) REFERENCES voiture (idVoiture)
);

CREATE SEQUENCE seq_favori;
CREATE TABLE favori(
    idFavori VARCHAR(17) DEFAULT 'FAVORI'||nextval('seq_favori') PRIMARY KEY,
    idUser int,
    idAnnonce VARCHAR(17),
    dateheure TIMESTAMP,
    etat int,
    FOREIGN KEY (idUser) REFERENCES users(id),
    FOREIGN KEY (idAnnonce) REFERENCES annonce (idAnnonce)
);





