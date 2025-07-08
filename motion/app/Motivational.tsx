import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";

const SpanContent = [
  "Make shit happen",
  "Live like there's no tomorrow",
  "Conquer ourselves",
  "Forget about forgiving",
  "Happen to the universe",
  "Burn the damn rulebook",
  "Create chaos with purpose",
  "Be louder than your excuses",
  "Slay your own demons",
  "Turn pain into power",
  "Rise. Break. Repeat.",
  "Dreams don't work unless you do",
  "Bend reality to your will",
  "Break limits, not promises",
  "Fail gloriously, rise louder",
  "Disrupt, destroy, rebuild",
  "Own your mess",
  "Punch fear in the face",
  "Bleed passion, not doubt",
  "Do epic shit",
];

const Motivational = () => {
  const [currentContentIndex, setCurrentContentIndex] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentContentIndex((prev) => (prev + 1) % SpanContent.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const currentText = SpanContent[currentContentIndex].split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.04, staggerDirection: -1 },
    },
  };

  const char = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentContentIndex}
          variants={container}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="font-bold text-neutral-600 px-2 flex"
        >
          {currentText.map((charItem, idx) => (
            <motion.span key={idx} variants={char}>
              {charItem === " " ? "\u00A0" : charItem}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default Motivational;
