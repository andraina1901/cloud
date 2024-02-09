import { 
    IonInput, 
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonLoading
} from "@ionic/react";
import "./CustomInput.css";

const CustomField = ({field, errors}) => {

    const error = errors && errors.filter(e => e.id === field.id)[0];
    const errorMessage = error && errors.filter(e => e.id === field.id)[0].message;
    switch (field.type) {
        case 'input':
            return (
                <div className="field">
                    <IonInput className="customInput" type={field.type} { ...field.input.props } { ...field.input.state } />
                </div>
            );
        case 'select':
            return (
                <div className="field">
                    <IonSelect
                        className="customInput"
                        placeholder={`${field.label}`}
                        { ...field.input.props } { ...field.input.state }
                    >
                        {field.options.map((option, index) => (
                            <IonSelectOption key={index} value={option[field.nomId]}>
                            {(option[field.nomValue])}
                            </IonSelectOption>
                        ))}
                    </IonSelect>
                </div>
            );
        case 'textArea':
            return (
                <div className="field">
                    <IonTextarea 
                        rows={4}
                        className="customInput"
                        { ...field.input.props } { ...field.input.state }
                    >
                    </IonTextarea>
                </div>
            );
        default:
            return null;
    }
};

export default CustomField;