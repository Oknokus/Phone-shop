import { useContext } from 'react';

import { CustumContext } from '../../../config/Context';

import Category from '../../../components/Card/Category/Category';


import styles from './Speakerphones.module.css';


const Speakerphones = () => {
    const {
        speakerphones
    } = useContext(CustumContext)   
    
    return (
        <>
            <Category category={speakerphones}/>
        </>        
    )
}

export default Speakerphones;