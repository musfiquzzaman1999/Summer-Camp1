import  { useState, useContext } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../providers/AuthProvider';

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [students, setStudents] = useState(0);
  const [thumbnail, setThumbnail] = useState('');
  const [price, setPrice] = useState('');

  const instructorName = user?.displayName;
  const instructorEmail = user?.email;
  const instructorPicture = user?.photoURL;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (students > 25) {
      toast.error('You cannot add more than 25 students.', { position: 'top-center' });
      return;
    }

    // Create class object
    const newClass = {
      name,
      description,
      students,
      thumbnail,
      instructorName,
      instructorEmail,
      instructorPicture,
      price,
      status: 'pending',
    };

    try {
      // Make a POST request to the backend API to add the class
      const response = await axios.post('http://localhost:5000/classes', newClass);
      console.log('Response:', response.data);
      // Clear form fields
      setName('');
      setDescription('');
      setStudents(0);
      setThumbnail('');
      setPrice('');
      // Display success toast
      toast.success('Class added successfully!', { position: 'top-center' });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-8">
      <h2 className="text-2xl font-bold mb-4">Add a Class</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
        <div>
          <label htmlFor="name" className="block font-bold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 p-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="students" className="block font-bold mb-1">
            Students
          </label>
          <input
            type="number"
            id="students"
            value={students}
            onChange={(e) => setStudents(Number(e.target.value))}
            className="border border-gray-400 p-2 w-full"
            required
            max={25}
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="description" className="block font-bold mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-400 p-2 w-full"
            required
          ></textarea>
        </div>
        <div className="col-span-2">
          <label htmlFor="thumbnail" className="block font-bold mb-1">
            Thumbnail
          </label>
          <input
            type="text"
            id="thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            className="border border-gray-400 p-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="instructorName" className="block font-bold mb-1">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructorName"
            value={instructorName}
            className="border border-gray-400 p-2 w-full"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="instructorEmail" className="block font-bold mb-1">
            Instructor Email
          </label>
          <input
            type="email"
            id="instructorEmail"
            value={instructorEmail}
            className="border border-gray-400 p-2 w-full"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="instructorPictureURL" className="block font-bold mb-1">
            Instructor Picture
          </label>
          <input
            type="text"
            id="instructorPictureURL"
            value={instructorPicture}
            className="border border-gray-400 p-2 w-full"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="price" className="block font-bold mb-1">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-400 p-2 w-full"
            required
          />
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            Add
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddClass;
