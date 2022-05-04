import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import useProducts from "../hooks/useProduct";

const EditItems = () => {
  const { updateId } = useParams();
  console.log(updateId);

    const [products, setProducts] = useProducts();
    console.log(products.name);
  // const [products,setProducts] = useProducts();
  useEffect(() => {
    const url = `http://localhost:5000/service/${updateId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    console.log(data);
    const url = `http://localhost:5000/service/${updateId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((itemData) => {
        console.log(itemData);
      });
    event.target.reset();
  };
  return (
      <div>
          
      <h3 className="text-center mb-5">Edit items {products.name}</h3>

      <form className="w-25 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="d-block w-100 mb-3"
          {...register("name", { required: true, maxLength: 20 })}
                  placeholder="Name"
                  required
        />
        <textarea
          className="d-block w-100 mb-3"
          {...register("description")}
                  placeholder="Description"
                  required
        />
        <input
          className="d-block w-100 mb-3"
          type="number"
          {...register("quantity")}
                  placeholder="quantity"
                  required
        />
        <input
          className="d-block w-100 mb-3"
          type="number"
          {...register("price")}
                  placeholder="Price"
                  required
        />
        <input
          className="d-block w-100 mb-3"
          type="text"
          {...register("img")}
                  placeholder="Photo URL"
                  required
        />
        <input className="btn btn-success" type="submit" value="Update item" />
      </form>
    </div>
  );
};

export default EditItems;
