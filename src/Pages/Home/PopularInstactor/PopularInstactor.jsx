import  { useEffect, useState } from 'react';


const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetchPopularInstructors();
  }, []);

  const fetchPopularInstructors = async () => {
    try {
      const response = await fetch('http://localhost:5000/popular-instructors');
      const data = await response.json();
      setInstructors(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">Popular Instructors</h1>
      <div className="grid grid-cols-3 gap-4">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="bg-gray-200 p-4 rounded-md">
            <img src={instructor.thumbnail} alt="Instructor" className="w-full h-32 object-cover mb-4 rounded-md" />
            <h2 className="text-lg font-semibold">{instructor.name}</h2>
            <p className="text-sm text-gray-600">Email: {instructor.email}</p>
            <p className="text-sm text-gray-600">Total Students: {instructor.totalStudents}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;