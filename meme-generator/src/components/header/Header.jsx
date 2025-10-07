import styles from '../../styles/header.module.css'
import trollface from '../../assets/troll-face.png'

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={trollface} alt="Troll face" />
            <span>Meme Generator</span>
        </header>
    )
}