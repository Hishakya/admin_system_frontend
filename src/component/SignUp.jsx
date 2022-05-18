import React from 'react'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import axios from 'axios'

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address:"",
    password: "",
    confirmPassword: ""
  })

  const { name, email,address, password, confirmPassword } = formData  //destructuring formData

  const onChange = (e) => {
    setFormData((formData) => ({      //prevState or other variable u can use just a variable here
      ...formData,                     // all values in formData we are gettign
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (formData.password === formData.confirmPassword) {
      axios.post(' https://admin-system-backend.vercel.app/signup', formData)

        .then((response) => {
          console.log(response);
          alert("Sign Up Successfully")
          
        })

        .catch((error) => console.log(error));
    }
  }

    // const onSubmit = (e) => {
    //   e.preventDefault()
    //   axios.post('http://localhost:4000/app/signup',formData)
    // .then(res => {console.log(res.formData))
    // .catch(err => console.log(err));
    // }


  

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Sign Up
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>

        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              name='name'   //if u dont right this u cant type
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='address'
              className='form-control'
              name='address'
              value={address}
              placeholder='Enter your address'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              name='confirmPassword'
              value={confirmPassword}
              placeholder='Confirm password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Sign UP
            </button>
          </div>
        </form>
      </section>
    </>     //fragment
  )
}

export default SignUp