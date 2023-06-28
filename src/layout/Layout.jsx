import { Outlet } from "react-router-dom"
import Header from "./components/Header.jsx"
import Drawer from "./components/Drawer"

function Layout() {
  return (
    <div>
        <Header />
        <Drawer />
        <Outlet />
    </div>
  )
}

export default Layout