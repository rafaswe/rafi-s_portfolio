"use client";
import AnimateCard from "@/components/common/AnimateCard";
import { ProjectsListProps } from "@/components/constant/type";
import { Genre_List, Portfolio } from "@/enum";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ComponentLayout from "../Component.layout";

const PortFolioContainer = () => {
  const { menuList, projectsList } = Portfolio;
  const { ALL, GRAPHICS, UI_UX, OTHERS } = Genre_List;
  const [selectedGenre, setSelectedGenre] = useState(menuList[0]);
  const [selectedProjectList, setSelectedProjectList] =
    useState<ProjectsListProps[]>(projectsList);
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

  useEffect(() => {
    switch (selectedGenre) {
      case ALL:
        setSelectedProjectList([...projectsList]);
        break;
      case GRAPHICS:
        setSelectedProjectList(
          projectsList.filter((project) => project.projectGenre === GRAPHICS)
        );
        break;
      case UI_UX:
        setSelectedProjectList(
          projectsList.filter((project) => project.projectGenre === UI_UX)
        );
        break;
      case OTHERS:
        setSelectedProjectList(
          projectsList.filter((project) => project.projectGenre === OTHERS)
        );
        break;
      default:
        setSelectedProjectList([...projectsList]);
    }
  }, [selectedGenre, projectsList]);

  return (
    <ComponentLayout title="Portfolio">
      <div className="flex flex-col gap-4 text-sm sm:text-base">
        {/* Menu List  */}
        <div className="flex items-center gap-2 sm:gap-5">
          {menuList?.map((singleMenu, index) => (
            <button
              key={index}
              className={`transition-transform duration-300 ease-in-out ${
                selectedGenre == singleMenu
                  ? "text-active font-semibold"
                  : "font-normal"
              }`}
              onClick={() => setSelectedGenre(singleMenu)}>
              {singleMenu}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 ">
          {selectedProjectList?.map((project, index) => (
            <AnimateCard key={index} variants={linkVariants}>
              <Link
                className="flex flex-col gap-2 group"
                href={project.link}
                target="_blank"
                rel="noreferrer">
                <div className="p-3 bg-card shadow-2xl rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-transparent border-2 border-transparent group-hover:border-active transition-all duration-1000 ease-in-out rounded-lg" />
                  <Image
                    src={project.imgUrl}
                    alt="project"
                    width={160}
                    height={160}
                    className="w-full h-44 rounded-lg relative z-0"
                  />
                </div>
                <div className="italic px-1 flex flex-col justify-start">
                  <p className="font-semibold ">{project.projectName}</p>
                  <p className="text-sm text-start">{project.projectGenre}</p>
                </div>
              </Link>
            </AnimateCard>
          ))}
        </div>
      </div>
    </ComponentLayout>
  );
};

export default PortFolioContainer;
