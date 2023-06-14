import Hero from "../Hero/Hero";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Warrior from "../Warrior/Warrior";


const Home = () => {
    return (
        <>
            <Hero></Hero>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Warrior></Warrior>
        </>
    );
};

export default Home;