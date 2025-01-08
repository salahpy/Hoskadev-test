import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import { Search, Settings } from "lucide-react";
import { useState, useEffect } from "react";

export default function CoursesSection() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div 
    id="courses"
    className="bg-[#EDEBFA] py-16">
      <div className="container mx-auto pb-16 bg-white w-[90%] h-[90%] rounded-[35px]">
        <div className="mx-auto">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex justify-end relative"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold absolute top-0 right-0 bg-[#32227E] text-white py-7 px-14 rounded-bl-[35px] rounded-tr-[35px]"
            >
              جميع الدورات{" "}
            </motion.h2>
            <div className="flex items-center gap-4 px-16 pt-8 pb-12">
              <div className="relative flex-1 hidden md:block">
                <div className="relative inline-flex">
                  <input
                    type="text"
                    placeholder="ابحث عن الدورات..."
                    className="px-4 py-2 pl-10 pr-4 rounded-full text-gray-800 shadow-xl"
                  />
                  <Search className="absolute left-0 top-0 bottom-0 my-auto text-white bg-yellow rounded-full h-full w-[40px] p-2" />
                </div>
              </div>
              <motion.div
                whileHover={{ rotate: 90 }}
                className="p-3 rounded-full cursor-pointer shadow-xl"
              >
                <Settings className="w-6 h-6 text-[#211754]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
          {loading ? (
            <div className="col-span-full text-center py-16 text-gray-600">
              Loading courses...
            </div>
          ) : (
            courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
