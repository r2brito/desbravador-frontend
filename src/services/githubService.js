import apiClient from './apiClient'

export async function getUserByUsername(username) {
  const { data } = await apiClient.get(`/users/${username}`)
  return data
}

export async function getUserRepos(username) {
  const { data } = await apiClient.get(`/users/${username}/repos`, {
    params: {
      per_page: 100,
      sort: 'updated',
    },
  })
  return data
}

export async function getRepoByFullName(owner, repo) {
  const { data } = await apiClient.get(`/repos/${owner}/${repo}`)
  return data
}
