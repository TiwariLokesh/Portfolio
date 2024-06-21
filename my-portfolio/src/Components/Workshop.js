// src/components/PhotoGallery.js
import React, { useState } from 'react';
import '../Stylings/Workshop.css';
import image1 from '../Images/Workshop/1.png';
import image2 from '../Images/Workshop/2.png';
import image3 from '../Images/Workshop/3.png';
import image4 from '../Images/Workshop/4.png';
import { Col, Container, Row } from 'react-bootstrap';

const photos = [
  {
    src: image1,
    width: 4.5,
    height: 2.5
  },
  {
    src: image2,
    width: 3,
    height: 2.5
  },
  {
    src: image3,
    width: 4,
    height: 2.5
  },
  {
    src: image4,
    width: 3.3,
    height: 2.5
  },
  {
    src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
    width: 2.5,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
    width: 3.5,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
    width: 2.5,
    height: 3
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
    <Container fluid>
      <Row className="gallery-container">
        {photos.map((photo, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
            <div style={{ paddingBottom: '100%', position: 'relative' }}>
              <img
                src={photo.src}
                alt={`Photo ${index}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  objectFit: 'cover'
                }}
                onClick={() => openLightbox(index)}
              />
            </div>
          </Col>
        ))}
      </Row>

      {currentImage !== null && (
        <div className="lightbox" onClick={closeLightbox} style={{ zIndex: 99999 }}>
          <span className="close">&times;</span>
          <img className="lightbox-content" src={photos[currentImage].src} alt={`Photo ${currentImage}`} />
        </div>
      )}
    </Container>
  );
};

export default Workshop;
