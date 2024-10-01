"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
const AnimateCard = ({
  variants,
  children,
  className = "",
}: {
  variants?: Variants;
  children: ReactNode;
  className?: string;
}) => {
  const linkVariants = {
    initial: {
      scale: 0.5,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      variants={variants ?? linkVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={className}>
      {children}
    </motion.div>
  );
};

export default AnimateCard;
