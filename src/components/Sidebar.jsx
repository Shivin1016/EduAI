import { LayoutDashboard, Home, Book, Settings, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Courses", icon: Book, path: "/courses" },
  { name: "Profile", icon: User, path: "/profile" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 min-h-screen p-5">
      <ul className="space-y-4">
        {links.map(({ name, icon: Icon, path }) => (
          <li key={name}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-xl ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-indigo-200 hover:bg-gray-200 hover:text-gray-200 dark:hover:bg-gray-700"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
