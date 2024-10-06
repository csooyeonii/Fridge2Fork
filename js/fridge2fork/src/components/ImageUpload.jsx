import React from 'react';

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
}

export default ImageUpload;
