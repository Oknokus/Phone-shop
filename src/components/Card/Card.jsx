import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Card.module.css';

const Card = ({catalog}) => {   
    let item = catalog[0];
    
    if (!item) {
        return null
    }
        return (
            <Link to={`${item.page}`}>
                <div 
                    className={styles.card_container}> 
                    <h3 className={styles.card_title}>{item.title}</h3>
                    <img 
                        className={styles.card_img}
                        src={item.image1} alt="cardImg" />
                </div> 
            </Link>      
        )
    }  

export default Card;