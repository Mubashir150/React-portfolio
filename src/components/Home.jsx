import { My } from "../data.js"
import {motion} from "framer-motion"

export default function Home(){
    return <motion.section id="home" initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}>
        <h1>{My.title}</h1>
        <h2>{My.subtitle} </h2>
        <p>{My.description}</p>
        <div>
            <button>Download Resume</button>
            <button>Visit Github</button>
        </div>
    </motion.section>
}