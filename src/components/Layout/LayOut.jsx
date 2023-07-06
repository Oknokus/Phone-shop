import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';


import styles from './LayOut.module.css';


const LayOut = () => {
    
    return (
        <>  
            <Header/>           

            <Outlet/>
            <Footer/>
        </>
    )
}

export default LayOut;