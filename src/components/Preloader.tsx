import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="
            fixed
            inset-0
            z-[99999]

            bg-[#08172D]

            flex
            items-center
            justify-center
          "
        >
          <div
            className="
              relative

              flex
              items-center
              justify-center

              w-full

              px-4

              text-center
            "
          >
            {/* Background Text */}

            <h1
              className="
                absolute

                text-[#F5F1E8]/10

                font-black

                text-[12vw]
                sm:text-5xl
                md:text-7xl
                lg:text-8xl

                tracking-tight

                text-center
              "
            >
              {/* Mobile */}
              <div className="sm:hidden leading-none">
                <div>BARATHI</div>
                <div>SANKAR</div>
              </div>

              {/* Desktop */}
              <div className="hidden sm:block whitespace-nowrap">
                BARATHI SANKAR
              </div>
            </h1>

            {/* Cream Fill */}

            <motion.h1
              initial={{
                clipPath: "inset(100% 0% 0% 0%)",
              }}
              animate={{
                clipPath: "inset(0% 0% 0% 0%)",
              }}
              transition={{
                duration: 1.6,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="
                text-[#F5F1E8]

                font-black

                text-[12vw]
                sm:text-5xl
                md:text-7xl
                lg:text-8xl

                tracking-tight

                text-center
              "
            >
              {/* Mobile */}
              <div className="sm:hidden leading-none">
                <div>BARATHI</div>
                <div>SANKAR</div>
              </div>

              {/* Desktop */}
              <div className="hidden sm:block whitespace-nowrap">
                BARATHI SANKAR
              </div>
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}