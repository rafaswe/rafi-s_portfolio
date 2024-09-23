import { AboutMeInfo } from "@/enum";
import Image from "next/image";
import ComponentLayout from "../Component.layout";

const AboutContainer = () => {
  const { description, WhatIamDoingList } = AboutMeInfo;
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
      </div>
    </ComponentLayout>
  );
};

export default AboutContainer;
