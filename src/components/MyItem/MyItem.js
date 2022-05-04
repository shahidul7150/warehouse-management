import React from 'react';

const MyItem = ({ product }) => {
    const { _id, name, img,price,description } = product;
    return (
        <div className='border'>
            <img width="80px" src={img} alt="" />
          <h3>{name}</h3>
          <h4>Price: ${price}</h4>
          <p>{description}</p>
        </div>
    );
};

export default MyItem;