import React from 'react'
import { useNavigate } from 'react-router-dom'
import Breadcrumb from '../component/Breadcrumb'
import Helmetc from '../component/Helmetc'
import Input from '../component/Input'
import './styles/forgetpassword.css'
const Forgetpassword = () => {
  const navigate=useNavigate()
  return (
    <React.Fragment>
      <Helmetc title='Account'/>
      <Breadcrumb title='Account'/>
      <div className='forget-wrapper'>
        <div className='forget-form'>
        <h3>Reset Password</h3>
        <p>we will send your reset password link on register email...</p>
            <form>
                <Input type='email' placeholder='Enter your email...'/>
                <div className='form-btn'>
                    <button>Send </button>
                    <button onClick={()=>navigate('/login')}>Cancle</button>
                </div>
            </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Forgetpassword
