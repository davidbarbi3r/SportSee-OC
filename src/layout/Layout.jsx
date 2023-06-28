import './Layout.css'
import { Outlet } from "react-router-dom"
import Header from "./components/Header.jsx"
import Drawer from "./components/Drawer"

function Layout() {
  return (
    <div>
        <Header />
        <div className='layout-main'>
            <Drawer />
            <Outlet />
        </div>
    </div>
  )
}

export default Layout