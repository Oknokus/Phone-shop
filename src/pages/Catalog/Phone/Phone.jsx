import PropTypes from 'prop-types';
import {useContext} from 'react';

import {CustumContext} from '../../../config/Context';

import Category from '../../../components/Card/Category/Category';


import styles from './Phone.module.css';


const Phone = ({type}) => {
    const {
        phone
    } = useContext(CustumContext)

    return (
        <>
            <Category category={phone}/>
        </>
    )
}

export default Phone;