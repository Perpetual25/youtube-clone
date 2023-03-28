import React from 'react'
import './Button.css'

const Button = ({text}) => {
  return (
    <div className='btn_container'>
      <div className='all'>
      <p>{text}</p>
      </div>
    </div>
  )
}

export default Button