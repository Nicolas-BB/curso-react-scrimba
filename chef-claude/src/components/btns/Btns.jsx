import styles from "../styles/btns.module.css"

export function PrimaryBtn({ children, ...props }) {
    return (
        <button {...props} className={styles.primaryBtn}>{children}</button>
    )
}

export function SecondaryBtn({ children, ...props }) {
    return (
        <button {...props} className={styles.secondaryBtn}>{children}</button>
    )
}