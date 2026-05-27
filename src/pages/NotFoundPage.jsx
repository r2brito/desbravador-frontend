import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="text-center py-5">
      <h1 className="display-5 fw-bold">404</h1>
      <p className="text-secondary">Página não encontrada.</p>
      <Link to="/" className="btn btn-primary">
        Voltar para Home
      </Link>
    </section>
  )
}

export default NotFoundPage
