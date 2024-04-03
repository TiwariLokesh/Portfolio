// import React, { useState } from 'react';
// import Modal from 'react-modal';

// const Modals = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={openModal} className='project-button'>Open Modal</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Example Modal"
//         style={{
//           overlay: {
//             backgroundColor: 'rgba(0, 0, 0, 0.5)'
//           },
//           content: {
//             top: '50%',
//             left: '50%',
//             right: 'auto',
//             bottom: 'auto',
//             marginRight: '-50%',
//             transform: 'translate(-50%, -50%)',
//             maxWidth: '400px',
//             padding: '20px',
//             borderRadius: '10px',
//             boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
//           }
//         }}
//       >
//         <div>
//           <img src="https://via.placeholder.com/150" alt="Image" style={{ width: '100%', borderRadius: '10px' }} />
//           <h2 style={{ marginTop: '10px' }}>Title</h2>
//           <p>
//             Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla orcane faucibus ex, non facilisis nisl.
//             Maexenas aliquet mauris ut tempus.
//           </p>
//           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <button onClick={closeModal}>Cancel</button>
//             <button>Done</button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Modals;
