import React from 'react';

const MyItem = ({ product }) => {
    const { _id, name, img,price,description,quantity } = product;
    return (
        <h1>Item</h1>
        // <div className='border'>
        //     <img width="80px" src={img} alt="" />
        //     <h3>{name}</h3>
        //     <h6>Available: {quantity}</h6>
        //   <h5>Price: ${price}</h5>
        //   <p>{description}</p>
        // </div>
    );
};

export default MyItem;