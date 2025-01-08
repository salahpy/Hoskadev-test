import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

interface CourseDetailsProps {
  title: string
  outputs: string[]
  isFirst?: boolean // Optional prop to determine if this is the first component
}

const CourseDetails: React.FC<CourseDetailsProps> = ({
  title,
  outputs,
  isFirst,
}) => {
  const [isOutputsOpen, setIsOutputsOpen] = useState(true)

  return (
    <motion.div
      className={`px-20 mx-auto ${isFirst ? "pt-32" : "pt-16"} `} // Add shadow and conditional padding
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Course Outputs Section */}
      <motion.div
        className="bg-white rounded-2xl p-8"
        {...fadeInUp}
        style={{
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)", // Custom shadow for uniformity
        }}
      >
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsOutputsOpen(!isOutputsOpen)}
        >
          <div className="flex items-center gap-4">
            <img
              src="/images/exlamation.png"
              alt="Logo"
              className="h-[27px] w-[27px] object-contain"
            />
            <h2 className="text-[24px] font-bold text-black">{title}</h2>
          </div>
          <motion.div
            animate={{ rotate: isOutputsOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-6 h-6 text-gray-500" />
          </motion.div>
        </div>

        {isOutputsOpen && (
          
            <motion.div
              className="space-y-6 mt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
                  <div className="border-t border-gray mt-8"></div>
              <ul className="list-disc px-8 py-4 space-y-2">
                {outputs.map((output, index) => (
                  <li key={index} className="text-black">
                    {output}
                  </li>
                ))}
              </ul>
            </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default CourseDetails
