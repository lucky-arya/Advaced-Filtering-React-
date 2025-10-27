import React from 'react'

const Button = ({onClickhandler, title ,value}) => {
  return (
    <>
    <button className='btns' onClick={onClickhandler} value={value}>{title}</button>
    </>
  )
}

export default Button