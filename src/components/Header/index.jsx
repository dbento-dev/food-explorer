import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import ReceiptSVG from '../../assets/icons/Receipt.svg'

import { Container, Menu, ReceiptIcon } from './styles'

import { Input } from '../../components/Input'
import { ExplorerLogo } from '../../components/ExplorerLogo'
import { Button } from '../../components/Button'
import { LogoutButton } from '../../components/LogoutButton'
import { ButtonText } from '../../components/ButtonText'

import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = () => {
    console.log('Logout')
  }

  const handleMenu = () => {
    document.getElementById('navbar').classList.toggle('active')
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Container>
      <div id="navbar" className="overlay">
        <div className="overlay-content">
          <Input placeholder="Pesquisar" />

          <ButtonText title="Sair" />
        </div>
      </div>

      <Menu className="menu-button" onClick={handleMenu}>
        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </Menu>

      <div className="logo">
        <ExplorerLogo />
      </div>

      <div className="search-input">
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>

      <Button
        className="receipt-button"
        title="Pedidos (0)"
        icon={ReceiptSVG}
        onClick={() => console.log('Pedidos')}
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
