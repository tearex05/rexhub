import React from 'react'

function Work(props) {
      return (
            <a className='work-link' href={props.link}>
                  <div className='work' style={{
                        backgroundImage:
                              `url(${props.img})`,
                  }}>
                  </div>
            </a>
      )
}


export default Work