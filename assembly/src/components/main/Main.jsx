import { useState } from 'react'
import { languages } from '../../data/languages.js'
import Letter from '../letter/Letter'
import styles from '../styles/main.module.css'

export default function Main() {
    const [letters, setLetters] = useState(alphabetElements())
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

    // Gera botões com cada letra da palavra
    const word = (currentWord.split('')).map((letter) => (
        <div className={styles.letter}>
            {letter}
        </div>
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
        </main>
    )
}