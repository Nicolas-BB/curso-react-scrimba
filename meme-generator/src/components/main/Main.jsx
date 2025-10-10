import { useEffect, useState } from 'react'
import styles from '../../styles/main.module.css'

export default function Main() {
    const [images, setImages] = useState()
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        imgUrl: null
    })

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => {
                const rand = Math.floor(Math.random() * 100)
                setImages(data.data.memes)
                setMeme(meme => ({
                    ...meme,
                    imgUrl: data.data.memes[rand].url
                }))
            })
    }, [])

    function newMeme() {
        const rand = Math.floor(Math.random() * 100)

        setMeme(meme => ({
            ...meme,
            imgUrl: images[rand].url
        }))
    }

    function change(e) {
        const { value, name } = e.currentTarget
        setMeme(meme => ({
            ...meme,
            [name]: value
        }))
    }

    return (
        <main className={styles.main}>
            <form className={styles.form} action={(e) => e.preventDefault}>
                <div className={styles.inputContainer}>
                    <label htmlFor="topText" className={styles.textLabel}>
                        Top text
                        <input type="text" name="topText" id="topText" autoComplete='off' value={meme.topText} onChange={change} />
                    </label>

                    <label htmlFor="bottomText" className={styles.textLabel}>
                        Bottom text
                        <input type="text" name="bottomText" id="bottomText" autoComplete='off' value={meme.bottomText} onChange={change} />
                    </label>
                </div>

                <button onClick={newMeme}>Generate a new meme image 🖼️</button>
            </form>
            <div className={styles.meme}>
                <img src={meme.imgUrl} />
                <span className={styles.top}>{meme.topText}</span>
                <span className={styles.bottom}>{meme.bottomText}</span>
            </div>
        </main>
    )
}