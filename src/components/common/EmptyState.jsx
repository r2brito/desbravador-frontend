function EmptyState({ title, description }) {
  return (
    <div className="text-center py-5 card border-0 shadow-sm">
      <div className="card-body">
        <h3 className="h5">{title}</h3>
        <p className="text-secondary mb-0">{description}</p>
      </div>
    </div>
  )
}

export default EmptyState
