import "./Layout.css"
import { Outlet } from "react-router-dom"
import Header from "./components/Header.jsx"

function Layout() {
  return (
    <div>
        <Header />
        <nav className="drawer-container">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Layout