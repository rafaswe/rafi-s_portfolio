import Carousel from "@/components/common/Carousel";
import { ToolsType } from "@/components/constant/type";
import { Resume } from "@/enum";
import Image from "next/image";
import ComponentLayout from "../Component.layout";

const ResumeContainer = () => {
  const { education, experinces, skills } = Resume;
  return (
    <ComponentLayout title="Resume">
      {/* Education*/}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <div className="flex">
            <div className="w-4 sm:w-6 lg:w-10 h-full"></div>
            <div className="flex border-l h-full flex-1">
              <div className=" -ml-[18px] sm:-ml-5">
                <div className="p-1.5 sm:p-2 shadow-inner shadow-active rounded-2xl bg-tertiary w-fit">
                  <Image
                    src={education.icon}
                    alt="Education"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="w-3 sm:w-4 lg:w-8"></div>
              <p className="text-2xl font-Medium  pb-6">{education.title}</p>
            </div>
          </div>
          {education.infoList.map((info, index) => {
            const { degreeTitle, session, institution, result } = info;
            return (
              <div className="flex" key={index}>
                <div className="w-4 sm:w-6 lg:w-10 h-full"></div>
                <div
                  className={`flex  h-full flex-1 ${
                    education.infoList.length - 1 === index
                      ? "border-l border-transparent"
                      : "border-l"
                  }`}>
                  <div className=" -ml-2">
                    <div className="p-2 shadow-inner shadow-active rounded-2xl bg-tertiary w-fit"></div>
                  </div>
                  <div className="w-8 lg:w-12"></div>
                  <div className="pb-6 flex flex-col gap-2">
                    <div>
                      <p className="md:text-lg font-Medium leading-none">
                        {degreeTitle}
                      </p>
                      <p className="md:text-sm text-active font-medium text-xs">
                        {session}
                      </p>
                    </div>
                    <div className="text-sm md:text-base">
                      <p className="italic">Result : {result}</p>
                      <p className="italic">{institution}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <div className="w-4 sm:w-6 lg:w-10 h-full"></div>
            <div className="flex border-l h-full flex-1">
              <div className=" -ml-[18px] sm:-ml-5">
                <div className="p-1.5 sm:p-2 shadow-inner shadow-active rounded-2xl bg-tertiary w-fit">
                  <Image
                    src={experinces.icon}
                    alt="Education"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="w-3 sm:w-4 lg:w-8"></div>
              <p className="text-2xl font-Medium  pb-6">{experinces.title}</p>
            </div>
          </div>
          {experinces.infoList.map((info, index) => {
            const { institution, position, desc, workingPeriod } = info;
            return (
              <div className="flex" key={index}>
                <div className="w-4 sm:w-6 lg:w-10 h-full"></div>
                <div
                  className={`flex  h-full flex-1 ${
                    experinces.infoList.length - 1 === index
                      ? "border-l border-transparent"
                      : "border-l"
                  }`}>
                  <div className=" -ml-2">
                    <div className="p-2 shadow-inner shadow-active rounded-2xl bg-tertiary w-fit"></div>
                  </div>
                  <div className="w-8 lg:w-12"></div>
                  <div className="pb-6 flex w-full flex-col gap-2">
                    <div className="flex sm:flex-row flex-col justify-between">
                      <div>
                        <p className="md:text-lg font-Medium leading-none">
                          {institution}
                        </p>
                        <p className="md:text-sm text-active font-medium text-xs">
                          {position}
                        </p>
                      </div>
                      <p className="md:text-sm text-active font-medium text-xs">
                        {workingPeriod}
                      </p>
                    </div>
                    <div className="text-sm md:text-base">
                      <p className="italic">{desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-center text-2xl leading-none font-bold">
            Skills
          </h1>
          <div>
            <Carousel
              autoPlay={true}
              interval={3000}
              className="shadow-inner rounded-2xl shadow-slate-700"
              containerClassName=" md:h-72">
              {skills.map((skill, index) => {
                const { title, tools } = skill;
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center gap-8 w-full h-full">
                    <div className="relative">
                      <p className="text-lg font-semibold text-active">
                        {title}
                      </p>
                      <div className="line-animation absolute -bottom-2 left-0 h-[3px] bg-active rounded-lg"></div>
                    </div>
                    <ToolsSegment tools={tools} />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
};

const ToolsSegment = ({ tools }: { tools: ToolsType }) => {
  return (
    <div className="flex items-center flex-wrap gap-2 sm:gap-10 justify-center">
      {tools.map((tool, toolIndex) => {
        const { icon, name } = tool;
        return (
          <div
            key={toolIndex}
            className="flex flex-col items-center justify-center gap-1">
            <Image
              src={icon}
              alt={name}
              width={100}
              height={100}
              className="xl:w-24 sm:w-6 sm:h-6 w-4 h-4 xl:h-24"
            />
            <p className="md:block hidden text-center pl-0.5">{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ResumeContainer;
