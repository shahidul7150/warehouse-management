import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// import useProducts from "../hooks/useProduct";
import './MyItems.css';
const MyItems = () => {
const [user]=useAuthState(auth)
  const [products, setProducts] = useState([]);
    useEffect(() => {
        // const email = user.email;
        // console.log(email);
        const url=`http://localhost:5000/service`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user]);
  return (
    <h1>My items</h1>
    // <div>
    //   <h2 className="text-center my-4">My all added items</h2>
    //   <h6 className="text-center " >Available items:{products.length} </h6>
    //   <div  className="myItemsContainer container text-center">
    //     {products?.map((product) => (
    //       <MyItem key={product._id} product={product}></MyItem>
    //     ))}
    //   </div>
    // </div>
  );
};

export default MyItems;
