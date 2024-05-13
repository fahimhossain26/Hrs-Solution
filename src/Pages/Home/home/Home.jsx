import { useLoaderData } from "react-router-dom";
import Carosol from "../../../Components/Carosol";
import ServiceCards from "../../../Components/serviceCard/ServiceCards";


const Home = () => {
   
    return (
        <div>
            <h2 className="text-3xl font-pops">This is home </h2>
            <Carosol></Carosol>
            
            <ServiceCards></ServiceCards>
        </div>
    );
};

export default Home;