import { IonCol, IonRouterLink, IonRow } from "@ionic/react";

export const Action = props => (

    <IonRow className="ion-text-center ion-justify-content-center" style={{"backgroundColor":"white"}}>
        <IonCol size="12">
            <p style={{"color": "black"}}>
                { props.message }
                <IonRouterLink className="custom-link" routerLink={ props.link }> { props.text } &rarr;</IonRouterLink>
            </p>
        </IonCol>
    </IonRow>
);