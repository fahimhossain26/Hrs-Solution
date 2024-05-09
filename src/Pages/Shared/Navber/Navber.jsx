import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navber = () => {
    const {user}=useContext(AuthContext)
    return (
       
              <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
                <div className='flex-1'>
                  <div className='flex gap-2 items-center'>
                    <img className='w-auto h-20' src='https://i.postimg.cc/RFNgNfvv/Blue-And-White-Cleaning-Services-Logo-removebg-preview.png' alt='' />
                    <span className='font-bold text-xl'>HRS solution</span>
                  </div>
                </div>
                <div className='flex-none'>
                  <ul className='menu menu-horizontal px-1 text-xl font-pops'>
                    <li>
                      <div>Home</div>
                    </li>
          
                  {
                    !user &&(
                    <li>
                    <div>Login</div>
                     </li>)
                  }

                  </ul>
          
                  {
                    user &&(
                        <div className='dropdown dropdown-end z-50'>
                    <div
                      tabIndex={0}
                      role='button'
                      className='btn btn-ghost btn-circle avatar'
                    >
                      <div className='w-10 rounded-full' title=''>
                        <img
                          referrerPolicy='no-referrer'
                          alt='User Profile Photo'
                          src=''
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 '
                    >
                      <li>
                        <div className='justify-between '>Add Service</div>
                      </li>
                      <li>
                        <div>Manage Service</div>
                      </li>
                      <li>
                        <div>Booked-Services</div>
                      </li>
                      <li>
                        <div>Service-To-Do</div>
                      </li>
                      <li className='mt-2'>
                        <button className='bg-gray-200 block text-center'>Logout</button>
                      </li>
                    </ul>
                  </div>
                    )
                  }
                </div>
              </div>
           
          
       
    );
};

export default Navber;