import { useState, useEffect } from "react";
import { CourseOutput } from "../components/courseOutput";
import { useParams } from "react-router-dom";

const Outputs = () => {
  const [course, setCourse] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams(); 

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch(`https://test-api.mapiner.tech/api/course/${id}`);
        const data = await response.json();
        if (data.success) {
          setCourse(data.course);
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator until data is fetched
  }

  const outputs = Object.values(course.details.course_outputs  || {});

  return (
    <>
      <div className="px-20 py-12">
        <h2 className="text-[30px] font-bold text-black mb-6 lg:text-right text-center">
          ماذا ستتعلم في نهاية هذه الدورة؟
        </h2>
        <div className="flex lg:flex-row flex-col items-center gap-20 justify-between">
          <div className="flex flex-col gap-6">
            {outputs.map((output: any, index: number) => (
              <CourseOutput
                key={index}
                title={output.title}
                description={output.description}
                index={index}
              />
            ))}
          </div>
          <img
            src="/images/cert.png"
            alt="Logo"
            className="h-[500px] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Outputs;
