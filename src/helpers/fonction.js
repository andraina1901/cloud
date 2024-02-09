export function getDate(timestamp){
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    
    return date.toLocaleDateString('fr-FR', options);
}