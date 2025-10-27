import React from 'react'

const Input = ({handleChange,value,title,name,color}) => {
  return (
    <>
    <label  className="sidebar-label-container">
        <input type="radio" name={name} onChange={handleChange} value={value}/>
        <span className='checkmark'></span>
        <span className='sidebar-label' style={{backgroundColor:color}}>{title}</span>
    </label>
    </>
  )
}

export default Input