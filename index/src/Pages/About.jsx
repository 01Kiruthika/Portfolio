import React from 'react'
import './About.css'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='about'>
      <h3>About <span className='colorme'>Me</span></h3>

      <div className="about-summary">
        <p>
          I am a Computer Science student and aspiring Full Stack Developer with a strong interest in building modern web applications.
          I enjoy creating responsive and user-friendly interfaces and continuously learning new technologies to improve my skills.
        </p>
      </div>

      <div className="box">
        <div className="aboutme">
          <div className="personal">

            <div className="info-grid">

              <div className="info-row">
                <span className="label">Name</span>
                <span className="colon">:</span>
                <span className="value">Kiruthika Sundaram</span>
              </div>

              <div className="info-row">
                <span className="label">Nationality</span>
                <span className="colon">:</span>
                <span className="value">Indian</span>
              </div>

              <div className="info-row">
                <span className="label">Location</span>
                <span className="colon">:</span>
                <span className="value">Karur, Tamil Nadu</span>
              </div>

              <div className="info-row">
                <span className="label">Email</span>
                <span className="colon">:</span>
                <span className="value">kiruthikasundaram2004@gmail.com</span>
              </div>

              <div className="info-row">
                <span className="label">Phone</span>
                <span className="colon">:</span>
                <span className="value">9159620313</span>
              </div>

              <div className="info-row">
                <span className="label">Languages</span>
                <span className="colon">:</span>
                <span className="value">Tamil, English, Telugu</span>
              </div>

            </div>

          </div>

          <div className="cv-button">
            <Link to="/kiruthika_resume.pdf" target='_blank' download>
              Download CV <i className="fa fa-download" aria-hidden="true"></i>
            </Link>
          </div>

        </div>
      </div>

      {/* EDUCATION */}
      <div className="edu-container">
        <h3><span>Edu</span>cation</h3>
        <div className="edu-box">

          <div className="cards card1">
            <p><strong>B.Sc Computer Science</strong></p>
            <p>Bishop Heber College</p>
            <p>2022 - 2025</p>
          </div>

          <div className="cards card2">
            <p><strong>HSC</strong></p>
            <p>C.S.I Methodist Girls Hr Sec School</p>
            <p>2021 - 2022</p>
          </div>

          <div className="cards card3">
            <p><strong>SSLC</strong></p>
            <p>C.S.I Methodist Girls Hr Sec School</p>
            <p>2019 - 2020</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About