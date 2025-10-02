import logo from "../../assets/chef-claude-icon.png"
import styles from "./header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.div}>
                <img src={logo} alt="Chef Claude logo" className={styles.img} />
                <h1 className={styles.h1}>Chef Claude</h1>
            </div>
        </header>
    )
}