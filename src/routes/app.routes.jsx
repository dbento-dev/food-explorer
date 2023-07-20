import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { FormDish } from '../pages/FormDish'
import { EditFormDish } from '../pages/EditFormDish'
import { Favorites } from '../pages/Favorites'
import { Order } from '../pages/Order'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/add-dish" element={<FormDish />} />
      <Route path="/edit/:id" element={<EditFormDish />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  )
}
