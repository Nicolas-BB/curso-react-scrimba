import { useEffect, useState } from 'react'
import styles from '../../styles/main.module.css'
import Die from '../die/Die.jsx'

export default function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.diceDiv}>
                <Die value={1} />
                <Die value={2} />
                <Die value={3} />
                <Die value={4} />
                <Die value={5} />
                <Die value={6} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
            </div>
            <button className={styles.button}>Girar dados</button>
        </main>
    )
}