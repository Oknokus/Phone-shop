import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { CustumContext } from '../../../config/Context';

import wishlistImg from "../../../assets/favoritesICon/wishlistImg.svg";
import heartIcon from "../../../assets/favoritesICon/heartIcon.png";

import styles from './Category.module.css';


const Category = ({category}) => {
   const{
    setPage,
    page,
    favorites, 
    setFavorites,
    clickHandlefavorites
   } = useContext(CustumContext);
   

    const location = useLocation().pathname.slice(1);

     
    return (
        <div className={styles.category}>
             {             
                category.map((elem, index )=> (
                    <div>
                        <img 
                            className={styles.container_favorites}
                            onClick={() => clickHandlefavorites(elem)}
                            src={favorites.find(item => item.page === elem.page && item.id === elem.id) ? heartIcon: wishlistImg} alt="wishlistImg" /> 
                                
                        <Link 
                            to={`/product/${elem.id}`}
                            onClick={() => setPage(location)} 
                            key={index}>                                
                            <div className={styles.category_container}>                           
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
    )
}

export default Category;