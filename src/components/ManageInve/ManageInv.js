import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProduct";
import './ManageInv.css'
const ManageInv = () => {
  const [products, setProducts] = useProducts();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to delete?");
    if (proceed) {
      const url = `https://guarded-inlet-97562.herokuapp.com/service/${id}`;
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
    <div className="w-50 mx-auto sm-container">
      <h2 className="mb-4 mt-5">Manage inventory</h2>
      {products.map((product) => (
        <div  key={product._id} className="small-screen d-flex justify-content-between align-items-center border p-2 mb-2">
          <div
            className="d-flex justify-content-start align-items-center sm-content"
           
          >
            <img
              width="50px"
              height="50px"
              className="me-4"
              src={product.img}
              alt=""
            />
            <div>
              <h4>{product.name}</h4>
              <h4>Price: ${product.price}</h4>
              <small>Available: {product.quantity}</small>
              <p>{product.description}</p>
            </div>
          </div>

          <div className="w-25 sm-btn ">
            <button
              onClick={() => handleDelete(product._id)}
              className="mb-2 btn btn-danger  w-50"
            >
              X
            </button>
            <br />
            <button
              onClick={() => navigateEditDetail(product._id)}
              className=" btn btn-primary w-50"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageInv;
