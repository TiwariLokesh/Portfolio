import React from 'react';
import { CDBCard, CDBCardBody, CDBBtn, CDBContainer } from 'cdbreact';

const CertificateCard = () => {
  return (
    <CDBContainer className='pt-5'>
      <CDBCard style={{ width: '25rem',borderRadius:"20px",borderColor:"#ca0018" }} border  className='p-3'>
        <CDBCardBody>
        <h3 className="heading">
                <span>WEB DEVELOPMENT</span>
              </h3>
          <p>Paragraph</p>
          <div className="d-flex justify-content-start">
            <CDBBtn  style={{color:"#ca0018",backgroundColor:"transparent", border:"1px solid #ca0018",borderRadius:"50px"}} flat >
              See Certificate
            </CDBBtn>
          </div>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};

export default CertificateCard;
