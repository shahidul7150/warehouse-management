import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>{serviceId}Service Detail</h2>
            <Link to="/checkout">
                <button className='btn btn-success'>Product Maintain</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;