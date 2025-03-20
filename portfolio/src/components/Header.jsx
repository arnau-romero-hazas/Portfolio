import './Header.css'
export default function Header() {
    return (
      <div className='barraNavegacion'>
        <nav className="containerHeader">
          <div className="elementosNavegacion">
          <ul className="elementosHeader">
            <li><a href="#inicio" className="hover:text-gray-400">Inicio</a></li>
            <li><a href="#sobre-mi" className="hover:text-gray-400">Sobre Mí</a></li>
            <li><a href="#proyectos" className="hover:text-gray-400">Proyectos</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contacto</a></li>
          </ul>
          </div>
        </nav>
        </div>
    );
  }


