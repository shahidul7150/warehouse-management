import React from "react";
import useProducts from "../hooks/useProduct";
import MyItem from "../MyItem/MyItem";
import './MyItems.css'
const MyItems = () => {
  const [products, setProducts] = useProducts();
  return (
    <div>
      <h2 className="text-center my-4">My all added items</h2>
      <div  className="myItemsContainer container text-center">
        {products.map((product) => (
          <MyItem key={product._id} product={product}></MyItem>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
