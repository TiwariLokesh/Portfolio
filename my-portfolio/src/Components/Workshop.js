import React, { useState } from "react";
import ReactDOM from "react-dom";
import { photos } from '../Components/photos'
import '../Stylings/Workshop.css'

const Workshop = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (index) => {
    setCurrentImage(index);
  };

  const closeLightbox = () => {
    setCurrentImage(null);
  };

  return (
    <div>
      <div className="gallery">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            className={`thumbnail ${photo.orientation}`}
            onClick={() => openLightbox(index)}
            alt=""
          />
        ))}
      </div>

      {currentImage !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close">&times;</span>
          <img className="lightbox-image" src={photos[currentImage].src} alt="" />
          <span className="prev" onClick={(e) => { e.stopPropagation(); setCurrentImage((currentImage - 1 + photos.length) % photos.length); }}>&#10094;</span>
          <span className="next" onClick={(e) => { e.stopPropagation(); setCurrentImage((currentImage + 1) % photos.length); }}>&#10095;</span>
        </div>
      )}
    </div>
  );
};

export default Workshop
