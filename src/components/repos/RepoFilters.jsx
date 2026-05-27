import { REPO_SORT_OPTIONS } from '../../utils/repoUtils'

function RepoFilters({ sortBy, onSortChange, language, onLanguageChange, languages }) {
  return (
    <div className="card border-0 shadow-sm mb-3">
      <div className="card-body row g-3">
        <div className="col-12 col-md-6">
          <label className="form-label">Ordenação</label>
          <select
            className="form-select"
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
          >
            {Object.entries(REPO_SORT_OPTIONS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-md-6">
          <label className="form-label">Linguagem</label>
          <select
            className="form-select"
            value={language}
            onChange={(event) => onLanguageChange(event.target.value)}
          >
            <option value="">Todas</option>
            {languages.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default RepoFilters
