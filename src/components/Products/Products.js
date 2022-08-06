import React from "react";
import useProducts from "../hooks/useProduct";
import Product from "../Product/Product";
import './Products.css';
const Products = () => {

  const [products] = useProducts()

  return (
  <div>
    <h2 className="text-3xl text-center font-bold py-3">Products</h2>
      <div className='grid lg:grid-cols-4 gap-8 mx-12'>
          {
              products?.slice(0,6).map(product=><Product key={product._id} product={product}></Product>)
      }
    </div>
  </div>
  );
};

export default Products;
