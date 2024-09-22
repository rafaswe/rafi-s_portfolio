"use client";
import { PageInfo } from "@/enum";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const isCurrentPage = (currentPage: string) => {
    return currentPage === pathName;
  };
  return (
    <div className="w-full flex justify-end bg-card  rounded-xl rounded-tl-none rounded-br-none">
      <div className="w-fit flex p-3 ">
        {PageInfo.map((singlePage, index) => (
          <Link
            key={index}
            href={singlePage.pageLink}
            className={`px-4 ${
              isCurrentPage(singlePage.pageLink) ? "text-active " : "text-white"
            } transition-colors  duration-300`}
            prefetch>
            {singlePage.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
