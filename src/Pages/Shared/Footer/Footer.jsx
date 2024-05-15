import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="">
            
        <footer className="flex flex-col text-black">
            <div className="flex flex-col items-start justify-around gap-5 bg-sky-50 p-10 py-10 md:flex-row md:gap-0 md:items-center">
                <aside className="text-xl">
               <img className="h-20" src="https://i.postimg.cc/RFNgNfvv/Blue-And-White-Cleaning-Services-Logo-removebg-preview.png" alt="" />
                    <p>HRS Solutions </p>
                </aside>
                <nav className="text-lg">
                    <ul className="space-y-3">
                        <li>
                          <Link to={'/'}>  <a className="cursor-pointer hover:underline">Home</a></Link>
                        </li>
                        <li>
                           <Link to={'/allServices'}> <a className="cursor-pointer hover:underline">ALl Service</a></Link>
                        </li>
                        <li>
                        <Link to={'/login'}>  <a className="cursor-pointer hover:underline">Login</a></Link>
                        </li>
                    </ul>
                </nav>
                <nav className="text-lg">
                    <ul className="space-y-3">
                        <li>
                            <a className="cursor-pointer hover:underline">Services</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Add</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Portfolio</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <aside className="bg-sky-200 py-5 text-center text-sm">
                <p>&copy; 2024 HRS solution. All Rights Reserved.</p>
            </aside>
        </footer>
   
        </div>
    );
};

export default Footer;

