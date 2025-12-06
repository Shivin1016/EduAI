import React from "react";
import { SignIn } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-white/10 rounded-full blur-3xl" />

      {/* Auth Card */}
      <div className="relative z-10 bg-white/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-[90%] max-w-md text-center border border-white/30">
        <h1 className="text-4xl font-bold text-white mb-3">Welcome Back 👋</h1>
        <p className="text-white/80 mb-8">Log in to continue your EDUAI journey</p>

        {/* Clerk sign-in form */}
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition",
              card: "bg-transparent shadow-none",
            },
            variables: {
              colorPrimary: "#2563eb",
            },
          }}
          routing="path"
          path="/sign-in"
          afterSignInUrl="/dashboard"
        />

        <p className="text-white/80 mt-6">
          Don’t have an account?{" "}
          <Link to="/sign-up" className="text-white font-semibold underline hover:text-blue-200">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
