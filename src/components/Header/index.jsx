import logoSVG from '../../assets/logo.svg'
import { AiOutlineMenu } from 'react-icons/ai'
import { TfiReceipt } from 'react-icons/tfi'

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
        <TfiReceipt />
      </ReceiptButton>
    </Container>
  )
}
