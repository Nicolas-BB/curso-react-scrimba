import styles from '../styles/letter.module.css'

export default function Letter(props) {
    const style = `${styles.letter} ${props.isSelected ? styles.selected : ''}`
    return (
        <button
            className={style}
            onClick={props.click}
        >
            {props.letter}
        </button>
    )
}