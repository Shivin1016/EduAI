export default function ProgressCard({ subject, progress }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow">
      <h3 className="font-semibold mb-2">{subject}</h3>
      <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${progress}%` }} />
      </div>
      <p className="text-sm mt-1 text-gray-500">{progress}% completed</p>
    </div>
  );
}
