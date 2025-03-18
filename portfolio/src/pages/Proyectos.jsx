import ProjectCard from "../components/ProjectCard";
import "./Proyectos.css";

export default function Proyectos() {
  return (
    <section id="proyectos" className="proyectos">
      <div className="contenido">
        <h2 className="text-3xl font-bold text-center mb-8">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard title="Proyecto 1" description="Descripción breve" imageUrl="/proyecto1.jpg" />
          <ProjectCard title="Proyecto 2" description="Descripción breve" imageUrl="/proyecto2.jpg" />
        </div>
      </div>
    </section>
  );
}
