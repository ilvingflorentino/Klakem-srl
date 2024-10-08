import { UserButton } from "@clerk/nextjs";
import NavbarDashboard from "./dashboard/components/NavbarDashboard/NavbarDashboard";
import Sidebar from "./dashboard/components/Sidebar/Sidebar";
//!Layaout Dashboard
export default function layoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-full">
      <div className="hidden h-full xl:block w-80 xl:fixed">
        <Sidebar></Sidebar>
      </div>
      <div className="w-full h-full xl:ml-80">
        <NavbarDashboard></NavbarDashboard>
        <div className="p-6 h-max">{children}</div>
      </div>
    </div>
  );
}
