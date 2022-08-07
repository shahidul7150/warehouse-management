import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import useProducts from "../hooks/useProduct";

const EditItems = () => {
  const { updateId } = useParams();
  console.log(updateId);

    const [products, setProducts] = useProducts();
    console.log(products.img);
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
   
      <div className="py-12">
          
      <h3 className="text-center text-2xl font-bold py-5">Edit items {products.name}</h3>
      <div className='grid md:grid-cols-2 items-center'>
      <img src={products.img} alt="" />
      <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="block w-96 mb-3 p-3 border"
          {...register("name", { required: true, maxLength: 20 })}
                  placeholder={products.name}
                  required
        />
        <textarea
          className="block w-96 mb-3 p-3 border"
          {...register("description")}
                  placeholder="Description"
                  required
        />
        <input
          className="block w-96 mb-3 p-3 border"
          type="number"
          {...register("quantity")}
                  placeholder="quantity"
                  required
        />
        <input
          className="block w-96 mb-3 p-3 border"
          type="number"
          {...register("price")}
                  placeholder="Price"
                  required
        />
        <input
          className="block w-96 mb-3 p-3 border"
          type="text"
          {...register("img")}
                  placeholder="Photo URL"
                  required
        />
        <input className="btn btn-success hover:text-white " type="submit" value="Update item" />
      </form>
      </div>
    </div>
  );
};

export default EditItems;
