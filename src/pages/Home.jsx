import React, { useEffect, useState } from "react";
import { useUser, SignedOut } from "@clerk/clerk-react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import heroImg from "../assets/hero-ai.jpg";
import aiIcon from "../assets/ai-icon.svg"; 
import analyticsIcon from "../assets/analytics.svg";
import communityIcon from "../assets/community.svg";
import ParticlesBackground from "../components/ParticlesBackground";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import '../styles/global.css';
 

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Courses", path: "/courses" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[80%] bg-white/60 backdrop-blur-md border border-white/40 shadow-md rounded-2xl px-6 py-3 flex justify-between items-center"
      >
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-indigo-600">
          EDU<span className="text-gray-800">AI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium transition ${
                location.pathname === item.path
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-700 hover:text-indigo-500"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Auth Buttons */}
          <div className="flex gap-3">
            <Link to="/sign-in">
              <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition">
                Login
              </button>
            </Link>
            <Link to="/sign-up">
              <button className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition">
                Sign Up
              </button>
            </Link>
          </div>
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-[3px] bg-gray-700 rounded"></span>
          <span className="w-6 h-[3px] bg-gray-700 rounded"></span>
          <span className="w-6 h-[3px] bg-gray-700 rounded"></span>
        </button>
      </motion.nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-lg shadow-lg rounded-xl p-6 flex flex-col gap-4 z-40"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium ${
                location.pathname === item.path
                  ? "text-indigo-600"
                  : "text-gray-700 hover:text-indigo-500"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="flex flex-col gap-3 mt-3">
            <Link to="/sign-in" onClick={() => setMenuOpen(false)}>
              <button className="w-full px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition">
                Login
              </button>
            </Link>

            <Link to="/sign-up" onClick={() => setMenuOpen(false)}>
              <button className="w-full px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition">
                Sign Up
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
};

const Home = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  // 🔁 Auto redirect if already signed in
  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-6 text-center">
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <ParticlesBackground />
      <Navbar />
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mt-32 mx-2 w-full flex flex-col md:flex-row items-center justify-between gap-24 px-6 py-4"
      >
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          {/* title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <span className="text-indigo-600">EDUAI</span> — Revolutionizing
              the Way You Learn 🚀
            </motion.h1>
          </h1>

          {/* subtitles */}
          <p className="text-gray-700 text-xl max-w-2xl mb-8">
            An intelligent learning platform that adapts to{" "}
            <span className="font-semibold">you</span>. Harness the power of AI
            to study smarter, master faster, and reach your goals with ease.
          </p>
          <p className="text-blue-700 font-bold text-2xl mt-2">
            <Typewriter
              words={[
                "Master faster with AI.",
                "Learn smart, not hard.",
                "Track your progress with EDUAI.",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </p>

          {/* Show buttons only when user is NOT signed in */}
          <SignedOut>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
              <Link
                to="/sign-in"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium"
              >
                Sign Up
              </Link>
            </div>
          </SignedOut>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={heroImg}
            alt="AI Learning Illustration"
            className="w-full max-w-md mx-auto drop-shadow-lg"
          />
        </div>
      </motion.div>

      {/* About Section */}
      {/* Why Choose EDUAI Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="z-10 mt-10 w-full max-w-6xl"
      >
        <h2 className="text-4xl font-bold text-gray-900 mt-10 text-center">
          Why Choose <span className="text-indigo-600">EDUAI?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-indigo-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              🤖 Personalized Learning
            </h3>
            <p className="text-gray-700 text-xl">
              Our AI analyzes your strengths, weaknesses, and study habits to
              create a personalized learning experience tailored just for you.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-indigo-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              📊 Smart Progress Tracking
            </h3>
            <p className="text-gray-700 text-xl">
              Get real-time insights into your progress. Track growth, identify
              gaps, and celebrate your milestones as you learn.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-indigo-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              🚀 Adaptive Recommendations
            </h3>
            <p className="text-gray-700 text-xl">
              EDUAI dynamically recommends lessons, quizzes, and study material
              based on your current performance and interests.
            </p>
          </div>
        </div>
      </motion.div>

      {/* features */}
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
      >
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-10 text-indigo-950">
            What Makes EDUAI Powerful?
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
            <div className="p-6 bg-indigo-600 rounded-2xl shadow hover:shadow-xl transition">
              <img src={aiIcon} alt="AI Tutor" className="w-16 mx-auto mb-4 filter-white" /> 

              <h3 className="text-xl font-semibold mb-2 text-purple-300">AI-Powered Tutor</h3>
              <p className="text-gray-200">
                Personalized learning powered by smart algorithms that adapt to
                you.
              </p>
            </div>
            <div className="p-6 bg-indigo-600  rounded-2xl shadow hover:shadow-xl transition">
              <img
                src={analyticsIcon}
                alt="Analytics"
                className="w-16 mx-auto mb-4 filter-white"
              />
              <h3 className="text-xl font-semibold mb-2 text-purple-300">
                Smart Progress Tracking
              </h3>
              <p className="text-gray-200 ">
                Visualize your growth and learning milestones with detailed
                analytics.
              </p>
            </div>
            <div className="p-6 bg-indigo-600   rounded-2xl shadow hover:shadow-xl transition">
              <img
                src={communityIcon}
                alt="Community"
                className="w-16 mx-auto mb-4 filter-white"
              />
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Learner Community</h3>
              <p className="text-gray-200  ">
                Collaborate, ask questions, and grow with peers worldwide.
              </p>
            </div>
          </div>
        </section>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
      >
        <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 text-white py-20 px-6 text-center overflow-hidden border-0 rounded-2xl">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white,transparent_60%)]"></div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
              Join the <span className="text-yellow-300">EDUAI</span> Community
            </h2>
            <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed">
              Unlock your learning potential with AI-powered tools and courses
              built to help you grow faster, smarter, and better. 🚀
            </p>
            <div className="flex justify-center">
              <a
                href="/sign-up"
                className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300"
              >
                Get Started for Free
              </a>
            </div>
          </div>

          {/* Decorative glowing orbs */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-indigo-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        </section>
      </motion.div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
