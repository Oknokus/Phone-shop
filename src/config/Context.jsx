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
    const[allProducts, setAllProducts] = useState([]);
    const[item, setItem] = useState([]); 
    const[favorites, setFavorites] = useState([]);
    const[search, setSearch] = useState(""); 
    const [category, setCategory] = useState([]);
    const [sort, setSort] = useState([]);
    const [slider, setSlider] = useState([0, 3000]);
    
    
    let queryParamsApi = search.length ? `?category_like=${search}` : "";     


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


    const clickHandlefavorites = (elem) => {
        let changefavorites = favorites.find(item => item.page === elem.page & item.id === elem.id)

        if(changefavorites) {
            setFavorites(favorites.filter(item => item.id !== elem.id || item.page !== elem.page))           
        } else {           
            setFavorites([...favorites, elem])        
        }         
    }


    // useEffect(() => {
    //     let queryParamsFromTo = `price_gte=${slider[0]}&price_lte=${slider[1]}`;        
    //     let queryParamsApi = `?${search.length ? `title_like=${search}&`: ""}${category.length ? `category=${category}&` : ""}${sort.length && sort !== "rate" ? `_sort=price&_order=${sort}&` : sort.length ? `_sort=rate&_order=desc` : ""}`
        
    //     api(`product${queryParamsApi}${queryParamsFromTo}`).json()
    //     .then(res => setCatalog(res))      
    // }, [search, category, sort, slider]);
        
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
        getProductsPhone,
        getProductsDect,
        getProductsVideophones,
        getProductsSpeakerphones,
        getProductsAll,
        clickHandlefavorites         
    };

    return <CustumContext.Provider value={value}>
            {props.children}
        </CustumContext.Provider>
};

export default Context;