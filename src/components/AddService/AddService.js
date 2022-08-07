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
    
    <div className="mx-auto mt-5">
      <h4 className='text-center text-2xl font-bold'>Add service</h4>
      <div className='grid md:grid-cols-2 items-center'>
        <img src="https://st2.depositphotos.com/1494134/7007/v/950/depositphotos_70076425-stock-illustration-cabbage-isolated-on-white-vector.jpg" alt="" />
      <form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>
        <input
          className="block w-96 mb-3 p-3 border"
          {...register('name', { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <textarea
          className="block w-96 mb-3 p-3 border"
          {...register('description')}
          placeholder="Description"
        />
        <input
          className="block w-96 mb-3 p-3 border"
          type="number"
          {...register('quantity')}
          placeholder="quantity"
        />
        <input
          className="block w-96 mb-3 p-3 border"
          type="number"
          {...register('price')}
          placeholder="Price"
        />
        <input
          className="block w-96 mb-3 p-3 border"
          type="text"
          {...register('img')}
          placeholder="Photo URL"
        />
        <input className="btn btn-success" type="submit" value="Add item" />
      </form>
      </div>
    </div>
  );
};

export default AddService;
