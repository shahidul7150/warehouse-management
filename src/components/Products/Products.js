import React from "react";
import useProducts from "../hooks/useProduct";
import Product from "../Product/Product";
import './Products.css'
const Products = () => {

  const [products] = useProducts()

  return (
    <div className='products-container px-3'>
          {
              products?.slice(0,6).map(product=><Product key={product._id} product={product}></Product>)
      }
    </div>
  );
};

export default Products;
