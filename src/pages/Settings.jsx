import React, { useState } from "react";
import { FaUser, FaBell, FaLock, FaMoon, FaSun } from "react-icons/fa";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-700 text-gray-100" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div
        className={`shadow-lg rounded-2xl w-full max-w-3xl p-8 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Header */}
        <h2 className="text-2xl font-bold mb-6 border-b pb-3">
          ⚙️ Settings
        </h2>

        {/* Account Settings */}
        <section className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <FaUser className="text-blue-500 text-xl" />
            <h3 className="text-lg font-semibold">Account</h3>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Shivani Prajapati"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <FaBell className="text-yellow-500 text-xl" />
            <h3 className="text-lg font-semibold">Notifications</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" defaultChecked />
              Email Alerts for new courses
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" />
              Progress reminders
            </label>
          </div>
        </section>

        {/* Privacy */}
        <section className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <FaLock className="text-green-500 text-xl" />
            <h3 className="text-lg font-semibold">Privacy</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" />
              Make profile public
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" defaultChecked />
              Allow AI suggestions
            </label>
          </div>
        </section>

        {/* Theme Toggle */}
        <section className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {darkMode ? (
                <FaMoon className="text-indigo-400 text-xl" />
              ) : (
                <FaSun className="text-yellow-400 text-xl" />
              )}
              <h3 className="text-lg font-semibold">Dark Mode</h3>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-14 h-7 flex items-center rounded-full p-1 transition-all ${
                darkMode ? "bg-indigo-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all ${
                  darkMode ? "translate-x-7" : ""
                }`}
              ></div>
            </button>
          </div>
        </section>

        {/* Save Button */}
        <div className="text-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
