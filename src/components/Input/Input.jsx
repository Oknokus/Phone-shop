import { useContext, useEffect, useState } from 'react';
import { CustumContext } from '../../config/Context';


import styles from './Input.module.css';


const Input = () => { 
  const{ 
    search,
    setSearch
  }= useContext(CustumContext)
  
useEffect(() => {  
}, [search])
 
  return (
    <>
      <input 
        className={styles.input}
        onChange={e => setSearch(e.target.value)}
        value={search}
        type="search" 
        placeholder='Введите имя для поиска'/>        
    </>
   )
  }

export default Input;