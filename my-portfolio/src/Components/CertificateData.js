import internshipImg from '../Images/Certificate/internship.png'
import web from '../Images/Certificate/web.png'
import graphic from '../Images/Certificate/graphic.png'
import cloud from '../Images/Certificate/cloud.png'
import workshop from '../Images/Certificate/workshop.png'
import hackathon from '../Images/Certificate/hackathon.png'
import techlearns from '../Images/myCertificate/workshop.png'
import gammaprep from '../Images/myCertificate/gammaprep.jpg'
import webdev from '../Images/myCertificate/web.jpg'
import photoshop from '../Images/myCertificate/photoshop.jpg'
import googleCloud from '../Images/myCertificate/cloud.jpg'
import hackathonParticipitation from '../Images/myCertificate/hackathon.png'

const CertificateData = [
  {
    heading: "INTERNSHIP",
    disc: "During the internship, I acquired foundational knowledge in coding, data structures, algorithms, and Full Stack Development principles, fostering valuable skills for future endeavors.",
    img:internshipImg,
    certificateImg: gammaprep
  },
  {
    heading: "WEB DEVELOPMENT",
    disc: "Certified in Web Development encompassing HTML, CSS, JavaScript, jQuery, Bootstrap, and WordPress. Proficient in crafting dynamic and responsive websites with a focus on user experience.",
    img: web,
    certificateImg: webdev
  },
  {
    heading: "GRAPHIC DESIGNING",
    disc: "Professionally certified in Graphic Designing, adept in Adobe Photoshop and Canva, specializing in creative design solutions, brand identity development, and compelling visual storytelling techniques.",
    img: graphic,
    certificateImg: photoshop
  },
  {
    heading: "GOOGLE CLOUD",
    disc: "Certified in Google Cloud Computing Foundations & Generative AI, equipped with essential skills for navigating Google Cloud. Prepared to excel in cloud computing with a deep understanding of core concepts.",
    img: cloud,
    certificateImg : googleCloud
    
  },
  {
    heading: "WORKSHOP",
    disc: "Conducted a workshop on web development and graphic design at Garden Valley Public School with support from Techlearns Academy. Excited to inspire and educate future tech and design enthusiasts.",
    img : workshop,
    certificateImg : techlearns
  },
  {
    heading: "HACKATHON",
    disc: "Conducted a workshop on web development and graphic design at Garden Valley Public School with support from Techlearns Academy. Excited to inspire and educate future tech and design enthusiasts.",
    img : hackathon,
    certificateImg: hackathonParticipitation
  },
];

export default CertificateData;
