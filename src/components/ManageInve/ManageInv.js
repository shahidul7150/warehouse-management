import React from "react";
import useProducts from "../hooks/useProduct";

const ManageInv = () => {
    const [products,setProducts] = useProducts();
    
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure want to delete?");
        if(proceed){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method:"DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining)
            })
        }
    }
  return (
    <div className="w-50 mx-auto">
      <h2 className="mb-4 mt-5">Manage inventory</h2>
      {products.map((product) => (
          <div className="d-flex justify-content-between align-items-center border p-2 mb-2">
              <div className="d-flex justify-content-start align-items-center" key={product._id}>
          <img width="50px" height="50px" className="me-4" src={product.img} alt="" />
              <div>
              <h4>{product.name}</h4>
          <h4>Price: ${product.price}</h4>
          <p>{product.description}</p>
          </div>
              </div>
              
              <div className="w-25">
                  <button onClick={()=>handleDelete(product._id)} className="mb-2 btn btn-danger  w-50">X</button>
                  <br />
                  <button className=" btn btn-primary w-50">Edit</button>
              </div>
        </div>
      ))}
    </div>
  );
};

export default ManageInv;
