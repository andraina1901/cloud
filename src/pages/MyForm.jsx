import React, { useState } from 'react';
import { IonPage, IonContent, IonLabel, IonInput, IonButton } from '@ionic/react';
import './MyForm.css';

const MyForm = () => {
  const [section, setSection] = useState(1);
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: ''
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleNext = () => {
    setSection((prevSection) => prevSection + 1);
  };

  const handleSubmit = () => {
    // Envoyer les données du formulaire
    console.log('Données du formulaire:', formData);
  };

  return (
    <IonPage>
      <IonContent>
        <div className={`fade-in-out ${section === 1 ? 'slide-in-left' : ''}`}>
          {/* Section 1 */}
          {section === 1 && (
            <div>
              <IonLabel>Champ 1</IonLabel>
              <IonInput
                placeholder="Entrez quelque chose"
                value={formData.field1}
                onIonChange={(e) => handleChange('field1', e.detail.value)}
              />
              <IonButton onClick={handleNext}>Suivant</IonButton>
            </div>
          )}
        </div>

        <div className={`fade-in-out ${section === 2 ? 'slide-in-left' : ''}`}>
          {/* Section 2 */}
          {section === 2 && (
            <div>
              <IonLabel>Champ 2</IonLabel>
              <IonInput
                placeholder="Entrez quelque chose d'autre"
                value={formData.field2}
                onIonChange={(e) => handleChange('field2', e.detail.value)}
              />
              <IonButton onClick={handleNext}>Suivant</IonButton>
            </div>
          )}
        </div>

        <div className={`fade-in-out ${section === 3 ? 'slide-in-left' : ''}`}>
          {/* Section 3 */}
          {section === 3 && (
            <div>
              <IonLabel>Champ 3</IonLabel>
              <IonInput
                placeholder="Dernier champ"
                value={formData.field3}
                onIonChange={(e) => handleChange('field3', e.detail.value)}
              />
              <IonButton onClick={handleSubmit}>Terminer</IonButton>
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MyForm;
