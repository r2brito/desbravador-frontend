const LAST_SEARCH_KEY = 'githubExplorer:lastSearch'
const THEME_KEY = 'githubExplorer:theme'

export function saveLastSearch(username) {
  localStorage.setItem(LAST_SEARCH_KEY, username)
}

export function getLastSearch() {
  return localStorage.getItem(LAST_SEARCH_KEY) ?? ''
}

export function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme)
}

export function getStoredTheme() {
  return localStorage.getItem(THEME_KEY)
}
