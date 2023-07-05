import { FiSearch, FiX } from 'react-icons/fi'
import { InputBox } from './styles'

export function InputSearchBox({
  handleOpenInputSearch,
  handleCloseInputSearch,
  setSearch,
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
        placeholder="Pesquise por pratos ou ingredientes"
        onChange={(e) => setSearch(e.target.value)}
      />
      <span id="input-box-search" onClick={handleSearch}>
        <FiSearch />
      </span>

      <FiX id="search-button-close" onClick={handleSearchClose} />
    </InputBox>
  )
}
