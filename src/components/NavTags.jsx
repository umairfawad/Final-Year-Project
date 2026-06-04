import React from 'react'
import { Link } from 'react-router-dom'

export default function NavTags() {
    return (
        <div style={{ display: "flex", gap: "20px",marginLeft:"150px" }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/OrderHistory">OrderHistory</Link>
            <Link to='/reservation'>Reservation</Link>
            <Link to="/delivery">Delivery</Link>
            
        </div>
    )

}
