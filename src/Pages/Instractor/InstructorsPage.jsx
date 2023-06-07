

import  { useEffect, useState } from 'react';

const InstructorsPage = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/instructors')
      .then(response => response.json())
      .then(data => setInstructors(data));
  }, []);

  return (
    <div>
      <p className='text-white'>.</p>
      <h1 className="text-2xl font-bold mb-4 mt-10 ">Instructors Page</h1>

      <div className="grid grid-cols-3 gap-4 mt-16">
        {instructors.map(instructor => (
          <div key={instructor._id} className="bg-white rounded shadow p-4">
            <img
              src={instructor.thumbnail}
              alt={instructor.instructorName}
              className="w-24 h-24 rounded-full mb-4 mx-auto"
            />
            <h2 className="text-lg font-bold">{instructor.name}</h2>
            <p className="text-gray-600">{instructor.instructorEmail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsPage;
