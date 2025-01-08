import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { levelColors, levelImages, CourseLevel } from "../data/levelData"
import CardHero from "./CardHero"

interface BasicInfo {
  id: number
  name: string
  description: string
  rating: number
  number_of_ratings: number
  course_duration: string
  course_lessons: number
  course_level: CourseLevel
  course_original_price: number
  course_discounted_price: number
}

export default function HeroCourse() {
  const { id } = useParams() // Get the course ID from the URL
  const [basicInfo, setBasicInfo] = useState<BasicInfo | null>(null) // Properly type the state
  const [mydetails, setMydetails] = useState<any | null>(null) // Properly type the state
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          `https://test-api.mapiner.tech/api/course/${id}`
        )
        const data = await response.json()
        if (data.success) {
          setBasicInfo(data.course.basic_info)
          setMydetails(data.course.details.specifications)
        }
      } catch (error) {
        console.error("Error fetching course data:", error)
      } finally {
        setLoading(false);
        console.log(mydetails)
      }
    }

    if (id) {
      fetchCourse()
    }
  }, [id])

  if (loading) {
    return <div>Loading...</div> // Display loading message
  }

  if (!basicInfo) {
    return <div>Course not found</div> // Display error message if no course data is found
  }

  return (
    <div id="home" className="relative h-screen px-20 pt-32">
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
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="max-w-[680px]"
          >
            <div className="flex items-center gap-4">
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
              <div
                className={`${
                  levelColors[basicInfo.course_level]
                } px-5 py-3  rounded-full flex items-center gap-2`}
              >
                {basicInfo.course_level !== "متقدم" &&
                  levelImages[basicInfo.course_level] && (
                    <img
                      src={`/images/${levelImages[basicInfo.course_level]}.png`}
                      alt={`${basicInfo.course_level} icon`}
                      className="h-[17px] w-[15px] object-contain"
                    />
                  )}
                <span className="text-[15px] font-bold text-white">
                  {basicInfo.course_level}
                </span>
              </div>
            </div>
            <motion.h1
              className="text-[40px] text-white mb-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {basicInfo.name}
            </motion.h1>
            <motion.p
              className="text-[24px] text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {basicInfo.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
        <div className="flex items-center gap-3">
          <span className="text-yellow text-[28px]">
            {basicInfo.course_discounted_price} ج.م
          </span>
          <span className="text-white line-through text-[28px]">
            {basicInfo.course_original_price} ج.م
          </span>
        </div>
        <div className="flex items-center gap-4 mt-6">
        <div className="px-5 py-3  rounded-full flex items-center gap-2">
          <img
            src={"/images/mdi_lecture.png"}
            alt={`icon`}
            className="h-[27px] w-[27px] object-contain"
          />
          <span className="text-[17px] font-bold text-white">
            {mydetails.course_begin}
          </span>
        </div>
        <div className="px-5 py-3  rounded-full flex items-center gap-2">
          <img
            src={"/images/clarity_language-line.png"}
            alt={`icon`}
            className="h-[27px] w-[27px] object-contain"
          />
          <span className="text-[17px] font-bold text-white">
            {mydetails.course_language}
          </span>
        </div>
        
        </div>
        <div className="flex items-center gap-4 mt-2">
        <div className="px-5 py-3  rounded-full flex items-center gap-2">
          <img
            src={"/images/mdi_lecture.png"}
            alt={`icon`}
            className="h-[27px] w-[27px] object-contain"
          />
          <span className="text-[17px] font-bold text-white">
            {mydetails.course_type}
          </span>
        </div>
        <div className="px-5 py-3  rounded-full flex items-center gap-2">
          <img
            src={"/images/clarity_language-line.png"}
            alt={`icon`}
            className="h-[27px] w-[27px] object-contain"
          />
          <span className="text-[17px] font-bold text-white">
            {mydetails.course_duration}
          </span>
        </div>
        </div>
        <div className="px-5 py-3  rounded-full flex items-center gap-2">
          <img
            src={"/images/clarity_language-line.png"}
            alt={`icon`}
            className="h-[27px] w-[27px] object-contain"
          />
          <span className="text-[17px] font-bold text-white">
            {mydetails.course_certificate}
          </span>
        </div>
      </div>
      <div className="xl:block absolute bottom-0 left-24 z-20 mb-12 hidden">
        <CardHero />
      </div>
    </div>
  )
}
