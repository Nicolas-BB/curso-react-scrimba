import Letter from '../letter/Letter'
import styles from '../styles/main.module.css'

export default function Main() {
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))

    const letters = alphabet.map(letter => (
        <Letter key={letter} letter={letter} />
    ))

    return (
        <main className={styles.main}>
            <div>
                Status
            </div>
            <div>
                Languages
            </div>

            <div>
                Palavra
            </div>

            <div className={styles.lettersContainer}>
                {letters}
            </div>
        </main>
    )
}