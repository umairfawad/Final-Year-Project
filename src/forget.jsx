import "./forget.css"
import './otp'
import {Link} from 'react-router-dom'
export default function Forget() {
  return (
    <div>
        <div className="mainforget-container" >
            <div className="subforget-container"  >
                <h2>Forget Password</h2>
                <div className="input-container">
                <label >Enter your Mobile number</label>
                <input type="text" />
                </div>
                <div className="verify-Button">
                    <Link to="/otp">Verify</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
