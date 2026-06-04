import FoodMenu from "./components/menu-card"
import GreetSection from "./components/greet-section"
import "./home.css"
import Gallery from "./components/food-menu"
import HomeMenu from "./components/room-menu"

export default function Home() {
    return (
        <main style={{marginTop: "30px"}}>
            <GreetSection />
            <FoodMenu/>
            <Gallery/>
            <HomeMenu/>
        </main>
    )
}
