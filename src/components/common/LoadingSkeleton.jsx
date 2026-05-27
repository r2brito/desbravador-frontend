function LoadingSkeleton({ rows = 3 }) {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="placeholder-glow mb-3">
            <span className="placeholder col-8 me-2" />
            <span className="placeholder col-4" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoadingSkeleton
