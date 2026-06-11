import { useState } from "react"
import "./Register.css"
import { useNavigate } from "react-router-dom"
export default function Register() {
  const navigate = useNavigate()
  const URL = "http://localhost:4002"
  const [formData, setFormData] = useState()
  const [serverErrorMsg, setServerErrorMsg] = useState("")


  async function handleFormData(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const userData = Object.fromEntries(formData.entries())
    setFormData(userData)
    const response = await fetch(`${URL}/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData),
      credentials: "include"
    })
    if (response.status === 409) {
      return setServerErrorMsg("User already exist!")
    }
    const data = await response.json()
    if (data.message) {
      setServerErrorMsg("")
      navigate("/")
    }


  }



  return (
    <div>
      <div className="Mainsign-container ">
        <div className="subsign-container">

          <h1 className="Signup">Sign up </h1>
          <form onSubmit={handleFormData}>
            <div className='input-container'>
              <div className="FullName-div" >
                <label>Full Name</label>
                <input name="name" type="text" placeholder='Enter your Name' />
              </div>
              <div className="phone-div">
                <label >Phone#</label>
                <input name="phone" type="number" placeholder='Enter your Number' />
              </div>
              <div className="password-2-div">
                <label >Password</label>
                <input name="password" type="password" placeholder='Enter your Password' />
              </div>
              {
                serverErrorMsg && <p className="server-error">{serverErrorMsg}</p>
              }
              <span>Already have Account! <a href="/login">Login Now</a></span>
              <button className="Register-btn" >Register</button><br />
            </div>

          </form>
        </div>
      </div>
    </div >
  )
}

import "./Register.css";

export default function Register() {
  return (
    <div className="register-page">
      <div className="register-card">

        <h1 className="register-title">Create Account</h1>
        <p className="register-subtitle">
          Register to access hotel services
        </p>

        <form className="register-form">

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
          />

          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
          />

          <button className="register-btn">
            Register
          </button>

        </form>

      </div>
    </div>
  );
}

