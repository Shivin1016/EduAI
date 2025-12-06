import React from "react";
import { FaUserGraduate, FaBookOpen, FaClock } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
          {/* Profile Image */}
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />

          {/* Profile Info */}
          <div className="mt-6 md:mt-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">Shivani Prajapati</h2>
            <p className="text-blue-600 font-medium">Student @ EDUAI</p>
            <p className="text-gray-500 mt-2">
              Passionate learner exploring AI-driven education and coding.
            </p>

            {/* Buttons */}
            <div className="mt-4 flex justify-center md:justify-start gap-3">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Edit Profile
              </button>
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                Settings
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <FaBookOpen className="text-blue-500 text-2xl mb-2" />
            <h3 className="text-lg font-semibold">12</h3>
            <p className="text-gray-500 text-sm">Courses Enrolled</p>
          </div>

          <div className="flex flex-col items-center">
            <FaUserGraduate className="text-green-500 text-2xl mb-2" />
            <h3 className="text-lg font-semibold">8</h3>
            <p className="text-gray-500 text-sm">Courses Completed</p>
          </div>

          <div className="flex flex-col items-center">
            <FaClock className="text-yellow-500 text-2xl mb-2" />
            <h3 className="text-lg font-semibold">42h</h3>
            <p className="text-gray-500 text-sm">Total Learning Time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
