import { createRoot } from "react-dom/client"
import App from "../app/App.jsx"
import "../styles/index.css"

const root = createRoot(document.querySelector('#root'))

root.render(<App />)