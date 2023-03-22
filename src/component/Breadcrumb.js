import React from 'react'
import { Link } from 'react-router-dom'
import './styles/breadcrumb.css'
const Breadcrumb = ({title}) => {
  return (
    <div className='bredcrumb'>
      <div className='container'>
        <div className='text-center'>
        <Link to='/' className='text-dark text-decoration-none'>Home </Link>/{title}
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
