import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useProducts from "../hooks/useProduct";
import './ManageInv.css';
const ManageInv = () => {
  const [loading] = useAuthState(auth);
  if (loading) {
    <h5>Loading.......</h5>
  }
  const [products, setProducts] = useProducts();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };

  const navigateEditDetail = (id) => {
    navigate(`/update/${id}`);
  };
  return (

    <div className="w-2/4 mx-auto ">
      <h2 className="mb-4 mt-5">Manage inventory</h2>
      {products?.map((product) => (
        <div  key={product._id} className="small-screen d-flex justify-content-between align-items-center border p-2 mb-2">
          <div
            className="md:flex justify-between items-center  "
           
          >
            <img
              width="30%"
              height="30%"
              className="me-4 md:mx-0 mx-auto"
              src={product.img}
              alt=""
            />
            <div className="w-3/4">
              <h4 className="text-2xl font-bold">{product.name}</h4>
              <h4>Price: ${product.price}</h4>
              <small>Available: {product.quantity}</small>
              <p>{product.description}</p>
            </div>
            <div className="w-25 grid  gap-3 ">
            <button
              onClick={() => handleDelete(product._id)}
              className="mb-2 bg-red-500 p-2 flex justify-center rounded-lg hover:text-white"
            >
              <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
            </button>
            
            <button
              onClick={() => navigateEditDetail(product._id)}
              className=" bg-blue-500 p-2 rounded-lg font-semibold hover:text-white"
            >
              Edit
            </button>
          </div>
          </div>

          
        </div>
      ))}
    </div>
  );
};

export default ManageInv;
