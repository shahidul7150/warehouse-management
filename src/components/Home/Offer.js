import React from 'react';
import "./Offer.css";
const Offer = () => {
    return (
        <div className='offer-container my-5'>

            <div className='d-flex justify-content-between align-items-center p-5 bg-color1' >
                <div>
                    <p>Special Capsicum</p>
                    <h3>Upto 50% Off</h3>
                  
                </div>
                <img className='img-size' src="https://farmingbase.com/wp-content/uploads/2021/04/bell-pepper.png" alt="" />
            </div>

            <div className='d-flex justify-content-between align-items-center p-5 bg-color2'>
                <div>
                <p>Special Grocery</p>
                    <h3>Upto 50% Off</h3>
                </div>
                <img className='img-size' src="https://www.dole.com/-/media/project/dole/produce-images/headers/dole-produce-veg-medley.png?rev=e9e55201dbc6451e91cfd7d73d7cdb06&hash=CC1AFA2C5EC625A80EA224E1232FE39B" alt="" />
            </div>

            <div className='d-flex justify-content-between align-items-center p-5 bg-color3'>
                <div>
                <p>Special Bit</p>
                    <h3>Upto 25% Off</h3>
                </div>
                <img className='img-size' src="https://santacolor.com/wp-content/uploads/2020/02/beet-red-E60.png" alt="" />
            </div>

        </div>
    );
};

export default Offer;