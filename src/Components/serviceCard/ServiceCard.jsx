
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { _id, price,
    service_name, description, photoURL, buyer, email } = service
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={photoURL} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title mx-auto text-3xl font-mono font-bold text-orange-500 mb-2">{service_name} </h2>
        <p>{description }</p>
        <p className='text-orange-600 font-bold'><span className='text-black'>service Price:</span> {price}$</p>
      <div className='flex items-center gap-2'>
      <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
          <img src={buyer?.photo} alt='' />
        </div>
      <div> <p>{buyer?.name}</p></div>
      
       
      </div>
        <div className="">
          <Link to={`/services/${_id}`}><button className="btn btn-block mt-1 bg-orange-300">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;