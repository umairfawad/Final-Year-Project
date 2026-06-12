import { Link } from "react-router-dom";
export default function GreetSection() {
    return (
        <section className="greet" style={{ marginBottom: "20px", color:"white" }}>
            <div className="greet-main">
            <h1 style={{fontSize: "56px", color:"white"}}>Welcome to our Platform</h1>
            <p style={{marginBottom:"20px"}}>Delicious Food | Luxuray Room | Best Service</p>
            <Link to="/food-order">
            <button style={{marginInline:"30px", borderRadius:"5px", padding:"5px",background:"green",Padding:"6px 9px", fontWeight:"bold",color:"white"}}>food order </button></Link>
            <Link to="/room-booking">
            <button style={{marginInline:"30px", borderRadius:"5px", padding:"5px",background:"green",Padding:"6px 9px", fontWeight:"bold",color:"white"}}>View Room</button></Link>
            <h1 style={{marginTop:"80px", fontSize:"40px", color:"orange"}}>Our services ! </h1>
            <p>Our service is too handle your order efficicently. we will available for you for 24/7.</p>
            <p>We have best staf that will show their best in order to satisfy custumer.</p>
            <p>We will manage your Meal Order, Table Order, Delivery and Reservation of Room for 24/7</p>
            </div>
        </section>
    )
}
