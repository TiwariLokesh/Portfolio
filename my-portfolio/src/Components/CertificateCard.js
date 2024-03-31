import React from 'react';
import { CDBCard, CDBCardBody, CDBContainer } from 'cdbreact';
import Button from 'react-bootstrap/Button';

const CertificateCard = () => {
  return (
    <CDBContainer className='pt-5'>
      <CDBCard style={{ width: '25rem',borderRadius:"20px",borderColor:"#ca0018",boxShadow: "5px 5px 5px 5px #00000016" }} border  className='p-3'>
        <CDBCardBody>
        <h3 className="heading">
                <span>WEB DEVELOPMENT</span>
              </h3>
          <p style={{fontSize:"13px",color:"#666",lineHeight:"18px",margin:" 10px 0px 4px 0px",textAlign:"justify"}}>Certified in Web Development encompassing HTML, CSS, JavaScript, jQuery, Bootstrap, and WordPress. Proficient in crafting dynamic and responsive websites with a focus on user experience</p>
          <div className="d-flex justify-content-start">
            <Button  variant=" px-3 my-1" className='button-cv'>
              See Certificate
            </Button>
          </div>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};

export default CertificateCard;
