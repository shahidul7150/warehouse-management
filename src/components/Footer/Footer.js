import React from 'react';
import './Footer.css'
const Footer = () => {
    
    
    return (
        <div className='footer-container-bg pb-4'>
               <div className='py-5 mt-5  shadow-md footer-container px-5'>
            <div className='text-start'>
                    <h4>F2CSTORE</h4>
                    <p className='w-50'>We are grocery product supplier with a mission.We would like to send product inforn of your door.</p>
                    <p>
                        <img className='me-1'  src="https://www.hostinger.com/tutorials/wp-content/themes/tutorialsthemeuplift/public/images/payments/2020/visa.png" alt="" />
                        <img className='me-1' src="https://www.hostinger.com/tutorials/wp-content/themes/tutorialsthemeuplift/public/images/payments/2020/mastercard.png" alt="" />
                        <img className='me-1' src="https://www.hostinger.com/tutorials/wp-content/themes/tutorialsthemeuplift/public/images/payments/2020/amex.png" alt="" />
                        <img className='me-1' src="https://www.hostinger.com/tutorials/wp-content/themes/tutorialsthemeuplift/public/images/payments/2020/dinersclub.png" alt="" />
                    </p>
            </div>

            <div className='text-end'>
                    <div>
                    <h5 > Connect</h5>
                    <p ><a className='text-decoration-none text-dark' href="https://twitter.com/shahidul1994" target="_blank">Twitter</a> </p>
                    <p ><a className='text-decoration-none text-dark' href="https://www.facebook.com/shahiduldeveloper" target="_blank">Facebook</a> </p>
                    <p ><a className='text-decoration-none text-dark' href="https://github.com/shahidul7150" target="_blank">Github</a></p>
                    </div>
            </div>
            </div>
            <p className='text-center'>Copyright © 2022 F2CSTORE | All rights reserved. </p>
            
     </div>
    );
};

export default Footer;