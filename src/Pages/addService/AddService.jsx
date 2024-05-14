import  { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddService = () => {
    const {user}= useContext(AuthContext)
    const navigate=useNavigate()

    const handelFromSubmit=async e=>{
        e.preventDefault()
        const form=e.target
        const service_name=form.service_name.value
        const photoURL=form.photoURL.value
        const price=parseFloat(form.price.value)
        const service_area=form.service_area.value
        const description=form.description.value
         const email=user?.email
        // const name=user?.displayName
        // const photo=user?.photoURL

        const addServiceData={
           service_name,  photoURL,price,service_area,description, email,
             buyer: {email:user?.email,
                  name:user?.displayName,
                  photo:user?.photoURL

                  }
        }
        try{
            const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/service`,addServiceData)
            console.log(data);
            toast.success('servvice data added sucessfully')
           navigate('/manage-service')
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-2xl '>
                <h2 className=' font-semibold text-gray-700 capitalize  text-center font-pops text-2xl'>
                    Add A Service
                </h2>

                <form onSubmit={handelFromSubmit}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='job_title'>
                                Service Name
                            </label>
                            <input
                                id='name'
                                name='service_name'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Service PhotoURL
                            </label>
                            <input
                                id='photoURL'
                                type='text'
                                name='photo'
                                
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                       


                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Price
                            </label>
                            <input
                                id='price'
                                type='price'
                                name='number'
                                
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                    

                        <div>
                            <label className='text-gray-700 ' htmlFor='max_price'>
                               Service Area
                            </label>
                            <input
                                id='service_area'
                                name='service_area'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-gray-700 ' htmlFor='description'>
                            Description
                        </label>
                        <textarea
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            name='description'
                            id='description'
                        ></textarea>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 btn-block'>
                            Save
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddService;