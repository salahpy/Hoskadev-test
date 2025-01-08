import { useState, useEffect } from "react";

export const useCourseData = () => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseData = async () => {
        const response = await fetch("https://test-api.mapiner.tech/api/courses");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCourseData(data);
      
        setLoading(false);
    };

    fetchCourseData();
  }, []);

  return { courseData, loading };
};
