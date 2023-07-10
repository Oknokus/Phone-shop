import PropTypes from 'prop-types';
import { useContext } from 'react';

import { CustumContext } from '../../config/Context';

import Category from '../../components/Card/Category/Category';
import CardProduct from '../Product/CardProduct/CardProduct';


import styles from './Favorites.module.css';


const Favorites = () => {
    const{   
    favorites, 
    setFavorites,
   } = useContext(CustumContext);
   console.log(favorites)
    return (
        <>
            <Category category={favorites}/>
        </>
    )
}

export default Favorites;