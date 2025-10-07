import { SecondaryBtn } from "../btns/Btns.jsx";
import styles from "../styles/getRecipe.module.css"

export default function GetRecipe({ ingredients, generateRecipe }) {
    return (
        <div className={styles.getRecipeContainer}>
            <div className={styles.getRecipeDiv}>
                <h3>Ready for a recipe</h3>
                <p>Generate a recipe from your list of ingredients</p>
            </div>
            <SecondaryBtn onClick={() => generateRecipe(ingredients)}>Get a recipe</SecondaryBtn>
        </div>
    )
}