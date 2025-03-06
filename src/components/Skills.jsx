import {motion} from "framer-motion"

export default function Skills(){
    return <motion.div initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}>
      <h2 id="h2-skills">My Skills</h2>
      <p className="sp">I specialize in creating visually appealing, high-performance web applications. Here’s what I can do for you! 
      With expertise in frontend development, I craft user-friendly, responsive, and high-quality websites that stand out.</p>
      <motion.section id="skills" >
        
        
      <div className="skills-container">
        
        <div className="skill-card" >
          <div id="first">
            <h3>Frontend Development</h3>
            <p>HTML, CSS, JavaScript, React.js, Tailwind CSS</p>
            <p>Creating user-friendly websites with the functionality using React</p>
          </div>
          <li>
            <img src="pexels-olia-danilevich-4974912.jpg" alt="development" />
          </li>

        </div>
        <div className="skill-card">
          <div id="second">
            <h3>UI/UX Design</h3>
            <p>Figma, Responsive Design, Animation</p>
            <ul id="ugap">
              <li>Converting Figma designs into pixel-perfect, fully functional web pages.</li>
              <li>Ensuring design accuracy by maintaining proper spacing, fonts, and colors.</li>
              <li>Creating websites that adapt seamlessly to desktops, tablets, and mobile screens.</li>
              <li>Adding smooth CSS & JavaScript animations for engaging UI experiences.</li>
              <li>Implementing hover effects, transitions, and scroll-based animations.</li>
            </ul>
          </div>
          <li id="simg">
            <img src="pexels-canvastudio-3153204.jpg" alt="" />
          </li>
        </div>
        <div className="skill-card">
          <div id="third">
            <h3>Problem Solving and Debugging</h3>
            <p>Solving the complex problems</p>
            <ul id="tgap">
              <li>Identifying and resolving issues in frontend code, ensuring smooth functionality.</li>
              <li>Using browser DevTools, console logs, and React Developer Tools to troubleshoot errors.</li>
              <li>Improving existing code for better readability, maintainability, and performance.</li>
            </ul>
          </div>
          <li>
            <img src="pexels-pixabay-355952.jpg" alt="" />
          </li>

        </div>
      </div>
    </motion.section>
    </motion.div>
}