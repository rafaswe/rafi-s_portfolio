"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
const AnimateCard = ({
  variants,
  children,
}: {
  variants: Variants;
  children: ReactNode;
}) => {
  return (
    <motion.div variants={variants} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
};

export default AnimateCard;
