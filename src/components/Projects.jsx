import Cards from "./Cards"
import {motion} from "framer-motion"


export default function Projects(){
   
    return <motion.section id="projects" initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}>
        <h2>Projects</h2>
        <div className="projects-container">
            
            <Cards  title="Tic-Tac-Toe" img="Tik.PNG" description="I built a Tic-Tac-Toe game using React.js, bringing the classic game to life with an interactive and modern UI. This project demonstrates my understanding of React components, state management (useState), event handling, and conditional rendering." video="game.mp4"  />
            <Cards title="Shopping Cart" img="fashion.PNG" description="I built an interactive shopping cart system using React js that lets users browse and manage fashion items effortlessly. This project showcases my ability to work with React components, state management (useState,useRef,useImperativeHandle, useContext), event handling, and dynamic UI updates." video="shopping.mp4" />

            
            
        </div>
    </motion.section>
}