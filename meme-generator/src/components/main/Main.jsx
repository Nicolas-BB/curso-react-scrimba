import styles from '../../styles/main.module.css'

export default function Main() {
    return (
        <main className={styles.main}>
            <form className={styles.form} action={(e) => e.preventDefault}>
                <div className={styles.inputContainer}>
                    <label htmlFor="topText" className={styles.textLabel}>
                        Top text
                        <input type="text" name="topText" id="bottomText" autoComplete='off' />
                    </label>

                    <label htmlFor="bottomText" className={styles.textLabel}>
                        Bottom text
                        <input type="text" name="bottomText" id="bottomText" />
                    </label>
                </div>

                <button>Generate a new meme image 🖼️</button>
            </form>

            <div className={styles.imgDiv}>
                Campo de imagem
            </div>
        </main>
    )
}