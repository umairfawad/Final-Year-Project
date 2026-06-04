import ReactImage from "../logo-Photoroom.png"
import Auth from "./Auth"
import NavTags from "./NavTags"
import "./Navbar.css"
export default function Navbar() {
    return (
        <nav className="nav-bar">
           <div className="div" style={{display: "flex", alignItems: "center", gap: "2px", textAlign    : "center"}} >
             <img style={{height: "40px", width:"40px"}} src={ReactImage} alt="Logo image" />
            <h2 style={{display: "inline"}}>Hotel Management</h2>
           </div>
            
            <NavTags />
            <Auth />
        </nav>
    )
}
