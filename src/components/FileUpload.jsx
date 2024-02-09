import React, { useState } from 'react';
import { IonLoading, IonInput } from '@ionic/react';
import "./CustomInput.css";
const FileUpload = ({onUpload}) =>{
    
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files) {
            setSelectedFiles(files);
        }
    };
    return (
        <div className="add-image-content">
            <div className="container">
                <div className="content">
                        <h6>Image</h6>
                        <p className="text-extra-small">The image has to be png, jpg or jpeg</p>
                        <label htmlFor="upload-image">
                            <IonInput 
                                id="upload-image"
                                type="file"
                                accept="image/*"
                                multiple
                                onIonChange={handleFileChange}
                            />
                        </label>
                        <IonLoading isOpen={loading} message="Téléversement en cours..." />
                </div>
            </div>
        </div>
    );
}

export default FileUpload;