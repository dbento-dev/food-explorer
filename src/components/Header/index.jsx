import { useNavigate } from 'react-router-dom'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import ReceiptSVG from '../../assets/icons/Receipt.svg'

import { Container, Menu, ReceiptIcon } from './styles'

import { Input } from '../../components/Input'
import { ExplorerLogo } from '../../components/ExplorerLogo'
import { Button } from '../../components/Button'
import { LogoutButton } from '../../components/LogoutButton'

import { useAuth } from '../../hooks/auth'
import { ButtonText } from '../ButtonText'

export function Header({ setSearch }) {
  const { signOut, isAdmin } = useAuth()

  const navigate = useNavigate()

  const handleLogout = () => {
    signOut()
    navigate('/')
  }

  function handleAddDish() {
    navigate('/add-dish')
  }

  const handleOrders = () => {
    console.log('Meus pedidos')
  }

  const handleCloseMenu = () => {
    document.getElementById('navbar').classList.remove('active')
  }

  const handleOpenMenu = () => {
    document.getElementById('navbar').classList.toggle('active')
  }

  return (
    <Container>
      <div id="navbar" className="overlay">
        <div className="overlay-content">
          <div className="menu-header">
            <Menu className="menu-button" onClick={handleCloseMenu}>
              <AiOutlineClose />
            </Menu>
            <div className="logo">
              <ExplorerLogo />
            </div>

            <div className="logout-button">
              <LogoutButton onClick={handleLogout} />
            </div>
          </div>

          <div className="menu-content">
            {/* <Input
              placeholder="Busque por pratos ou ingredientes"
              onChange={(e) => setSearch(e.target.value)}
            /> */}

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
            </div>
          </div>
        </div>
      </div>

      <Menu className="menu-button" onClick={handleOpenMenu}>
        <AiOutlineMenu />
      </Menu>

      <div className="logo">
        <ExplorerLogo />
      </div>

      <div className="search-input">
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Button
        className="receipt-button"
        title={isAdmin ? 'Novo prato' : 'Pedidos (0)'}
        icon={!isAdmin && ReceiptSVG}
        onClick={isAdmin ? handleAddDish : handleOrders}
        buttontype="warning"
      />

      <ReceiptIcon className="receipt-icon">
        <img src={ReceiptSVG} alt="Ícone de receita" />
      </ReceiptIcon>

      <div className="logout-button">
        <LogoutButton onClick={handleLogout} />
      </div>
    </Container>
  )
}
