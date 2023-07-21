import Banner from "../../../assets/banner-img.png"
import { username } from "../../../data/user";
import styles from "../../../styles/style.module.css"

function MainContentApp() {
    return(
        <main>
           <section className={styles.section__Main}>
                <div className={styles.container__Section}>
                    <div className={styles.flexBox}>
                        <img className={styles.img__Banner} src={Banner} alt="BannerApp" />
                        <div className={styles.banner__Content}>
                            <h2 className={styles.banner__Content__h2}>{username}</h2>
                            <h2 className={styles.welcome__Content__h2}>Bem vindo ao meu Portifólio</h2>
                            <span>Uma frase interessante sobre mim</span>
                            <button>Saiba mais</button>
                        </div>
                    </div>
                </div>
           </section>
        </main>
    )
}

export default MainContentApp;