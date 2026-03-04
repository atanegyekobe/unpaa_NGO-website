import './Programs.css'

function Programs() {
  const programs = [
    {
      title: 'Program 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Add your program details here.',
      icon: '🎓'
    },
    {
      title: 'Program 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Add your program details here.',
      icon: '💼'
    },
    {
      title: 'Program 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation. Add your program details here.',
      icon: '🌱'
    },
    {
      title: 'Program 4',
      description: 'Duis aute irure dolor in reprehenderit in voluptate. Add your program details here.',
      icon: '🏥'
    }
  ]

  return (
    <section className="programs">
      <div className="container">
        <h2 className="section-title">Our Programs</h2>
        <p className="section-subtitle">
          {/* TODO: Replace with actual description */}
          We offer a range of programs designed to create lasting impact in communities
        </p>
        
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-icon">{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
