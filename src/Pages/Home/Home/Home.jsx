import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstactor/PopularInstactor";
import SliderSection from "../SliderSection/SliderSection";


const Home = () => {
    return (
        <div>
           
           <SliderSection></SliderSection>
           <PopularClasses></PopularClasses> 
           <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;