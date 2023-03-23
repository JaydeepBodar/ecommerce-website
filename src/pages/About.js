import React from 'react'
import Breadcrumb from '../component/Breadcrumb'
import Helmetc from '../component/Helmetc'
import './styles/About.css'
const About = () => {
  return (
    <React.Fragment>
      <Helmetc title='About'/>
      <Breadcrumb title='About'/>
      <section className='about-section'>
        <div className='container'>
        About
        </div>
      </section>
    </React.Fragment>
  )
}

export default About
