import React, { useState, useEffect } from 'react';
import'./Gallery.css'

const Gallery = () => {
    const images = [
        'image1.jpeg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        // Add more image URLs here
    ];

    const [currentSet, setCurrentSet] = useState(0);

    useEffect(() => {
        // Create a function to advance the gallery to the next set of images
        const advanceGallery = () => {
            setCurrentSet((prevSet) => (prevSet + 1) % (images.length - 2));
        };

        // Set an interval for automatic scrolling (e.g., every 3 seconds)
        const interval = setInterval(advanceGallery, 3000);

        return () => {
            clearInterval(interval); // Clean up the interval when the component unmounts
        };
    }, [images]);

    return (
        <section className="gallery-section">
            <div className="gallery-container">
                {images.slice(currentSet, currentSet + 3).map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image} alt={`Gallery Image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
