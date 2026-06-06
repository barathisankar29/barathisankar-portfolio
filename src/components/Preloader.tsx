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
          <motion.div
            exit={{
              opacity: 0,
              scale: 0.95,
              y: -20,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
            relative

            text-5xl
            md:text-8xl

            font-black

            tracking-tight
            "
          >
            {/* Empty Text */}

            <div className="text-[#F5F1E8]/10">
              BARATHI SANKAR
            </div>

            {/* Fill Text */}

            <motion.div
              className="
              absolute
              top-0
              left-0

              text-[#F5F1E8]

              overflow-hidden
              whitespace-nowrap
              "
              initial={{
                clipPath:
                  "inset(100% 0 0 0)",
              }}
              animate={{
                clipPath:
                  "inset(0% 0 0 0)",
              }}
              transition={{
                duration: 1.6,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              BARATHI SANKAR
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}