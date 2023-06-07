import  { useEffect, useState } from 'react';
import PopularClassCard from './PopularClassCard/PopularClassCard';

const ExampleComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/popular-classes');
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          throw new Error('Request failed with status ' + response.status);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <h1 className='text-center text-5xl font-bold mt-10'>Top 6 Classes</h1>
      <div className='grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1'>
      {data.map((item) => (
        <PopularClassCard key={item._id} item={item}>{item.name}{item.students}</PopularClassCard>
      ))}
      </div>
    </div>
  );
};

export default ExampleComponent;
