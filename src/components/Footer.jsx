import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
      className="mt-10 w-full bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-100 border-t border-indigo-100 pt-8 px-6 text-center"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <h2 className="text-4xl font-bold text-indigo-600">
          EDU<span className="text-gray-800">AI</span>
        </h2>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-gray-700 text-2xl">
          <a
            href="https://github.com/Shivin1016"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/shivani-p-959v1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shivaniprajapati11jan@email.com"
            className="hover:text-indigo-600 transition transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://discord.com/shiv_67507_06487"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition transform hover:scale-110"
          >
            <FaDiscord />
          </a>
        </div>

         
      </div>
      {/* Copyright */}
        <p className="text-gray-600 text-lg">
          © {new Date().getFullYear()} EDUAI. All rights reserved.
        </p>
    </motion.footer>
  );
};

export default Footer;
