import { getStatUserAnn } from "layouts/dashboard/data/ministat";
import { getStatPrixComm } from "layouts/dashboard/data/ministat";
import { useEffect, useState } from "react";



export default function gradientLineChartData(){

  const [label, setLabel] = useState([]);
const [prix, setPrix] = useState([]);
const [commission, setCommission] = useState([]);


useEffect (() => {
  getStatPrixComm().then((response)=>{
    response.map((item)=>{
      console.log(item.libelle)
      setLabel((anciennesCartes) => [...anciennesCartes, item.libelle]);
      setPrix((anciennesCartes) => [...anciennesCartes, item.prixvente]);
      setCommission((anciennesCartes) => [...anciennesCartes,item.commission]);
    })
  }).catch(error =>{
    console.log(error);
  })
},[]);

return  {
  labels: label,
  datasets: [
    {
      label: "Prix de vente",
      color: "info",
      data: prix,
    },
    {
      label: "Commission",
      color: "dark",
      data: commission,
    },
  ],
};

}

export  function anotherLineChartData(){

  const [label, setLabel] = useState([]);
  const [prix, setPrix] = useState([]);
  const [commission, setCommission] = useState([]);


  useEffect (() => {
    getStatUserAnn().then((response)=>{
      setLabel([]);
      setPrix([]);
      setCommission([]);
    
      response.map((item)=>{
        console.log(item.libelle)
        setLabel((anciennesCartes) => [...anciennesCartes, item.libelle]);
        setPrix((anciennesCartes) => [...anciennesCartes, item.user]);
        setCommission((anciennesCartes) => [...anciennesCartes,item.annonce]);
      })
    }).catch(error =>{
      console.log(error);
    })
  },[]);

return  {
  labels: label,
  datasets: [
    {
      label: "Utilisateur",
      color: "info",
      data: prix,
    },
    {
      label: "Annonce",
      color: "dark",
      data: commission,
    },
  ],
};

}