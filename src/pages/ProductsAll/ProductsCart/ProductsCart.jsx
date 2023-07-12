import PropTypes from 'prop-types';
import { useContext } from 'react';

import { CustumContext } from '../../../config/Context';

import CardProduct from '../../Product/CardProduct/CardProduct';
import LinkGoBack from '../../../components/LinkGoBack/LinkGoBack';


import styles from './ProductsCart.module.css';


const ProductsCart = () => {
    const{   
        item  
    } = useContext(CustumContext)  

    return (
        <>  
           <LinkGoBack/>  
           <CardProduct products={item} />
        </>
    )
}

export default ProductsCart;