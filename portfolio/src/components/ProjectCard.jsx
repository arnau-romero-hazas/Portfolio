import "./ProjectCard.css";

export default function ProjectCard({ title, description, imageUrl }) {
    return (
      <div className="ProjectCard">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
        <h3 className="text-xl font-bold mt-4">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <a href="#" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Ver más
        </a>
      </div>
    );
  }