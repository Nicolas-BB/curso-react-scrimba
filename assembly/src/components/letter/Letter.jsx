import styles from '../styles/letter.module.css'

export default function Letter(props) {
    return (
        <button className={styles.letter}>{props.letter}</button>
    )
}