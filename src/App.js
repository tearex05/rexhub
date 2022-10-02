import React, {useState, useEffect, useRef} from 'react'
import './App.css'
import Work from './Work';
import Benz from './assets/benz.png'
import Ham from './assets/hamburger.png'
import Teagame from './assets/tearexgame.jpg'
import Tour from './assets/tour-main-page.PNG'
import {FaInstagram, FaTelegram, } from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'




function App() {
   const myRef = useRef(null)

  useEffect(() => {
  window.scrollTo(0, 0);
}, [])

  return (
    <>
    <div className="bg"></div>
    <div className='container'>
      <div className="bodies">
        <div className="title-body">
          <h1 className="title">Welcome To <span className="rex">RexHub</span>
          </h1>
          <button onClick={() => myRef.current.scrollIntoView()} className="explore">
          Explore
          </button>
        </div>
        <div ref={myRef} class="skills-body">
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
        <div className="works-body">
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
        <div className="contact-body">
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