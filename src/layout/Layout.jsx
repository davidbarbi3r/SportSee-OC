import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div>
        <header>
            <h1>Header</h1>
        </header>
        <Outlet />
        <footer>
            <h1>Footer</h1>
        </footer>
    </div>
  )
}

export default Layout