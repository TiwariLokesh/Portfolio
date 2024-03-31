import React from 'react';
import { CDBCard, CDBCardBody, CDBContainer } from 'cdbreact';
import Button from 'react-bootstrap/Button';

const CertificateCard = (props) => {
  return (
    <div>
      <CDBContainer className='pt-5'>
        <CDBCard
          style={{ 
            maxWidth: '25rem', // Adjust maximum width
            width: '100%', // Set width to 100%
            borderRadius: '20px',
            borderColor: '#ca0018',
            boxShadow: '5px 5px 5px 5px #00000016',
          }}
          border 
          className='p-3 certificate'
        >
          <CDBCardBody>
            <h3 className="heading">
              <span>{props.data.heading}</span>
            </h3>
            <p 
              style={{ 
                fontSize: '13px', 
                color: '#666', 
                lineHeight: '18px', 
                margin: '10px 0px 4px 0px', 
                textAlign: 'justify',
              }}
            >
              {props.data.disc}
            </p>
            <div className="d-flex justify-content-start">
              <Button variant="" className='px-3 my-1 button-cv'>
                See Certificate
              </Button>
            </div>
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>
    </div>
  );
};

export default CertificateCard;
