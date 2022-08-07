import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyItem from "../MyItem/MyItem";
// import useProducts from "../hooks/useProduct";
import './MyItems.css';
const MyItems = () => {
const [user]=useAuthState(auth)
  const [products, setProducts] = useState([]);
    useEffect(() => {
        const email = user.email;
        console.log(email);
        const url=`http://localhost:5000/service`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user]);
  return (
    
    <div className="m-12">
      <h2 className="text-center text-xl font-semibold my-4">My all added items</h2>
      <h6 className="text-center  my-4" >Available items:{products.length} </h6>
      {
        user&&<div  className="myItemsContainer container text-center">
        {products?.map((product) => (
          <MyItem key={product._id} product={product}></MyItem>
        ))}
      </div>
      }
    </div>
  );
};

export default MyItems;
