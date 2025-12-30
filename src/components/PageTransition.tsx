import { motion, Variants } from "framer-motion";

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    x: 120,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    x: -120,
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};


const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
