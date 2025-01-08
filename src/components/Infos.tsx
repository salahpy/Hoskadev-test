import CourseDetails from "../components/CourseDetails";
import { courseSections } from "../data/courseSections";

const Infos = () => {

  return (
    <>
      <div className="py-16 bg-[#EDEBFA]">
        <div className="container mx-auto pb-16 bg-white w-[90%] h-[90%] rounded-[35px]">
          <div className="relative">
            <h2 className="text-3xl font-bold absolute top-0 right-0 bg-[#32227E] text-white py-7 px-14 rounded-bl-[35px] rounded-tr-[35px]">
              معلومات عن الدورة
            </h2>
          </div>
          {courseSections.map((section, index) => (
            <CourseDetails
              key={index}
              title={section.title}
              outputs={section.outputs}
              isFirst={index === 0} // Pass isFirst for the first component
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Infos;
