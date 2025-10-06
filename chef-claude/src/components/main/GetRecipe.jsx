import { SecondaryBtn } from "../btns/Btns.jsx";
import styles from "./getRecipe.module.css"

export default function GetRecipe() {
    return (
        <div className={styles.getRecipeContainer}>
            <div className={styles.getRecipeDiv}>
                <h3>Ready for a recipe</h3>
                <p>Generate a recipe from your list of ingredients</p>
            </div>
            <SecondaryBtn>Get a recipe</SecondaryBtn>
        </div>
    )
}