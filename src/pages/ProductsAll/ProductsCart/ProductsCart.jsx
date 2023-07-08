import PropTypes from 'prop-types';
import { useContext } from 'react';

import { CustumContext } from '../../../config/Context';

import CardProduct from '../../Product/CardProduct/CardProduct';


import styles from './ProductsCart.module.css';


const ProductsCart = () => {
    const{   
        item  
    } = useContext(CustumContext)  

    return (
        <>
           <CardProduct products={item} />
        </>
    )
}

export default ProductsCart;