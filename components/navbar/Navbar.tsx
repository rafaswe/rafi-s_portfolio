"use client";
import { PageInfo } from "@/enum";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const dropdownRef = useRef(null);

  const isCurrentPage = (currentPage: string) => {
    return currentPage === pathName;
  };

  const handleClickOutside = () => {
    setIsMenuOpen(false);
  };

  useOnClickOutside(dropdownRef, handleClickOutside);

  // Framer Motion Variants
  const menuVariants: Variants = {
    open: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.7,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      opacity: 0,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <div
      className="relative ml-auto md:ml-0 w-full flex justify-end bg-card rounded-xl rounded-t-none md:rounded-tl-none md:rounded-tr-xl md:rounded-br-none"
      ref={dropdownRef}>
      {/* For small screens */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="md:hidden py-2 px-4 text-white"
        aria-label="Toggle Menu">
        <Image
          src={`/images/${isMenuOpen ? "cross" : "navIcon"}.svg`}
          alt="icon"
          width="16"
          height="16"
        />
      </motion.button>

      <motion.div
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        className="absolute top-full left-0 right-0 shadow-lg rounded-xl bg-card z-10">
        <motion.div
          className="flex flex-col items-center gap-1"
          style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}>
          {PageInfo.map((singlePage, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href={singlePage.pageLink}
                className={`px-4 py-2 text-sm md:text-base ${
                  isCurrentPage(singlePage.pageLink)
                    ? "text-active"
                    : "text-white"
                } transition-colors duration-300`}
                prefetch
                onClick={() => setIsMenuOpen(false)}>
                {singlePage.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* For bigger screens */}
      <div className="hidden md:flex w-full">
        {PageInfo.map((singlePage, index) => (
          <Link
            key={index}
            href={singlePage.pageLink}
            className={`px-1.5 md:p-4 md:text-base text-sm ${
              isCurrentPage(singlePage.pageLink) ? "text-active" : "text-white"
            } transition-colors duration-300`}
            prefetch>
            {singlePage.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
