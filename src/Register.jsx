import "./Register.css"
export default function Register() {
    return (
        <div>
           <div className="Mainsign-container ">
        <div className="subsign-container">

           <h1 className="Signup">Sign up </h1>
           <div className='input-container'>
            <div className="FullName-div" >
              <label>Full Name</label>
              <input type="text" placeholder='Enter your Name' />
            </div>
            <div className="phone-div">
              <label >Phone#</label>
              <input type="password" placeholder='Enter your Number' />
            </div>
             <div className="password-2-div">
              <label >Password</label>
              <input type="password"  placeholder='Enter your Password' />
            </div>
              <button className="Register-btn" >Register</button><br />
          </div>
        </div>
      </div>
        </div>
    )
}
