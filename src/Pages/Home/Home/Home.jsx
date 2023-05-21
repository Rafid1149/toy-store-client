import Gallery from "../Gallery/Gallery";
import Banner from "./Banner/Banner";
import Membership from "./Membership/Membership";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Gallery></Gallery>
           <Membership></Membership>
        </div>
    );
};

export default Home;