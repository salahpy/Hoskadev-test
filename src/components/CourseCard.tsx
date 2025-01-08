import { motion } from "framer-motion"
import { Star, Clock } from "lucide-react"
import { Course } from "../types/course"
import { levelColors, levelImages } from "../data/levelData"
import { useNavigate } from "react-router-dom";

export default function CourseCard({ course }: { course: Course }) {
  const navigate = useNavigate(); 
  const handleDetailsClick = () => {
    navigate(`/course/${course.id}`); 
    window.scrollTo(0, 0);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-[35px] shadow-lg overflow-hidden  relative my-8"
    >
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt={course?.name}
          className="w-full h-[250px] object-cover"
        />
      </div>

      <div className="p-6 flex-grow">
        <h3 className="text-[20px] font-bold mb-2">{course?.name}</h3>
        <p className="text-gray-600 mb-4 truncate text-[12px]">
          {course?.description}
        </p>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-yellow font-bold">{course?.rating}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(course?.rating)
                    ? "text-[#FEC60F] fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-gray"> | ({course.number_of_ratings})</span>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-[18px] h-[18px] text-black" />
            <span className="text-sm">{course.course_duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <img
              src="/images/videos.png"
              alt="Logo"
              className="h-[18px] w-[18px] object-contain"
            />
            <span className="text-sm">{course.course_lessons} درس</span>
          </div>

          <div
            className={`${
              levelColors[course.course_level]
            } text-white px-3 py-1 rounded-full text-[15px] flex items-center gap-1`}
          >
            {course.course_level !== "متقدم" &&
              levelImages[course.course_level] && (
                <img
                  src={`/images/${levelImages[course.course_level]}.png`}
                  alt={`${course.course_level} icon`}
                  className="h-[18px] w-[18px] object-contain"
                />
              )}
            <span>{course.course_level}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-black font-bold">
            {course.course_discounted_price} ج.م
          </span>
          <span className="text-gray-500 line-through">
            {course.course_original_price} ج.م
          </span>
        </div>
        <div className="bg-[#FF7547] text-white px-3 py-1 rounded-full text-[10px] gap-2 items-center inline-flex mt-2">
          <img
            src={`/images/new.png`}
            alt={`${course.course_level} icon`}
            className="h-[10px] w-[10px] object-contain"
          />{" "}
          <span>جديد</span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDetailsClick}
          className="absolute bottom-0 left-0 bg-[#32227E] text-white py-4 px-12 rounded-tr-[35px] font-semibold flex items-center text-[16px] gap-2"
        >
          التفاصيل
          <img
            src="/images/dots.png" 
            alt="Icon"
            className="h-[18px] w-[18px] object-contain"
          />
        </motion.button>
      </div>
    </motion.div>
  )
}
