import React from 'react'
import CertificationHead from '../Components/CertificationHead'
import CertificateCard from '../Components/CertificateCard'

function MyCertifications() {
  return (
    <>
    <div> <CertificationHead/> </div>
    <div>
    <p className="project-para pb-5 fs-2 pt-5">
    <span className='text-muted project-para fs-2'>Delve into</span> <br/>My Certified Proficiency
        </p>
        <CertificateCard/>
    </div>
    </>
  )
}

export default MyCertifications