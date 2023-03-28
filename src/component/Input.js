import React from 'react'
import './styles/input.css'
const Input = ({type,placeholder,onChange,value,name,onBlur}) => {
  return (
    <div className='form-group'>
      <input type={type} placeholder={placeholder} onChange={onChange} value={value} name={name} onBlur={onBlur} />
    </div>
  )
}

export default Input
