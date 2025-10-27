import React from 'react'
import './Recommended.css'
import Button from '../Components/Button'

const Recommended = ({handleClick}) => {
  return (
    <>
    <div className='recommended-container'>
        <h2 className='recommended-title'>Recommended</h2>
        <div className="recommended">
           
            <Button onClickhandler={handleClick} value="" title="All"/>
             <Button onClickhandler={handleClick} value="Nike" title="Nike"/>
             <Button onClickhandler={handleClick} value="Adidas" title="Adidas"/>
             <Button onClickhandler={handleClick} value="Puma" title="Puma"/>
             <Button onClickhandler={handleClick} value="Vans" title="Vans"/>
        </div>
    </div>
    </>
  )
}

export default Recommended