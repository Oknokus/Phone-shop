import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';

import { CustumContext } from '../../config/Context';
import { Link } from 'react-router-dom';

import CatalogFilter from '../../components/CatalogFilter/CatalogFilter';

import wishlistImg from "../../assets/favoritesICon/wishlistImg.svg";
import heartIcon from "../../assets/favoritesICon/heartIcon.png";


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
        sort,
        clickHandlefavorites,
        favorites
    } = useContext(CustumContext) 
             
    useEffect(() => {    
        searchProducts(); 
    }, [search, category, sort, slider]);

  
      
    if (!searchResult.length) {        
        }
    return (    
            <section>              
                <div className={styles.productsAll_containerAll}>
                <CatalogFilter slider={slider} setSlider={setSlider}/>                   

                    <div className={styles.productsAll}>
                        {             
                            searchResult.map((elem, index )=> (
                                <div key={index}>
                                    <img
                                        className={styles.productsAll_container}
                                        onClick={() => clickHandlefavorites(elem)}
                                        src={favorites.find(item => item.page === elem.page && item.id === elem.id) ? heartIcon: wishlistImg} alt="wishlistImg" />                                     
                                    <Link to={`/productsCart/${elem.id}`}
                                        onClick={() => setItem(elem)}>       
                                        
                                        <div className={styles.container_item}>                                  
                                            <img
                                                className={styles.container_img} 
                                                src={elem.image1} alt="containerImg" />
                                            
                                            <h3 className={styles.container_title}>{elem.category}</h3>
                                            <p className={styles.container_price}>{elem.price}</p> 
                                        </div>  
                                    </Link>    
                                </div>
                            ))
                        }   
                    </div>
                </div>             
            </section>
        )
    } 

export default ProductsAll;