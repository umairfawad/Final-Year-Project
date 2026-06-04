import {Link} from 'react-router-dom'

export default function Auth() {
    return (
        <div style={{ display: "flex", gap: "20px" ,marginLeft:"150px", }}>
            <Link to="/login">Login</Link>
            <Link to="/register">Sign Up</Link>
        </div>
    )
}
