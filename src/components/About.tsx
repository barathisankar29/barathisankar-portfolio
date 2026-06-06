import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroPortrait from "../assets/images/hero-portrait.png";

import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaPython,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const techStack = [
    { icon: <FaHtml5 size={32} />, name: "HTML" },
    { icon: <FaCss3Alt size={32} />, name: "CSS" },
    { icon: <SiJavascript size={32} />, name: "JavaScript" },
    { icon: <SiTypescript size={32} />, name: "TypeScript" },
    { icon: <FaReact size={32} />, name: "React" },
    { icon: <SiTailwindcss size={32} />, name: "Tailwind" },
    { icon: <FaPython size={32} />, name: "Python" },
    { icon: <FaNodeJs size={32} />, name: "Node.js" },
    { icon: <SiMongodb size={32} />, name: "MongoDB" },
    { icon: <FaFigma size={32} />, name: "Figma" },
  ];

  return (
    <section
      id="about"
      className="bg-[#08172D] text-[#F5F1E8] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="max-w-4xl"
        >
          <p className="uppercase tracking-[0.35em] text-sm text-[#F5F1E8]/50 mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Building digital experiences
            <br />
            with design in mind.
          </h2>
        </div>

        {/* Main About Content */}

<div className="grid lg:grid-cols-[420px_1fr] gap-20 items-center mt-16">

  {/* LEFT IMAGE */}

  
  <div
  data-aos="fade-right"
  className="flex justify-center lg:justify-start"
>
    <div className="relative">

      {/* Glow */}

      <div
        className="
        absolute
        inset-0

        bg-[#D7B98E]/20

        rounded-full

        blur-[100px]

        scale-75

        -z-10
        "
      />

     <div
  className="
  overflow-hidden

  rounded-[32px]

  border
  border-white/10

  bg-[#0E2340]
  "
>
  <img
    src={heroPortrait}
    alt="Barathi Sankar"
    className="
    w-[360px]
    sm:w-[420px]
    md:w-[520px]
    lg:w-[580px]
     h-[500px]
  md:h-[650px]

    scale-110

    object-cover
    object-[70%_center]

    hover:scale-115
    transition-all
    duration-700
    "
  />
</div>

      {/* Badge */}

      <div
        className="
        absolute
        bottom-5
        left-5

        bg-[#F5F1E8]

        text-[#08172D]

        px-4
        py-2

        rounded-full

        text-sm
        font-semibold
        "
      >
        Frontend Developer
      </div>

    </div>
  </div>

  {/* RIGHT CONTENT */}

  <div data-aos="fade-left">

    <p className="text-lg md:text-xl text-white/80 leading-relaxed">
      I'm{" "}
      <span className="font-semibold text-[#F5F1E8]">
        Barathi Sankar
      </span>
      , a Computer Science Engineering student passionate
      about Frontend Development, UI/UX Design and creating
      digital experiences that feel modern, intuitive and memorable.
    </p>

    <p className="mt-6 text-base md:text-lg text-white/60 leading-relaxed">
      My primary focus is Frontend Development using React,
      TypeScript and modern web technologies. Alongside
      building responsive web applications, I'm exploring
      Full Stack Development, Artificial Intelligence and
      Digital Forensics. I also have a strong interest in
      HR Operations, communication and team collaboration,
      helping me combine technical expertise with
      people-centric problem solving.
    </p>

    {/* Highlights */}

    <div className="flex flex-wrap gap-3 mt-8">

      {[
        "Frontend Developer",
        "UI/UX Designer",
        "Full Stack Learner",
        "AI Enthusiast",
        "HR Operations",
        "Problem Solver",
      ].map((item) => (
        <span
          key={item}
          className="
          bg-[#F5F1E8]
          text-[#08172D]

          px-4
          py-2

          rounded-full

          text-sm
          font-semibold
          "
        >
          {item}
        </span>
      ))}

    </div>

    {/* Expertise Cards */}

    <div className="grid sm:grid-cols-2 gap-5 mt-10">

      <div className="bg-[#0E2340] border border-white/10 rounded-3xl p-6">
        <h3 className="text-xl font-semibold mb-3">
          Frontend Development
        </h3>

        <p className="text-white/60">
          React, TypeScript, JavaScript,
          HTML, CSS and Tailwind CSS.
        </p>
      </div>

      <div className="bg-[#0E2340] border border-white/10 rounded-3xl p-6">
        <h3 className="text-xl font-semibold mb-3">
          UI / UX Design
        </h3>

        <p className="text-white/60">
          Figma, Design Systems,
          Responsive Design and UX.
        </p>
      </div>

      <div className="bg-[#0E2340] border border-white/10 rounded-3xl p-6">
        <h3 className="text-xl font-semibold mb-3">
          Full Stack Journey
        </h3>

        <p className="text-white/60">
          Node.js, MongoDB,
          APIs and backend fundamentals.
        </p>
      </div>

      <div className="bg-[#0E2340] border border-white/10 rounded-3xl p-6">
        <h3 className="text-xl font-semibold mb-3">
          HR Operations
        </h3>

        <p className="text-white/60">
          Communication, Coordination,
          Leadership and Collaboration.
        </p>
      </div>

    </div>

  </div>

</div>
        {/* Tech Stack */}
        <div
          className="mt-20"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="text-3xl font-bold mb-8">
            Tech Stack
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">

            {techStack.map((tech, index) => (
              <div
                key={index}
                className="
                  bg-[#0E2340]
                  border
                  border-white/10
                  rounded-3xl
                  h-28
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  hover:-translate-y-1
                  hover:border-[#F5F1E8]/30
                  transition-all
                  duration-100
                "
              >
                {tech.icon}

                <span className="text-sm text-white/70">
                  {tech.name}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}