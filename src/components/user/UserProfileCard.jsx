function UserProfileCard({ user }) {
  if (!user) return null

  return (
    <article className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <div className="d-flex align-items-center gap-3 mb-3">
          <img src={user.avatar_url} alt={user.login} className="rounded-circle avatar-lg" />
          <div>
            <h2 className="h5 mb-1">{user.name || 'Sem nome informado'}</h2>
            <p className="text-secondary mb-0">@{user.login}</p>
          </div>
        </div>

        <p className="text-secondary">{user.bio || 'Bio não informada.'}</p>

        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item px-0 d-flex justify-content-between">
            <span>Seguidores</span>
            <strong>{user.followers}</strong>
          </li>
          <li className="list-group-item px-0 d-flex justify-content-between">
            <span>Seguindo</span>
            <strong>{user.following}</strong>
          </li>
          <li className="list-group-item px-0 d-flex justify-content-between">
            <span>Repos públicos</span>
            <strong>{user.public_repos}</strong>
          </li>
        </ul>

        <p className="mb-3">
          <strong>Email:</strong> {user.email || 'Não público'}
        </p>
        <a href={user.html_url} target="_blank" rel="noreferrer" className="btn btn-outline-primary">
          Ver perfil no GitHub
        </a>
      </div>
    </article>
  )
}

export default UserProfileCard
