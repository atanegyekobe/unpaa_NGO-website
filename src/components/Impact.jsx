import './Impact.css'

function Impact() {
  const stats = [
    { number: '10,000+', label: 'People Helped' },
    { number: '50+', label: 'Communities Served' },
    { number: '100+', label: 'Projects Completed' },
    { number: '25+', label: 'Partner Organizations' }
  ]

  return (
    <section className="impact">
      <div className="container">
        <h2 className="section-title">Our Impact</h2>
        <p className="section-subtitle">
          {/* TODO: Replace with actual description */}
          Numbers that tell our story of positive change
        </p>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="impact-stories">
          <h3>Success Stories</h3>
          <div className="stories-grid">
            <div className="story-card">
              <div className="story-image-placeholder">Image</div>
              <h4>Story Title 1</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace with actual success story.</p>
            </div>
            <div className="story-card">
              <div className="story-image-placeholder">Image</div>
              <h4>Story Title 2</h4>
              <p>Sed do eiusmod tempor incididunt ut labore. Replace with actual success story.</p>
            </div>
            <div className="story-card">
              <div className="story-image-placeholder">Image</div>
              <h4>Story Title 3</h4>
              <p>Ut enim ad minim veniam, quis nostrud. Replace with actual success story.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact
