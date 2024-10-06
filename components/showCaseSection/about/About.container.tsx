"use client";
import { AboutMeInfo } from "@/enum";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import ComponentLayout from "../Component.layout";

const AboutContainer = () => {
  const {
    description,
    whatIamDoingList: WhatIamDoingList,
    testimonialsList: TestimonialsList,
    clientsList: ClientsList,
  } = AboutMeInfo;

  // Tooltip state
  const [tooltip, setTooltip] = useState({
    visible: false,
    title: "",
    position: { bottom: 0, right: 0 },
  });
  const tooltipRef = useRef(null);

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLAnchorElement>,
    title: string
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      title: title,
      position: {
        bottom: rect.height + 10, // Position above the icon
        right: rect.width / 2 - 50, // Centered above the icon (adjust the -50 value based on tooltip width)
      },
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  // Close tooltip when clicking outside
  useOnClickOutside(tooltipRef, () =>
    setTooltip({ ...tooltip, visible: false })
  );

  return (
    <ComponentLayout title={"About me"}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-justify">{description.paragraph1}</p>
          <p className="text-justify">{description.paragraph2}</p>
        </div>

        {/* What I am doing*/}
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">{`What I'm Doing`}</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {WhatIamDoingList.map((singleWork, index) => (
              <div
                key={index}
                className="col-span-2 lg:col-span-1 min-h-30 bg-card p-4 rounded-xl shadow-lg flex gap-4 items-start">
                <Image
                  src={singleWork.iconUrl}
                  alt="Icon"
                  width={24}
                  height={24}
                />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">{singleWork.title}</p>
                  <p className="text-sm">{singleWork.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial  */}
        <div className="flex flex-col gap-10">
          <p className="text-2xl font-semibold">Testimonials</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            {TestimonialsList.map((singleTestimonial, index) => (
              <div
                key={index}
                className="col-span-2 lg:col-span-1 min-h-30 bg-card p-4 rounded-xl shadow-lg relative flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <div className="p-3 bg-quaternary rounded-lg -mt-9">
                    <Image
                      src={singleTestimonial.iconUrl}
                      alt="Icon"
                      width={34}
                      height={34}
                    />
                  </div>
                  <p className="font-semibold">{singleTestimonial.name}</p>
                </div>
                <p>{singleTestimonial.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clients  */}
        <div className="flex flex-col gap-4 relative">
          <p className="text-2xl font-semibold">Clients</p>
          <div className="flex gap-4 lg:gap-6 flex-wrap items-center">
            {ClientsList.map((singleClient, index) => (
              <Link
                href={singleClient.link}
                key={index}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={(event) =>
                  handleMouseEnter(event, singleClient.title)
                }
                onMouseLeave={handleMouseLeave}
                className="relative">
                <Image
                  src={singleClient.iconUrl}
                  alt="Company Logo"
                  width={160}
                  height={160}
                  className="w-20 lg:w-28 rounded-full border-2 border-transparent transition-border transition-transform transform-gpu duration-300 hover:scale-105 ease-in-out hover:border-active h-20 lg:h-28"
                />
                {/* Tooltip */}
                {tooltip.visible && tooltip.title === singleClient.title && (
                  <motion.div
                    ref={tooltipRef}
                    className="absolute text-center text-xs bg-primary shadow-active shadow-inner text-white p-2 rounded-md"
                    style={{
                      bottom: tooltip.position.bottom,
                      right: tooltip.position.right,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.2 } }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}>
                    {tooltip.title}
                  </motion.div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
};

export default AboutContainer;
