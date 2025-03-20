import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id= "contact">
    <div className="contact">
      <h2>Contacto</h2>
      <p>Puedes encontrarme en:</p>

      <div className="contact-links">
        <a href="https://github.com/arnau-romero-hazas" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/arnau-romero-hazas-0128b0200/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} /> LinkedIn
        </a>
        <a href="mailto:aromerohazas@gmail.com?subject=Contacto%20desde%20tu%20portafolio&body=Hola%20Arnau,">
      <FaEnvelope size={30} />
      <span>Enviar Email</span>
        </a>

      </div>
    </div>
    </section>
  );
}
