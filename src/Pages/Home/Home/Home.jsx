import useTitle from "../../../Hook/useTitle";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Banner from "./Banner/Banner";
import Membership from "./Membership/Membership";


const Home = () => {

    useTitle('Home');

    return (
        <div>
            <Banner></Banner>
           <Gallery></Gallery>
           <Membership></Membership>
           <Contact></Contact>
        </div>
    );
};

export default Home;