import { ReactNode } from "react";

const ComponentLayout = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-9 md:pt-16 lg:pt-0">
      <div className="relative w-fit pr-5">
        <p className="text-4xl font-semibold">{title}</p>
        <div className="line-animation absolute -bottom-4 left-0 h-[3px] bg-active rounded-lg"></div>
      </div>
      {children}
    </div>
  );
};

export default ComponentLayout;
