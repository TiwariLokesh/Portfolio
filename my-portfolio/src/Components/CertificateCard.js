import React from 'react';
import { CDBCard, CDBCardBody, CDBBtn, CDBContainer } from 'cdbreact';

const CertificateCard = () => {
  return (
    <CDBContainer className='pt-5'>
      <CDBCard style={{ width: '25rem',borderRadius:"20px",borderColor:"#ca0018" }} border  className='p-3'>
        <CDBCardBody>
          <h5>Heading</h5>
          <p>Paragraph</p>
          <div className="d-flex justify-content-center">
            <CDBBtn color="light" flat circle>
              Button
            </CDBBtn>
          </div>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};

export default CertificateCard;
