import { useLoaderData } from "react-router-dom";
import Carosol from "../../../Components/Carosol";
import ServiceCards from "../../../Components/serviceCard/ServiceCards";
import Chouse from "../../../Components/choseus/Chouse";
import HomePage6 from "../../homePageSix/HomePage6";


const Home = () => {
   
    return (
        <div>
            <h2 className="text-3xl font-pops">This is home </h2>
            <Carosol></Carosol>
            
            <ServiceCards></ServiceCards>
            <Chouse></Chouse>
            {/* <HomePage6></HomePage6> */}
        </div>
    );
};

export default Home;