import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Components/serviceCard/ServiceCard';

const AllServices = () => {
    const pages = [1, 2, 3, 4, 5]
    const [search,setSearch]=useState('')


    const [allService,setAllService]=useState([])
    useEffect(()=>{
     const getData=async()=>{
         const {data}=await axios(`${import.meta.env.VITE_API_URL}/allService`)
           setAllService(data)
     }
   getData()
    },[])

console.log(allService);

const handelSearch=e=>{
    e.preventDefault()
    const text=e.target.search.value
}

    
    return (
        <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
        <div>
          <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
            <div>
            
            </div>
  
            <form onSubmit={handelSearch}>
              <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                <input
                  className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                  type='text'
                  name='search'
                  placeholder='Enter Job Title'
                  aria-label='Enter Job Title'
                />
  
                <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                  Search
                </button>
              </div>
            </form>
          
            <button className='btn'>Reset</button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mt-10'>
            {allService.map(service => (
              <ServiceCard key={service._id} service={service}  />
            ))}
          </div>
        </div>
  
        <div className='flex justify-center mt-12'>
      
  
         
  
         
        </div>
      </div>
    );
};

export default AllServices;