import logoSVG from '../../assets/logo.svg'
import { AiOutlineMenu } from 'react-icons/ai'
import ReceiptSVG from '../../assets/icons/Receipt.svg'

import { Container, ExplorerLogo, Menu, ReceiptButton } from './styles'

export function Header() {
  return (
    <Container>
      <Menu>
        <AiOutlineMenu />
      </Menu>
      <ExplorerLogo>
        <img src={logoSVG} alt="Logo do Explorer Food" />
        <div>
          <span>food explorer</span>
        </div>
      </ExplorerLogo>
      <ReceiptButton>
        <img src={ReceiptSVG} alt="Ícone de receita" />
      </ReceiptButton>
    </Container>
  )
}
