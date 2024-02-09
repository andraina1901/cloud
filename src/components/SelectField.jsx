import { IonInput, IonLabel, IonSelect } from "@ionic/react";
import "./CustomField.css";

const SelectField = ({field, errors}) => {

    const error = errors && errors.filter(e => e.id === field.id)[0];
    const errorMessage = error && errors.filter(e => e.id === field.id)[0].message;

    return (
        
        <div className="field">
            <IonLabel className="fieldLabel">
                { field.label }
                { error && <p className="animate__animated animate__bounceIn">{ errorMessage }</p> }
            </IonLabel>
            <IonInput className="customInput" { ...field.input.props } { ...field.input.state } />
            <IonSelect>
                <IonSelectOption>
                    
                </IonSelectOption>
            </IonSelect>
        </div>
    );
};

export default SelectField;