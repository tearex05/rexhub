import React from 'react'

function Work(props) {
      return (
            <a className='work-link' href={props.link}>
                  <img src={props.img} alt="" className="work" />
            </a>
      )
}


export default Work