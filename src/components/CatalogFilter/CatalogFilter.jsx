import PropTypes from 'prop-types';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { CustumContext } from '../../config/Context';


import RangeSlider from "./RangeSlider";
import InputSelect from "./InputSelect";


import styles from './CatalogFilter.module.css';


const CatalogFilter = ({slider, setSlider}) => {
    const {
        category,
        setCategory,
        sort,
        setSort,
        setSearch,
        searchResult
    } = useContext(CustumContext);

    const changeReset = () => {
        setCategory("");
        setSlider([0, 3000]);
        setSearch("")   
    };  

    return (
        <div className={styles.section_filter}>
            <h2 className={styles.filter_titleItem}>Раздел</h2>
                <InputSelect title="Категория" state={category} setState={setCategory} array={["Настольные телефоны", "DECT-экосистема Yealink", "Видеотелефоны", "Спикерфоны"]} />
                <InputSelect title="Сортировать" state={sort} setState={setSort} array={["asc", "desc", "rate"]} />

            <div>
                <h2 className={styles.filter_titleItem}>Цена</h2>
                <RangeSlider slider={slider} setSlider={setSlider} />
                <div className={styles.filter_value}>
                    <span>{slider[0]}</span>
                    -
                    <span>{slider[1]}</span>
                </div>               
            </div>            
                <Button style={{width:"100%"}} variant="contained" onClick={() => changeReset()}>Сбросить</Button>
        </div>
    )
}


export default CatalogFilter;