import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id,price,name,description}=service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name} </h2>
    <p>{description}</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <Link to={`/services/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;