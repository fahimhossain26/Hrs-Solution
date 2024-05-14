import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Components/serviceCard/ServiceCard';

const HomePage6 = () => {

   


    const [sixData,setSixData]=useState()
    useEffect(()=>{
     const getData=async()=>{
         const {data}=await axios(`${import.meta.env.VITE_API_URL}/allService`)
           setSixData(data)
     }
   getData()
    },[])
    const [displayCard,setDisplayCard]=useState(data.slice(0,6))

    return (
        <div>
             {displayCard.map(display => (
              <ServiceCard key={display._id} display={display}  /> 
            ))}
        </div>
    );
};

export default HomePage6;