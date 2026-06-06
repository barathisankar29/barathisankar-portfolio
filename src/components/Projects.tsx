import { useState } from "react";
import {
  FaGithub,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Crowd Density Prediction",
    tag: "Featured Project",
    tech: "Python • YOLO • OpenCV • Flask",

    description:
      "AI-powered crowd monitoring platform with density heatmaps and crowd growth prediction.",

    longDescription:
      "Crowd Density Prediction is an intelligent monitoring system that uses YOLO object detection, OpenCV processing and machine learning techniques to estimate crowd density, generate heatmaps and provide predictive insights about crowd growth trends.",

    github: "https://github.com/barathisankar29",

    features: [
      "Real-time crowd detection",
      "YOLO object detection",
      "Heatmap generation",
      "Density analytics",
      "Future crowd prediction",
      "Interactive dashboard",
    ],
  },

  {
    title: "TripWithAI",
    tag: "AI Travel Assistant",
    tech: "React • TypeScript • AI APIs",

    description:
      "Travel companion platform powered by AI recommendations and itinerary generation.",

    longDescription:
      "TripWithAI helps users discover destinations, create itineraries and organize travel plans through AI-powered recommendations and smart trip planning.",

    github: "https://github.com/barathisankar29",

    features: [
      "AI itinerary generation",
      "Travel recommendations",
      "Trip planning",
      "Destination discovery",
      "Responsive UI",
    ],
  },

  {
    title: "TraceLens",
    tag: "Digital Forensics Toolkit",
    tech: "React • TypeScript • Cybersecurity",

    description:
      "Digital forensics toolkit for metadata analysis, hash generation and evidence inspection.",

    longDescription:
      "TraceLens is a digital forensics platform focused on helping investigators analyze metadata, generate file hashes and examine digital evidence through a modern interface.",

    github: "https://github.com/barathisankar29",

    features: [
      "Metadata analysis",
      "Hash generation",
      "Evidence inspection",
      "Forensics utilities",
      "Case workflows",
      "Interactive dashboard",
    ],
  },

  {
    title: "FinalForgeX",
    tag: "Portfolio Platform",
    tech: "React • Tailwind • TypeScript • Spline",

    description:
      "Interactive portfolio experience with modern UI and 3D storytelling.",

    longDescription:
      "FinalForgeX combines frontend engineering, responsive design and interactive 3D experiences through Spline integration and modern React architecture.",

    github: "https://github.com/barathisankar29",

    features: [
      "Spline integration",
      "Interactive 3D models",
      "Responsive design",
      "Modern UI system",
      "Portfolio storytelling",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<any>(null);

  return (
    <section
      id="projects"
      className="bg-[#F5F1E8] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <p className="uppercase tracking-[0.3em] text-sm text-[#10243E]/50 mb-4">
          Projects
        </p>

        <h2 className="text-[#10243E] text-4xl md:text-6xl font-bold leading-tight">
          Selected work &
          <br />
          creative experiments.
        </h2>

        <p className="mt-6 text-[#10243E]/70 max-w-2xl text-lg">
          A collection of projects focused on AI,
          frontend engineering, user experience and
          solving real-world problems.
        </p>

        <div className="mt-8">
          <a
            href="https://github.com/barathisankar29"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            items-center
            gap-3
            bg-[#10243E]
            text-white
            px-5
            py-3
            rounded-full
            hover:scale-105
            transition
            "
          >
            <FaGithub />
            Visit GitHub
          </a>
        </div>

        {/* Featured Project */}

<div
  onClick={() => setSelectedProject(projects[0])}
  className="
  mt-16
  bg-[#10243E]
  text-white
  rounded-[32px]
  p-8
  md:p-12

  cursor-pointer

  hover:-translate-y-1
  hover:shadow-2xl

  transition-all
  duration-300
  "
>
  <span
    className="
    bg-white
    text-[#10243E]
    px-4
    py-2
    rounded-full
    text-sm
    font-semibold
    "
  >
    Featured Project
  </span>

  <h3 className="text-3xl md:text-5xl font-bold mt-6">
    Crowd Density Prediction
  </h3>

  <p className="mt-5 text-white/80 max-w-3xl leading-relaxed">
    AI-powered crowd monitoring system with heatmaps,
    analytics, prediction models and real-time crowd
    density visualization.
  </p>

  <div className="flex flex-wrap gap-3 mt-8">

    <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
      YOLO
    </span>

    <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
      OpenCV
    </span>

    <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
      Flask
    </span>

    <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
      AI Analytics
    </span>

  </div>
</div>

{/* Other Projects */}



<div className="grid md:grid-cols-2 gap-8 mt-8">

  {projects.slice(1, 3).map((project, index) => (
    <div
      key={index}
      onClick={() => setSelectedProject(project)}
      className="
      group
      bg-white

      border
      border-[#10243E]/10

      rounded-[32px]

      p-8

      flex
      flex-col

      min-h-[380px]

      cursor-pointer

      hover:border-[#10243E]/20
      hover:shadow-xl
      hover:-translate-y-2

      transition-all
      duration-300
      "
    >

      <span
        className="
        self-start

        bg-[#10243E]
        text-white

        px-3
        py-1

        rounded-full

        text-xs
        font-medium
        "
      >
        {project.tag}
      </span>

      <h3 className="text-[#10243E] text-3xl font-bold mt-5">
        {project.title}
      </h3>

      <p className="text-[#10243E]/60 mt-2">
        {project.tech}
      </p>

      <p className="text-[#10243E]/75 mt-5 leading-relaxed flex-grow">
        {project.description}
      </p>

      <p
        className="
        text-xs
        uppercase
        tracking-[0.25em]
        text-[#10243E]/40
        mt-5
        "
      >
        Click to explore
      </p>

      <div
        className="
        mt-6

        inline-flex
        items-center
        justify-center
        gap-2

        bg-[#10243E]
        text-white

        px-5
        py-3

        rounded-full

        font-semibold
        text-sm

        w-fit

        group-hover:bg-[#08172D]

        transition-all
        duration-300
        "
      >
        View Details

        <FaArrowUpRightFromSquare />
      </div>

    </div>
  ))}
</div>

{/* FinalForgeX Full Width */}

<div
  onClick={() => setSelectedProject(projects[3])}
  className="
  mt-8

  bg-[#10243E]
  text-white

  rounded-[32px]

  p-8
  md:p-10

  cursor-pointer

  hover:-translate-y-2
  hover:shadow-2xl

  transition-all
  duration-300
  "
>
  <span
    className="
    bg-white
    text-[#10243E]

    px-3
    py-1

    rounded-full

    text-xs
    font-semibold
    "
  >
    Portfolio Platform
  </span>

  <h3 className="text-3xl md:text-4xl font-bold mt-5">
    FinalForgeX
  </h3>

  <p className="text-white/70 mt-2">
    React • Tailwind • TypeScript • Spline
  </p>

  <p className="text-white/80 mt-5 max-w-3xl leading-relaxed">
    Interactive portfolio experience combining
    modern frontend engineering, responsive design,
    immersive UI and 3D storytelling through
    Spline integration.
  </p>

  <div className="flex flex-wrap gap-3 mt-8">

    <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
      React
    </span>

    <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
      TypeScript
    </span>

    <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
      Tailwind
    </span>

    <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
      Spline
    </span>

  </div>

  <div
    className="
    mt-8

    inline-flex
    items-center
    gap-2

    bg-white
    text-[#10243E]

    px-5
    py-3

    rounded-full

    font-semibold
    text-sm
    "
  >
    View Details
    <FaArrowUpRightFromSquare />
  </div>

</div>
</div>
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}