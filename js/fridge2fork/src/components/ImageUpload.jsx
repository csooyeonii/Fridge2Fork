import React, { useState } from 'react';

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Handler for file change event
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file)); // Preview the image
        }
    };

    return (
        <div style={styles.container}>
            <h2>Upload Your Ingredients</h2>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={styles.input}
            />
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

const styles = {
    container: {
        textAlign: 'left',
        marginTop: '20px',
        marginLeft: '10px',
    },
    input: {
        padding: '10px',
        margin: '0px',
    },
    image: {
        marginTop: '20px',
        width: '300px',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    }
};

export default ImageUpload;
