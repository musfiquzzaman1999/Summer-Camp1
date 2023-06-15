import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";



const Home = () => {
    return (
        <>
            <Hero></Hero>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
           <AboutUs></AboutUs>
        </>
    );
};

export default Home;