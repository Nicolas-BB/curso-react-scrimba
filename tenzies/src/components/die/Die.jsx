import styles from '../../styles/die.module.css'

export default function Die(props) {
    const style = props.isHeld ? styles.dieSelected : styles.die

    return (
        <button
            className={style}
            onClick={props.hold}
        >
            {props.value}
        </button>
    )
}