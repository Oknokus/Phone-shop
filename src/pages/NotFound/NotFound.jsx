import { useLocation } from 'react-router-dom';

import LinkGoBack from '../../components/LinkGoBack/LinkGoBack';
import notFoundImg from "../../assets/notFound/notFoundImg.png";

import styles from './NotFound.module.css';

const NotFound = () => { 

    const location = useLocation();

    return (
        <>
            <LinkGoBack/>            
            <div className={styles.notFound_container}>
                <img 
                    className={styles.container_img} 
                    src={notFoundImg} alt="Not Found" />
            </div>
            <p className={styles.container_text}>No much for <u>{ location.pathname }</u></p>            
        </>    
    )
}

export default NotFound;