import { useState } from 'react'
import { languages } from '../../data/languages.js'
import Letter from '../letter/Letter'
import styles from '../styles/main.module.css'

export default function Main() {
    const [letters, setLetters] = useState(alphabetElements())
    const [guess, setGuess] = useState([])
    const [currentWord, setCurrentWord] = useState('react')
    const [gameStatus, setGameStatus] = useState({ gameEnd: true, gameWon: false })

    // Cria um array de objetos do alfabeto
    function alphabetElements() {
        const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))

        return alphabet.map((letter) => ({
            id: letter,
            isSelected: false
        }))
    }

    // Faz um map das linguagens
    const languageElements = languages.map((lang, i) => (
        <div
            key={i}
            style={{
                backgroundColor: lang.backgroundColor,
                color: lang.color
            }}
            className={styles.language}
        >
            {lang.name}
        </div >
    ))

    // Muda "isSelected" para true do botão com "id" correspondente
    function select(id) {
        setLetters(prev =>
            prev.map(letter =>
                letter.id === id ? { ...letter, isSelected: true } : letter
            )
        )
        setGuess(guess => guess.includes(id) ? guess : [...guess, id])
    }

    // Gera os botões para cada letra
    const lettersElement = letters.map((letter) => (
        <Letter
            key={letter.id}
            letter={letter.id}
            isSelected={letter.isSelected}
            click={() => select(letter.id)}
        />
    ))

    // Divide a palavra em letras
    const word = (currentWord.toLocaleUpperCase().split('')).map((letter) => (
        <span
            key={letter}
            className={styles.letter}
        >
            {letter}
        </span>
    ))

    const message = gameStatus.gameWon ? 'Você venceu!' : 'Você perdeu!'

    return (
        <main className={styles.main}>
            <div className={`${styles.gameStatus} ${gameStatus.gameEnd && (gameStatus.gameWon ? styles.won : styles.lose)}`}>
                {gameStatus.gameEnd && <h2>{message}</h2>}
            </div>

            <div className={styles.languageContainer}>
                {languageElements}
            </div>

            <div className={styles.wordContainer}>
                {word}
            </div>

            <div className={styles.lettersContainer}>
                {lettersElement}
            </div>
            <button onClick={() => console.log(guess)}>A</button>
        </main>
    )
}