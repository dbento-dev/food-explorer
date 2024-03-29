import { useNavigate } from 'react-router-dom'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FiHeart, FiSearch } from 'react-icons/fi'
import ReceiptSVG from '../../assets/icons/Receipt.svg'

import { Container, FavoriteIcon, Menu, ReceiptIcon } from './styles'

import { Input } from '../../components/Input'
import { ExplorerLogo } from '../../components/ExplorerLogo'
import { Button } from '../../components/Button'
import { LogoutButton } from '../../components/LogoutButton'

import { useAuth } from '../../hooks/auth'
import { ButtonText } from '../ButtonText'
import { InputSearchBox } from '../InputSearchBox'
import { useCart } from '../../hooks/cart'

export function Header({ search, setSearch }) {
  const { signOut, isAdmin } = useAuth()
  const { cart } = useCart()

  const navigate = useNavigate()

  const handleLogout = () => {
    signOut()
    navigate('/login')
  }

  function handleAddDish() {
    navigate('/add-dish')
  }

  const handleOrders = () => {
    navigate('/order')
  }

  const handleInputSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleCloseMenu = () => {
    document.getElementById('navbar').classList.remove('active')
  }

  const handleOpenMenu = () => {
    document.getElementById('navbar').classList.toggle('active')
  }

  const handleOpenInputSearch = () => {
    document.getElementById('menu-logo').classList.add('search-open')
  }

  const handleCloseInputSearch = () => {
    document.getElementById('menu-logo').classList.remove('search-open')
    setSearch('')
  }

  const handleFavoriteRecipes = () => {
    navigate('/favorites')
  }

  return (
    <Container>
      <div id="navbar" className="overlay">
        <div className="overlay-content">
          <div className="menu-header">
            <div className="menu">
              <Menu className="menu-button" onClick={handleCloseMenu}>
                <AiOutlineClose />
              </Menu>
              <span>Menu</span>
            </div>
            <div className="logout-button">
              <LogoutButton onClick={handleLogout} />
            </div>
          </div>

          <div className="menu-content">
            <div className="menu-buttons">
              {isAdmin && (
                <>
                  <ButtonText
                    id="add-dish-button"
                    title="Novo prato"
                    to="/add-dish"
                  />
                  <div className="divider" />
                </>
              )}

              {!isAdmin && (
                <div className="menu-item">
                  <FiHeart />
                  <ButtonText
                    title="Favoritos"
                    id="favorites-button"
                    to="/favorites"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div id="header-content">
        <Menu className="menu-button" onClick={handleOpenMenu}>
          <AiOutlineMenu />
        </Menu>

        <div id="menu-logo">
          <ExplorerLogo />
        </div>

        <div className="search-input">
          <Input
            placeholder="Busque por pratos ou ingredientes"
            icon={FiSearch}
            onChange={handleInputSearch}
            value={search}
          />
        </div>

        <div id="large-right-side-buttons">
          <Button
            id="receipt-button"
            title={isAdmin ? 'Novo prato' : `Pedidos (${cart?.length})`}
            icon={!isAdmin && ReceiptSVG}
            onClick={isAdmin ? handleAddDish : handleOrders}
            buttontype="warning"
          />

          {!isAdmin && (
            <FavoriteIcon
              className="favorite-icon"
              onClick={handleFavoriteRecipes}
            >
              <FiHeart />
            </FavoriteIcon>
          )}
          <div className="logout-button">
            <LogoutButton onClick={handleLogout} />
          </div>
        </div>

        <div id="right-side-icons">
          <div id="search-box">
            <InputSearchBox
              handleOpenInputSearch={handleOpenInputSearch}
              handleCloseInputSearch={handleCloseInputSearch}
              handleInputSearch={handleInputSearch}
              value={search}
            />
          </div>

          {!isAdmin && (
            <ReceiptIcon className="receipt-icon" onClick={handleOrders}>
              <img src={ReceiptSVG} alt="Ícone de receita" />
              <span>{cart?.length}</span>
            </ReceiptIcon>
          )}
        </div>
      </div>
    </Container>
  )
}
