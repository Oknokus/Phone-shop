import inst from "../../../assets/links/instagram.png";
import link from "../../../assets/links/linkedIn.png";
import git from "../../../assets/links/github.png";


import styles from './Footer.module.css';


const  Footer = () => {
    return (
        <section className={styles.footer}>            
            <div className={styles.footer_container}>
                    <div className={styles.container_text}>                       
                        <p>Копирование материалов или элементов сайта - незаконно и преследуется УК РБ. Создание и продвижение</p>                                                                  
                    </div>  
                    <div className={styles.container_links}>  
                            <div class="person__links_link social">
                                <a target="_blank"
                                href="https://www.instagram.com/k.sukonko/"> 
                                <img className={styles.social__img} src={inst} alt="instagram-img"/></a>
                            </div>

                            <div class="person__links_link social">
                                <a target="_blank"
                                href="https://www.linkedin.com/in/%D0%BA%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D1%81%D1%83%D0%BA%D0%BE%D0%BD%D0%BA%D0%BE-900790249/">
                                    <img className={styles.social__img} src={link} alt="linkedin-img"/>
                                </a>
                            </div>

                            <div class="person__links_link social">
                                <a target="_blank" href="https://github.com/Oknokus">
                                    <img className={styles.social__img}  src={git} alt="gitHub-img"/>
                                </a>
                            </div>                   
                    </div>                    
                </div> 
        </section>
    )
}

export default Footer;