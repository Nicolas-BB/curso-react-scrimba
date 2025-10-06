import styles from "../styles/listIngredients.module.css"

export default function ListIngredients(props) {
    return (
        <div className={styles.ingredientsDiv}>
            <h2>Ingredients on hand:</h2>
            <ul className={styles.ul}>
                {props.list.length > 0 ? props.list : "No ingredients yet"}
            </ul>
        </div>
    )
}