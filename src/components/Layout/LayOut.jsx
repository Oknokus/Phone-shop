import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import SliderReact from '../SliderReact/SliderReact';


import styles from './LayOut.module.css';


const LayOut = () => {
    
    return ( 
        <>             
            <Header/>  
            {
                useLocation().pathname === "/" ? <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
                <SliderReact/>
                </div> :
                ""
            }            
            <Outlet/>            
            <Footer/>
        </>      
        )
    }

export default LayOut;