import React from 'react';
import './Product.css'


const Product = ({product}) => {
    console.log(product);
    const {name,price,description,img}=product
    return (
        <div className='container product-container' >
            <img  src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <p>{description}</p>
            <input className='btn btn-success' type="submit" value='Details' />
        </div>
    );
};

export default Product;