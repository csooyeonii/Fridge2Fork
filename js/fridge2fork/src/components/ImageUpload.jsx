import React, { useState } from 'react';
import axios from 'axios';
/*
function ImageUpload({ onUpload }) {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        onUpload(file); // Call the parent to handle the file
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
        </div>
    );
}*/

const ImageUpload = ({ onUpload }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('http://localhost:5000/api/images/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const { ingredients } = response.data;
            ingredients.forEach((ingredient) => onUpload(ingredient));
            setFile(null);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button type="submit">Upload Image</button>
        </form>
    );
};

export default ImageUpload;
