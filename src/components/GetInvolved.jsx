import './GetInvolved.css'

function GetInvolved() {
  return (
    <section className="get-involved">
      <div className="container">
        <h2 className="section-title">Get Involved</h2>
        <p className="section-subtitle">
          {/* TODO: Replace with actual description */}
          There are many ways you can support our mission and make a difference
        </p>

        <div className="involvement-grid">
          <div className="involvement-card">
            <div className="involvement-icon">💰</div>
            <h3>Donate</h3>
            <p>Your financial support helps us continue our vital work in communities worldwide.</p>
            <button className="involvement-btn">Donate Now</button>
          </div>

          <div className="involvement-card">
            <div className="involvement-icon">🤝</div>
            <h3>Volunteer</h3>
            <p>Join our team of dedicated volunteers and contribute your time and skills.</p>
            <button className="involvement-btn">Become a Volunteer</button>
          </div>

          <div className="involvement-card">
            <div className="involvement-icon">🤲</div>
            <h3>Partner</h3>
            <p>Collaborate with us as a corporate partner or institutional supporter.</p>
            <button className="involvement-btn">Partner With Us</button>
          </div>

          <div className="involvement-card">
            <div className="involvement-icon">📢</div>
            <h3>Spread the Word</h3>
            <p>Help us reach more people by sharing our mission on social media.</p>
            <button className="involvement-btn">Share Our Story</button>
          </div>
        </div>

        <div className="newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter to receive updates about our work and impact</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default GetInvolved
