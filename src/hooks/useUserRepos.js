import { useEffect, useMemo, useState } from 'react'
import { getUserRepos } from '../services/githubService'
import { paginateRepos, sortRepos } from '../utils/repoUtils'

const PER_PAGE = 6

export function useUserRepos(username, sortBy, language) {
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchRepos() {
      if (!username) return
      setIsLoading(true)
      setError('')
      try {
        const data = await getUserRepos(username)
        setRepos(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRepos()
  }, [username])

  const filteredAndSortedRepos = useMemo(() => {
    const filtered = language
      ? repos.filter((repo) => (repo.language || '').toLowerCase() === language.toLowerCase())
      : repos
    return sortRepos(filtered, sortBy)
  }, [repos, sortBy, language])

  const paginatedRepos = useMemo(
    () => paginateRepos(filteredAndSortedRepos, page, PER_PAGE),
    [filteredAndSortedRepos, page],
  )

  useEffect(() => {
    setPage(1)
  }, [sortBy, language, username])

  return {
    allRepos: repos,
    repos: paginatedRepos,
    totalRepos: filteredAndSortedRepos.length,
    currentPage: page,
    totalPages: Math.max(1, Math.ceil(filteredAndSortedRepos.length / PER_PAGE)),
    isLoading,
    error,
    setPage,
  }
}
