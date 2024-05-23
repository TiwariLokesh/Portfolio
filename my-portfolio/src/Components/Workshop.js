// src/components/PhotoGallery.js
import React, { useState } from 'react';
import '../Stylings/Workshop.css';

const photos = [
  {
    src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
    width: 4,
    height: 3.5
  },
  {
    src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 2.5,
    height: 3.5
  },
  {
    src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
    width: 3,
    height: 3.5
  },
  {
    src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
    width: 3,
    height: 3.5
  },
  {
    src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
    width: 3,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
    width: 4,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
    width: 3,
    height: 4
  },
  {
    src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
    width: 4,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/I1ASdgphUH4/800x599',
    width: 4,
    height: 3
  }
];

const Workshop = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (index) => {
    setCurrentImage(index);
  };

  const closeLightbox = () => {
    setCurrentImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="gallery">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={`Photo ${index}`}
            style={{ width: `${photo.width * 100}px`, height: `${photo.height * 100}px` }}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {currentImage !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close">&times;</span>
          <img className="lightbox-content" src={photos[currentImage].src} alt={`Photo ${currentImage}`} />
        </div>
      )}
    </div>
  );
};

export default Workshop;
