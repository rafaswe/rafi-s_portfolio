import AnimateCard from "@/components/common/AnimateCard";
import { Blogs } from "@/enum";
import Image from "next/image";
import Link from "next/link";
import ComponentLayout from "../Component.layout";

const BlogsContainer = () => {
  return (
    <ComponentLayout title="Blogs">
      <div className="grid grid-cols-2 gap-6">
        {Blogs?.map((blog, index) => (
          <AnimateCard key={index} className="col-span-2 group lg:col-span-1">
            <Link
              href=""
              className="bg-card  flex flex-col min-h-[385px]  lg:h-[500px] 2xl:h-[380px] rounded-lg shadow-lg">
              <Image
                src={blog?.imgUrl}
                alt="blogImage"
                width={1260}
                height={760}
                className="w-full h-52 object-cover rounded-lg"
              />
              <div className="p-3 flex flex-col gap-1">
                <p className="text-xs opacity-60">Date: {blog.date}</p>
                <p className="text-lg font-medium group-hover:text-active duration-300 transition-colors ease-in-out">
                  {blog.title}
                </p>
                <p className="text-sm">{blog.shortDes}</p>
              </div>
            </Link>
          </AnimateCard>
        ))}
      </div>
    </ComponentLayout>
  );
};

export default BlogsContainer;
