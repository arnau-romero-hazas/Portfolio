import ProjectCard from "../components/ProjectCard";
import "./Proyectos.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Proyectos() {
  return (
    <section id="proyectos" className="proyectos">
      <div className="contenido">
        <h2 className="text-3xl font-bold text-center mb-8">Proyectos</h2>
        <h3 className="text-3xl font-bold text-center mb-8">Aqui podras encontrar links a mi codigo de github de los proyectos en los que estoy trabajando actualmente en el bootcamp</h3>
        
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
          <div className="ProjectoSocial">
          <ProjectCard title="Sots Social" description="Creacion de una red social, (WIP)" imageUrl="/logoAppSotsSocial (1).jpg" />
          <a href="https://github.com/arnau-romero-hazas/isdi-bootcamp-202501/tree/feature/product/staff/arnau-romero" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} /> 
          </a>
          </div>
           <div className="ProjectoNumero">
          <ProjectCard title="GuesTheNumber" description="Juego de adivinar un numeros" imageUrl="/adivinarNumero (1).jpg" />
          <a href="https://github.com/arnau-romero-hazas/isdi-bootcamp-202501/tree/feature/playground/staff/arnau-romero" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} /> 
          </a>
          </div>
          <div className="ProjectoRockPaperScissors">
          <ProjectCard title="RockPaperScissors" description="Juego de piedra papel tijeras" imageUrl="/piedraPapelTijera (1).jpg" />
          <a href="https://github.com/arnau-romero-hazas/isdi-bootcamp-202501/tree/feature/playground/staff/arnau-romero" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
          </a>
          </div>
          <div className="ProjectoTicTacToe">
          <ProjectCard title="TicTacTOE" description="Juego de tres en raya" imageUrl="/tresEnRaya.jpg" />
          <a href="https://github.com/arnau-romero-hazas/isdi-bootcamp-202501/tree/feature/playground/staff/arnau-romero" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}
