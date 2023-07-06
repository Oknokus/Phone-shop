import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logoHeader from "../../../assets/logo_header.svg";
import Input from "../../Input";


import styles from './Header.module.css';


const Header = () => {
    return (
        <section className={styles.header}>
            <div className={styles.header_container}>
                <div className={styles.container_white}>
                    <Link to={"./home"}>
                        <img className={styles.white_logo} src={logoHeader} alt="logoHeader" />   
                    </Link>                                    
                    <div>
                        <ul className={styles.white_buttonContainer}>
                            <li>
                                <Link
                                    className={styles.white_link}
                                    to={"/home"}>Главная</Link>
                            </li>
                            <li>
                                <Link
                                    className={styles.white_link}
                                    to={"/productsAll"}>Все товары</Link>
                            </li>

                            <li>
                                <Link 
                                    className={styles.white_link}
                                    to={"*"}>LayOut</Link>
                            </li>                           
                        </ul>
                        <Input/>
                    </div>
                </div>
                <div className={styles.container_grey}>
                    <div className={styles.grey_linkContainer}>
                        <h3>Наши новости:</h3>  
                        <div className={styles.grey_link}>                        
                            <a href="https://www.youtube.com/" target="_blank">YouTube</a>
                            <a href="https://vk.com/" target="_blank">Vk</a>
                            <a href="https://www.facebook.com/" target="_blank">Facebook</a>                        
                        </div>   
                    </div>                
                    
                    <div className={styles.grey_phone}>                       
                        <span>+375 (17) 361-96-96</span>
                        <span>+375 (29) 361-96-96 (A1)</span>
                    </div>
                </div>
            </div>
           
        </section>
    )
}

export default Header;