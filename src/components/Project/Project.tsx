import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import { Fade } from "react-awesome-reveal";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

      <Fade >
        <div className="project">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://rugvogue.in/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Rug Vogue" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Rug Vogue - Premium Rugs E-commerce Store</h3>
            <p>
              Developed a comprehensive e-commerce platform for premium rugs and carpets using OpenCart framework. Features include product catalog management, shopping cart functionality, secure payment integration, order management system, and responsive design for optimal user experience across all devices.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>OpenCart</li>
              <li>MySQL</li>
            </ul>
          </footer>
        </div>
      </Fade>
      <Fade >
        <div className="project">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://jkproperties.in/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="JK Properties" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>JK Properties - Real Estate Website</h3>
            <p>
              Developed a comprehensive real estate platform for property listings and management using WordPress. Features include property catalog management, user registration and authentication, advanced search functionality, and responsive design for optimal user experience across all devices.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>MERN Stack</li>
            </ul>
          </footer>
        </div>
      </Fade>

        

<Fade >
  <div className="project">
    <header>
      <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
      <div className="project-links">
        <a href="https://github.com/sagargithub1/pavitriRugs" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="Visit site" /> </a>
      </div>
    </header>
    <div className="body">
      <h3>Pavitri Rugs - Company Information Website</h3>
      <p>
        Developed a comprehensive informational website for Pavitri Rugs company showcasing their premium rug collections, company history, and services. The website features responsive design, product galleries, company information sections, and contact forms to provide visitors with detailed information about the rug manufacturing business.
      </p>
    </div>
    <footer>
      <ul className="tech-list">
        <li>LAMP Stack</li>
      </ul>
    </footer>
  </div>
</Fade>

  <Fade >
  <div className="project">
    <header>
      <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
      <div className="project-links">
        <a href="https://github.com/sagargithub1/kashiResidency" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="Visit site" />
        </a>
      </div>
    </header>
    <div className="body">
      <h3>Kashi Residency - Hotel Booking Website</h3>
      <p>
        Developed a comprehensive hotel booking platform for Kashi Residency featuring room reservation system, availability checking, secure booking functionality, and guest management. The website includes room galleries, amenities showcase, pricing details, and an intuitive booking interface for seamless customer experience.
      </p>
    </div>
    <footer>
      <ul className="tech-list">
        <li>PHP</li>
        <li>HTML/CSS</li>
        <li>Laravel</li>
        <li>JS</li>
        <li>MySQL</li>
      </ul>
    </footer>
  </div>
</Fade>

       <Fade >
  <div className="project">
    <header>
      <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <title>Folder</title>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
      <div className="project-links">
        <a href="https://github.com/sagargithub1/sacredstreets" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="Visit site" />
        </a>
      </div>
    </header>
    <div className="body">
      <h3>Sacred Streets - Varanasi Information Website</h3>
      <p>
        Developed an informative website about the sacred city of Varanasi, showcasing its rich cultural heritage, historical significance, and spiritual importance. The website features detailed information about famous ghats, temples, traditions, and cultural practices of one of the world's oldest continuously inhabited cities.
      </p>
    </div>
    <footer>
      <ul className="tech-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>PHP</li>
        <li>MySQL</li>
      </ul>
    </footer>
  </div>
</Fade>

<Fade >
  <div className="project">
    <header>
      <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <title>Folder</title>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
      <div className="project-links">
        <a href="https://github.com/sagargithub1/jigyasaAI" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="Visit site" />
        </a>
      </div>
    </header>
    <div className="body">
      <h3>Jigyasa AI - AI Agent for India</h3>
      <p>
        Developed an intelligent AI agent specifically designed for the Indian context, providing localized AI assistance and solutions. Jigyasa AI focuses on understanding Indian languages, culture, and specific use cases to deliver relevant and contextually appropriate responses for Indian users and businesses.
      </p>
    </div>
    <footer>
      <ul className="tech-list">
        <li>Python</li>
        <li>Machine Learning</li>
        <li>NLP</li>
        <li>AI/ML</li>
        <li>TensorFlow</li>
      </ul>
    </footer>
  </div>
</Fade>
      </div>
    </Container>
  );
}