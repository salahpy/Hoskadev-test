import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

export default function Hero() {
  const [currentCourse, setCurrentCourse] = useState(0);
  const [courses, setCourses] = useState<any[]>([]); // Specify the type as an array of courses
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://test-api.mapiner.tech/api/courses");
        const data = await response.json();
        setCourses(data.courses || []); // Assuming API returns courses in this format
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCourse((prev) => (prev + 1) % courses.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [courses]); // Ensure it triggers only when the courses array changes

  if (loading) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  const handleDetailsClick = (courseId: number) => {
    navigate(`/course/${courseId}`); // Navigate to the course detail page
  };

  return (
    <div id="home" className="relative h-screen px-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/image.png")',
        }}
      >
        <div className="absolute inset-0"></div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
      />

      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start text-right">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCourse}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="max-w-[680px]"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 bg-orange rounded-full hover:bg-orange/90 transition-colors flex items-center gap-2"
            >
              <img
                src="/images/fire.png"
                alt="Logo"
                className="h-[17px] w-[15px] object-contain"
              />
              <span className="text-[15px] font-bold text-white">
                رائج الآن
              </span>
            </motion.button>
            <motion.h1
              className="text-[40px] text-white mb-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {courses[currentCourse].name}
            </motion.h1>
            <motion.p
              className="text-[24px] text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {courses[currentCourse].description}
            </motion.p>
            <motion.div
              className="flex space-x-4 rtl:space-x-reverse"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                onClick={() => handleDetailsClick(courses[currentCourse].id)} // Call the handler with the current course's ID
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-4 bg-yellow rounded-full hover:bg-yellow/90 transition-colors flex items-center gap-3"
              >
                <span className="text-[21px] font-bold text-white">
                  تفاصيل الدورة
                </span>
                <img
                  src="/images/arrow-left.png"
                  alt="Logo"
                  className="h-[11px] w-[11px] object-contain"
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {courses.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentCourse === index ? "bg-yellow" : "bg-white"
              }`}
              animate={{
                scale: currentCourse === index ? 1.5 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
