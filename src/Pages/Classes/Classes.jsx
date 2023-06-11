import { useEffect, useState } from 'react';
import axios from 'axios';

function Classes() {
  const [classes, setClasses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/classes')
      .then(response => {
        setClasses(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    // Check if the user is logged in (dummy implementation)
    const userToken = localStorage.getItem('token');
    setIsLoggedIn(userToken !== null);
  }, []);

  const handleSelectClass = (classItem) => {
    
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <h1 className="col-span-3 text-3xl font-bold mb-4">Summer Camp Classes</h1>
      {classes.map(classItem => {
        const availableSeats = 25 - classItem.students;
        const isDisabled = classItem.students === 0 || isLoggedIn;
        const cardClassName = classItem.status === 'approved' ? 'class-card' : 'class-card-hidden';

        return (
          <div
            key={classItem.id}
            className={cardClassName}
            style={classItem.students === 0 ? { backgroundColor: 'red' } : null}
          >
            {classItem.status === 'approved' && (
              <>
                <img src={classItem.thumbnail} alt={classItem.name} className="w-full" />
                <h2 className="text-xl font-bold">{classItem.name}</h2>
                <p className="mb-2">Instructor: {classItem.instructor}</p>
                {classItem.students !== 0 && <p>Available seats: {availableSeats}</p>}
                <p className={classItem.students === 0 ? 'text-red-500' : null}>Price: {classItem.price}</p>
                {!isDisabled && (
                  <button onClick={() => handleSelectClass(classItem)} className="btn-select">
                    Select
                  </button>
                )}
                {isDisabled && (
                  <p className="text-red-500 mt-2">
                    {isLoggedIn ? 'Logged in as instructor' : 'Please log in before selecting the course'}
                  </p>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Classes;
