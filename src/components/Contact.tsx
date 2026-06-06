import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaPython,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_uwq59gd",
        "template_49u6zfv",
        form.current,
        "n-xNlt5lhGOU8pV_I"
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        form.current?.reset();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <section
    
      id="contact"
      className="relative overflow-hidden bg-[#F5F1E8] py-28"
    >
      
      {/* Floating Tech Icons */}

<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

  {/* React */}
  <FaReact
    className="
    absolute
    top-[8%]
    left-[6%]

    text-[#61DAFB]

    text-8xl

    opacity-60

    animate-float-rotate
    "
  />

  {/* TypeScript */}
  <SiTypescript
    className="
    absolute
    top-[15%]
    right-[8%]

    text-[#3178C6]

    text-7xl

    opacity-60

    animate-float-delay
    "
  />

  {/* JavaScript */}
  <SiJavascript
    className="
    absolute
    top-[60%]
    left-[4%]

    text-[#F7DF1E]

    text-7xl

    opacity-50

    animate-float
    "
  />

  {/* Tailwind */}
  <SiTailwindcss
    className="
    absolute
    top-[55%]
    right-[5%]

    text-[#38BDF8]

    text-8xl

    opacity-50

    animate-float-rotate
    "
  />

  {/* Node */}
  <FaNodeJs
    className="
    absolute
    bottom-[12%]
    left-[12%]

    text-[#68A063]

    text-8xl

    opacity-50

    animate-float-slow
    "
  />

  {/* MongoDB */}
  <SiMongodb
    className="
    absolute
    bottom-[10%]
    right-[18%]

    text-[#47A248]

    text-7xl

    opacity-50

    animate-float-delay
    "
  />

  {/* Python */}
  <FaPython
    className="
    absolute
    top-[35%]
    left-[45%]

    text-[#3776AB]

    text-8xl

    opacity-40

    animate-float
    "
  />

  {/* Figma */}
  <FaFigma
    className="
    absolute
    bottom-[35%]
    right-[35%]

    text-[#F24E1E]

    text-8xl

    opacity-40

    animate-float-rotate
    "
  />

</div>

      {/* Main */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Form */}

          <div
            className="
            bg-[#10243E]
            rounded-[40px]
            p-8
            md:p-10
            shadow-2xl
            "
          >
            <p className="uppercase tracking-[0.3em] text-white/40 text-sm mb-4">
              Contact
            </p>

            <h3 className="text-white text-4xl font-bold mb-8">
              Start a conversation
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="
                w-full
                bg-white/10
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
                text-white
                placeholder:text-white/40
                outline-none
                "
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="
                w-full
                bg-white/10
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
                text-white
                placeholder:text-white/40
                outline-none
                "
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                required
                className="
                w-full
                bg-white/10
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
                text-white
                placeholder:text-white/40
                outline-none
                resize-none
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
                bg-[#D7B98E]
                text-[#10243E]
                px-8
                py-4
                rounded-full
                font-semibold
                hover:scale-105
                transition
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-400">
                  Message sent successfully.
                </p>
              )}
            </form>
          </div>

          {/* Right Side */}

          <div>

            <p className="uppercase tracking-[0.3em] text-[#10243E]/50 mb-4">
              Get In Touch
            </p>

            <h2
              className="
              text-[#10243E]
              text-5xl
              md:text-7xl
              leading-none
              mb-8
              font-serif
              "
            >
              Let's build
              <br />
              something amazing.
            </h2>

            <p className="text-[#10243E]/70 text-lg leading-relaxed max-w-xl">
              Whether it's frontend development,
              UI/UX design, AI-powered products,
              digital forensics tools or creative
              collaborations, I'm always excited
              to work on meaningful ideas.
            </p>

            <div
              className="
              mt-12
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              "
            >
              <p className="text-[#10243E]/50 mb-2">
                Current Status
              </p>

              <h3 className="text-[#10243E] text-3xl font-bold">
                Open to internships,
                freelance projects &
                collaborations.
              </h3>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}