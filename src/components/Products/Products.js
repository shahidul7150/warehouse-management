import React, { useEffect, useState } from "react";
import useProducts from "../hooks/useProduct";
import Product from "../Product/Product";
import './Products.css'
const Products = () => {
  const [products]=useProducts()
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/service")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  return (
    <div className='products-container px-3'>
          {
              products.map(product=><Product key={product._id} product={product}></Product>)
      }
    </div>
  );
};

export default Products;
