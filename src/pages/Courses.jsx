// src/pages/Courses.jsx
import { useMemo, useState } from "react";
import { Search, Filter, Star, Play } from "lucide-react";

/**
 * Courses page with:
 * - search
 * - category filters
 * - sort (popularity / newest / difficulty)
 * - grid of course cards
 * - modal for course detail
 * - AI Recommend placeholder
 */

const SAMPLE_COURSES = [
  {
    id: "c1",
    title: "AI Basics for Students",
    subtitle: "Intro to AI concepts with hands-on projects",
    category: "AI",
    level: "Beginner",
    duration: "3h 20m",
    progress: 0,
    rating: 4.7,
    lessons: 12,
    cover: "",
  },
  {
    id: "c2",
    title: "Algebra Pro",
    subtitle: "Master equations, functions and graphs",
    category: "Math",
    level: "Intermediate",
    duration: "5h 10m",
    progress: 42,
    rating: 4.5,
    lessons: 28,
    cover: "",
  },
  {
    id: "c3",
    title: "Physics Essentials",
    subtitle: "Mechanics, waves and thermodynamics",
    category: "Science",
    level: "Intermediate",
    duration: "6h 00m",
    progress: 15,
    rating: 4.4,
    lessons: 22,
    cover: "",
  },
  {
    id: "c4",
    title: "React for Learners",
    subtitle: "Build dynamic UI with React + Vite",
    category: "Web",
    level: "Beginner",
    duration: "4h 45m",
    progress: 0,
    rating: 4.8,
    lessons: 18,
    cover: "",
  },
  // ... add more sample courses
];

function Tag({ children }) {
  return (
    <span className="inline-block text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
      {children}
    </span>
  );
}

function CourseCard({ course, onOpen }) {
  return (
    <article
      className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
      aria-labelledby={`course-${course.id}`}
    >
      <div className="h-36 rounded-md bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center mb-4">
        {/* Placeholder cover — replace with <img /> if you have cover */}
        <Play className="w-10 h-10 text-blue-600" />
      </div>

      <h3 id={`course-${course.id}`} className="font-semibold text-lg">
        {course.title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex-1">
        {course.subtitle}
      </p>

      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <Tag>{course.category}</Tag>
            <span className="text-xs text-gray-500 dark:text-gray-400">{course.level}</span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{course.duration} • {course.lessons} lessons</div>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex items-center gap-1 text-sm text-yellow-600">
            <Star className="w-4 h-4" />
            <span className="font-medium">{course.rating}</span>
          </div>
          <button
            onClick={() => onOpen(course)}
            className="mt-3 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm"
            aria-label={`Open ${course.title}`}
          >
            Open
          </button>
        </div>
      </div>

      <div className="mt-3">
        <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
          <div
            className="h-2 bg-blue-500"
            style={{ width: `${course.progress ?? 0}%` }}
            aria-valuenow={course.progress ?? 0}
            aria-valuemin="0"
            aria-valuemax="100"
            role="progressbar"
          />
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{course.progress ?? 0}% complete</div>
      </div>
    </article>
  );
}

function CourseDetailModal({ course, onClose }) {
  if (!course) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${course.title} details`}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 z-10">
        <header className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{course.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300"
            aria-label="Close modal"
          >
            Close
          </button>
        </header>

        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium mb-2">Overview</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {/* Replace with real content from course */}
              {course.subtitle} — This course contains {course.lessons} lessons and takes roughly {course.duration}.
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Tag>{course.category}</Tag>
                <span className="text-xs text-gray-500 dark:text-gray-400">{course.level}</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Rating: {course.rating} • {course.lessons} lessons</div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Actions</h3>
            <div className="flex flex-col gap-3">
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Start Course</button>
              <button className="w-full border border-gray-200 dark:border-gray-700 py-2 rounded-lg">Save to My List</button>
              <button className="w-full bg-white dark:bg-gray-800 py-2 rounded-lg flex items-center justify-center gap-2">
                <Star className="w-4 h-4" /> Rate Course
              </button>
            </div>
          </div>
        </div>

        <footer className="mt-6 text-right">
          <button onClick={onClose} className="text-sm text-gray-500 dark:text-gray-300">
            Done
          </button>
        </footer>
      </div>
    </div>
  );
}

export default function Courses() {
  const [courses] = useState(SAMPLE_COURSES);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("popular");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = useMemo(() => ["All", ...new Set(courses.map((c) => c.category))], [courses]);

  const filtered = useMemo(() => {
    let list = courses.filter((c) => {
      const matchesQuery =
        query.trim() === "" ||
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.subtitle.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" || c.category === category;
      return matchesQuery && matchesCategory;
    });

    if (sort === "popular") {
      list = list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    } else if (sort === "newest") {
      // sample data doesn't have date; keep as-is
    } else if (sort === "difficulty") {
      const ranking = { Beginner: 0, Intermediate: 1, Advanced: 2 };
      list = list.sort((a, b) => (ranking[a.level] ?? 0) - (ranking[b.level] ?? 0));
    }

    return list;
  }, [courses, query, category, sort]);

  const onAIRecommend = () => {
    // Placeholder: replace with call to your AI recommendation hook/API.
    // e.g. call useAIRecommendations({ userId, profile, history })
    // For now we simply open a modal with the highest rated recommended course:
    const rec = [...filtered].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))[0];
    if (rec) setSelectedCourse(rec);
  };

  return (
    <div className="p-6">
      <header className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Courses</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Browse AI-curated courses and personalized recommendations</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 gap-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses, topics..."
              className="outline-none bg-transparent text-sm w-52"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm rounded-lg px-3 py-2"
              aria-label="Filter by category"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm rounded-lg px-3 py-2"
              aria-label="Sort courses"
            >
              <option value="popular">Most popular</option>
              <option value="newest">Newest</option>
              <option value="difficulty">By difficulty</option>
            </select>

            <button
              onClick={onAIRecommend}
              className="flex items-center gap-2 bg-emerald-600 text-white px-3 py-2 rounded-lg text-sm"
              title="AI recommend course"
            >
              <Filter className="w-4 h-4" /> AI Recommend
            </button>
          </div>
        </div>
      </header>

      <main>
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500">No courses found. Try changing filters or search terms.</p>
          </div>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c) => (
              <CourseCard key={c.id} course={c} onOpen={(course) => setSelectedCourse(course)} />
            ))}
          </section>
        )}
      </main>

      <CourseDetailModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </div>
  );
}
