import { useState } from 'react'
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

import { Button } from '../../../components/Button'

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

  // useEffect(() => {
  //   handlePaymentMethod('pix')
  // }, [])

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

          {paymentMethod === 'credit-card' && (
            <div className="credit-card-payment">
              {/* TODO: implementar formulário de pagamento com campos com mascaras */}
              <form action="">
                <div className="credit-card-number">
                  <label htmlFor="credit-card-number">Numero do cartão</label>
                  <input type="input" id="credit-card-number" />
                </div>

                <div className="expiration-date-cvv">
                  <div className="expiration-date">
                    <label htmlFor="expiration-date">Validade</label>
                    <input type="text" id="expiration-date" />
                  </div>
                  <div className="cvv">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" />
                  </div>
                </div>
                <Button type="submit" title="Finalizar pagamento" />
              </form>
            </div>
          )}
        </StPaymentMethod>
      </PaymentContainer>
    </Container>
  )
}
