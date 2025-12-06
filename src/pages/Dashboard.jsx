import AIChatBox from "../components/AIChatBox";
import CourseCard from "../components/CourseCard";
import ProgressCard from "../components/ProgressCard";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", progress: 60 },
  { day: "Tue", progress: 80 },
  { day: "Wed", progress: 75 },
  { day: "Thu", progress: 90 },
  { day: "Fri", progress: 95 },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center">
       <h1 className="text-3xl text-center my-6 font-bold text-gray-800 dark:text-white">
        👋 Welcome back, <span className="text-blue-600">Shivani</span>
      </h1>
      <div className="p-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="col-span-2 grid gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <ProgressCard subject="Computer Network" progress={82} />
            <ProgressCard subject="DSA" progress={67} />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <CourseCard title="AI Basics" />
            <CourseCard title="Web Development" />
          </div>
        </div>
        <AIChatBox />
      </div>
        {/* Progress Chart */}
        <div className="bg-white max-w-6xl dark:bg-gray-800 rounded-xl shadow-md p-6 ml-10 mb-10">
          <h3 className="text-xl font-semibold mb-4">Weekly Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="day" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="progress" stroke="#4f46e5" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

    </div>
  );
}

 
 

 
