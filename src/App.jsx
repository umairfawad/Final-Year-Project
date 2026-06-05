

import './App.css'
import Header from "./Header.jsx"


import Footer from './footer.jsx'

import { Outlet } from 'react-router-dom'

function App() {
      return <>
            <Header />
            <Outlet />
            <Footer/>
      </>
}



export default App
