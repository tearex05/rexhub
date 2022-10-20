import React, {useEffect, useRef, useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Work from './Work';
import Benz from './assets/work1.jpg'
import Ham from './assets/work2.jpg'
import Teagame from './assets/work3.jpg'
import Tour from './assets/work4.jpg'
import {FaTelegram, FaYahoo} from 'react-icons/fa'
import {BsTwitter, BsLinkedin} from 'react-icons/bs'
import Resume from './assets/resume.jpg'
import {BiMenu} from 'react-icons/bi'
import Js from './assets/icons/js.png'
import Reactt from './assets/icons/react.png'
import Redux from './assets/icons/redux.png'
import Html from './assets/icons/html.png'
import Css from './assets/icons/css.png'
import Bootstrap from './assets/icons/bootstrap.png'
import Tailwind from './assets/icons/tailwind.png'
import Python from './assets/icons/python.png'
import Django from './assets/icons/django.png'
import Mysql from './assets/icons/mysql.png'
import Git from './assets/icons/git.png'
import Github from './assets/icons/github.png'



function App() {

const [style, setStyle] = useState({
  move:'-100vw',
  rotate:'0'
})

   const ref1 = useRef(null)
   const ref2 = useRef(null)
   const ref3 = useRef(null)
   const ref4 = useRef(null)
   const ref5 = useRef(null)

  useEffect(() => {
  window.scrollTo(0, 0);
  AOS.init();
}, [])

  return (
    <>
    <div className="bg"></div>

    <div className='container'>
      <div className="bodies">

        <div ref={ref1} className="title-body">
        <div class="navbarbg">

        <a class="rexhub rexhubbg" onClick={() => ref1.current.scrollIntoView()}>RexHub</a>
        <div className="navbg">
          <a className="nav-itembg" onClick={() => ref2.current.scrollIntoView()}>Skills</a>
          <a className="nav-itembg" onClick={() => ref3.current.scrollIntoView()}>Works</a>
          <a className="nav-itembg" onClick={() => ref4.current.scrollIntoView()}>About</a>
          <a className="nav-itembg nav-itembg-resume" onClick={() => ref5.current.scrollIntoView()}>Resume</a>
        </div>
        </div>

        <div class="navbarsm">
        <BiMenu onClick={() => {style.rotate=='0'?setStyle({
          move:'0',
          rotate:'90deg'
        }):setStyle({
          move:'-100vw',
          rotate:'0'
        })}} style={{transform:`rotateZ(${style.rotate})`}} className='menu-icon' />
        <div style={{transform: `translateX(${style.move})`,}} className="green"></div>
        <ul style={{transform: `translateX(${style.move})`,}} className="nav-items">
        <li>
        <a class="rexhub nav-itemsm rexhubsm" onClick={() => ref1.current.scrollIntoView()}>RexHub</a>
        </li>
        <li>
        <a className="nav-itemsm" onClick={() => ref2.current.scrollIntoView()}>Skills</a>
        </li>
        <li>
          <a className="nav-itemsm" onClick={() => ref3.current.scrollIntoView()}>Works</a>
        </li>
        <li>
        <a className="nav-itemsm" onClick={() => ref4.current.scrollIntoView()}>About</a>
        </li>
        <li>
        <a className="nav-itemsm" onClick={() => ref5.current.scrollIntoView()}>Resume</a>
        </li>
        </ul>
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
          <div className="skills">
          <div data-aos="fade-right" className="skill">
          <div className="chart">
              <svg viewBox="0 0 36 36" className="circular-chart">
              <path style={{stroke:'#F0DB4F'}} className="circle"
              strokeDasharray="90, 100"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <img src={Js} alt="" className='jsimg chart-img' />
          </div>
          <p className="skill-info">JavaScript</p>
          </div>
          <div data-aos="fade-left" className="skill">
          <div className="chart">
              <svg viewBox="0 0 36 36" className="circular-chart">
              <path style={{stroke:'#61DBFB'}} className="circle"
              strokeDasharray="90, 100"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <img src={Reactt} alt="" className='reactimg chart-img' />
          </div>
          <p className="skill-info">React</p>
          </div>
          <div data-aos="fade-right" className="skill">
          <div className="chart">
              <svg viewBox="0 0 36 36" className="circular-chart">
              <path style={{stroke:'#764ABC'}} className="circle"
              strokeDasharray="60, 100"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <img src={Redux} alt="" className='chart-img reduximg' />
          </div>
          <p className="skill-info">Redux</p>
          </div>
          <div data-aos="fade-left" className="skill">
          <div className="chart">
              <svg viewBox="0 0 36 36" className="circular-chart">
              <path style={{stroke:'#F15931'}} className="circle"
              strokeDasharray="91, 100"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <img src={Html} alt="" className='chart-img htmlimg' />
          </div>
          <p className="skill-info">Html</p>
          </div>
          <div data-aos="fade-right" className="skill">
          <div className="chart">
              <svg viewBox="0 0 36 36" className="circular-chart">
              <path style={{stroke:'#007DC6'}} className="circle"
              strokeDasharray="93, 100"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <img src={Css} alt="" className='cssimg chart-img' />
          </div>
          <p className="skill-info">Css</p>
          </div>
          <div data-aos="fade-left" className="skill">
          <div className="chart">
              <svg viewBox="0 0 36 36" className="circular-chart">
              <path style={{stroke:'#870AFB'}} className="circle"
              strokeDasharray="50, 100"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <img src={Bootstrap} alt="" className='chart-img bootimg' />
          </div>
          <p className="skill-info">Bootstrap</p>
          </div>
          <div data-aos="fade-right" className="skill">
          <div className="chart">
              <svg viewBox="0 0 36 36" className="circular-chart">
              <path style={{stroke:'#01B7D6'}} className="circle"
              strokeDasharray="40, 100"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <img src={Tailwind} alt="" className='chart-img tailimg' />
          </div>
          <p className="skill-info">Tailwind</p>
          </div>
          <div data-aos="fade-left" className="skill">
          <div className="chart">
              <svg viewBox="0 0 36 36" className="circular-chart">
              <path style={{stroke:'#3574A4'}} className="circle"
              strokeDasharray="90, 100"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <img src={Python} alt="" className='chart-img pyimg' />
          </div>
          <p className="skill-info">Python</p>
          </div>
          <div data-aos="fade-right" className="skill">
          <div className="chart">
              <svg viewBox="0 0 36 36" className="circular-chart">
              <path style={{stroke:'#27AB78'}} className="circle"
              strokeDasharray="70, 100"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <img src={Django} alt="" className='chart-img djimg' />
          </div>
          <p className="skill-info">Django</p>
          </div>
          <div data-aos="fade-left" className="skill">
          <div className="chart">
              <svg viewBox="0 0 36 36" className="circular-chart">
              <path style={{stroke:'#00758F'}} className="circle"
              strokeDasharray="30, 100"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <img src={Mysql} alt="" className='chart-img mysqlimg' />
          </div>
          <p className="skill-info">MySql</p>
          </div>
          <div data-aos="fade-right" className="skill">
          <div className="chart">
              <svg viewBox="0 0 36 36" className="circular-chart">
              <path style={{stroke:'#F05033'}} className="circle"
              strokeDasharray="50, 100"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <img src={Git} alt="" className='chart-img gitimg' />
          </div>
          <p className="skill-info">Git</p>
          </div>
          <div data-aos="fade-left" className="skill">
          <div className="chart">
              <svg viewBox="0 0 36 36" className="circular-chart">
              <path style={{stroke:'#000000'}} className="circle"
              strokeDasharray="60, 100"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <img src={Github} alt="" className='chart-img githubimg' />
          </div>
          <p className="skill-info">Github</p>
          </div>
        </div>
        </div>
        <div ref={ref3} className="works-body">
          <h1 class="works-title">My Recent Works</h1>
          <div className="works">
            <Work img={Benz} link='https://tearex05.github.io/mercedesbenz/' />
            <Work img={Ham} link='https://tearex05.github.io/burger/' />
            <Work img={Teagame} link='https://tearex05.github.io/squidgame/' />
            <Work img={Tour} link='https://tearex05.github.io/tour-agency/' />
          </div>
          <h1 className="coming">
            More Coming Soon...
          </h1> 
        </div>
        <div ref={ref4} className="contact-body">
         <h1 className="contact-title">
           Want To Have A Great Website?<br /><span className="call">Better Call Me ;)</span>
         </h1>
         <div className="medias">
         <a href="https://www.linkedin.com/in/tea-rex-2860ab254/" className="media-info">
         <BsLinkedin style={{fill: '#0A66C2'}} class='icon' />
         </a>
         <a href="https://t.me/tearex05" className="media-info">
         <FaTelegram style={{fill: '#2FA3D9'}} class='icon' />
         </a>
         <a href="mailto: tearex05@yahoo.com" className="media-info">
         <FaYahoo style={{fill: '#5C01CA'}} class='icon' />
         </a>
         <a href="https://twitter.com/tearex05" className="media-info">
         <BsTwitter style={{fill: '#1C93E4'}} class='icon' />
         </a>
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
    </>
  )
}

export default App