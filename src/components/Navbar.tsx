import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="h-24 flex items-center justify-between">

            {/* Logo */}

            <a
              href="#home"
              className="
text-[#F5F1E8]

text-2xl
md:text-3xl

font-bold

tracking-tight

[font-family:'space_grotesk',sans-serif]
"
            >
              Barathi Sankar
            </a>

            {/* Desktop Menu */}

            <ul
              className="
              hidden
              md:flex
              items-center
              gap-12

              text-white
              [font-family:'Manrope',sans-serif]
              "
            >
              <li>
                <a
                  href="#home"
                  className="hover:text-[#D7B98E] transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-[#D7B98E] transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-[#D7B98E] transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#journey"
                  className="hover:text-[#D7B98E] transition"
                >
                  Journey
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-[#D7B98E] transition"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Hire Me Button */}

            <div className="hidden md:block">
              <a
                href="#contact"
                className="
                px-7
                py-3

                rounded-full

                border
                border-white/20

                text-white
                font-semibold

                hover:bg-white/10
                hover:border-white/40

                transition-all
                duration-300
                "
              >
                Hire Me
              </a>
            </div>
          
            {/* Mobile Menu Button */}

            <button
              onClick={() => setIsOpen(true)}
              className="
              md:hidden
              text-white
              text-4xl
              "
            >
              ☰
            </button>

          </div>

        </div>
      </nav>

      {/* Mobile Overlay */}

      <div
        onClick={closeMenu}
        className={`
          fixed
          inset-0
          bg-black/50
          backdrop-blur-sm
          z-[90]
          transition-all
          duration-300

          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Mobile Drawer */}

      <div
        className={`
          fixed
          top-0
          right-0

          h-screen
          w-[300px]

          bg-[#08172D]

          z-[100]

          transition-transform
          duration-500

          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        <div className="p-8">

          {/* Close */}

          <div className="flex justify-end">

            <button
              onClick={closeMenu}
              className="
              text-white
              text-4xl
              "
            >
              ×
            </button>

          </div>

          {/* Links */}

          <div
            className="
            flex
            flex-col
            gap-8

            mt-12

            text-white
            text-xl
            font-semibold
            "
          >

            <a
              href="#home"
              onClick={closeMenu}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
            >
              About
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
            >
              Projects
            </a>

            <a
              href="#journey"
              onClick={closeMenu}
            >
              Journey
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="
              mt-4

              bg-[#F5F1E8]
              text-[#08172D]

              px-6
              py-3

              rounded-full

              text-center
              font-semibold
              "
            >
              Hire Me
            </a>

          </div>

        </div>

      </div>
    </>
  );
}