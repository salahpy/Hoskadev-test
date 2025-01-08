export interface Course {
  id: number;
  name: string;
  description: string;
  rating: number;
  number_of_ratings: number;
  course_duration: string;
  course_lessons: number;
  course_level: 'مبتدئ' | 'متوسط' | 'متقدم';
  course_original_price: number;
  course_discounted_price: number;
}