import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import {
  FaReact,
  FaFigma,
} from "react-icons/fa";

import {
  SiTypescript,
} from "react-icons/si";

export default function Footer() {
  return (
    <footer
      className="
      relative
      overflow-hidden

      bg-[#08172D]
      text-[#F5F1E8]

      py-24
      "
    >

      {/* Floating Icons */}

      <FaReact
        className="
        hidden md:block

        absolute
        top-10
        left-10

        text-[#61DAFB]

        text-7xl

        opacity-10

        animate-float-rotate
        "
      />

      <SiTypescript
        className="
        hidden md:block

        absolute
        top-24
        right-20

        text-[#3178C6]

        text-6xl

        opacity-10

        animate-float
        "
      />

      <FaFigma
        className="
        hidden md:block

        absolute
        bottom-12
        left-1/4

        text-[#F24E1E]

        text-7xl

        opacity-10

        animate-float-slow
        "
      />

      {/* Watermark */}

      <div
        className="
        absolute
        inset-0

        flex
        justify-center
        items-center

        pointer-events-none
        "
      >
        <h1
          className="
          text-[18vw]

          font-black

          text-white/[0.03]

          select-none
          "
        >
          BARATHI
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center">

          <h2
            style={{
              fontFamily: "Instrument Serif, serif",
            }}
            className="
            text-5xl
            md:text-7xl

            leading-none
            "
          >
            Let's build
            <br />
            the future.
          </h2>

          <p className="mt-8 text-white/60 max-w-xl mx-auto">
            Frontend Developer • UI/UX Enthusiast •
            AI Explorer • Digital Forensics Learner
          </p>

        </div>

        {/* Social Links */}

        <div
          className="
          flex
          flex-wrap

          justify-center

          gap-4

          mt-14
          "
        >

          <a
            href="https://github.com/barathisankar29"
            target="_blank"
            rel="noreferrer"
            className="
            flex
            items-center
            gap-3

            px-6
            py-4

            rounded-full

            bg-white/5

            border
            border-white/10

            hover:-translate-y-1
            hover:bg-white/10

            transition-all
            duration-300
            "
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/barathi-sankar-b2737a32b/"
            target="_blank"
            rel="noreferrer"
            className="
            flex
            items-center
            gap-3

            px-6
            py-4

            rounded-full

            bg-white/5

            border
            border-white/10

            hover:-translate-y-1
            hover:bg-white/10

            transition-all
            duration-300
            "
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/miireux_ciel/"
            target="_blank"
            rel="noreferrer"
            className="
            flex
            items-center
            gap-3

            px-6
            py-4

            rounded-full

            bg-white/5

            border
            border-white/10

            hover:-translate-y-1
            hover:bg-white/10

            transition-all
            duration-300
            "
          >
            <FaInstagram />
            Instagram
          </a>

          <a
            href="mailto:barathisankar98@gmail.com"
            className="
            flex
            items-center
            gap-3

            px-6
            py-4

            rounded-full

            bg-white/5

            border
            border-white/10

            hover:-translate-y-1
            hover:bg-white/10

            transition-all
            duration-300
            "
          >
            <FaEnvelope />
            Email
          </a>

          <a
            href="tel:+6374834081"
            className="
            flex
            items-center
            gap-3

            px-6
            py-4

            rounded-full

            bg-white/5

            border
            border-white/10

            hover:-translate-y-1
            hover:bg-white/10

            transition-all
            duration-300
            "
          >
            <FaPhone />
            Phone
          </a>

        </div>

        {/* Divider */}

        <div className="h-px bg-white/10 my-16" />

        {/* Bottom */}

        <div
          className="
          flex
          flex-col
          md:flex-row

          justify-between
          items-center

          gap-4
          "
        >
          <p className="text-white/40 text-sm">
            © 2026 Barathi Sankar. All rights reserved.
          </p>

          <p className="text-white/40 text-sm">
            Built with React • TypeScript • Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}