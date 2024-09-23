import { SideBarFooterIcons, SideBarPersonalInfo } from "@/enum";
import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  const {
    portFolioImage,
    name,
    profession,
    email,
    phoneNumber,
    birthDay,
    location,
  } = SideBarPersonalInfo;

  const informationArray = [
    {
      imgURL: "/images/email.svg",
      title: "Email",
      value: email,
      link: `mailto:${email}`,
    },
    {
      imgURL: "/images/phone.svg",
      title: "Number",
      value: phoneNumber,
      link: `tel:${phoneNumber}`,
    },
    {
      imgURL: "/images/calendar.svg",
      title: "Birth Date",
      value: `${birthDay.month} ${birthDay.day}, ${birthDay.year}`,
      link: `https://outlook.live.com/calendar/0/deeplink/compose?startdt=${birthDay.year}-${birthDay.monthValue}-${birthDay.day}`,
    },
    {
      imgURL: "/images/location.svg",
      title: "Located",
      value: location.locationTitle,
      link: location.mapLink,
    },
  ];

  return (
    <div className="p-4 xl:p-8 bg-secondary flex flex-col justify-between h-full rounded-xl shadow-lg">
      <div className=" flex-1">
        <div className="flex py-4 md:pb-6 border-b   flex-col items-center justify-center gap-4 md:gap-6">
          {/* Avatar section  */}
          <Image
            src={portFolioImage}
            alt=""
            width={170}
            height={170}
            className="rounded-3xl"
          />
          <div className="flex flex-col items-center gap-1 md:gap-3">
            <p className="text-xl font-bold">{name}</p>
            <p className="bg-quaternary px-4 pt-1 pb-1.5 text-sm rounded-lg">
              {profession}
            </p>
          </div>
        </div>

        <div className="flex py-4 lg:pb-0 lg:pt-10 flex-col gap-4 md:gap-6">
          {informationArray.map((singleInfo, index) => (
            <Link
              href={singleInfo.link}
              key={index}
              target="_blank"
              className="flex items-start gap-2">
              <Image
                src={singleInfo.imgURL}
                alt={singleInfo.title}
                width={18}
                height={18}
                className="pt-0.5"
              />
              <div className="break-all">
                <p className="text-sm ">{singleInfo.title}</p>
                <p className="font-medium">{singleInfo.value}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-2.5 border-t pt-5 mt-3 justify-center items-center">
        {SideBarFooterIcons.map((singleInfo, index) => (
          <div key={index}>
            <Link href={singleInfo.link}>
              <Image
                src={singleInfo.iconURL}
                alt="icon"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
