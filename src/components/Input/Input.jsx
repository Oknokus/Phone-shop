import PropTypes from 'prop-types';


import styles from './Input.module.css';


const Input = () => {
  return (
    <>
      <input 
        className={styles.input}
        type="search" 
        placeholder='Введите имя для поиска'/>        
    </>
  )
}

export default Input;