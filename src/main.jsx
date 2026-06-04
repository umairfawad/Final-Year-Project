import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import OrderHistory from './OrderHistory.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Reservation from './Reservation.jsx'
import Delivery from './Delivery.jsx'
import Forget from './forget.jsx'
import Otp from './otp.jsx'
import FoodOrder from './components/food-order.jsx'
import RoomBooking from "./components/room-booking.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "OrderHistory",
        element: <OrderHistory/>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/delivery",
        element: <Delivery />
      },
      {
        path: "/reservation",
        element: <Reservation />
      },
      {
        path: "/forget",
        element: <Forget />
      },
      {
        path: "/otp",
        element: <Otp />
      },
       // ✅ ADD THIS ROUTE
      {
        path: "/food-order",
        element: <FoodOrder />
      },
      {
  path: "/room-booking",
  element: <RoomBooking />
}
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
)
