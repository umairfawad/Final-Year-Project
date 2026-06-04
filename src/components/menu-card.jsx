import React from 'react'
import menu1 from "../assets/room1.avif"
import food4 from "../assets/4 food.jpg"

export default function FoodMenu() {
    return (
        <section className='menu'>
            <div className="food_menu">
                <img src={food4} alt="" />
                <p className='text' style={{ color: "white", Size: "15px" }}>Enjoy your delicious meal and Rooms</p>
                <button className='explorer_btn' >Food Order</button>
            </div>
            <div className="room_menu">
                <img src={menu1} alt=''></img>
                {/* <p className='text' style={{ color: "black", Size: "15px" }}>Enjoy your delicious meal and Rooms</p> */}
                <button className='room_btn' >Room Booking</button>
            </div>
        </section>
    )
}
