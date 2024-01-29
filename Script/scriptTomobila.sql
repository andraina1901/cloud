CREATE SEQUENCE seq_roles;
CREATE TABLE roles (
    id int DEFAULT nextval('seq_roles') PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);
INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');

CREATE SEQUENCE seq_user;
CREATE TABLE users(
    id int DEFAULT nextval('seq_user') PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    dateheure TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_roles (
    user_id int,
    role_id int,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE SEQUENCE seq_contact_user;
CREATE TABLE Contact_user (
    idContact_user VARCHAR(17) DEFAULT 'CCT_USER'||nextval('seq_contact_user') PRIMARY KEY,
    idUser int,
    contact VARCHAR(20),
    type VARCHAR(10),
    dateheure TIMESTAMP,
    FOREIGN KEY (idUser) REFERENCES users(id)
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

CREATE SEQUENCE seq_vente;
CREATE TABLE vente(
    idVente VARCHAR(17) DEFAULT 'VNT'||nextval('seq_vente') PRIMARY KEY,
    idAnnonce VARCHAR(17),
    idUser INT,
    montant FLOAT,
    percentCommission FLOAT,
    dateheure TIMESTAMP,
    FOREIGN KEY (idAnnonce) REFERENCES annonce(idAnnonce),
    FOREIGN KEY (idUser) REFERENCES users(id)
);





