import { 
    IonInput, 
    IonLabel,
    IonSelect,
    IonSelectOption
} from "@ionic/react";
import "./CustomField.css";

const CustomField = ({field, errors}) => {

    const error = errors && errors.filter(e => e.id === field.id)[0];
    const errorMessage = error && errors.filter(e => e.id === field.id)[0].message;
    switch (field.type) {
        case 'input':
            return (
                
                <div className="field">
                    <IonLabel className="fieldLabel">
                        { field.label }
                        { error && <p className="animate__animated animate__bounceIn">{ errorMessage }</p> }
                    </IonLabel>
                    <IonInput className="customInput" { ...field.input.props } { ...field.input.state } />
                </div>
            );
        case 'select':
            return (
                <div className="field">
                    <IonLabel className="fieldLabel">
                        { field.label }
                        { error && <p className="animate__animated animate__bounceIn">{ errorMessage }</p> }
                    </IonLabel>
                    <IonSelect
                        className="customInput"
                        placeholder={`${field.label}`}
                        { ...field.input.props } { ...field.input.state }
                    >
                        {field.options.map((option, index) => (
                            <IonSelectOption key={index} value={field.values[index]}>
                            {option}
                            </IonSelectOption>
                        ))}
                    </IonSelect>
                </div>
            );
        default:
            return null;
    }
};

export default CustomField;