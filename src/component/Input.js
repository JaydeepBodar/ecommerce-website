import React from 'react'
import './styles/input.css'
const Input = ({type,placeholder,onChange,value}) => {
  return (
    <div className='form-group'>
      <input type={type} placeholder={placeholder} onChange={onChange} value={value}/>
    </div>
  )
}

export default Input
