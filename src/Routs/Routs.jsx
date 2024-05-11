import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServicecDetails from "../Pages/serviceDetails/ServicecDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader:()=>fetch(`${import.meta.env.VITE_API_URL}/allService`)
      },
      {
       path:'/login',
       element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
       },
       {
        path: '/services/:id',
        element:<ServicecDetails></ServicecDetails>,
       loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`)   
       
       }
    


    ]
  },
]);


export default router