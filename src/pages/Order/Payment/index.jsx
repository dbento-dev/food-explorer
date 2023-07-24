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
import { monthRange, yearRange } from '../../../helpers/rangeDates'

export function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('pix')
  const [creditCardNumber, setCreditCardNumber] = useState('')
  const [expirationMonth, setExpirationMonth] = useState('')
  const [expirationYear, setExpirationYear] = useState('')
  const [cvv, setCvv] = useState('')

  const handlePaymentMethod = (option) => {
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

  const handlePayment = () => {
    const data = {
      paymentMethod,
      creditCardNumber,
      expirationDate: {
        month: expirationMonth,
        year: expirationYear
      },
      cvv
    }
    console.log('data', data)
  }

  const handleCreditCardNumber = (e) => {
    let { value } = e.target

    let formattedValue = value.replace(/\s/g, '')
    formattedValue = formattedValue.replace(/\D/g, '')
    formattedValue = formattedValue.replace(/([0-9]{4})/g, '$1 ')
    formattedValue = formattedValue.trim()

    setCreditCardNumber(formattedValue)
  }

  const handleCVV = (e) => {
    let { value } = e.target

    value = value.replace(/\s/g, '')
    value = value.replace(/\D/g, '')
    value = value.trim()

    setCvv(value)
  }

  const handleExpirationDateMonth = (e) => {
    let { value } = e.target

    setExpirationMonth(value)
  }

  const handleExpirationDateYear = (e) => {
    let { value } = e.target

    setExpirationYear(value)
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

          {paymentMethod === 'credit-card' && (
            <div className="credit-card-payment">
              <form action="">
                <div className="credit-card-number">
                  <label htmlFor="credit-card-number">Numero do cartão</label>
                  <input
                    type="input"
                    id="credit-card-number"
                    placeholder="0000 0000 0000 0000"
                    onChange={(e) => handleCreditCardNumber(e)}
                    value={creditCardNumber}
                    maxLength={19}
                    autoComplete="off"
                  />
                </div>

                <div className="expiration-date-cvv">
                  <div className="expiration-date">
                    <label htmlFor="expiration-date-month">Validade</label>
                    <div className="expiration-date-select">
                      <select
                        id="expiration-date-month"
                        name="expiration-date-month"
                        autoComplete="off"
                        defaultValue="Mês"
                        onChange={(e) => handleExpirationDateMonth(e)}
                      >
                        <option disabled value="Mês">
                          Mês
                        </option>
                        {monthRange.map((month) => (
                          <option key={month} value={month}>
                            {month}
                          </option>
                        ))}
                      </select>

                      <select
                        id="expiration-date-year"
                        name="expiration-date-year"
                        autoComplete="off"
                        defaultValue="Ano"
                        onChange={(e) => handleExpirationDateYear(e)}
                      >
                        <option disabled value="Ano">
                          Ano
                        </option>
                        {yearRange.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="cvv">
                    <label htmlFor="cvv">CVV</label>
                    <div className="expiration-date-select-input">
                      <input
                        type="text"
                        id="cvv"
                        placeholder="CVV"
                        onChange={(e) => handleCVV(e)}
                        value={cvv}
                        maxLength={3}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  title="Finalizar pagamento"
                  buttontype="warning"
                  onClick={handlePayment}
                  disabled={
                    !creditCardNumber ||
                    !expirationMonth ||
                    !expirationYear ||
                    !cvv
                  }
                />
              </form>
            </div>
          )}
        </StPaymentMethod>
      </PaymentContainer>
    </Container>
  )
}
