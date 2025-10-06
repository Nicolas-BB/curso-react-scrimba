import { useState } from "react";
import { useRef } from "react";
import { PrimaryBtn } from "../btns/Btns.jsx";
import GetRecipe from "./GetRecipe.jsx"
import styles from "./main.module.css"

export default function Main() {
    const inputRef = useRef()
    const [inputAtual, setInputAtual] = useState("")
    const [ingredients, setIngredients] = useState([])

    // Gera a lista de ingredientes, passando o índice como key
    const ingredientsList = ingredients.map((ingredient, index) => (
        <li key={index} onClick={() => del(index)}>{ingredient}</li>
    ))

    // Previne que onSubmit recarregue a página. Se o input conter algum valor, adiciona à lista de ingredientes, limpa e retorna o foco para o input
    function submit(formData) {
        if (formData.trim().length > 0) {
            setIngredients(ingredients => [...ingredients, formData.trim()])
            inputRef.current.focus()
        }
    }

    // Filtra os itens do array, deixando apenas os que o index for diferente do index do item clicado
    function del(index) {
        setIngredients((ingredients) => ingredients.filter((ingredient, i) => {
            if (i !== index) {
                return true
            }

            return false
        }))
    }

    return (
        <main className={styles.main}>
            <form className={styles.form} action={submit}>
                <input ref={inputRef} type="text" name="ingredient" id="ingredient" placeholder="e.g. oregano" aria-label="Add ingredients" className={styles.input} />
                <PrimaryBtn>+ Add ingredient</PrimaryBtn>
            </form>

            <div className={styles.ingredientsDiv}>
                <h2>Ingredients on hand:</h2>
                <ul className={styles.ul}>
                    {ingredientsList.length > 0 ? ingredientsList : "No ingredients yet"}
                </ul>
            </div>

            <GetRecipe />
        </main>
    )
}