"use client";

import { Separator } from "@/components/ui/separator";
import { useAuth } from "@clerk/nextjs";
import { dataGeneralSidebar } from "./SidebarRoutes.data";
import SidebarItem from "./SidebarItem/SidebarItem";

export default function SidebarRoutes() {
  const { userId } = useAuth();

  return (
    <>
      <>
        <div className="flex flex-col justify-between h-full">
          <div>
            <Separator></Separator>
            <div className="p-2 md:p-6">
              <p className="mb-2 text-slate-500">GENERAL</p>
              {dataGeneralSidebar.map((item) => (
                <SidebarItem key={item.label} item={item}></SidebarItem>
              ))}
            </div>
          </div>
        </div>
        <Separator></Separator>
      </>
      <footer className="p-3 mt-3 text-center"> 2024 Prueba</footer>
    </>
  );
}
