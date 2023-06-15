import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";
import banner3 from "../../../assets/banner3.jpg";

// Import Swiper styles
import "swiper/css";

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

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
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="relative bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${banner1})` }}
          >
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="text-center space-y-8 text-white">
                
                <h2 className="font-bold text-4xl md:text-6xl w-3/4 mx-auto">
                Join Our Singing Class and Discover Your Musical Potential
                </h2>
                <p className="w-3/4 mx-auto">
                Experience the joy of singing and enhance your vocal skills in our dynamic and supportive singing class. Explore various genres and techniques while receiving expert guidance from our talented instructors.
                </p>
                
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="text-center space-y-8 text-white">
              
                <h2 className="font-bold text-4xl md:text-6xl w-3/4 mx-auto">
                Dance to the Rhythm of Your Heart
                </h2>
                <p className="w-3/4 mx-auto">
                Experience the magic of dance and express yourself through movement in our energetic and inclusive dance class. Explore various dance styles, build strength, coordination, and unleash your inner performer
                </p>
                
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${banner3})` }}
          >
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="text-center space-y-8 text-white">
                
                <h2 className="font-bold text-4xl md:text-6xl w-3/4 mx-auto">
                Find Balance and Inner Peace
                </h2>
                <p className="w-3/4 mx-auto">
                Immerse yourself in the transformative practice of yoga in our serene and welcoming studio. Cultivate strength, flexibility, and mindfulness as you connect with your breath and discover harmony within.
                </p>
                
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
