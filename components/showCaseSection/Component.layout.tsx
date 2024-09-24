import { cn } from "@/function/cn";
import { ReactNode } from "react";

const ComponentLayout = ({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-9  md:pt-16 lg:pt-0 ", className)}>
      <div className="relative w-fit pr-5">
        <p className="text-4xl font-semibold">{title}</p>
        <div className="line-animation absolute -bottom-4 left-0 h-[3px] bg-active rounded-lg"></div>
      </div>
      {children}
    </div>
  );
};

export default ComponentLayout;
