import { ReactNode } from "react";

const ComponentLayout = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-12">
      <div className="relative w-fit pr-5">
        <p className="text-4xl font-semibold">{title}</p>
        <div className="line-animation absolute bottom-0 left-0 h-[2px] bg-white rounded-lg"></div>
      </div>
      {children}
    </div>
  );
};

export default ComponentLayout;
