import './Header.css'
export default function Header() {
    return (
      <header className="bg-gray-800 text-white  fixed w-full top-0 z-50">
        <nav className="containerHeader">
          <div className="elementosNavegacion">
          <ul className="elementosHeader">
            <li><a href="#inicio" className="hover:text-gray-400">Inicio</a></li>
            <li><a href="#sobre-mi" className="hover:text-gray-400">Sobre Mí</a></li>
            <li><a href="#proyectos" className="hover:text-gray-400">Proyectos</a></li>
            <li><a href="#contacto" className="hover:text-gray-400">Contacto</a></li>
          </ul>
          </div>
        </nav>
      </header>
    );
  }