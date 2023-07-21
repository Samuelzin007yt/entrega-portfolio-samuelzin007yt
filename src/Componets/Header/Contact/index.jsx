import { user } from "../../../data/user";
import gitHubIcon from "../../../assets/github-icon.png"
import linkedinIcon from "../../../assets/linkedin-icon.png"
import whatsappIcon from "../../../assets/whatsapp-icon.png"
import styles from "../Contact/style.module.css"

function Contact() {
    return(
        <>
            <footer className={styles.footer__controller}>
                <div className={styles.div__main}>
                    <div className={styles.container}>
                        <div className={styles.div__contact}>
                            <h2>Contato</h2>
                            <img src={whatsappIcon} alt="" />
                            <img src={linkedinIcon} alt="" />
                            <img src={gitHubIcon} alt="" />
                        </div>

                        <div className={styles.container__descripition}>
                            <p>Todos os direitos reservados - {user}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Contact;