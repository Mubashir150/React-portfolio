import {motion} from "framer-motion"

export default function About() {
    return <motion.section id="about" initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}>
        <div className="about-container" >
            <h2>About</h2>

            <p>
                Hey there! I'm <span className="highlight">Mubashir Ijaz</span>, a passionate Frontend Developer dedicated to crafting
                <span className="highlight"> immersive, high-performance, and visually stunning web experiences</span>.
                My expertise lies in React, JavaScript, and modern UI/UX design.
            </p>
            <p>
                I specialize in building fast, responsive, and user-friendly applications that make an impact.
                My focus is on clean code, pixel-perfect design, and seamless interactivity.
            </p>
            <p>
                Currently, I am exploring Next.js and sharpening my frontend development skills to create even more powerful web applications.
                My goal? To bring ideas to life through modern web technologies.
            </p>
            <div className="about-buttons">
                
                <a target="blank" href="http://www.linkedin.com/in/mubashir-ijaz-9834492bb" className="btn">Let's Connect</a>
            </div>
            
        </div>
    </motion.section>
}