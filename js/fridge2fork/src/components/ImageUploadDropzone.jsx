// src/components/ImageUploadDropzone.js
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploadDropzone = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file)); // Preview the image
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*',
    });

    return (
        <div style={styles.container}>
            <h2>Upload Your Ingredients</h2>
            <div {...getRootProps()} style={styles.dropzone}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop an image here, or click to select one</p>
            </div>
            {selectedImage && (
                <div>
                    <h3>Preview:</h3>
                    <img
                        src={selectedImage}
                        alt="Ingredient Preview"
                        style={styles.image}
                    />
                </div>
            )}
        </div>
    );
};

// Inline styles for simplicity
const styles = {
    container: {
        textAlign: 'center',
        marginTop: '20px',
    },
    dropzone: {
        padding: '20px',
        borderWidth: '2px',
        borderColor: '#666',
        borderStyle: 'dashed',
        borderRadius: '10px',
        backgroundColor: '#f8f9fa',
        cursor: 'pointer',
        textAlign: 'center',
    },
    image: {
        marginTop: '20px',
        width: '300px',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    }
};

export default ImageUploadDropzone;
