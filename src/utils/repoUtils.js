export const REPO_SORT_OPTIONS = {
  starsDesc: 'Mais estrelas',
  starsAsc: 'Menos estrelas',
  nameAsc: 'Nome A-Z',
  recent: 'Mais recentes',
}

export function sortRepos(repos, sortBy) {
  const result = [...repos]

  switch (sortBy) {
    case 'starsAsc':
      return result.sort((a, b) => a.stargazers_count - b.stargazers_count)
    case 'nameAsc':
      return result.sort((a, b) => a.name.localeCompare(b.name))
    case 'recent':
      return result.sort(
        (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      )
    case 'starsDesc':
    default:
      return result.sort((a, b) => b.stargazers_count - a.stargazers_count)
  }
}

export function paginateRepos(repos, page, perPage) {
  const start = (page - 1) * perPage
  return repos.slice(start, start + perPage)
}
