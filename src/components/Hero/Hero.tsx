import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import { Fade } from "react-awesome-reveal";
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
import instagram from '../../assets/instagram.svg'
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <Fade >
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </Fade>
        <Fade  delay={0.2 * 1000}>
          <h1>Sagar Sharma</h1>
        </Fade>
        <Fade  delay={0.4 * 1000}>
          <h3>Full Stack Developer | 2.5+ Years of Experience</h3>
        </Fade>
        <Fade  delay={0.6 * 1000}>
          <p className="small-resume">React JS | JavaScript/TypeScript | Node.js | PHP/Laravel | AWS | MySQL | MongoDB | Wordpress | Open Cart | HTML | CSS | </p>
        </Fade>
        <Fade  delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </Fade>
        <Fade  delay={1 * 1000}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/sagar-sharma-01330a150/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/sagargithub1/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B918090217167&text=Hello+Sagar+I+found+your+contact+through+portfolio+site.%0A%0A"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://instagram.com/theoceanruler"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a></div>
        </Fade>
      </div>
      <div className="hero-image">
        <Fade delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </Fade>
      </div>
    </Container>
  )
}