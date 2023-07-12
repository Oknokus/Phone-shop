import {createContext, useEffect, useState} from "react";
import api from "./Api";

export const CustumContext = createContext();

export const Context = (props) => {     
    const[phone, setPhone] = useState([]); 
    const[dect, setDect] = useState([]); 
    const[videophones, setVideophones] = useState([]); 
    const[speakerphones, setSpeakerphones] = useState([]);
    
    
    const[page, setPage] = useState();
    const[products, setProducts] = useState();    
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);


    const[allProducts, setAllProducts] = useState([]);
    const[item, setItem] = useState([]); 
    const[favorites, setFavorites] = useState([]);

    const [category, setCategory] = useState([]);
    const [sort, setSort] = useState([]);
    const [slider, setSlider] = useState([0, 3000]);
     
    const getProductsPhone= (queryParamsApi) => {
            api("phone").json()
            .then(res => setPhone([...res]))
    };       
        
    const getProductsDect= (queryParamsApi) => {    
            api("dect").json()
            .then(res => setDect([...res]))       
    };

    const getProductsVideophones= (queryParamsApi) => {  
            api("videophones").json()
            .then(res => setVideophones([...res]))              
    };

    const getProductsSpeakerphones= (queryParamsApi) => {   
            api("speakerphones").json()
            .then(res => setSpeakerphones([...res]))          
    };
      
    const getProductsAll = () => {
        getProductsPhone();
        getProductsDect();
        getProductsVideophones();
        getProductsSpeakerphones();
    };

    const searchProduct = (type, queryParamsApi) => {
        return api(`${type}${queryParamsApi}`).json()
            .then(res => {
                setSearchResult(prev => [...prev, ...res])
            })
    }

    const searchProducts = () => {
        setSearchResult([]);

        const queryParamsApi = search.length ? `?category_like=${search}` : "";
        searchProduct('phone', queryParamsApi);
        searchProduct('dect', queryParamsApi);
        searchProduct('videophones', queryParamsApi);
        searchProduct('speakerphones', queryParamsApi);
    };


    const clickHandlefavorites = (elem) => {
        let changefavorites = favorites.find(item => item.page === elem.page & item.id === elem.id)

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
        page,
        products, 
        setAllProducts,
        allProducts,
        setProducts,
        setPage,
        item, 
        search,
        setSearch,
        setItem,    
        slider, 
        setSlider,
        category, 
        sort, 
        setSort,
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