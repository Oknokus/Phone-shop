import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';

import { CustumContext } from '../../config/Context';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Categoty from '../../components/Card/Category/Category';
import CardProduct from '../Product/CardProduct/CardProduct';
import CatalogFilter from '../../components/CatalogFilter/CatalogFilter';

import api from '../../config/Api';


import styles from './ProductsAll.module.css';


const ProductsAll = () => { 
     
    const{
        searchResult,
        searchProducts,
        setItem,    
        slider,
        setSlider,
        search,
        category,
        sort
    } = useContext(CustumContext)  
    
    useEffect(() => {    
        searchProducts()
    }, [search, category, sort, slider]);
         
    if (!searchResult.length) {        
        }
    return (
            <section className={styles.productsAll}>
                <CatalogFilter slider={slider} setSlider={setSlider}/>  
                <div className={styles.productsAll_containerAll}>                             
                    {             
                        searchResult.map((elem, index) => (  
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
                </div>    
            </section>
        )
    } 

export default ProductsAll;