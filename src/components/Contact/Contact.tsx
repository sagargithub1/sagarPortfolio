import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"

export function Contact(){

  return(
    <Container id="contact" style={{marginBottom:"20px"}}>
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:connectsagar01@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:connectsagar01@gmail.com">connectsagar01@gmail.com</a>
        </div>
        <div>
        <a href="tel:+918090217167"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+918090217167">(+91) 8090217167</a>
        </div>  
      </div>
    </Container>
  )
}