import { UserCircle2 } from "lucide-react";
import logo  from '../assets/eduAi-logo.png';
import { UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white dark:bg-gray-900 shadow px-6 py-4">
      <h1 className="flex justify-center items-center gap-4">
        <img src={logo} alt="EduAI" className="rounded-2xl w-14 h-14" />
        <h2 className="text-6xl font-semibold text-indigo-600">EDUAI</h2>
         {/* <span className="text-indigo-600">EDUAI</span> */}
      </h1>
      {/* <UserCircle2 className="text-gray-600 w-7 h-7" /> */}
       <UserButton afterSignOutUrl="/" />
    </nav>
  );
}
