import React from 'react'
import menu1 from "../assets/room1.avif"
import food4 from "../assets/4 food.jpg"

export default function FoodMenu() {
    return (
        <section className='menu'>
            <div className="food_menu">
                <img src={food4} alt="" />
                <p className='text' style={{ color: "yellow", fontSize: "15px" }}>Enjoy your delicious meal and orders</p>
                <button className='explorer_btn' >Explorer menu</button>
            </div>
            <div className="room_menu">
                <img src={menu1}></img>
            </div>
        </section>
    )
}
