import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="about-section  py-12 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="p-8 md:ml-12 lg:ml-12 ml-4">
              <h2 className="text-5xl font-bold mb-4 md:mt-52 lg:mt-52 mt-5 ">About Us</h2>
              <p className="text-gray-700">
              Welcome to ExtraLearn, the ultimate destination for unlocking your potential and embracing the joy of learning. We offer a wide range of extra activities designed to enrich your life and expand your horizons. Whether youre interested in arts, music, sports, languages, or any other passion, our curated curriculum and experienced instructors are here to guide you every step of the way.
              </p>
              <p className="text-gray-700 mt-4">
              Join us at ExtraLearn and embark on a transformative journey of personal growth and self-discovery. Unleash your potential, acquire new skills, and explore endless possibilities. Together, lets ignite your passion for learning and create a brighter future filled with knowledge and fulfillment.







              </p>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="p-8">
              <img src="https://img.freepik.com/free-photo/rag-doll-red-with-arms-two_1156-237.jpg?w=740&t=st=1684587200~exp=1684587800~hmac=817e7f5e2a9c37f045ce06e66c4574694bd533bee8dcf8ae3717f23c228da05e" alt="About Us" className="w-full h-auto rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
