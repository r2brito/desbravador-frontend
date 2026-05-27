import { Link, useParams } from 'react-router-dom'
import ErrorAlert from '../components/common/ErrorAlert'
import LoadingSkeleton from '../components/common/LoadingSkeleton'
import { useRepoDetails } from '../hooks/useRepoDetails'

function RepoDetailsPage() {
  const { owner = '', repo = '' } = useParams()
  const { repoData, isLoading, error } = useRepoDetails(owner, repo)

  return (
    <section>
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-0">Detalhes do repositório</h1>
        <Link to={`/user/${owner}`} className="btn btn-outline-secondary btn-sm">
          Voltar
        </Link>
      </header>

      {isLoading && <LoadingSkeleton rows={6} />}
      <ErrorAlert message={error} />

      {repoData && (
        <article className="card border-0 shadow-sm">
          <div className="card-body">
            <h2 className="h4">{repoData.name}</h2>
            <p className="text-secondary">{repoData.description || 'Sem descrição.'}</p>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Linguagem principal</span>
                    <strong>{repoData.language || 'N/A'}</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Stars</span>
                    <strong>{repoData.stargazers_count}</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Forks</span>
                    <strong>{repoData.forks_count}</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Issues abertas</span>
                    <strong>{repoData.open_issues_count}</strong>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Watchers</span>
                    <strong>{repoData.watchers_count}</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Criado em</span>
                    <strong>{new Date(repoData.created_at).toLocaleDateString('pt-BR')}</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Atualizado em</span>
                    <strong>{new Date(repoData.updated_at).toLocaleDateString('pt-BR')}</strong>
                  </li>
                  <li className="list-group-item">
                    <a href={repoData.html_url} target="_blank" rel="noreferrer">
                      Abrir no GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      )}
    </section>
  )
}

export default RepoDetailsPage
