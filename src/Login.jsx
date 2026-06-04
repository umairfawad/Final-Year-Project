import { Link } from 'react-router-dom'
import './Login.css'
export default function Login() {
  return (
    <div>
      <div className="Main-container ">
        <div className="sub-container">

          <h1 className="login">Login</h1>
          <div className='input-container'>
            <div className="input-div" >
              <label>UserName</label>
              <input  type="text"  />
            </div>
            <div className="password-div">
              <label >Password</label>
              <input type="password"  />
            </div>
            <p className="create_btn">Dont have an account <Link to="/register">Sign up Now</Link> </p>
              <button className="Login_btn" >Log in</button><br />
             <p className="forget-btn">  <Link to="/forget">Forget Password</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}
