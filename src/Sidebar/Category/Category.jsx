import React from 'react'
import Input from "../../Components/Input.jsx"

import './Category.css'

const Category = ({handleChange}) => {
  return (
   <>
   <h2 className='sidebar-title'>Category</h2>
   <div className='sidebar-items'>
    {/* <label className='sidebar-label-container'>
        <input type="radio" name="test" onChange={handleChange} value="all"/>
        <span className='checkmark'></span>
        <span className='sidebar-label'>All</span>
    </label> */}
    <Input handleChange={handleChange} value="" title="All" name="test"/>
    <Input handleChange={handleChange} value="sneakers" title="Sneakers" name="test"/>
    <Input handleChange={handleChange} value="sandals" title="Sandals" name="test"/>
    <Input handleChange={handleChange} value="flats" title="Flats" name="test"/>
    <Input handleChange={handleChange} value="heels" title="Heels" name="test"/>

   </div>
   </>
  )
}

export default Category