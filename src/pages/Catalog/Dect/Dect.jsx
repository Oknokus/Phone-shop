import PropTypes from 'prop-types';
import { useContext } from 'react';

import { CustumContext } from '../../../config/Context';

import Category from '../../../components/Card/Category/Category';


import styles from './Dect.module.css';


const Dect = () => {
    const {
        dect
    } = useContext(CustumContext)
    
    return (
        <>
            <Category category={dect}/>
        </>        
    )
}

export default Dect;