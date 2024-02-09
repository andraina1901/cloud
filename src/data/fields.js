import { useFormInput } from "./utils";
import { useFormSelect } from "./utils";
import { getModele } from "./Modele";
import { getEnergie } from "./Energie";
import { getBoiteVitesse } from "./BoiteVitesse";
import { getCouleur } from "./Couleur";
import { useState, useEffect } from "react";

export const useSignupFields = () => {

    return [
        {
            id: "name",
            label: "Name",
            type: 'input',
            required: true,
            input: {
                
                props: {
                    
                    type: "text",
                    placeholder: "Joe Bloggs"
                },
                state: useFormInput("")
            }
        },
        {
            id: "email",
            label: "Email",
            type: 'input',
            required: true,
            input: {
                
                props: {
                    
                    type: "email",
                    placeholder: "joe@bloggs.com"
                },
                state: useFormInput("")
            }
        },
        {
            id: "dtn",
            label: "Date de Naissance",
            type: 'input',
            required: true,
            input: {
                
                props: {
                    
                    type: "date"
                },
                state: useFormInput("")
            }
        },
        {
            id: 'genre',
            label: 'Genre',
            type: 'select',
            input: {
                
                props: {
                    type: "select"
                },
                state: useFormSelect("")
            },
            options: ['Femme', 'Homme'],
            values: ['0', '1'],
        },
        {
            id: "password",
            label: "Password",
            type: 'input',
            required: true,
            input: {
                
                props: {
                    
                    type: "password",
                    placeholder: "*********"
                },
                state: useFormInput("")
            }
        }
    ];
}

export const useLoginFields = () => {

    return [

        {
            id: "email",
            label: "Email",
            type: 'input',
            required: true,
            input: {
                
                props: {
                    type: "email",
                    placeholder: "joe@bloggs.com"
                },
                state: useFormInput("")
            }
        },
        {
            id: "password",
            label: "Password",
            type: 'input',
            required: true,
            input: {
                
                props: {
                    type: "password",
                    placeholder: "*******"
                },
                state: useFormInput("")
            }
        }
    ];
}

export const useAnnonceFields = () => {
    const [modele, setModele] = useState([]);
    useEffect (() => {
        getModele().then((response)=>{
            setModele(response.rows.data)
        }).catch(error =>{
            console.log(error);
        })
    },[]);
    
    return [

        {
            id: "titre",
            type: 'input',
            required: true,
            input: {
                
                props: {
                    type: "text",
                    placeholder: "Titre"
                },
                state: useFormInput("")
            }
        },
        {
            id: "descriptions",
            type: 'textArea',
            required: true,
            input: {
                
                props: {
                    type: "text",
                    placeholder: "Add a short description"
                },
                state: useFormInput("")
            }
        },
        {
            id: "modele",
            type: 'select',
            label: 'Modele',
            required: true,
            input: {
                props: {
                    type: "select"
                },
                state: useFormSelect("")
            },
            options: modele,
            nomId: "idModele",
            nomValue: "nomModele"
        }
    ];
}


export const useAnnonceVoitureFields = () => {

    const [energie, setEnergie] = useState([]);
    const [boite_vitesse, setBoite_vitesse] = useState([]);
    const [couleurs, setCouleurs] = useState([]);
    useEffect (() => {
        getEnergie().then((response)=>{
            setEnergie(response.rows.data)
        }).catch(error =>{
            console.log(error);
        })
        getBoiteVitesse().then((response)=>{
            setBoite_vitesse(response.rows.data)
        }).catch(error =>{
            console.log(error);
        })
        getCouleur().then((response)=>{
            setCouleurs(response.rows.data)
        }).catch(error =>{
            console.log(error);
        })
    },[]);
    return [
        {
            id: "kilometrage",
            type: 'input',
            required: true,
            input: {
                
                props: {
                    type: "number",
                    placeholder: "Kilometrage"
                },
                state: useFormInput("")
            }
        },
        {
            id: "energie",
            type: 'select',
            label: 'Energie',
            required: true,
            input: {
                props: {
                    type: "select"
                },
                state: useFormSelect("")
            },
            options: energie,
            nomId: "idEnergie",
            nomValue: "nomEnergie"
        },
        {
            id: "boiteVitesse",
            type: 'select',
            label: 'Boite de Vitesse',
            required: true,
            input: {
                props: {
                    type: "select"
                },
                state: useFormSelect("")
            },
            options: boite_vitesse,
            nomId: "idBoiteVitesse",
            nomValue: "nomBoiteVitesse"
        },
        {
            id: "couleur",
            type: 'select',
            label: 'Couleur',
            required: true,
            input: {
                props: {
                    type: "select"
                },
                state: useFormSelect("")
            },
            options: couleurs,
            nomId: "idCouleur",
            nomValue: "nomCouleur"
        },
        {
            id: "consommation",
            type: 'input',
            required: true,
            input: {
                
                props: {
                    type: "number",
                    placeholder: "Consommation"
                },
                state: useFormInput("")
            }
        }
    ];
}

export const useAnnonce3Fields = () => {

    return [

        {
            id: "prix",
            type: 'input',
            required: true,
            input: {
                
                props: {
                    type: "number",
                    placeholder: "Prix"
                },
                state: useFormInput("")
            }
        }
    ];
}