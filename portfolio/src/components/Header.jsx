// export default function Header() {
//   return (
//     <header className="bg-gray-900 text-white fixed w-full top-0 z-50 shadow-md py-4">
//       <nav className="container mx-auto flex justify-between items-center px-6">
//         <h1 className="text-xl font-bold">Arnau</h1>
//         <ul className="hidden md:flex space-x-6">
//           <li><a href="#inicio" className="hover:text-blue-400">Inicio</a></li>
//           <li><a href="#sobre-mi" className="hover:text-blue-400">Sobre Mí</a></li>
//           <li><a href="#proyectos" className="hover:text-blue-400">Proyectos</a></li>
//           <li><a href="#contacto" className="hover:text-blue-400">Contacto</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }


export default function Header() {
    return (
      <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50">
        <nav className="containerHeader">
          <ul className="elementosHeader">
            <li><a href="#inicio" className="hover:text-gray-400">Inicio</a></li>
            <li><a href="#sobre-mi" className="hover:text-gray-400">Sobre Mí</a></li>
            <li><a href="#proyectos" className="hover:text-gray-400">Proyectos</a></li>
            <li><a href="#contacto" className="hover:text-gray-400">Contacto</a></li>
          </ul>
        </nav>
      </header>
    );
  }