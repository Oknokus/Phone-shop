import PropTypes from 'prop-types';


import styles from './CardProduct.module.css';


const CardProduct = ({products}) => { 
   
    if(products) {        
        return (
            <div               
                className={styles.products}
                key={products.id}>
                <div className={styles.products_container}>
                    <h2 className={styles.container_title}>{products.title}</h2>
                    <img
                        className={styles.container_img} 
                        src={products.image1} alt="productImg"/>
                        <p className={styles.container_description}>{products.description}</p>
                        <span>Гарантия: {products.Guarantee} месяцев</span>
                        <h4 className={styles.container_price}>Цена: {products.price}</h4>
                </div>
            </div>
        )
    }    
}

export default CardProduct;