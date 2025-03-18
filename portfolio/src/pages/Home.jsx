
import ProjectCard from '../components/ProjectCard';
// export default function Home() {
//   return (
//     <div className="pt-16">
//       <section id="inicio" className="h-screen flex flex-col justify-center items-center text-center px-6">
//         <img src="/avatar.jpg" alt="Arnau Romero Hazas" className="w-32 h-32 rounded-full mx-auto mb-4" />
//         <h1 className="text-5xl font-bold">Arnau Romero Hazas</h1>
//         <p className="text-xl mt-4">Full-Stack Developer</p>
//         <a href="#proyectos" className="mt-8 px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700">Ver Proyectos</a>
//       </section>
//       <section id="proyectos" className="py-20">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-8">Proyectos</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <ProjectCard title="Proyecto 1" description="Descripción breve" imageUrl="/proyecto1.jpg" />
//             <ProjectCard title="Proyecto 2" description="Descripción breve" imageUrl="/proyecto2.jpg" />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




export default function Home() {
  return (
    <div className="Inicio">
      {/* Sección Inicio */}
      <section id="inicio" className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <img src="/avatar.jpg" alt="Tu Nombre" className="w-32 h-32 rounded-full mx-auto" />
          <h1 className="text-4xl font-bold mt-4">Arnau Romero Hazas</h1>
          <p className="mt-4 text-xl">Full-Stack Developer</p>
          <a href="#proyectos" className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
            Ver Proyectos
          </a>
        </div>
      </section>

      {/* Sección Proyectos */}
      <section id="proyectos" className="py-20">
        <div className="Proyectos">
          <h2 className="text-3xl font-bold text-center mb-8">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Proyecto 1"
              description="Descripción breve del proyecto 1."
              imageUrl="/proyecto1.jpg"
            />
            <ProjectCard
              title="Proyecto 2"
              description="Descripción breve del proyecto 2."
              imageUrl="/proyecto2.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
