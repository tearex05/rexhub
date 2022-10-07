import React, {useState, useEffect, useRef} from 'react'
import './App.css'
import Work from './Work';
import Benz from './assets/benz.png'
import Ham from './assets/hamburger.png'
import Teagame from './assets/tearexgame.jpg'
import Tour from './assets/tour-main-page.PNG'
import {FaInstagram, FaTelegram, } from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import Resume from './assets/resume.jpg'

/*


*/


function App() {

   const ref1 = useRef(null)
   const ref2 = useRef(null)
   const ref3 = useRef(null)
   const ref4 = useRef(null)
   const ref5 = useRef(null)

  useEffect(() => {
  window.scrollTo(0, 0);
}, [])

  return (
    <>
    <div className="bg"></div>
    <div className='container'>
      <div className="bodies">
        <div ref={ref1} className="title-body">
        <div class="navbar">
        <p class="rexhub" onClick={() => ref1.current.scrollIntoView()}>RexHub</p>
        <div className="nav">
          <p className="skills-nav" onClick={() => ref2.current.scrollIntoView()}>Skills</p>
          <p className="works-nav" onClick={() => ref3.current.scrollIntoView()}>Works</p>
          <p className="about-nav" onClick={() => ref4.current.scrollIntoView()}>About</p>
          <p className="resume-nav" onClick={() => ref5.current.scrollIntoView()}>Resume</p>
        </div>
        </div>
          <h1 className="title">Welcome To <span className="rex">RexHub</span>
          </h1>
          <button onClick={() => ref2.current.scrollIntoView()} className="explore">
          Explore
          </button>
        </div>
        <div ref={ref2} class="skills-body">
          <h1 className="skills-title">
            My Skills         
          </h1>
          <h1  className="skill js">Javascript</h1>
          <h1 className='skill react'>
            React & Redux
          </h1>
          <h1 className='skill html'>
            Html & Css
          </h1>
          <h1 className='skill boot'>
            Bootstrap & Tailwind
          </h1>
          <h1 className='skill py'>
            Python & Django
          </h1>
          <h1 className='skill sql'>
            Database and MySql
          </h1>
          <h1 className='skill git'>
            Git & Github
          </h1>
        </div>
        <div ref={ref3} className="works-body">
          <h1 class="works-title">My Recent Works</h1>
          <div className="works">
            <Work img={Benz} link='https://the-reza.github.io/benz/' />
            <Work img={Ham} link='https://the-reza.github.io/hamburger/' />
            <Work img={Teagame} link='https://the-reza.github.io/tearexgame/' />
            <Work img={Tour} link='https://the-reza.github.io/tour/' />
          </div>
          <h1 className="coming">
            More Coming Soon...
          </h1> 
        </div>
        <div ref={ref4} className="contact-body">
         <h1 className="contact-title">
           Want To Have A Great Website?<br /><span className="call">Better Call Me ;)</span>
         </h1>
         <div className="info">
          <div className="icon-body">
            <span>
              <FaInstagram className='icon insta-icon' />
            </span>
            <h1 class="icon-info">
               tearex0505
            </h1>
          </div>
          <div className="icon-body">
            <span>
            <FaTelegram className='icon telegram-icon' />
            </span>
            <h1 class="icon-info">
            tearex05
            </h1>
          </div>
          <div className="icon-body">
            <span>
            <MdEmail className='icon email-icon' />
            </span>
            <h1 class="icon-info">
            tearex05
            </h1>
          </div>
         </div>
        </div>
        <div ref={ref5} className="resume">
           <h1 class="resume-title">Wanna See My Resume?<br/><span className="all">Its All Here!</span></h1>
           <img src={Resume} alt="My Pretty Resume" class="resume-img" />
           <a href="https://drive.google.com/uc?id=11bHvLCbSVhbIWT-_QxcH9VSKML4KuecE&export=download" className="explore download">Download</a>
        </div>  
        <div className="end">
           <h1 className="end-title">To Be Continued...</h1>
        </div>
      </div>
    </div>
    <div class="scroll-downs">
  <div class="mousey">
    <div class="scroller"></div>
  </div>
</div>
    </>
  )
}

export default App