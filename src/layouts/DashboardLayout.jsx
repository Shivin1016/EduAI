import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/global.css";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-full flex bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 ">
      <SignedIn>
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 z-10">
            <Outlet/>
          </main>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
