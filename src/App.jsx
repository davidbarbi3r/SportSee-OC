import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/layout.jsx'
import Home from './pages/Home.jsx'
import Profil from './pages/Profil.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Profil/>}/>
          <Route path=':id' element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
