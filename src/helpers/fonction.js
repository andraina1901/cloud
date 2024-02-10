export function getDuree(timestam){

    const dateact = new Date()

    const timestamp =  dateact.getTime()+10800000+ - timestam
    const minute = timestamp/(1000*60)
    const soratra = ""
    if(minute<60){
        return soratra + parseInt(minute) + " min"
    }
    const heure = minute/60
    if(heure<24){
        return soratra + parseInt( heure )+ " h"
    }
    const jours = heure/24
    if(jours<7){
        return soratra + parseInt( jours )+ " j"
    }
    const semaine = jours/7
    if (jours<30) {
        return soratra + parseInt( semaine) + " sem"
    }
    const mois = jours/30
    if (jours<365) {
        return soratra + parseInt( mois)+ " mois"
    }
    const annee = jours/365;
    return parseInt (annee) + " ans"
}