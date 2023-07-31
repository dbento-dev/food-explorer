import { FiSearch, FiX } from 'react-icons/fi'
import { InputBox } from './styles'

export function InputSearchBox({
  handleOpenInputSearch,
  handleCloseInputSearch,
  handleInputSearch,
  value,
  ...rest
}) {
  const handleSearch = () => {
    document.getElementById('input-box').classList.add('open')
    handleOpenInputSearch()
  }

  const handleSearchClose = () => {
    document.getElementById('input-box').classList.remove('open')
    handleCloseInputSearch()
  }

  return (
    <InputBox id="input-box" {...rest}>
      <input
        type="text"
        placeholder="Pesquise um prato"
        onChange={handleInputSearch}
        value={value}
      />
      <span id="input-box-search" onClick={handleSearch}>
        <FiSearch />
      </span>

      <FiX id="search-button-close" onClick={handleSearchClose} />
    </InputBox>
  )
}
