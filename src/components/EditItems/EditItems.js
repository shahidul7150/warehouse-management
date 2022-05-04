import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useProducts from '../hooks/useProduct';



const EditItems = () => {
    const {updateId}=useParams()
    const [products,setProducts] = useProducts();
    useEffect(() => {
        const url = `http://localhost:5000/service/${updateId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])
    return (
        <div>
            <h3>Edit items {products.name}</h3>
        </div>
    );
};

export default EditItems;