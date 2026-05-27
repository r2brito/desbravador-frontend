import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import EmptyState from '../components/common/EmptyState'
import ErrorAlert from '../components/common/ErrorAlert'
import LoadingSkeleton from '../components/common/LoadingSkeleton'
import RepoCard from '../components/repos/RepoCard'
import RepoFilters from '../components/repos/RepoFilters'
import RepoPagination from '../components/repos/RepoPagination'
import UserProfileCard from '../components/user/UserProfileCard'
import { useGithubSearch } from '../hooks/useGithubSearch'
import { useUserRepos } from '../hooks/useUserRepos'

function UserPage() {
  const { username = '' } = useParams()
  const { user, isLoading: isUserLoading, error: userError, searchUser } = useGithubSearch()
  const [sortBy, setSortBy] = useState('starsDesc')
  const [language, setLanguage] = useState('')

  const {
    allRepos,
    repos,
    totalRepos,
    currentPage,
    totalPages,
    isLoading: isReposLoading,
    error: reposError,
    setPage,
  } = useUserRepos(username, sortBy, language)

  useEffect(() => {
    searchUser(username)
  }, [searchUser, username])

  const languages = useMemo(() => {
    const uniqueLanguages = new Set()
    allRepos.forEach((repo) => {
      if (repo.language) uniqueLanguages.add(repo.language)
    })
    return Array.from(uniqueLanguages).sort()
  }, [allRepos])

  return (
    <section>
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-0">Perfil de @{username}</h1>
        <Link to="/" className="btn btn-outline-secondary btn-sm">
          Voltar
        </Link>
      </header>

      <div className="row g-4">
        <div className="col-12 col-lg-4">
          {isUserLoading ? <LoadingSkeleton rows={4} /> : <UserProfileCard user={user} />}
          <ErrorAlert message={userError} />
        </div>

        <div className="col-12 col-lg-8">
          <RepoFilters
            sortBy={sortBy}
            onSortChange={setSortBy}
            language={language}
            onLanguageChange={setLanguage}
            languages={languages}
          />

          {isReposLoading && <LoadingSkeleton rows={6} />}
          <ErrorAlert message={reposError} />

          {!isReposLoading && !reposError && repos.length === 0 && (
            <EmptyState title="Nenhum repositório encontrado" description="Ajuste os filtros para continuar." />
          )}

          <div className="row g-3">
            {repos.map((repo) => (
              <div key={repo.id} className="col-12 col-md-6">
                <RepoCard repo={repo} />
              </div>
            ))}
          </div>

          {!isReposLoading && totalRepos > 0 && (
            <RepoPagination currentPage={currentPage} totalPages={totalPages} onChangePage={setPage} />
          )}
        </div>
      </div>
    </section>
  )
}

export default UserPage
