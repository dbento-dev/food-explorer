import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'

export const CartContext = createContext()

function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const handleAddToCart = (item) => {
    const existItem = cart.find((i) => i.id === item.id)

    if (existItem) {
      existItem.count += item.count
      toast.info('Quantidade atualizada no carrinho')
      return
    }
    setCart((prevState) => [...prevState, item])
    toast.info('Produto adicionado ao carrinho')
  }

  const handleRemoveFromCart = (id) => {
    setCart((prevState) => prevState.filter((item) => item.id !== id))
    toast.info('Produto removido do carrinho')
  }

  return (
    <CartContext.Provider
      value={{ cart, setCart, handleAddToCart, handleRemoveFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext)
  return context
}

export { CartProvider, useCart }
