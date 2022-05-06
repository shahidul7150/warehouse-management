import React from "react";

import { useNavigate } from "react-router-dom";

import "./Product.css";

const Product = ({ product }) => {

  console.log(product);
  const { _id, name, price, description, quantity, img } = product;

  const navigate = useNavigate();
  const navigateServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div className="container product-container">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h4>Price: ${price}</h4>
      <small>Available: {quantity}</small>
      <p>{description}</p>
      <input
        onClick={() => navigateServiceDetail(_id)}
        className="btn btn-success"
        type="submit"
        value="Details"
      />
    </div>
  );
};

export default Product;
