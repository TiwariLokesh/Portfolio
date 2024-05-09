import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CertificateCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='pb-5 d-flex  justify-content-center p-1 '>
      <Card style={{ width: '22rem', border: "none" }} className='shadow-lg' >
        <Card.Img variant="top" src={props.data.img} />
        <Card.Body style={{ borderRight: "3px solid red", borderBottomRightRadius: "10px" }}>
          <Card.Title>{props.data.heading}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.data.disc}
          </Card.Text>
          <Button variant="none" style={{border: "1px solid #ca0018", color:"#ca0018"}} onClick={openModal}>See Certificate</Button>
        </Card.Body>
      </Card>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '750px',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
          }
        }}
      >
        <div>
          <img src={props.data.certificateImg} alt="Certificate" style={{ width: '100%', borderRadius: '10px' }} />
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <Button variant="danger" onClick={closeModal}>Close</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CertificateCard;
