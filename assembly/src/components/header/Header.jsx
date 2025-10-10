import styles from '../styles/header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>Cópia do Termo</h1>
            <p>Adivinhe a palavra em até 8 tentativas</p>
        </header>
    )
}