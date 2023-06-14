import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import banner1 from "../../../assets/Banner1.png";
import banner2 from "../../../assets/Banner2.png";
import banner3 from "../../../assets/Banner3.png";
import { Fade } from "react-awesome-reveal";
const Hero = () => {
  return (
    <div className="h-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="md:flex items-center md:mx-20">
          <Fade className="md:w-[50%]" direction="left">
            <div className=" md:ml-40 text-center space-y-8">
              <h3 className="font-semibold text-red-500 text-2xl ">
                Discover the Art of Self-Defense
              </h3>
              <h2 className="font-bold text-4xl md:text-6xl w-3/4 mx-auto">
                Train with Experts, Master Martial Arts
              </h2>
              <p className="w-3/4 mx-auto">
                Unlock your potential and learn the ancient art of self-defense
                at our martial arts school. Our experienced instructors are
                dedicated to helping you develop discipline.
              </p>
              <div className="flex row md:gap-12 justify-center my-4">
                <button className="MBtn">Get Started</button>
                <button className="text-red-500 font-semibold ml-4 px-6 md:py-1 md:rounded md:hover:bg-[#EF4444] md:hover:text-white md:border-[#EF4444] md:border">
                  learn more
                </button>
              </div>
            </div>
            </Fade>
            <div className="w-[50%] mx-auto">
              <img src={banner1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        
          <div className="md:flex items-center md:mx-20">
          <Fade className="md:w-[50%]" direction="left">
            <div className=" md:ml-40 text-center space-y-8">
              
                <h3 className="font-semibold text-red-500 text-2xl ">
                  Build Strength and Confidence
                </h3>
              
              <h2 className="font-bold text-4xl md:text-6xl w-3/4 mx-auto">
                Forge Your Path, Become a Martial Artist
              </h2>
              <p className="w-3/4 mx-auto">
                Gain unwavering confidence and inner strength through martial
                arts training. Our school provides a nurturing environment where
                you can develop your skills and cultivate self-assurance.
              </p>
              <div className="flex row md:gap-12 justify-center my-4">
                <button className="MBtn">Get Started</button>
                <button className="text-red-500 font-semibold ml-4 px-6 md:py-1 md:rounded md:hover:bg-[#EF4444] md:hover:text-white md:border-[#EF4444] md:border">
                  learn more
                </button>
              </div>
            </div>
            </Fade>
            <div className="w-[50%] mx-auto">
              <img src={banner2} alt="" />
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex items-center md:mx-20">
          <Fade className="md:w-[50%]" direction="left">
            <div className=" md:ml-40 text-center space-y-8">
              <h3 className="font-semibold text-red-500 text-2xl ">
                Empower Your Body and Mind
              </h3>
              <h2 className="font-bold text-4xl md:text-6xl w-3/4 mx-auto">
                Elevate Your Skills, Unleash Your Potential
              </h2>
              <p className="w-3/4 mx-auto">
                Experience the power of martial arts as you strengthen your body
                and sharpen your mind. Our martial arts school offers a
                comprehensive curriculum that combines physical fitness, mental
                focus.
              </p>
              <div className="flex row md:gap-12 justify-center my-4">
                <button className="MBtn">Get Started</button>
                <button className="text-red-500 font-semibold ml-4 px-6 md:py-1 md:rounded md:hover:bg-[#EF4444] md:hover:text-white md:border-[#EF4444] md:border">
                  learn more
                </button>
              </div>
            </div>
            </Fade>
            <div className="w-[50%] mx-auto">
              <img src={banner3} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
