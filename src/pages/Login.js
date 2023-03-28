import React from 'react'
import Breadcrumb from '../component/Breadcrumb'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import Helmetc from '../component/Helmetc'
import { Link, useNavigate } from 'react-router-dom'
import './styles/Login.css'
import Input from '../component/Input'
import { loginUser } from '../features/users/userSlice';
const Login = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const {handleBlur,handleChange,handleSubmit,errors,touched,values}=useFormik({
      initialValues:{
        email:"",
        password:""
      },
      validationSchema:yup.object({
        email:yup.string().required(),
        password:yup.string().required().min(8)
      }),
      onSubmit:(values,action)=>{
        dispatch(loginUser(values))
        action.resetForm();
      }
    })
  return (
    <React.Fragment>
      <Helmetc title='Account'/>
      <Breadcrumb title='Account'/>
      <div className='Login-wrapper'>
        <div className='Login-form'>
        <h3>Log in</h3>
        <form onSubmit={handleSubmit}>
            <Input type='email' placeholder='Enter Your Email...' onChange={handleChange} onBlur={handleBlur} value={values.email} name='email'/>
            {touched.email && errors.email ? <p style={{color:'red'}}>{errors.email}</p> : ''}
            <Input type='password' placeholder='Enter Password...' onChange={handleChange} onBlur={handleBlur} value={values.password} name='password'/>
            {touched.password && errors.password ? <p style={{color:'red'}}>{errors.password}</p> : ''}
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
