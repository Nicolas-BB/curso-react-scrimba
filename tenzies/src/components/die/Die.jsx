import styles from '../../styles/die.module.css'

export default function Die(props) {
    const style = props.isHeld ? styles.dieSelected : styles.die

    return (
        <button
            className={style}
            onClick={props.hold}
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}
        >
            {props.value}
        </button>
    )
}