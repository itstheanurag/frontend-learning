"use client";
import { AnimatePresence, motion } from "framer-motion";

const ballVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: [1, 1.2, 1],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 1.2,
      ease: "easeInOut" as const,
      repeat: Infinity,
    },
  },
  tap: {
    scale: 0.8,
    backgroundColor: "#f87171",
  },
  exit: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.3,
      ease: "linear" as const,
      repeat: Infinity,
    },
  },
};

const Ball = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <AnimatePresence>
        <motion.div
          className="relative bg-red-400 h-[200px] w-[200px] rounded-full select-none outline-none focus:outline-none"
          variants={ballVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          exit="exit"
          // exit only works if this is wrapped inside <AnimatePresence> and gets removed from the DOM
        />
      </AnimatePresence>
    </div>
  );
};

export default Ball;
