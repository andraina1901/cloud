CREATE DATABASE tomobilina;

\c tomobilina;


CREATE SEQUENCE seq_paysmarque;
CREATE SEQUENCE seq_marque;
CREATE SEQUENCE seq_categorie;
CREATE SEQUENCE seq_modele;
CREATE SEQUENCE seq_energie;
CREATE SEQUENCE seq_boite_vitesse;
CREATE SEQUENCE seq_couleur;
CREATE SEQUENCE seq_consommation;
CREATE SEQUENCE seq_equipement;
CREATE SEQUENCE seq_voiture;


CREATE TABLE paysmarque (
    idPays VARCHAR(15) DEFAULT 'PAYS'||nextval('seq_paysmarque') PRIMARY KEY,
    nomPays VARCHAR(100) NOT NULL,
    etat INT DEFAULT 1
);



CREATE TABLE marque (
    idMarque VARCHAR(15) DEFAULT 'MRQ'||nextval('seq_marque') PRIMARY KEY,
    nomMarque VARCHAR(100) NOT NULL,
    idpays VARCHAR(15) REFERENCES paysmarque,
    etat INT DEFAULT 1
);

CREATE OR REPLACE VIEW v_marque AS
SELECT m.*, pm.nomPays FROM marque m
JOIN paysmarque pm ON m.idpays=pm.idpays;

CREATE TABLE categorie (
    idCategorie VARCHAR(15) DEFAULT 'CAT'||nextval('seq_categorie') PRIMARY KEY,
    nomCategorie VARCHAR(100) NOT NULL,
    etat INT DEFAULT 1
);

CREATE TABLE modele (
    idModele VARCHAR(15) DEFAULT 'MOD'||nextval('seq_modele') PRIMARY KEY,
    idmarque VARCHAR(15),
    idcategorie VARCHAR(15),
    nomModele VARCHAR(100) NOT NULL,
    annee INT NOT NULL,
    nbrPlaces INT NOT NULL,
    nbrPortes INT NOT NULL,
    photo VARCHAR(250),
    etat INT DEFAULT 1,
    FOREIGN KEY (idmarque) REFERENCES marque(idMarque),
    FOREIGN KEY (idcategorie) REFERENCES categorie(idCategorie)
);

CREATE OR REPLACE VIEW v_modele AS
SELECT md.*, mq.nomMarque, mq.idpays, pm.nomPays, cat.nomCategorie FROM modele md
JOIN marque mq ON md.idmarque = mq.idmarque
JOIN paysmarque pm ON mq.idpays = pm.idpays
JOIN categorie cat ON md.idcategorie = cat.idcategorie;

CREATE TABLE energie (
    idEnergie VARCHAR(15) DEFAULT 'ENE'||nextval('seq_energie') PRIMARY KEY,
    nomEnergie VARCHAR(100) NOT NULL,
    etat INT DEFAULT 1
);

CREATE TABLE boite_vitesse (
    idBoitevitesse VARCHAR(15) DEFAULT 'BTV'||nextval('seq_boite_vitesse') PRIMARY KEY,
    nomBoite_vitesse VARCHAR(100) NOT NULL, 
    etat INT DEFAULT 1
);

CREATE TABLE couleurs (
    idCouleur VARCHAR(15) DEFAULT 'COL'||nextval('seq_couleur') PRIMARY KEY,
    nomCouleur VARCHAR(100) NOT NULL,
    etat INT DEFAULT 1
);

CREATE TABLE equipement (
    idEquipement VARCHAR(15) DEFAULT 'EQP'||nextval('seq_equipement') PRIMARY KEY,  
    nomEquipement VARCHAR(100) NOT NULL,
    etat INT DEFAULT 1
);

CREATE TABLE voiture (
    idVoiture VARCHAR(15) DEFAULT 'VTR'||nextval('seq_voiture') PRIMARY KEY,  
    idmodele VARCHAR(15),
    kilometrage FLOAT,
    idenergie VARCHAR(15),
    idboitevitesse VARCHAR(15),
    idcouleur VARCHAR(15) REFERENCES couleurs,
    consommation FLOAT,
    etat INT DEFAULT 1,
    FOREIGN KEY (idmodele) REFERENCES modele(idmodele),
    FOREIGN KEY (idenergie) REFERENCES energie(idenergie),
    FOREIGN KEY (idboitevitesse) REFERENCES boite_vitesse(idboitevitesse),
    FOREIGN KEY (idcouleur) REFERENCES couleurs(idcouleur)
);

CREATE TABLE equipementVoiture (
    idvoiture VARCHAR(15) REFERENCES voiture,
    idequipement VARCHAR(15) REFERENCES equipement,
    etat INT DEFAULT 1,
    FOREIGN KEY (idequipement) REFERENCES equipement(idequipement)
);

INSERT INTO energie (nomEnergie) VALUES 
    ('Essence'),
    ('Diesel'),
    ('Hybride'),
    ('Electrique'),
    ('GPL');

    INSERT INTO equipementVoiture (idVoiture, idEquipement) VALUES 
    ('VTR6', 'EQP1'),
    ('VTR7', 'EQP2'),
    ('VTR8', 'EQP3'),
    ('VTR9', 'EQP4'),
    ('VTR10', 'EQP5');

        INSERT INTO equipementVoiture (idVoiture, idEquipement) VALUES 
    ('VTR6', 'EQP3'),
    ('VTR7', 'EQP4'),
    ('VTR8', 'EQP5'),
    ('VTR9', 'EQP1'),
    ('VTR10', 'EQP2');

        INSERT INTO equipementVoiture (idVoiture, idEquipement) VALUES 
    ('VTR6', 'EQP5'),
    ('VTR7', 'EQP1'),
    ('VTR8', 'EQP2'),
    ('VTR9', 'EQP3'),
    ('VTR10', 'EQP4');
