import { useCallback, useState } from 'react'
import { getUserByUsername } from '../services/githubService'
import { getLastSearch, saveLastSearch } from '../utils/storage'

export function useGithubSearch() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const searchUser = useCallback(async (username) => {
    if (!username) return
    setIsLoading(true)
    setError('')

    try {
      const data = await getUserByUsername(username)
      setUser(data)
      saveLastSearch(username)
      return data
    } catch (err) {
      setUser(null)
      setError(err.message)
      return null
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    user,
    isLoading,
    error,
    searchUser,
    lastSearch: getLastSearch(),
  }
}
