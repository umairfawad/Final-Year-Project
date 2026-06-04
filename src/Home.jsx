import FoodMenu from "./components/food-menu"
import GreetSection from "./components/greet-section"
import "./home.css"

export default function Home() {
    return (
        <main style={{marginTop: "30px"}}>
            <GreetSection />
            <FoodMenu/>
        </main>
    )
}
