import React from 'react'
import './Skills.css'

import html from '../Images/html.png'
import css from '../Images/css.png'
import boot from '../Images/Bootstrap-icon.png'
import js from '../Images/JavaScript-logo.png'
import mdb from '../Images/MongoDB.png'
import react from '../Images/React.png'
import node from '../Images/Node.webp'
import ex from '../Images/express.png'
import git from '../Images/git.png'
import vs from '../Images/VS_Code.png'
import vercel from '../Images/vercel.png'

const Skills = () => {
  return (
    <div className="skills-section">


      <h2><span>Sk</span>ills</h2>

   
      {/* <p className="skills-intro">
        My technical skills include frontend and backend development using modern web technologies.
      </p> */}

     
      <h3 className="skill-category">Frontend</h3>
      <div className="skills-container">

        <div className="tilte-card">
          <div className="spotlight"></div>
          <img src={html} alt="HTML" />
          <div className="skill-name">HTML</div>
        </div>

        <div className="tilte-card">
          <div className="spotlight"></div>
          <img src={css} alt="CSS" />
          <div className="skill-name">CSS</div>
        </div>

        <div className="tilte-card">
          <div className="spotlight"></div>
          <img src={js} alt="JavaScript" />
          <div className="skill-name">JavaScript</div>
        </div>

        <div className="tilte-card">
          <div className="spotlight"></div>
          <img src={react} alt="React" />
          <div className="skill-name">React</div>
        </div>

        <div className="tilte-card">
          <div className="spotlight"></div>
          <img src={boot} alt="Bootstrap" />
          <div className="skill-name">Bootstrap</div>
        </div>

      </div>

      
      <h3 className="skill-category">Backend</h3>
      <div className="skills-container">

        <div className="tilte-card">
          <div className="spotlight"></div>
          <img src={node} alt="Node" />
          <div className="skill-name">Node.js</div>
        </div>

        <div className="tilte-card">
          <div className="spotlight"></div>
          <img src={ex} alt="Express" />
          <div className="skill-name">Express.js</div>
        </div>

        <div className="tilte-card">
          <div className="spotlight"></div>
          <img src={mdb} alt="MongoDB" />
          <div className="skill-name">MongoDB</div>
        </div>

      </div>

  
      <h3 className="skill-category"><span>To</span>ols</h3>
      <div className="skills-container">

        <div className="tilte-card">
          <div className="spotlight"></div>
          <img src={git} alt="GitHub" />
          <div className="skill-name">GitHub</div>
        </div>

        <div className="tilte-card">
          <div className="spotlight"></div>
          <img src={vercel} alt="Vercel" />
          <div className="skill-name">Vercel</div>
        </div>

        <div className="tilte-card">
          <div className="spotlight"></div>
          <img src={vs} alt="VS Code" />
          <div className="skill-name">VS Code</div>
        </div>

      </div>

    </div>
  )
}

export default Skills