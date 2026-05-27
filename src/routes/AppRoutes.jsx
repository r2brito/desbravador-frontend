import { Navigate, Route, Routes } from 'react-router-dom'
import AppShell from '../components/layout/AppShell'
import HomePage from '../pages/HomePage'
import UserPage from '../pages/UserPage'
import RepoDetailsPage from '../pages/RepoDetailsPage'
import NotFoundPage from '../pages/NotFoundPage'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:username" element={<UserPage />} />
        <Route path="/repo/:owner/:repo" element={<RepoDetailsPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
