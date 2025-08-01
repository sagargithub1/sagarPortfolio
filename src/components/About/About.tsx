import { Container } from "./styles";
import wordpress from "../../assets/wordpress.svg";
import awsIcon from "../../assets/aws.png";
import phpIcon from "../../assets/PHP-logo.svg.png";
import laravelIcon from "../../assets/Laravel.svg.png";
import gitIcon from "../../assets/git_icon.svg.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Sagar Sharma, a passionate Software Developer specializing in React JS, JavaScript/TypeScript, and full-stack development with PHP, Node.js, and AWS cloud technologies.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I create dynamic, responsive web applications using React JS, Next.js, Express.js, and modern frontend frameworks with Bootstrap, MUI, and custom CSS3 styling.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I enjoy solving complex problems with full-stack solutions using LAMP stack, MongoDB, Laravel, and AWS cloud services to build scalable, user-friendly applications.
          </p>
        </ScrollAnimation>
        <h3>Education:</h3>
        <div className="education-container">
          <ScrollAnimation animateIn="fadeInLeft" delay={400}>
            <div className="education">
              <p>Bachelor of technology</p>
              <p>Maharana Pratap Engineering College, Kanpur</p>
              <p>Computer Science and Engineering</p>
              <p>2020 - 2023</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay={450}>
            <div className="education">
              <p>Diploma in CSE - Polytechnic</p>
              <p>SAMS Institute of Technology, Varanasi</p>
              <p>Computer Science and Engineering</p>
              <p>2017 - 2020</p>
            </div>
          </ScrollAnimation>
        </div>
        <h3>Experience:</h3>
        <div className="education-container">

        <ScrollAnimation animateIn="fadeInLeft" delay={500}>
          <div className="experience">
          <p>Software Engineer </p>
          <p>1.8 years | February 2023 - September 2024</p>
            <p>Akshamaala Solutions Pvt Ltd - Unnati, Noida, UP</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
          <p>Software Engineer </p>
          <p>10 Months | October 2024 - Present</p>
            <p>Asynczone, Varanasi, UP</p>
          </div>
        </ScrollAnimation>
        </div>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Technology Stacks:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={reactIcon} alt="React JS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={typescriptIcon} alt="TypeScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={htmlIcon} alt="HTML5" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={cssIcon} alt="CSS3" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={boostrapIcon} alt="Bootstrap" />
            </ScrollAnimation>
          </div>
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={vueIcon} alt="Node.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={wordpress} alt="MongoDB" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={phpIcon} alt="PHP" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={laravelIcon} alt="Laravel" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={awsIcon} alt="AWS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={gitIcon} alt="Git" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      {/* <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={SagarSharma} alt="SagarSharma" />
        </ScrollAnimation>
      </div> */}
    </Container>
  )
}