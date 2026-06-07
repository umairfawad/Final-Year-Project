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
import OrderOptions from "./components/OrderOptions.jsx";
import TableOrder from "./components/table-order.jsx";
import RoomOrder from "./components/room-order.jsx";
import DeliveryOrder from "./components/delivery-order.jsx";
import TableOptions from "./components/table-options.jsx";
import EventTable from "./components/event-table.jsx";
import SelectTable from "./components/select-table.jsx";
import EventHalls from "./components/event-halls.jsx";

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
},
{
  path: "/order-options",
  element: <OrderOptions />
},
{
  path: "/table-order",
  element: <TableOrder />
},
{
  path: "/room-order",
  element: <RoomOrder />
},
{
  path: "/delivery-order",
  element: <DeliveryOrder />
},
{
  path: "/table-options",
  element: <TableOptions />
},
{
  path: "/event-table",
  element: <EventTable />
},
{
  path: "/select-table",
  element: <SelectTable />
},
{
  path: "/event-halls",
  element: <EventHalls />
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
