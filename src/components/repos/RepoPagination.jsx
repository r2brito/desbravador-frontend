function RepoPagination({ currentPage, totalPages, onChangePage }) {
  if (totalPages <= 1) return null

  return (
    <nav aria-label="Paginacão de repositórios">
      <ul className="pagination justify-content-center mt-4">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onChangePage(currentPage - 1)}>
            Anterior
          </button>
        </li>
        <li className="page-item disabled">
          <span className="page-link">
            Página {currentPage} de {totalPages}
          </span>
        </li>
        <li className={`page-item ${currentPage >= totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onChangePage(currentPage + 1)}>
            Próxima
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default RepoPagination
