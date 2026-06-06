import heroPortrait from "../assets/images/hero-portrait.png";


export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}
  
      <img
        src={heroPortrait}
        alt="Barathi Sankar"
       className="
absolute
inset-0

w-full
h-full

object-cover
object-[62%_center]

scale-125

md:scale-100
md:object-center
"
      />
         <div className="absolute inset-0 overflow-hidden pointer-events-none">

  <div
    className="
    absolute
    top-[15%]
    right-[25%]

    w-40 h-40

    bg-[#D7B98E]/20
    rounded-full

    blur-3xl

    animate-float
    "
  />

  <div
    className="
    absolute
    bottom-[20%]
    right-[10%]

    w-52 h-52

    bg-[#4DA6FF]/15
    rounded-full

    blur-3xl

    animate-float-delay
    "
  />

  <div
    className="
    absolute
    top-[45%]
    left-[40%]

    w-32 h-32

    bg-white/10
    rounded-full

    blur-2xl

    animate-float-slow
    "
  />

</div>

      {/* Overlay */}
      <div
        className="
          absolute inset-0 z-[1]

          bg-black/50
          sm:bg-black/40
          md:bg-black/15
        "
      />
      

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 md:px-12">

        <div
          className="
            h-full
            flex
            items-end
            pb-20
            md:pb-24
          "
        >

          <div className="max-w-xl">

            {/* Heading */}

            <h1 className="font-bold leading-none">

              <span
                className="
                  block
                  text-white
                  text-[2.5rem]
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Hi, I'm a
              </span>

              {/* Mobile */}
              <span
                className="
                  sm:hidden
                  block
                  mt-2

                  text-[#F5F1E8]
                  text-3xl

                  font-semibold
                "
              >
                Frontend Developer
              </span>

              {/* Desktop */}
              <span
                className="
                  hidden
                  sm:block

                  mt-2

                  text-transparent
                  [-webkit-text-stroke:1.2px_#F5F1E8]

                  text-5xl
                  md:text-6xl
                  font-medium
                "
              >
                Frontend Developer
              </span>

            </h1>

            {/* Description */}

            <p
              className="
                mt-5

                text-white

                text-sm
                sm:text-base
                md:text-lg

                leading-relaxed

                max-w-[310px]
                sm:max-w-md
              "
            >
              I build beautiful, responsive and interactive web
              experiences with React, TypeScript and Tailwind CSS.
            </p>

            {/* Buttons */}

            <div className="flex gap-3 mt-8">

              <button
  onClick={() =>
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="
    bg-white
    text-black
    px-5 py-3
    md:px-6
    rounded-full
    font-semibold
    text-sm
    md:text-base
    transition
    hover:scale-105
  "
>
  View My Work
</button>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="
                  bg-black/30
                  backdrop-blur-sm

                  border
                  border-white/20

                  text-white

                  px-5 py-3
                  md:px-6

                  rounded-full

                  font-semibold

                  text-sm
                  md:text-base

                  transition
                  hover:bg-black/50
                "
              >
                Contact Me
              </button>

            </div>

            {/* Stats */}

            <div
              className="
                grid
                grid-cols-3
                gap-3

                mt-8

                md:flex
                md:gap-10
              "
            >

              <div>
                <h3 className="text-white text-xl md:text-3xl font-bold">
                  02+
                </h3>

                <p className="text-white/80 text-[11px] md:text-sm">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-white text-xl md:text-3xl font-bold">
                  01
                </h3>

                <p className="text-white/80 text-[11px] md:text-sm">
                  Startup
                </p>
              </div>

              <div>
                <h3 className="text-white text-xl md:text-3xl font-bold">
                  UI/UX
                </h3>

                <p className="text-white/80 text-[11px] md:text-sm">
                  Focused
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll */}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">

        <div className="animate-bounce">

          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-white/80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>

        </div>

      </div>

    </section>
  );
}