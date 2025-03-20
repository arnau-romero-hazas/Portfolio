import "./About.css";

export default function About() {
  return (
    <section id="sobre-mi" className="py-20">
      <div className="about">
        <h2 className="headerAbout">Sobre Mí</h2>
        <div className="textoAbout">
          <h3> 🚀 En busca de mi primera oportunidad en el mundo tech 🧑‍💻</h3>
          <p className="textoAbout2">
            Actualmente, estoy finalizando un bootcamp de desarrollo Full Stack en ISDI Coders, donde he consolidado mis conocimientos en JavaScript, React, Node.js, Express y MongoDB, además de aplicar principios como SOLID, testing con Jest, control de versiones con Git y metodologías ágiles (SCRUM).
          </p>
          <p className="textoAbout2">
            Estoy buscando mi primera oportunidad laboral, abierto a contratos de prácticas, porque ahora mismo priorizo la experiencia por encima del salario. Mi objetivo es integrarme en un equipo donde pueda seguir aprendiendo y dar lo mejor de mí para aportar el máximo valor posible.
          </p>
          <p className="textoAbout2">
            Vengo del mundo de la automatización industrial y la robótica, lo que me ha dado una gran capacidad para resolver problemas, trabajar en equipo y adaptarme a entornos dinámicos. Además, estoy acostumbrado a proyectos de alto nivel técnico, lo que me permite tener una mentalidad analítica y orientada a la eficiencia.
          </p>
          <p className="textoAbout2">
            Tengo una gran predisposición a trabajar duro, aprender rápido y enfrentar cualquier reto con la mejor actitud.
            Si buscas a alguien con ganas de crecer, mejorar y aportar al equipo desde el primer día, ¡hablemos! 🚀
          </p>
        </div>
        <a
          href={`${import.meta.env.BASE_URL}CV-ArnauRomeroHazas.pdf`}
          download
          className="btn-download"
        >
          Descargar mi CV 📋
        </a>
      </div>
    </section>
  );
}
