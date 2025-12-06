export default function CourseCard({ title }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 hover:scale-[1.02] transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">AI curated lessons and quizzes</p>
      <button className="mt-3 bg-blue-500 text-white px-3 py-1.5 rounded-lg text-sm">Start Learning</button>
    </div>
  );
}
