import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <>
      <section className="bg-primary px-20 py-6 text-white" id="articles">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-4">
          <div className="">
            <img
              src={`/images/checkprofile.png`}
              alt="check"
              className="h-[400px] w-[400px] object-contain"
            />{" "}
          </div>
          <div className="max-w-[550px]">
            <h1 className="text-[40px] font-normal text-white mb-6">
              سجل الآن وابدأ رحلتك التعليمية{" "}
            </h1>
            <p className="text-[24px] text-white mb-6">
              إنضم إلينا الآن وابدأ رحلتك التعليمية لتطوير مهارات جديدة وتحقيق
              طموحاتك الشخصية والمهنية{" "}
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-4 bg-yellow rounded-full hover:bg-yellow/90 transition-colors flex items-center gap-3"
            >
              <span className="text-[21px] font-bold text-white">
                سجل معنا الآن{" "}
              </span>
            </motion.button>
          </div>
        </div>
      </section>
      <section className="bg-[#211754] text-white py-16 px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">عن HoskaDev</h3>
            <ul className="space-y-4">
              <li>
                <a className="hover:text-[#FEC60F] ">عن المنصة</a>
              </li>
              <li>
                <a className="hover:text-[#FEC60F]">سياسة الخصوصية</a>
              </li>
              <li>
                <a className="hover:text-[#FEC60F]">قواعد عامة</a>
              </li>
              <li>
                <a className="hover:text-[#FEC60F]">تواصل معنا </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">تحقق من شهادتك</h3>
            <div className="relative inline-flex">
              <input
                type="text"
                placeholder="أدخل رقم الشهادة"
                className="px-4 py-2 pl-10 pr-4 rounded-full text-gray-800"
              />
              <button className="absolute left-0 top-0 bottom-0 my-auto text-white bg-yellow rounded-full h-full  p-2">
                تحقق
              </button>
            </div>

            <h3 className="text-xl font-bold mt-10">وسائل الدفع المدعومة</h3>
            <div className="flex gap-4 mt-5">
              <img
                src="/images/cib.png"
                alt="Mastercard"
                className="h-[72px]"
              />
              <img src="/images/notcib.png" alt="Visa" className="h-[72px]" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">تابعنا</h3>
            <div className="flex gap-5 flex-wrap max-w-[calc(3*5rem)]">
              <a className="text-[#211754] bg-white p-4 rounded-full">
                <Instagram />
              </a>
              <a className="text-[#211754] bg-white p-4 rounded-full">
                <Facebook />
              </a>
              <a className="text-[#211754] bg-white p-4 rounded-full">
                <Youtube />
              </a>
              <a className="text-[#211754] bg-white p-4 rounded-full">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#18103C] py-8 px-20 flex justify-between items-center">
        <p className="text-white">جميع الحقوق محفوظة لدى HoskaDev 2024</p>
        <img src="/images/conf.png" alt="Visa" className="h-[58px]" />
      </section>
    </>
  )
}
