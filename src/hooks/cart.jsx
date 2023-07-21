import { createContext, useContext, useEffect, useState } from 'react'

export const CartContext = createContext()

function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentItemLoading, setCurrentItemLoading] = useState([])

  const handleAddToCart = (item) => {
    setIsLoading(true)
    setCurrentItemLoading((prevState) => [...prevState, item.id])

    setTimeout(() => {
      const existItem = cart.find((i) => i.id === item.id)

      if (existItem) {
        existItem.count += item.count
        setIsLoading(false)
        setCurrentItemLoading((prevState) =>
          prevState.filter((i) => i !== item.id)
        )
        return
      }
      setCart((prevState) => [...prevState, item])
      setIsLoading(false)
      setCurrentItemLoading((prevState) =>
        prevState.filter((i) => i !== item.id)
      )
    }, 1000)
  }

  const handleRemoveFromCart = (id) => {
    setCart((prevState) => prevState.filter((item) => item.id !== id))
  }

  useEffect(() => {
    console.log('currentItemLoading', currentItemLoading)
  }, [currentItemLoading])
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddToCart,
        handleRemoveFromCart,
        isLoading,
        setIsLoading,
        currentItemLoading
      }}
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
