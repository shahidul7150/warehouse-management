import React from 'react';
import './OptimizeInv.css';
const OptimizeInv = () => {
    return (
        <div className='mt-5'>
            <h3 className='text-center'>Optimize Inventory System</h3>
            <div className='optimize-container'>
                <div>
                    <img src="https://www.earningdiary.com/wp-content/uploads/2019/07/Manage-Stock-Using-the-Right-Inventory-Management-Tools.png" alt="" />
                </div>
                <div className='optimize-article'>
                    <div >
                        <h4>Flexible control</h4>
                        <p>Use the inventory method that makes sense fot your types of warehouse business</p>
                    </div>
                    <div>
                        <h4>Full Visibility</h4>
                        <p>Keep just the amount to meet demand, eliminate stock-outs,never lose sight of inventory</p>
                    </div>
                    <div>
                        <h4>Accurate Costing</h4>
                        <p>Know your profitability and track actual costs,not average inventory value</p>
                    </div>
                    <div>
                        <h4>Inventory Planning</h4>
                        <p>Tap a wealth of data to get the right mix of products and channels</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OptimizeInv;