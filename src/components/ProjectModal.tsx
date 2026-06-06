import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  tag: string;
  tech: string;
  description: string;
  longDescription: string;
  github: string;
  features: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div
      className="
      fixed inset-0
      z-[999]
      bg-black/60
      backdrop-blur-sm
      flex items-center justify-center
      p-4
      "
    >
      <div
        className="
        bg-[#F5F1E8]
        text-[#10243E]
        rounded-3xl
        w-full
        max-w-4xl
        p-8
        max-h-[90vh]
        overflow-y-auto
        relative
        "
      >
        <button
          onClick={onClose}
          className="
          absolute
          top-5
          right-6
          text-3xl
          "
        >
          ×
        </button>

        <span
          className="
          bg-[#10243E]
          text-white
          px-4
          py-2
          rounded-full
          text-sm
          "
        >
          {project.tag}
        </span>

        <h2 className="text-4xl font-bold mt-6">
          {project.title}
        </h2>

        <p className="mt-3 text-[#10243E]/60">
          {project.tech}
        </p>

        <p className="mt-8 text-lg leading-relaxed">
          {project.longDescription}
        </p>

        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4">
            Key Features
          </h3>

          <ul className="space-y-3">
            {project.features.map((feature, index) => (
              <li key={index}>
                • {feature}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
          inline-flex
          items-center
          gap-3
          mt-10
          bg-[#10243E]
          text-white
          px-6
          py-3
          rounded-full
          "
        >
          <FaGithub />
          View Repository
        </a>
      </div>
    </div>
  );
}