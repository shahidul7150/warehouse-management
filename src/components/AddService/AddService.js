import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    console.log(data);
    const url = `http://localhost:5000/service`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((itemData) => {
        console.log(itemData);
        alert('Product added successfully');
      });
    event.target.reset();
  };

  return (
    <div className="w-25 mx-auto mt-5">
      <h4>Add service</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="d-block w-100 mb-3"
          {...register('name', { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <textarea
          className="d-block w-100 mb-3"
          {...register('description')}
          placeholder="Description"
        />
        <input
          className="d-block w-100 mb-3"
          type="number"
          {...register('quantity')}
          placeholder="quantity"
        />
        <input
          className="d-block w-100 mb-3"
          type="number"
          {...register('price')}
          placeholder="Price"
        />
        <input
          className="d-block w-100 mb-3"
          type="text"
          {...register('img')}
          placeholder="Photo URL"
        />
        <input className="btn btn-success" type="submit" value="Add item" />
      </form>
    </div>
  );
};

export default AddService;
