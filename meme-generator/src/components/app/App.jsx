import Header from '../header/Header.jsx'
import Main from '../main/Main.jsx'
import styles from '../../styles/app.module.css'

export default function App() {
    return (
        <div className={styles.div}>
            <Header />
            <Main />
        </div>
    )
}