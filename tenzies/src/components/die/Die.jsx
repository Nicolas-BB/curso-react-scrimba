import { useState } from 'react'
import styles from '../../styles/die.module.css'

export default function Die(props) {
    return (
        <button className={styles.die}>{props.value}</button>
    )
}