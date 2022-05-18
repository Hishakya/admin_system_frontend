import React from 'react'
import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import axios from 'axios'

function SignIn() {
    const [formData,setFormData] = useState({      
        email: "",
        password: "",
    })

    const {  email, password } = formData  //destructuring formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {   
        e.preventDefault()
        axios.post("http://localhost:3000/users/signin", {
        email: formData.emailAddress,
        password: formData.password,
      })
      .then((response) => {
        console.log(response);
        alert("Signin Successfull");
      })
      .catch((error) => console.log(error));
    }

    return (
        <>
          <section className='heading'>
            <h1>
              <FaSignInAlt /> Sign In
            </h1>
            {/* <p>Please create an account</p> */}
          </section>
    
          <section className='form'>
            <form onSubmit={onSubmit}>
             
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
                  type='password'
                  className='form-control'               
                  name='password'
                  value={password}
                  placeholder='Enter password'
                  onChange={onChange}
                />
              </div>

              
              <div className='form-group'>
                <button type='submit' className='btn btn-block'>
                  Sign In 
                </button>
                
              </div>
              <p>Don't have an account? <Link to="/signup" > Sign Up </Link></p>
            </form>
          </section>
        </>
      )
}

export default SignIn