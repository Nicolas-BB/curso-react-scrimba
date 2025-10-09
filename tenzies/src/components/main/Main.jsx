import styles from '../../styles/main.module.css'
import Die from '../die/Die.jsx'

export default function Main() {
    return (
        <main className={styles.main}>
            <Die
                value='1'
            />
        </main>
    )
}