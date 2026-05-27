import { useEffect, useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce'

function UserSearchForm({ initialValue, onSearch, isLoading }) {
  const [username, setUsername] = useState(initialValue)
  const debouncedUsername = useDebounce(username, 500)

  useEffect(() => {
    if (debouncedUsername?.trim()) {
      onSearch(debouncedUsername.trim(), true)
    }
  }, [debouncedUsername, onSearch])

  function handleSubmit(event) {
    event.preventDefault()
    onSearch(username.trim(), false)
  }

  return (
    <form className="card border-0 shadow-sm mb-4" onSubmit={handleSubmit}>
      <div className="card-body">
        <label htmlFor="username" className="form-label fw-semibold">
          Buscar usuário do GitHub
        </label>
        <div className="input-group">
          <input
            id="username"
            className="form-control form-control-lg"
            placeholder="Ex.: torvalds"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            autoComplete="off"
          />
          <button className="btn btn-primary px-4" type="submit" disabled={isLoading}>
            {isLoading ? 'Buscando...' : 'Buscar'}
          </button>
        </div>
      </div>
    </form>
  )
}

export default UserSearchForm
