import React from "react";
import { SignUp } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 relative overflow-hidden">
      {/* Decorative blur shapes */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-white/10 rounded-full blur-3xl" />

      {/* Auth Card */}
      <div className="relative z-10 bg-white/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-[90%] max-w-md text-center border border-white/30">
        <h1 className="text-4xl font-bold text-white mb-3">Join EDUAI 🚀</h1>
        <p className="text-white/80 mb-8">
          Create your personalized AI-powered learning account
        </p>

        {/* Clerk sign-up form */}
        <SignUp
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
          path="/sign-up"
          afterSignUpUrl="/dashboard"
        />

        <p className="text-white/80 mt-6">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-white font-semibold underline hover:text-blue-200">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
