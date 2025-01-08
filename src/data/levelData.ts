export const levelColors = {
    مبتدئ: "bg-[#40D14C]",
    متوسط: "bg-[#FFC60F]",
    متقدم: "bg-[#9747FF]",
  };
  
  export const levelImages = {
    مبتدئ: "beginner-icon",
    متوسط: "intermediate-icon",
  };

  export type CourseLevel = keyof typeof levelColors;
