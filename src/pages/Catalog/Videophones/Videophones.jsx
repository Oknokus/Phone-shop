import PropTypes from 'prop-types';
import { useContext } from 'react';

import { CustumContext } from '../../../config/Context';

import Categoty from '../../../components/Card/Categoty/Categoty';


import styles from './Videophones.module.css';


const Videophones = () => {
    const {
        videophones
    } = useContext(CustumContext)
    
    return (
        <>
            <Categoty category={videophones}/>
        </>        
    )
}

export default Videophones;