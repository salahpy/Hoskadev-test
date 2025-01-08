import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface CourseOutputProps {
  title: string;
  description: string;
  index: number;
}

export function CourseOutput({ title, description, index }: CourseOutputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-primary rounded-[30px] py-5 px-12 text-white relative overflow-hidden max-w-[600px] flex items-center gap-8"
    >
        <Star className="w-[60px] h-[60px] text-yellow fill-current" />
      <div>
      <h3 className=" font-bold mb-3 text-right text-[24px]">{title}</h3>
      <p className="text-white text-right text-[20px] ">{description}</p>
      </div>
    </motion.div>
  );
}