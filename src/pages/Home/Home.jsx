import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CustumContext } from '../../config/Context';
import { useEffect } from 'react';


import api from '../../config/Api';
import Catalog from "../Catalog";


import styles from './Home.module.css';


const Home = () => { 
    return (
        <> 
            <Catalog/>           
        </>
    )
}
export default Home;