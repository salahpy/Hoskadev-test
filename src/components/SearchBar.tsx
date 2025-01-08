import { motion } from 'framer-motion';
import { Search, Settings } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex items-center gap-4"
      >
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="ابحث عن الدورات..."
            className="w-full py-3 px-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FEC60F]"
          />
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FEC60F] p-2 rounded-full"
          >
            <Search className="w-5 h-5" />
          </motion.div>
        </div>
        
        <motion.div
          whileHover={{ rotate: 90 }}
          className="bg-gray-100 p-3 rounded-full cursor-pointer"
        >
          <Settings className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </div>
  );
}