import { useEffect, useMemo, useState } from 'react'
import { getStoredTheme, saveTheme } from '../utils/storage'

const DARK_CLASS = 'theme-dark'

function resolveInitialTheme() {
  const storedTheme = getStoredTheme()
  if (storedTheme) return storedTheme

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(resolveInitialTheme)

  useEffect(() => {
    document.body.classList.toggle(DARK_CLASS, theme === 'dark')
    saveTheme(theme)
  }, [theme])

  const toggleTheme = useMemo(
    () => () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    [],
  )

  return { theme, toggleTheme }
}
