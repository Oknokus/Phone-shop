import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { CustumContext } from '../../config/Context';

import api from '../../config/Api';

import CardProduct from './CardProduct/CardProduct';


import styles from './Product.module.css';

const Product = () => {
    const params = useParams();

    const location = useLocation();
    const {category} = location.state;


    const {       
        products,
        setProducts
    } = useContext(CustumContext);


    useEffect(() => {
        api(`${category}/${params.id}`).json()
            .then(res => setProducts(res))
    }, [])

    return (
        <>
            <CardProduct products={products}/>
        </>
    )
}

export default Product;