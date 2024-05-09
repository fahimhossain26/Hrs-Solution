import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routs/Routs.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
   
 
  </React.StrictMode>,
)
