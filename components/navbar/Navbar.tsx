"use client";
import { PageInfo } from "@/enum";
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

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = () => {
    setIsMenuOpen(false);
  };

  useOnClickOutside(dropdownRef, handleClickOutside);

  return (
    <div
      className="relative ml-auto md:ml-0 w-full flex justify-end bg-card rounded-xl rounded-t-none md:rounded-tl-none md:rounded-tr-xl md:rounded-br-none "
      ref={dropdownRef}>
      {/* For small screens */}
      <button
        onClick={toggleMenu}
        className="md:hidden py-2 px-4 text-white"
        aria-label="Toggle Menu">
        <Image
          src={`/images/${isMenuOpen ? "cross" : "navIcon"}.svg`}
          alt="icon"
          width="16"
          height="16"
        />
      </button>

      <div
        className={`shadow-lg rounded-xl slide-menu ${
          isMenuOpen ? "open" : ""
        }`}>
        <div className="flex flex-col items-center">
          {PageInfo.map((singlePage, index) => (
            <Link
              key={index}
              href={singlePage.pageLink}
              className={`px-4 py-2 text-sm md:text-base ${
                isCurrentPage(singlePage.pageLink)
                  ? "text-active"
                  : "text-white"
              } transition-colors duration-300`}
              prefetch
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {singlePage.name}
            </Link>
          ))}
        </div>
      </div>

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
