import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import { photos } from '../Components/photos';
import '../Stylings/Workshop.css';

const Workshop = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <div className="gallery">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={`Photo ${index + 1}`}
            className="gallery-image"
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>
      {viewerIsOpen && (
        <div className="modal" onClick={closeLightbox}>
          <span className="close" onClick={closeLightbox}>&times;</span>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={photos[currentImage].src} alt={`Photo ${currentImage + 1}`} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Workshop;
