import { Link, NavLink, Outlet } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

function AppShell() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-vh-100 app-bg">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-semibold" to="/">
            GitHub Explorer
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-outline-light btn-sm"
                  onClick={toggleTheme}
                >
                  {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container py-4 py-lg-5">
        <Outlet />
      </main>
    </div>
  )
}

export default AppShell
