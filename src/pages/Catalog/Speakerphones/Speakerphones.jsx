import PropTypes from 'prop-types';
import { useContext } from 'react';

import { CustumContext } from '../../../config/Context';

import Categoty from '../../../components/Card/Categoty/Categoty';


import styles from './Speakerphones.module.css';


const Speakerphones = () => {
    const {
        speakerphones
    } = useContext(CustumContext)
    
    return (
        <>
            <Categoty category={speakerphones}/>
        </>        
    )
}

export default Speakerphones;