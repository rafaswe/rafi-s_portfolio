import Navbar from "@/components/navbar/Navbar";
import SideBar from "@/components/sidebar/SideBar.container";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahmudul Hasan Rafi",
  description: "Mahm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-2 lg:px-0 lg:w-11/12 relative mx-auto min-h-[100vh] flex md:flex-row flex-col gap-2 lg:gap-6   py-10 ">
        <div className="xl:w-1/4 sticky top-2">
          <SideBar />
        </div>

        <div className="lg:p-8 rounded-xl shadow-lg bg-secondary flex-1 relative">
          <div className="absolute top-0 right-0">
            <Navbar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
