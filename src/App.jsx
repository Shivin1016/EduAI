import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";

import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import { useState } from "react";  

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Home />} />
        <Route
          path="/sign-in/*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-animated-gradient">
           
              <div className="p-8 rounded-2xl bg-white/30 backdrop-blur-lg shadow-2xl border border-white/40">
                <SignIn
                  routing="path"
                  path="/sign-in"
                  afterSignInUrl="/dashboard"
                  appearance={{
                    elements: {
                      card: "shadow-none bg-transparent",
                      formButtonPrimary:
                        "bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition",
                      headerTitle: "text-gray-900 text-2xl font-semibold",
                      headerSubtitle: "text-gray-600 text-base",
                      footerActionText: "text-gray-700",
                      footerActionLink: "text-blue-600 hover:underline",
                    },
                  }}
                />
              </div>
            </div>
          }
        />

        <Route
          path="/sign-up/*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-animated-gradient">
            
              <div className="p-8 rounded-2xl bg-white/30 backdrop-blur-lg shadow-2xl border border-white/40">
                <SignUp
                  routing="path"
                  path="/sign-up"
                  afterSignUpUrl="/dashboard"
                  appearance={{
                    elements: {
                      card: "shadow-none bg-transparent",
                      formButtonPrimary:
                        "bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition",
                      headerTitle: "text-gray-900 text-2xl font-semibold",
                      headerSubtitle: "text-gray-600 text-base",
                      footerActionText: "text-gray-700",
                      footerActionLink: "text-blue-600 hover:underline",
                    },
                  }}
                />
              </div>
            </div>
          }
        />

        {/* Protected routes */}
        <Route
          element={
            <>
              <SignedIn>
                <DashboardLayout />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
