import "./About.css";

export default function About() {
    return (
      <section id="sobre-mi" className="py-20">
        <div className="containerAbout">
          <h2 className="text-3xl font-bold text-center mb-8">Sobre Mí</h2>
          <p className="text-center max-w-2xl mx-auto">
            ¡Hola! Soy un desarrollador Full-Stack con experiencia en tecnologías como JavaScript, React, Node.js y más.
            Me apasiona crear soluciones innovadoras y escalables.
          </p>
        </div>
      </section>
    );
  }