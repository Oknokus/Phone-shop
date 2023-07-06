import PropTypes from 'prop-types';
import { useContext } from 'react';

import { CustumContext } from '../../../config/Context';

import Categoty from '../../../components/Card/Categoty/Categoty';


import styles from './Dect.module.css';


const Dect = () => {
    const {
        dect
    } = useContext(CustumContext)
    
    return (
        <>
            <Categoty category={dect}/>
        </>        
    )
}

export default Dect;