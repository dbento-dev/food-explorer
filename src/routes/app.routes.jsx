import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { FormDish } from '../pages/FormDish'
// import { EditFormDish } from '../pages/EditFormDish'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/add-dish" element={<FormDish />} />
      {/* <Route path="/edit/:id" element={<EditFormDish />} /> */}
    </Routes>
  )
}
