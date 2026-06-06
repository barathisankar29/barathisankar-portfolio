import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const journey = [
  {
    year: "2025",
    title: "TripWithAI",
    type: "AI Travel Companion",

    description:
      "Built an AI-powered travel planning platform that generates itineraries and travel recommendations.",

    learned:
      "Learned API integration, prompt engineering, state management and building complete user flows.",
  },

  {
    year: "2026",
    title: "Crowd Density Prediction",
    type: "Computer Vision Project",

    description:
      "Developed an intelligent crowd monitoring system using YOLO, OpenCV and predictive analytics.",

    learned:
      "Learned computer vision fundamentals, model integration, heatmap generation and real-world AI workflows.",
  },

  {
    year: "2026",
    title: "FinalForgeX",
    type: "Portfolio Platform",

    description:
      "Created an immersive portfolio experience with advanced UI design and Spline-powered 3D interactions.",

    learned:
      "Learned design systems, visual storytelling, user experience principles and frontend architecture.",
  },

  {
    year: "Present",
    title: "TraceLens",
    type: "Digital Forensics Toolkit",

    description:
      "Building a toolkit for metadata analysis, hash generation and digital evidence examination.",

    learned:
      "Currently exploring digital forensics, cybersecurity concepts and investigative workflows.",
  },
];

export default function Journey() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section
      id="journey"
      className="bg-[#08172D] text-[#F5F1E8] py-28 md:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}

        <div data-aos="fade-up">
          <p className="uppercase tracking-[0.35em] text-sm text-white/40 mb-4">
            Journey
          </p>

          <h2
            style={{
              fontFamily: "Instrument Serif, serif",
            }}
            className="
            text-5xl
            md:text-7xl
            leading-[0.95]
            "
          >
            Learning through
            <br />
            building.
          </h2>

          <p className="mt-8 text-white/60 max-w-2xl text-lg">
            Every project taught me something new —
            from AI and computer vision to UI/UX design,
            frontend engineering and digital forensics.
          </p>
        </div>

        {/* Timeline */}

        <div className="mt-24 relative">

          {/* Vertical Line */}

          <div
            className="
            absolute
            left-[15px]
            top-0
            h-full
            w-[2px]
            bg-white/10
            "
          />

          <div className="space-y-16">

            {journey.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="relative pl-14"
              >

                {/* Timeline Dot */}

                <div
                  className="
                  absolute
                  left-0
                  top-2

                  w-8
                  h-8

                  rounded-full

                  bg-[#10243E]

                  border
                  border-white/20

                  flex
                  items-center
                  justify-center
                  "
                >
                  <div className="w-2 h-2 rounded-full bg-[#F5F1E8]" />
                </div>

                {/* Card */}

                <div
                  className="
                  bg-[#10243E]

                  border
                  border-white/10

                  rounded-[28px]

                  p-6
                  md:p-8

                  hover:border-white/20
                  hover:-translate-y-1

                  transition-all
                  duration-300
                  "
                >
                  <span className="text-sm uppercase tracking-[0.25em] text-white/40">
                    {item.year}
                  </span>

                  <h3 className="text-3xl font-bold mt-3">
                    {item.title}
                  </h3>

                  <p className="text-[#DCC8A5] font-medium mt-2">
                    {item.type}
                  </p>

                  <p className="mt-5 text-white/75 leading-relaxed">
                    {item.description}
                  </p>

                  {/* What I Learned */}

                  <div
                    className="
                    mt-6

                    bg-[#08172D]

                    border
                    border-white/10

                    rounded-2xl

                    p-5
                    "
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3">
                      What I Learned
                    </p>

                    <p className="text-white/70 leading-relaxed">
                      {item.learned}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Bottom Quote */}

        <div
          data-aos="fade-up"
          className="
          mt-28

          border-t
          border-white/10

          pt-16
          "
        >
          <p
            style={{
              fontFamily: "Instrument Serif, serif",
            }}
            className="
            text-4xl
            md:text-5xl

            max-w-4xl

            text-white/90
            leading-tight
            "
          >
            Every project became a classroom,
            every challenge became a lesson.
          </p>
        </div>

      </div>
    </section>
  );
}