import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '400px',
    width: '100%',
    padding: '20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  },
};

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [feedback, setFeedback] = useState('');

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
      await axios.patch(`http://localhost:5000/classes/${classId}`, { status: 'approved' });
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

  const handleSendFeedback = async () => {
    try {
      const updatedClass = { ...selectedClass, feedback }; // Create a copy of selectedClass with updated feedback
      await axios.patch(`http://localhost:5000/classes/${selectedClass._id}`, updatedClass);
      // Update the classes list after sending feedback
      setClasses((prevClasses) =>
        prevClasses.map((classItem) =>
          classItem._id === selectedClass._id ? updatedClass : classItem
        )
      );
      setShowModal(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Class Image</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Instructor Email</th>
            <th>Students</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {classes.map((classItem) => (
            <tr key={classItem._id}>
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
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
                {(classItem.status === 'approved' || classItem.status === 'denied') && (
                  <button
                    className="feedback-button"
                    onClick={() => {
                      setSelectedClass(classItem);
                      setShowModal(true);
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

      {/* Feedback Modal */}
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={customStyles}
        contentLabel="Send Feedback Modal"
      >
        <h2 className="text-xl font-bold mb-4">Send Feedback</h2>
        <textarea
          rows="4"
          cols="50"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
        ></textarea>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
            onClick={handleSendFeedback}
          >
            Submit
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ManageClasses;
