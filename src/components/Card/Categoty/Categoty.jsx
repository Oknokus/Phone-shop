import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styles from './Categoty.module.css';
import { useContext, useEffect, useState } from 'react';
import { CustumContext } from '../../../config/Context';


const Categoty = ({category}) => {
   const{
    setPage,
    page
   } = useContext(CustumContext);
   

    const location = useLocation().pathname.slice(1);

     
    return (
        <div className={styles.category}>
             {             
                category.map(elem => (
                    <Link 
                        to={`/product/${elem.id}`}
                        onClick={() => setPage(location)} 
                        key={elem.id}>
                        <div className={styles.category_container}
                                >
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
    )
}

export default Categoty;