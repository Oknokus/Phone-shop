import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';

import { CustumContext } from '../../config/Context';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Categoty from '../../components/Card/Categoty/Categoty';
import CardProduct from '../Product/CardProduct/CardProduct';


import styles from './ProductsAll.module.css';
import api from '../../config/Api';


const ProductsAll = () => { 
    const navigate = useNavigate();
    const location = useLocation();

  
    const{
        getProductsAll,
        allProducts,      
        setItem,
        search
    } = useContext(CustumContext)  
    
    useEffect(() => {          
         getProductsAll()
    }, []);
     
    
    if(allProducts.length) {
        return (
            <section className={styles.productsAll}>                
                    {             
                        allProducts.map((elem, index) => (  
                            <Link to={`/productsCart/${elem.id}`}
                                onClick={() => setItem(elem)}                           
                                key={index}>                           
                                <div
                                    key={index}
                                    className={styles.productsAll_container}>
                                    <span className={styles.container_favorites}>🤍</span>
                                    <img
                                        className={styles.container_img} 
                                        src={elem.image1} alt="containerImg" />
                                    <h3 className={styles.container_title}>{elem.category}</h3>
                                    <p className={styles.container_price}>{elem.price}</p>   
                                </div>
                            </Link>
                        ))
                    }       
            </section>
        )
    }    
}

export default ProductsAll;