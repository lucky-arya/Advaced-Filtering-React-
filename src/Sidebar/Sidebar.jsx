import React from 'react'
import './Sidebar.css'
import Colors from '../Sidebar/Colors/Colors.jsx'
import Price from '../Sidebar/Price/Price.jsx'
import Category from '../Sidebar/Category/Category.jsx'

const Sidebar = ({handleChange}) => {
  return (
    <>
     <section className='sidebar'>
        <Category handleChange={handleChange} />

       <Price handleChange={handleChange} />
       <Colors handleChange={handleChange} />
     </section>
    </>
  )
}

export default Sidebar