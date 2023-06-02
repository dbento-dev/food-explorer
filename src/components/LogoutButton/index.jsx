import { FiLogOut } from 'react-icons/fi'
import { Logout } from './styles'

export function LogoutButton({ onClick }) {
  return (
    <Logout onClick={onClick}>
      <FiLogOut />
    </Logout>
  )
}
