import "./Inicio.css";
// export default function Inicio() {
//     return (
//       <section id="inicio" className="inicio">
//         <div className="contenido">
//           <h1 className="text-4xl font-bold mt-4">Arnau Romero Hazas</h1>
//           <p className="mt-4 text-xl">Full-Stack Developer</p>
//           <a href="#proyectos" className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
//             Ver Proyectos
//           </a>
//         </div>
//       </section>
//     );
//   }
  
export default function Inicio() {
  return (
    <section id="inicio" className="inicio flex flex-col justify-center items-center text-center text-white">
      <h1 className="Nombre">Arnau Romero Hazas</h1>
      <p className="Curro">Full-Stack Developer</p>
    </section>
  );
}