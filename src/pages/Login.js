import React from 'react'
import Breadcrumb from '../component/Breadcrumb'
import Helmetc from '../component/Helmetc'
import { Link, useNavigate } from 'react-router-dom'
import './styles/Login.css'
import Input from '../component/Input'
const Login = () => {
    const navigate=useNavigate()
  return (
    <React.Fragment>
      <Helmetc title='Account'/>
      <Breadcrumb title='Account'/>
      <div className='Login-wrapper'>
        <div className='Login-form'>
        <h3>Log in</h3>
        <form>
            <Input type='email' placeholder='Enter Your Email...'/>
            <Input type='password' placeholder='Enter Password...'/>
            <Link className='flink' to='/forgetpassword'>Forgot your password</Link>
            <div className='form-btn'>
                <button>Log in</button>
                <button onClick={()=>navigate('/signup')}>Sign up</button>
            </div>
        </form>
        </div>

      </div>
    </React.Fragment>
  )
}

export default Login
