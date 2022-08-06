import React from 'react';
import './OptimizeInv.css';
const OptimizeInv = () => {
    return (

     
        <div className='mt-5 mb-5'>
            <h3 className='text-center'>Optimize Inventory System</h3>
            <div className='optimize-container '>
                <div>
                    <img src="https://www.earningdiary.com/wp-content/uploads/2019/07/Manage-Stock-Using-the-Right-Inventory-Management-Tools.png" alt="" />
                </div>
                <div className='grid lg:grid-cols-2 gap-5'>
                    <div className='bg-white p-3 shadow'>
                        <h4 className='text-2xl font-semibold'>Flexible control</h4>
                        <p className='py-3'>Use the inventory method that makes sense fot your types of warehouse business</p>
                    </div>
                    <div className='bg-white p-3 shadow'>
                        <h4 className='text-2xl font-semibold'>Full Visibility</h4>
                        <p className='py-3'>Keep just the amount to meet demand, eliminate stock-outs,never lose sight of inventory</p>
                    </div>
                    <div className='bg-white p-3 shadow'>
                        <h4 className='text-2xl font-semibold'>Accurate Costing</h4>
                        <p className='py-3'>Know your profitability and track actual costs,not average inventory value</p>
                    </div>
                    <div className='bg-white p-3 shadow'>
                        <h4 className='text-2xl font-semibold'>Inventory Planning</h4>
                        <p className='py-3'>Tap a wealth of data to get the right mix of products and channels</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OptimizeInv;