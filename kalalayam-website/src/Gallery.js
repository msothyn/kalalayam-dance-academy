import React, { useState, useEffect, useRef } from 'react';
import './Slideshow.css'; // Import the CSS file
import image1 from './photos/image1.jpeg'; // Import your image files
import image2 from './photos/image2.jpeg';
import image3 from './photos/kalalayamLogo.png';
import image4 from './photos/dog.jpeg';
// ... import other images

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);
  const expandedImageRef = useRef(null);

  const yourImages = [
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image3, alt: 'Image 3' },
    { src: image4, alt: 'Image 4' },
    // ... add other images similarly
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 3) % yourImages.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [yourImages.length]);

  const renderImages = () => {
    const displayedImages = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentImageIndex + i) % yourImages.length;
      displayedImages.push(
        <div key={index} className={`slide ${i === 1 ? 'active' : ''}`}>
          <img src={yourImages[index].src} alt={yourImages[index].alt} onClick={() => handleImageClick(yourImages[index].src)} />
        </div>
      );
    }
    return displayedImages;
  };

  const handleImageClick = (imageSrc) => {
    setExpandedImage(imageSrc);
  };

  const handleCloseClick = () => {
    setExpandedImage(null);
  };

  const handleClickOutside = (event) => {
    if (expandedImageRef.current && !expandedImageRef.current.contains(event.target)) {
      setExpandedImage(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="slideshow-container">
        <div className="slides">
          {renderImages()}
        </div>
        {expandedImage && (
          <div className="expanded-image">
            <span className="close-button" onClick={handleCloseClick}>Close</span>
            <img src={expandedImage} alt="Expanded" />
          </div>
        )}
      </div>
      <p className="slideshow-caption">Click on an image to enlarge.</p>
    </div>
  );
};

export default Slideshow;
