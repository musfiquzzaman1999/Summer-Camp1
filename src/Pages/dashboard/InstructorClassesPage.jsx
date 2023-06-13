import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
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

const InstructorClassesPage = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState({});
  const [className, setClassName] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, [user]);

  const handleOpenModal = (classItem) => {
    setSelectedClass(classItem);
    setClassName(classItem.name);
    setDescription(classItem.description);
    setThumbnail(classItem.thumbnail);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedClass({});
    setClassName('');
    setDescription('');
    setThumbnail('');
  };

  const handleUpdateClass = () => {
    // Perform the update logic here
    const updatedClass = {
      ...selectedClass,
      name: className,
      description: description,
      thumbnail: thumbnail,
    };

    // Update the class in the backend and then update the state with the updated class
    fetch(`http://localhost:5000/classes/${selectedClass._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedClass),
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the state with the updated class
        const updatedClasses = classes.map((classItem) => {
          if (classItem._id === data._id) {
            return data;
          }
          return classItem;
        });
        setClasses(updatedClasses);
      })
      .catch((error) => {
        console.log('Error updating class:', error);
      });

    // Close the modal
    handleCloseModal();
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">My Classes</h1>
      {classes.length === 0 ? (
        <p>No classes found</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem._id}>
                <td>
                  <img src={classItem.thumbnail} alt="Class" className="class-image" />
                </td>
                <td>{classItem.name}</td>
                <td>{classItem.status}</td>
                <td>{classItem.status === 'denied' || classItem.status === 'approved' ? classItem.feedback : '-'}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => handleOpenModal(classItem)}>
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Update Class Modal */}
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Update Class Modal"
      >
        <h2 className="text-xl font-bold mb-4">Update Class</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="className">
              Class Name
            </label>
            <input
              type="text"
              id="className"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="thumbnail">
              Thumbnail URL
            </label>
            <input
              type="text"
              id="thumbnail"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
              onClick={handleUpdateClass}
            >
              Update
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default InstructorClassesPage;
