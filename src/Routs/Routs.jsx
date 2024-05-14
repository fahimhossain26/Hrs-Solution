import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServicecDetails from "../Pages/serviceDetails/ServicecDetails";
import AddService from "../Pages/addService/AddService";
import ErrorPage from "../Pages/errorPage/ErrorPage";
import ManageService from "../Pages/manageService/ManageService";
import UpdateService from "../Pages/updateService/UpdateService";
import PrivateRouts from "./PrivateRouts";
import BookedService from "../Pages/bookedService/BookedService";
import ServiceTodo from "../Pages/service-todo/ServiceTodo";
import AllServices from "../Pages/allServices/AllServices";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
       
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
        element:<PrivateRouts><ServicecDetails></ServicecDetails></PrivateRouts>,
       loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`)   
       },
       {
        path: '/update/:id',
        element:<PrivateRouts><UpdateService></UpdateService></PrivateRouts>,
       loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`)   
       },
       {
        path:'/add-service',
        element:<PrivateRouts>
          <AddService></AddService>
        </PrivateRouts>

       },
       {
        path:'/manage-service',
        element:<PrivateRouts><ManageService></ManageService></PrivateRouts>
       },
       {
        path:'/booked-service',
        element:<PrivateRouts>
          <BookedService></BookedService>
        </PrivateRouts>

       },
       {
        path:'/service-todo',
        element:<PrivateRouts>
          <ServiceTodo></ServiceTodo>
        </PrivateRouts>

       },
       {
        path:'/allServices',
        element:
          <AllServices></AllServices>
       

       },
       
     


    


    ]
  },
]);


export default router