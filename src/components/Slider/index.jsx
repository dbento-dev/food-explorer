import { useRef } from 'react'
import { Container } from './styles'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export function Slider({ children, ...rest }) {
  const slider = useRef(null)

  function handleLeftClick(e) {
    e.preventDefault()

    if (!Math.abs(slider.current.scrollLeft) < 1) {
      slider.current.scrollLeft -= slider.current.offsetWidth
    }
  }

  function handleRightClick(e) {
    e.preventDefault()

    if (
      Math.abs(
        slider.current.scrollLeft +
          slider.current.offsetWidth -
          slider.current.scrollWidth
      ) > 1
    ) {
      slider.current.scrollLeft += slider.current.offsetWidth
    }
  }

  return (
    <Container {...rest}>
      <button className="btn-left control" onClick={handleLeftClick}>
        <FiChevronLeft size={50} />
      </button>
      <button className="btn-right control" onClick={handleRightClick}>
        <FiChevronRight size={50} />
      </button>
      <div className="carousel" ref={slider}>
        {children}
      </div>
    </Container>
  )
}
