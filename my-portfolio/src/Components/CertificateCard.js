// import React from 'react';
// import { CDBCard, CDBCardBody, CDBContainer } from 'cdbreact';
// import Button from 'react-bootstrap/Button';
// import '../Stylings/Certifications.css'
// import Modals from './Modals';

// const CertificateCard = (props) => {
//   return (
//     <div>
//       <CDBContainer className='pt-5'>
//         <CDBCard
//           style={{ 
//             maxWidth: '25rem', // Adjust maximum width
//             width: '100%', // Set width to 100%
//             borderRadius: '20px',
//             borderColor: '#ca0018',
//             boxShadow: '5px 5px 5px 5px #00000016',
//           }}
//           border 
//           className='p-3 certificate'
//         >
//           <CDBCardBody>
//             <h3 className="heading">
//               <span>{props.data.heading}</span>
//             </h3>
//             <p 
//               style={{ 
//                 fontSize: '13px', 
//                 color: '#666', 
//                 lineHeight: '18px', 
//                 margin: '10px 0px 4px 0px', 
//                 textAlign: 'justify',
//               }}
//             >
//               {props.data.disc}
//             </p>
//             <div className="d-flex justify-content-start">
//               <Button variant="" className='px-3 my-1 button-cv'>
//                 See
//               </Button>
//             </div>
//           </CDBCardBody>
//         </CDBCard>
//       </CDBContainer>
//     </div>
//   );
// };

// export default CertificateCard;




import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
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
          <Button variant="project-button" onClick={openModal}>Open Modal</Button>
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
            <Button variant="danger" onClick={closeModal}>Close Modal</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default BasicExample;
