import { Link } from 'react-router-dom'

function RepoCard({ repo }) {
  return (
    <article className="card border-0 shadow-sm h-100 hover-lift">
      <div className="card-body d-flex flex-column">
        <h3 className="h6 mb-2">{repo.name}</h3>
        <p className="text-secondary small flex-grow-1">{repo.description || 'Sem descrição.'}</p>

        <div className="d-flex flex-wrap gap-2 small mb-3">
          <span className="badge bg-light text-dark">{repo.language || 'N/A'}</span>
          <span className="badge bg-warning text-dark">⭐ {repo.stargazers_count}</span>
          <span className="badge bg-info text-dark">🍴 {repo.forks_count}</span>
        </div>

        <p className="small text-secondary mb-3">
          Atualizado em {new Date(repo.updated_at).toLocaleDateString('pt-BR')}
        </p>

        <Link className="btn btn-sm btn-outline-primary mt-auto" to={`/repo/${repo.owner.login}/${repo.name}`}>
          Ver detalhes
        </Link>
      </div>
    </article>
  )
}

export default RepoCard
