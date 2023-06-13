import React from 'react';
import { Fade, Slide } from 'react-reveal';
import { Link } from 'react-router-dom';


const Error = () => {
  
  return (
    <section className="flex items-center h-full p-8 sm:p-16  dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center mx-auto space-y-8 text-center max-w-md">
        <Fade>
          <img
            src="https://img.freepik.com/free-photo/depressed-businessman-isolated_1401-46.jpg?w=740&t=st=1684571367~exp=1684571967~hmac=e7a0632449e96d96e6d09d0f71b8f4f02eedc1cfb8b5234fd730ab9503cab3bd"
            alt="Error"
            className="w-full h-auto rounded-lg"
          />
        </Fade>
        <Fade>
          <p className="text-3xl font-bold">Could Not Find Your Page</p>
        </Fade>
        <Slide bottom>
          <Link to="/" className="btn bg-rose-600">
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
              Back to homepage
            </a>
          </Link>
        </Slide>
      </div>
    </section>
  );
};

export default Error;
