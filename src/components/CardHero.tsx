import { motion } from "framer-motion"
import { Users, Share2, BadgePercent, KeyRound } from "lucide-react"

interface Group {
  id: number
  members: string[]
  time: string
  capacity: number
}

const groups: Group[] = [
  {
    id: 1,
    members: ["Sufyan", "Other 1", "Other 2"],
    time: "05:23:47:32",
    capacity: 5,
  },
  {
    id: 2,
    members: ["Sufyan", "Other 1", "Other 2"],
    time: "05:23:47:32",
    capacity: 5,
  },
  {
    id: 3,
    members: ["Sufyan", "Other 1", "Other 2"],
    time: "05:23:47:32",
    capacity: 5,
  },
]

const CardHero = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[35px] shadow-xl w-full overflow-hidden"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className=" flex gap-3 absolute top-0 right-0 bg-yellow px-7 py-3 rounded-bl-[35px] rounded-tr-[35px]"
        >
          <img
            src="/images/mdi_register.png"
            alt="Logo"
            className="h-[32px] w-[32px] object-contain"
          />
          <span className="text-[20px] font-normal text-white">
            التسجيل في الدورة
          </span>
        </motion.h2>

        <div className="pt-20 px-6">
          <h2 className="text-xl font-bold text-right mb-4">
            المجموعات المتوفرة
          </h2>

          <div className="space-y-3">
            {groups.map((group) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 rounded-full p-4 gap-5 flex items-center justify-between shadow-xl"
              >
                <div className="text-right flex ">
                  <div className="flex flex-col gap-2 ">
                    <Users size={18} className="text-primary" />
                    <span className="text-gray-600 ">
                      {group.members.length}/{group.capacity}
                    </span>
                  </div>
                  <div className="text-gray-500 text-sm mt-1 text-left font-mono flex flex-col">
                    <span className="font-semibold">
                      سفيان و {group.members.length - 1} آخرون
                    </span>
                    {group.time}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
                    إحجز مكانك الآن
                  </button>
                  <Share2 className="text-primary" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-full text-center py-3 my-5 bg-yellow rounded-full hover:bg-yellow/90 transition-colors"
          >
            <span className="text-[20px] font-bold text-white">
            سجل الآن            </span>
          </motion.button>

          <div className=" space-y-4 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <KeyRound size={18} />
              <span>صلاحيات الوصول: وصول دائم للدورة</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <BadgePercent size={18} />
              <span>احصل على تخفيض 20% عند التسجيل الجماعي</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CardHero
