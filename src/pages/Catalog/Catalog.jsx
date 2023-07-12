import { useContext } from 'react';
import { CustumContext } from '../../config/Context';
import { useEffect } from 'react';

import Card from "../../components/Card";


import styles from './Catalog.module.css';


const Catalog = () => {    
    const {
        phone,
        dect,
        videophones,
        speakerphones,
        getProductsAll        
    } = useContext(CustumContext);

  
    useEffect(() => {
        getProductsAll()       
    }, [])  
     
     return (   
        <>            
            <section className={styles.catalog}>
                <div className={styles.catalog_container}>
                    <Card catalog={phone}/> 
                    <Card catalog={dect}/> 
                    <Card catalog={videophones}/> 
                    <Card catalog={speakerphones}/>                
                </div>
            </section>
        </>
    )
}
export default Catalog;