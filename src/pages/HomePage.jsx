import { useCallback } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import EmptyState from '../components/common/EmptyState'
import ErrorAlert from '../components/common/ErrorAlert'
import LoadingSkeleton from '../components/common/LoadingSkeleton'
import UserSearchForm from '../components/search/UserSearchForm'
import { useGithubSearch } from '../hooks/useGithubSearch'

function HomePage() {
  const { user, isLoading, error, searchUser, lastSearch } = useGithubSearch()
  const navigate = useNavigate()

  const handleSearch = useCallback(
    async (value, isDebounced) => {
      if (!value) return
      const response = await searchUser(value)
      if (!response && !isDebounced) {
        toast.error('Usuário não encontrado.')
      }
    },
    [searchUser],
  )

  return (
    <section>
      <header className="mb-4">
        <h1 className="display-6 fw-bold">Busque desenvolvedores no GitHub</h1>
        <p className="text-secondary mb-0">
          Encontre usuários e explore os repositórios mais relevantes com uma experiência moderna.
        </p>
      </header>

      <UserSearchForm initialValue={lastSearch} onSearch={handleSearch} isLoading={isLoading} />
      <ErrorAlert message={error} />

      {isLoading && <LoadingSkeleton rows={4} />}

      {!isLoading && !error && !user && (
        <EmptyState
          title="Digite um usuário para começar"
          description="A última busca fica salva automaticamente para facilitar seu fluxo."
        />
      )}

      {!isLoading && user && (
        <div className="card border-0 shadow-sm">
          <div className="card-body d-flex flex-column flex-md-row align-items-md-center gap-3">
            <img src={user.avatar_url} alt={user.login} className="rounded-circle avatar-md" />
            <div className="flex-grow-1">
              <h2 className="h5 mb-1">{user.name || user.login}</h2>
              <p className="text-secondary mb-0">@{user.login}</p>
            </div>
            <button className="btn btn-primary" onClick={() => navigate(`/user/${user.login}`)}>
              Ver perfil completo
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default HomePage
