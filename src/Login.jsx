import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import './Login.css'
import { useEffect, useState } from 'react'
export default function login() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [serverErrorMsg, setServerErrorMsg] = useState("")
  const URL = "http://localhost:4002"
  const [loginData, setLoginData] = useState({})

  const role = searchParams.get("role")
  const password = searchParams.get("pass")
  console.log(role, password)

  async function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const userData = Object.fromEntries(formData.entries())
    const res = await fetch(`${URL}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData)
    })
    if (res.status === 404) {
      return setServerErrorMsg("User not found!")
    }
    const data = await res.json()
    console.log(data)
    if (data.admin === true) {
      setServerErrorMsg("")
      return navigate("/admin")
    }
    if (data.message) {
      setServerErrorMsg("")
      navigate("/")
    }

  }


import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-card">

        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">
          Login to your Hotel Management Account
        </p>

        <form className="login-form">

          <label style={{justifyContent: "start", display:"flex"}}>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
          />

          <label style={{justifyContent: "start", display:"flex"}}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />

          <button className="login-btn">
            Login
          </button>

          <p className="signup-text">
            Don't have an account?
            <Link to="/register"> Sign Up Now</Link>
          </p>

          <p className="forget-text">
            <Link to="/forget">
              Forgot Password?
            </Link>
          </p>

        </form>

          <h1 className="login">Login</h1>
          <form onSubmit={handleSubmit} action="">
            <div className='input-container'>
              <div className="input-div" >
                <label>UserName</label>
                <input name='name' type="text" />
              </div>
              <div className="password-div">
                <label >Password</label>
                <input name='password' type="password" />
              </div>
              {serverErrorMsg && <p className='server-error'>{serverErrorMsg}</p>}
              <p className="create_btn">Dont have an account <Link to="/register">Sign up Now</Link> </p>
              <button className="Login_btn" >Log in</button><br />
              <p className="forget-btn">  <Link to="/forget">Forget Password</Link></p>
            </div>
          </form>
        </div>
      </div>
  )
  
  }
   
}
