import React from 'react';

const MyItem = ({ product }) => {
    const { _id, name, img,price,description,quantity } = product;
    return (
       
        <div className='border p-4 rounded-lg '>
            <img width="50% " className='mx-auto p-4' src={img} alt="" />
            <h3 className='text-xl font-bold'>{name}</h3>
            <h6>Available: {quantity}</h6>
          <h5>Price: ${price}</h5>
          <p>{description}</p>
        </div>
    );
};

export default MyItem;