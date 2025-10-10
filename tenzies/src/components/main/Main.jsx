import Die from '../die/Die.jsx'
import { useState } from 'react'
import styles from '../../styles/main.module.css'
import Confetti from 'react-confetti'

export default function Main() {
    const [dice, setDice] = useState(generateRandomNums)
    const [isHeld, setIsHeld] = useState(0)

    // Gera os números aleatórios iniciais
    function generateRandomNums() {
        let numArray = []

        for (let i = 0; i < 10; i++) {
            let num = {
                id: i,
                value: Math.floor((Math.random() * 6) + 1),
                isHeld: false
            }

            numArray.push(num)
        }

        return numArray
    }

    // Alterna os valores de "isHeld" do Die com o "id" correspondente
    function hold(id) {
        setDice(dice => dice.map(die => die.id === id ? { ...die, isHeld: !die.isHeld } : die))
    }

    // Gera novos dados, exceto o que estiver com o prop "isHeld=true"
    function rollDice() {
        setDice(dice => dice.map(die => die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }))
    }

    const diceElements = dice.map(dice => {
        return (
            <Die
                key={dice.id}
                value={dice.value}
                isHeld={dice.isHeld}
                hold={() => hold(dice.id, dice.isHeld)}
            />
        )
    })

    const gameWon = dice.every(die => die.isHeld === true) && dice.every(die => die.value === dice[0].value)
    const confetti = gameWon && <Confetti style={{ width: `${100}vw`, height: `${100}vh` }} />
    const roll = gameWon ? () => setDice(generateRandomNums) : rollDice

    return (
        <main className={styles.main}>
            {confetti}
            <div aria-live="polite" className={styles.srOnly}>
                {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
            </div>
            <h1>Tenzie</h1>
            <div className={styles.diceDiv}>
                {diceElements}
            </div>
            <button onClick={() => roll()} className={styles.button}>{gameWon ? 'Novo jogo' : 'Rolar'}</button>
        </main>
    )
}