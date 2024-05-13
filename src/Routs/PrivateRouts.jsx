import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouts = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    const location =useLocation()

    if(loading) return <span className="loading loading-spinner text-primary"></span>
     if(user) return children


    return <Navigate to={'/login'} state={location.pathname} replace={true}> </Navigate>
};

export default PrivateRouts;