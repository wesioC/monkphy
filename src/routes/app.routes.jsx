import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Explore from '../pages/Explore'
import Search from '../pages/Search'

export function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/search' element={<Search/>}/>
    </Routes>
  )
}

