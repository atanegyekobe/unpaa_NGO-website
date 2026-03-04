import './About.css'

function About() {
  return (
    <section className="about" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading" className="section-title">About NEWDA</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              {/* TODO: Replace with actual mission */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our mission is to create sustainable impact in communities worldwide.
            </p>
            
            <h3>Our Vision</h3>
            <p>
              {/* TODO: Replace with actual vision */}
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. We envision a world where every individual has access to opportunities for growth and development.
            </p>

            <h3>Our Values</h3>
            <ul className="values-list">
              {/* TODO: Replace with actual values */}
              <li>✓ Integrity and Transparency</li>
              <li>✓ Community Empowerment</li>
              <li>✓ Sustainable Development</li>
              <li>✓ Collaboration and Partnership</li>
            </ul>
          </div>
          
          <div className="about-image">
            {/* TODO: Replace with actual image */}
            <div className="image-placeholder" role="img" aria-label="NEWDA organization building and team">
              <span aria-hidden="true">Organization Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
