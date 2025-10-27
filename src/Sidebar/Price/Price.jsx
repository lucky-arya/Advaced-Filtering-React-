import React from 'react'
import './Price.css'
import Input from '../../Components/Input'

const Price = ({handleChange}) => {
  return (
    <div className='price-container'>
      <h2 className='price-title'>Price</h2>
      <div className='price-items'>
    <Input handleChange={handleChange} value="" title="All" name="test"/>
    <Input handleChange={handleChange} value={50} title="$0-50" name="test"/>
    <Input handleChange={handleChange} value={100} title="$50-100" name="test"/>
    <Input handleChange={handleChange} value={150} title="$100-150" name="test"/>
    <Input handleChange={handleChange} value={200} title="$150+" name="test"/>
      </div>
    </div>
  )
}

export default Price