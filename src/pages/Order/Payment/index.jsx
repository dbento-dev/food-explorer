import {
  Container,
  PaymentContainer,
  StHeader,
  StPaymentMethod,
  StTitle
} from './styles'

import { MdOutlinePix } from 'react-icons/md'
import qrCodeSVG from '../../../assets/qrcode.svg'
import { BsCreditCardFill } from 'react-icons/bs'
import { useState } from 'react'

export function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('pix')

  const handlePaymentMethod = (option) => {
    console.log('option', option)
    if (!option) return
    setPaymentMethod(option)

    if (option === 'pix') {
      document.getElementById('pix-payment').classList.add('active')
      document.getElementById('credit-card').classList.remove('active')
    } else {
      document.getElementById('pix-payment').classList.remove('active')
      document.getElementById('credit-card').classList.add('active')
    }
  }

  return (
    <Container>
      <StTitle>Pagamento</StTitle>
      <PaymentContainer>
        <StHeader>
          <span
            id="pix-payment"
            className="payment-method active"
            onClick={() => handlePaymentMethod('pix')}
          >
            <MdOutlinePix />
            PIX
          </span>
          <span
            id="credit-card"
            className="payment-method"
            onClick={() => handlePaymentMethod('credit-card')}
          >
            <BsCreditCardFill />
            Cartão
          </span>
        </StHeader>
        <StPaymentMethod>
          {paymentMethod === 'pix' && (
            <span className="qr-code">
              <img src={qrCodeSVG} alt="Ícone de QRCode" />
            </span>
          )}
        </StPaymentMethod>
      </PaymentContainer>
    </Container>
  )
}
