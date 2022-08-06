import React from 'react';
import "./Offer.css";
const Offer = () => {
    return (
       
        <div className=' my-12 grid lg:grid-cols-3 lg:gap-20 gap-5 mx-12 '>

            <div className='flex justify-between items-center p-5 bg-color1 rounded-xl hover:shadow-md' >
                <div>
                    <p className='text-xl font-medium'>Special Capsicum</p>
                    <h3 className='text-3xl font-bold'>Upto 50% Off</h3>
                  
                </div>
                <img className='img-size py-8' src="https://farmingbase.com/wp-content/uploads/2021/04/bell-pepper.png" alt="" />
            </div>

            <div className='flex justify-between items-center p-5 bg-color2 rounded-xl hover:shadow-md'>
                <div>
                <p className='text-xl font-medium'>Special Grocery</p>
                    <h3 className='text-3xl font-bold'>Upto 50% Off</h3>
                </div>
                <img className='img-size' src="https://www.dole.com/-/media/project/dole/produce-images/headers/dole-produce-veg-medley.png?rev=e9e55201dbc6451e91cfd7d73d7cdb06&hash=CC1AFA2C5EC625A80EA224E1232FE39B" alt="" />
            </div>

            <div className='flex justify-between items-center p-5 bg-color3 rounded-xl hover:shadow-md'>
                <div>
                <p className='text-xl font-medium'>Special Bit</p>
                    <h3 className='text-3xl font-bold'>Upto 25% Off</h3>
                </div>
                <img className='img-size' src="https://santacolor.com/wp-content/uploads/2020/02/beet-red-E60.png" alt="" />
            </div>

        </div>
    );
};

export default Offer;