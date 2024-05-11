import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import axios from 'axios';

const ServiceCards = () => {

   const [allService,setAllService]=useState([])
   useEffect(()=>{
    const getData=async()=>{
        const {data}=await axios(`${import.meta.env.VITE_API_URL}/allService`)
          setAllService(data)
    }
  getData()
   },[])
    return (
        <div className=' px-4 mx-auto '>
            <h2 className="text-5xl">Service are here </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {/* {
                    allService.map(service => (<ServiceCard

                        key={service._id} service={service}
                    ></ServiceCard>))
                } */}




                {
                    allService.map(service => (<ServiceCard

                        key={service._id} service={service}
                    ></ServiceCard>))
                }
            </div>




        </div>
    );
};

export default ServiceCards;