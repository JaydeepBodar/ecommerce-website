import React from 'react'
import Breadcrumb from '../component/Breadcrumb'
import Helmetc from '../component/Helmetc'
import Input from '../component/Input'
import './styles/signup.css'
const Signup = () => {
  return (
    <React.Fragment>
      <Helmetc title='Account'/>
      <Breadcrumb title='Account'/>
      <div className='signup-wrapper'>
        <div className='signup-form'>
            <h3>Create an Account </h3>
            <form>
                <Input type='text' placeholder='Enter Firstname...'/>
                <Input type='text' placeholder='Enter-lastname...'/>
                <Input type='email' placeholder='Enter Email...'/>
                <Input type='password' placeholder='Enter Password...'/>
                <button>Sign up</button>
            </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Signup
