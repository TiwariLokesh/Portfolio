import React from "react";
import { Container, Row } from "react-bootstrap";

function Experience() {
  return (
    <Container className="pb-5 experience">
      <Row className="pb-5">
        <div className="text-center project-heading">
          My <span>Experience</span>
        </div>
        <p className="project-para pb-5">
          Browse through my extensive industry experience.
        </p>
      </Row>

      <Row className="justify-content-center align align-items-center pb-5">
        <div className="box dabba d-flex justify-content-center align-items-center">
          <ul>
            <li>
              <h3 className="heading">
                <span>Full Stack Developer</span>
              </h3>
              <p className="fw-bold text-dark fs-6">Godigitify Nexus</p>
              <p className="company-content">
                At Godigitify Nexus, I spent over 1.5 years as a Full Stack Developer, contributing to the development of digital solutions. I specialized in frontend and backend development, collaborating with cross-functional teams to deliver scalable, high-quality applications that met client objectives.
              </p>
              <a href="https://www.godigitify.com/" target="_blank">Visit Website</a>
              <span className="date">January 2023</span>
              <span className="circle"></span>
            </li>

            <li>
              <h3 className="heading">
                <span>Trainer</span>
              </h3>
              <p className="fw-bold text-dark fs-6">Techlearns Academy</p>
              <p className="company-content">
                At Techlearns Academy, I served as a Trainer for 1.5+ years, delivering technical training courses and conducting guest lectures and seminars. I provided hands-on guidance and developed curriculum content to enhance learning outcomes for students.
              </p>
              <a href="https://www.techlearns.in/" target="_blank">Visit Website</a>
              <span className="date">January 2023</span>
              <span className="circle"></span>
            </li>


            <li>
              <h3 className="heading">
                <span className="internship">Internship</span>
              </h3>
              <p className="fw-bold text-dark fs-6 gammaprep">Gammaprep</p>
              <p className="company-content">
                At Techlearns Academy, I served as a Trainer for 1.5+ years, delivering technical training courses and conducting guest lectures and seminars. I provided hands-on guidance and developed curriculum content to enhance learning outcomes for students.
              </p>
              <a href="https://www.techlearns.in/" target="_blank">Visit Website</a>
              <span className="date internship">January 2023</span>
              <span className="circle"></span>
            </li>
          </ul>
        </div>
      </Row>
    </Container>
  );
}

export default Experience;



// import React, { useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Experience() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration in milliseconds
//       once: true,     // Whether animation should happen only once
//     });
//   }, []);

//   return (
//     <Container className="pb-5 experience">
//       <Row className="pb-5">
//         <div className="text-center project-heading">
//           My <span>Experience</span>
//         </div>
//         <p className="project-para pb-5">
//           Browse through my extensive industry experience.
//         </p>
//       </Row>

//       <Row className="justify-content-center align align-items-center pb-5">
//         <div className="box dabba d-flex justify-content-center align-items-center">
//           <ul>
//             <li data-aos="zoom-in-down">
//               <h3 className="heading">
//                 <span>Full Stack Developer</span>
//               </h3>
//               <p className="fw-bold text-dark fs-6">Godigitify Nexus</p>
//               <p className="company-content">
//                 At Godigitify Nexus, I spent over 1.5 years as a Full Stack Developer, contributing to the development of digital solutions. I specialized in frontend and backend development, collaborating with cross-functional teams to deliver scalable, high-quality applications that met client objectives.
//               </p>
//               <a href="https://www.godigitify.com/" target="_blank">Visit Website</a>
//               <span className="date">January 2023</span>
//               <span className="circle"></span>
//             </li>

//             <li>
//               <h3 className="heading">
//                 <span>Trainer</span>
//               </h3>
//               <p className="fw-bold text-dark fs-6">Techlearns Academy</p>
//               <p className="company-content">
//                 At Techlearns Academy, I served as a Trainer for 1.5+ years, delivering technical training courses and conducting guest lectures and seminars. I provided hands-on guidance and developed curriculum content to enhance learning outcomes for students.
//               </p>
//               <a href="https://www.techlearns.in/" target="_blank">Visit Website</a>
//               <span className="date">January 2023</span>
//               <span className="circle"></span>
//             </li>

//             <li >
//               <h3 className="heading">
//                 <span className="internship">Internship</span>
//               </h3>
//               <p className="fw-bold text-dark fs-6 gammaprep">Gammaprep</p>
//               <p className="company-content">
//                 At Techlearns Academy, I served as a Trainer for 1.5+ years, delivering technical training courses and conducting guest lectures and seminars. I provided hands-on guidance and developed curriculum content to enhance learning outcomes for students.
//               </p>
//               <a href="https://www.techlearns.in/" target="_blank">Visit Website</a>
//               <span className="date internship">January 2023</span>
//               <span className="circle"></span>
//             </li>
//           </ul>
//         </div>
//       </Row>
//     </Container>
//   );
// }

// export default Experience;
