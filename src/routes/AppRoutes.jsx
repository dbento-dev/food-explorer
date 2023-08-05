import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrivateRoutes } from '../utils/PrivateRoutes'
import { SignIn } from '../pages/SignIn'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { FormDish } from '../pages/FormDish'
import { EditFormDish } from '../pages/EditFormDish'
import { Favorites } from '../pages/Favorites'
import { Order } from '../pages/Order'
import { SignUp } from '../pages/SignUp'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route exact path="/add-dish" element={<FormDish />} />
          <Route path="/edit/:id" element={<EditFormDish />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/order" element={<Order />} />
        </Route>

        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/register" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
