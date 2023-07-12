import {createContext, useEffect, useState } from "react";

import api from "./Api";

export const CustumContext = createContext();

export const Context = (props) => {   
    const[phone, setPhone] = useState([]); 
    const[dect, setDect] = useState([]); 
    const[videophones, setVideophones] = useState([]); 
    const[speakerphones, setSpeakerphones] = useState([]);
        
    const[products, setProducts] = useState();    
    const[search, setSearch] = useState("");
    const[searchResult, setSearchResult] = useState([]);
    const[state, setState] = useState("");
    const[path, setPath] = useState("")


    const[allProducts, setAllProducts] = useState([]);
    const[item, setItem] = useState([]); 
    const[favorites, setFavorites] = useState([]);

    const [category, setCategory] = useState([]);
    const [sort, setSort] = useState([]);
    const [slider, setSlider] = useState([0, 3000]);

        
    const getProductsPhone= (queryParamsApi, queryParamsFromTo) => {
            api("phone").json()
            .then(res => setPhone([...res]))
    };       
        
    const getProductsDect= (queryParamsApi, queryParamsFromTo) => {    
            api("dect").json()
            .then(res => setDect([...res]))       
    };

    const getProductsVideophones= (queryParamsApi, queryParamsFromTo) => {  
            api("videophones").json()
            .then(res => setVideophones([...res]))              
    };

    const getProductsSpeakerphones= (queryParamsApi, queryParamsFromTo) => {   
            api("speakerphones").json()
            .then(res => setSpeakerphones([...res]))          
    };
      
    const getProductsAll = (queryParamsApi) => {
        getProductsPhone(queryParamsApi);
        getProductsDect(queryParamsApi);
        getProductsVideophones(queryParamsApi);
        getProductsSpeakerphones(queryParamsApi);
    };

    const searchProduct = (type, queryParamsApi) => {
        const queryParamsFromTo = `price_gte=${slider[0]}&price_lte=${slider[1]}`; 

        return api(`${type}${queryParamsApi}${queryParamsFromTo}`).json()
            .then(res => {
                setSearchResult(prev => [...prev, ...res])
            })           
    }

    const searchProducts = () => {
        setSearchResult([]);      

        const queryParamsApi = `?${search.length ? `category_like=${search}&`: ""}${category.length ? `title_like=${category}&` : ""}${sort.length && sort !== "rate" ? `_sort=price&_order=${sort}&` : sort.length ? `_sort=rate&_order=desc` : ""}`
       
        searchProduct('phone', queryParamsApi);
        searchProduct('dect', queryParamsApi);
        searchProduct('videophones', queryParamsApi);
        searchProduct('speakerphones', queryParamsApi);         
    };

    const clickHandlefavorites = (elem) => {
        const changefavorites = favorites.find(item => item.page === elem.page & item.id === elem.id)

        if(changefavorites) {
            setFavorites(favorites.filter(item => item.id !== elem.id || item.page !== elem.page))           
        } else {           
            setFavorites([...favorites, elem])        
        }         
    }
        
    const value = { 
        phone,
        dect,
        videophones,
        speakerphones,   
        products, 
        setAllProducts,
        allProducts,
        setProducts,      
        item, 
        search,
        setSearch,
        setItem,    
        slider, 
        setSlider,
        category, 
        sort, 
        setSort,
        path, 
        setPath,      
        setState,
        setCategory,
        favorites, 
        setFavorites,      
        searchResult,
        searchProducts,
        getProductsAll,
        clickHandlefavorites         
    };

    return <CustumContext.Provider value={value}>
            {props.children}
        </CustumContext.Provider>
};

export default Context;