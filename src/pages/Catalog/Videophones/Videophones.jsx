import { useContext } from 'react';

import { CustumContext } from '../../../config/Context';

import Category from '../../../components/Card/Category/Category';


import styles from './Videophones.module.css';


const Videophones = () => {
    const {
        videophones
    } = useContext(CustumContext)
    
    return (
        <>
            <Category category={videophones}/>
        </>        
    )
}

export default Videophones;