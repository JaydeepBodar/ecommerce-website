import React from 'react'
import Breadcrumb from '../component/Breadcrumb'
import Helmetc from '../component/Helmetc'
import Input from '../component/Input'
import './styles/signup.css'
import { Formik, useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { registeUser } from '../features/users/userSlice'
const Signup = () => {
  const dispatch=useDispatch();
  const {handleBlur,handleChange,handleSubmit,errors,touched,values}=useFormik({
    initialValues:{
      firstname:"",
      lastname:"",
      email:"",
      password:""
    },
    validationSchema:yup.object({
      firstname:yup.string().required(),
      lastname:yup.string().required(),
      email:yup.string().required(),
      password:yup.string().required().min(8)
    }),
    onSubmit:(values,action)=>{
      dispatch(registeUser(values))
      console.log(values)
      action.resetForm();
    }
  })
  return (
    <React.Fragment>
      <Helmetc title='Account'/>
      <Breadcrumb title='Account'/>
      <div className='signup-wrapper'>
        <div className='signup-form'>
            <h3>Create an Account </h3>
            <form onSubmit={handleSubmit}>
                <Input type='text' placeholder='Enter Firstname...' name='firstname' onChange={handleChange} onBlur={handleBlur} value={values.firstname}/>
                {touched.firstname && errors.firstname ? <p style={{color:'red'}}>{errors.firstname}</p> : ''}
                <Input type='text' placeholder='Enter-lastname...' name='lastname' onChange={handleChange} onBlur={handleBlur} value={values.lastname}/>
                {touched.lastname && errors.lastname ? <p style={{color:'red'}}>{errors.lastname}</p> : ''}
                <Input type='email' placeholder='Enter Email...' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                {touched.email && errors.email ? <p style={{color:'red'}}>{errors.email}</p> : ''}
                <Input type='password' placeholder='Enter Password...' name='password' onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                {touched.password && errors.password ? <p style={{color:'red'}}>{errors.password}</p> : ''}
                <button>Sign up</button>
            </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Signup
