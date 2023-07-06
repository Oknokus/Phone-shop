import {createContext, useEffect, useState} from "react";
import axios from "axios";   

import api from "./Api";

export const CustumContext = createContext();

export const Context = (props) => {     
    const[phone, setPhone] = useState([]); 
    const[dect, setDect] = useState([]); 
    const[videophones, setVideophones] = useState([]); 
    const[speakerphones, setSpeakerphones] = useState([]); 
    const [page, setPage] = useState();
    const [products, setProducts] = useState();
    const [allProducts, setAllProducts] = useState();
  
    const getProductsPhone= () => { 
        api("phone").json()
        .then(res => setPhone([...res])) 
    }; 
    const getProductsDect= () => { 
        api("dect").json()
        .then(res => setDect([...res])) 
    };
    const getProductsVideophones= () => { 
        api("videophones").json()
        .then(res => setVideophones([...res])) 
    };
    const getProductsSpeakerphones= () => { 
        api("speakerphones").json()
        .then(res => setSpeakerphones([...res])) 
    };

    const getProductsAll= () => { 
        getProductsPhone();
        getProductsDect();
        getProductsVideophones();
        getProductsSpeakerphones();
        setAllProducts([...phone, ...dect, ...videophones, ...speakerphones])
    };
    
    const value = { 
        phone,
        dect,
        videophones,
        speakerphones,
        page,
        products, 
        setAllProducts,
        allProducts,
        setProducts,
        setPage,
        getProductsPhone,
        getProductsDect,
        getProductsVideophones,
        getProductsSpeakerphones,
        getProductsAll           
    };

    return <CustumContext.Provider value={value}>
            {props.children}
        </CustumContext.Provider>
};

export default Context;