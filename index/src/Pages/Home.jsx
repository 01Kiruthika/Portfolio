import React from 'react'
import './Home.css'
import Icons from '../Components/Icons'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='homecontainer'>
      <div className="about-me">
        <div className="my-image">
          <img src="https://www.shutterstock.com/image-photo/beauty-charisma-head-shot-portrait-600nw-2647728057.jpg" alt="my image" />
        </div>
        <div className="about-content">
          <h2>Hi,</h2>
          <h2>I am Kiruthika Sundaram</h2>
          <h2 className="typing">
            <span>MERN Stack Developer</span>
            {/* <span>Programmer</span> */}
          </h2>
          <p>I build responsive and user-friendly web applications using modern technologies. Passionate about learning and solving real-world problems through code.
          </p>


          <div className="btttn">
            <button
              className="project-btn"
              onClick={() => navigate('/project')}
            ><span>
                View My Projects
              </span>

            </button>

            <Icons />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home
