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
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {instructors.map((instructor) => (
          <div key={instructor.email} >
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={instructor.thumbnail} alt="Shoes"  /></figure>
  <div className="card-body">
    <h2 className="card-title">{instructor.name}</h2>
    <p>{instructor.description}</p>
   
  </div>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
