import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    },[])
    return (
        <div className='w-50 mx-auto'>
            <h2>{service.name}------Service Detail</h2>
            <img width="100%" src={service.img} alt="" />
            <h4>Name: {service.name}</h4>
            <br />
            <Link to="/checkout">
                <button className='btn btn-success'>Product Maintain</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;