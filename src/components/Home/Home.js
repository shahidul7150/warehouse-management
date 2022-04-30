import React from 'react';
import { useNavigate } from 'react-router-dom';
import Products from '../Products/Products';



const Home = () => {
const navigate=useNavigate()
    return (
        <div>
            <div style={{height:"350px"}} className='bg-success d-flex text-center align-items-center justify-content-center'>
                <div>
                <h2 className='display-4 fw-bold text-white'>F2C Inventory System</h2>
                    <h4 className='text-light'>Maintenance your warehouse</h4>
                    
                  
                      <input onClick={()=>navigate('/register')} className='btn btn-warning mt-2' type="button" value="Join Now" />
   
                   
                </div>
            </div>
            <h2 className='text-center my-5'>Products</h2>
            <Products></Products>
            

        </div>
    );
};

export default Home;