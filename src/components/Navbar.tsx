import { motion } from "framer-motion";
import { useState } from "react";
import { navLinks } from "../data/navLinks";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track burger menu state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="absolute top-0 left-0 right-0 w-full bg-transparent z-50 px-5 md:px-20 py-7"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="flex items-center space-x-2 rtl:space-x-reverse gap-5"
          >
            <img
              src="/images/logo_hk.png"
              alt="Logo"
              className="h-[77px] w-[77px] object-contain"
            />
            <span className="text-[40px] font-normal text-white">منصتي</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center rtl:space-x-reverse gap-8">
          {navLinks.map((link, index) => (
            <>
              <motion.a
                key={link.href}
                href={`#${link.href}`}
                className="text-white text-[20px] hover:text-yellow transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
              {index < navLinks.length - 1 && (
                <span className="text-white">|</span>
              )}
            </>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden xl:flex items-center rtl:space-x-reverse gap-5">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 text-white text-[20px] border border-none rounded-lg transition-colors"
          >
            تسجيل الدخول
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 bg-yellow text-white text-[20px] rounded-[30px] hover:bg-yellow/95 transition-colors"
          >
            حساب جديد
          </motion.button>
        </div>

        {/* Burger Menu Icon */}
        <div className="xl:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="xl:hidden bg-primary  text-white absolute  left-5  py-6 px-8 space-y-4 rounded-lg"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={`#${link.href}`}
              className="block text-[20px] text-center hover:text-yellow transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {link.name}
            </motion.a>
          ))}
          <div className="flex flex-col space-y-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="block text-[20px] text-center hover:text-yellow transition-colors"
            >
              تسجيل الدخول
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="block text-[20px] text-center hover:text-yellow transition-colors"
            >
              حساب جديد
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
