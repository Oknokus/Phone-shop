import { useContext } from 'react';

import { CustumContext } from '../../config/Context';

import Category from '../../components/Card/Category/Category';


import styles from './Favorites.module.css';


const Favorites = () => {
    const{   
    favorites, 
    setFavorites,
   } = useContext(CustumContext);

    return (
        <>
            <Category category={favorites}/>
        </>
    )
}
export default Favorites;