import { AboutMeInfo } from "@/enum";
import Image from "next/image";
import ComponentLayout from "../Component.layout";

const AboutContainer = () => {
  const { description, WhatIamDoingList, TestimonialsList } = AboutMeInfo;
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
      </div>
    </ComponentLayout>
  );
};

export default AboutContainer;
