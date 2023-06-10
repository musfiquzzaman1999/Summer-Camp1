import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch all classes from the backend
    const fetchClasses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/classes');
        setClasses(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchClasses();
  }, []);

  const handleApprove = async (classId) => {
    try {
      await axios.patch(`/classes/${classId}`, { status: 'approved' });
      // Update the classes list after approval
      setClasses((prevClasses) =>
        prevClasses.map((classItem) =>
          classItem._id === classId ? { ...classItem, status: 'approved' } : classItem
        )
      );
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeny = async (classId) => {
    try {
      await axios.patch(`http://localhost:5000/classes/${classId}`, { status: 'denied' });
      // Update the classes list after denial
      setClasses((prevClasses) =>
        prevClasses.map((classItem) =>
          classItem._id === classId ? { ...classItem, status: 'denied' } : classItem
        )
      );
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSendFeedback = async (classId, feedback) => {
    try {
      await axios.patch(`http://localhost:5000/classes/${classId}`, { feedback });
      // Update the classes list after sending feedback
      setClasses((prevClasses) =>
        prevClasses.map((classItem) =>
          classItem._id === classId ? { ...classItem, feedback } : classItem
        )
      );
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Manage Classes</h1>
      <table className="classes-table">
        <thead>
          <tr>
            <th>Class Image</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Instructor Email</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem._id}>
              <td>
                <img src={classItem.pic} alt={classItem.name} className="class-image" />
              </td>
              <td>{classItem.name}</td>
              <td>{classItem.instructorName}</td>
              <td>{classItem.instructorEmail}</td>
              <td>{classItem.students}</td>
              <td>${classItem.price}</td>
              <td>{classItem.status}</td>
              <td>
                {classItem.status === 'pending' && (
                  <>
                    <button className="approve-button" onClick={() => handleApprove(classItem._id)}>
                      Approve
                    </button>
                    <button className="deny-button" onClick={() => handleDeny(classItem._id)}>
                      Deny
                    </button>
                  </>
                )}
                {classItem.status === 'approved' && (
                  <button
                    className="feedback-button"
                    onClick={() => {
                      const feedback = prompt('Enter feedback');
                      if (feedback) {
                        handleSendFeedback(classItem._id, feedback);
                      }
                    }}
                  >
                    Send Feedback
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
