import React from 'react'
import './Colors.css'
import Input from '../../Components/Input'

const Colors = ({handleChange}) => {
  return (
    <div className="colors-container">
      <h2 className="colors-title">Color</h2>
      <div className="colors-items">
    <Input handleChange={handleChange} value="" title="All" name="test"/>
    <Input handleChange={handleChange} value="red" title="Red" name="test"/>
    <Input handleChange={handleChange} value="blue" title="Blue" name="test"/>
    <Input handleChange={handleChange} value="green" title="Green" name="test"/>
    <Input handleChange={handleChange} value="black" title="Black" name="test"/>
      </div>
    </div>
  )
}

export default Colors