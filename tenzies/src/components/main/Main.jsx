import { useEffect, useState } from 'react'
import styles from '../../styles/main.module.css'
import Die from '../die/Die.jsx'

export default function Main() {
    const [selected, setSelected] = useState(0)
    const [randomNums, setRandomNums] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    function generateRandomNums() {
        setRandomNums(randomNums => [])

        for (let i = 0; i < 10; i++) {
            let num = Math.floor((Math.random() * 6) + 1)

            setRandomNums(randomNums => [...randomNums, num])
        }
    }

    const dice = randomNums.map(num => {
        return (
            <Die
                value={num}
            />
        )
    })

    return (
        <main className={styles.main}>
            <h1>Tenzie</h1>
            <div className={styles.diceDiv}>
                {dice}
            </div>
            <button onClick={generateRandomNums} className={styles.button}>Rolar</button>
        </main>
    )
}