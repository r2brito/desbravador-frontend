import { useEffect, useState } from 'react'
import { getRepoByFullName } from '../services/githubService'

export function useRepoDetails(owner, repo) {
  const [repoData, setRepoData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchRepo() {
      if (!owner || !repo) return
      setIsLoading(true)
      setError('')

      try {
        const data = await getRepoByFullName(owner, repo)
        setRepoData(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRepo()
  }, [owner, repo])

  return { repoData, isLoading, error }
}
