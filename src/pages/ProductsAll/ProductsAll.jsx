import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';

import { CustumContext } from '../../config/Context';


import styles from './ProductsAll.module.css';


const ProductsAll = () => {    
    const{
        getProductsAll,
        allProducts
    } = useContext(CustumContext)

    
    useEffect(() => {
        getProductsAll()
    }, [])
    
    return (
        <>
            
        </>
    )
}
export default ProductsAll;