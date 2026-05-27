import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com',
  timeout: 10000,
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const fallbackMessage = 'Não foi possível concluir a requisição.'
    const status = error.response?.status

    if (status === 404) {
      return Promise.reject(new Error('Recurso não encontrado no GitHub.'))
    }

    if (status === 403) {
      return Promise.reject(
        new Error('Limite de requisições excedido. Tente novamente em instantes.'),
      )
    }

    if (error.code === 'ECONNABORTED') {
      return Promise.reject(new Error('Tempo de requisição esgotado.'))
    }

    return Promise.reject(new Error(error.message || fallbackMessage))
  },
)

export default apiClient
