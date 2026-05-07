import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import { getHomeContent } from '../content/contentService'
import './HomePage.css'

function HomePage() {
  const [latestNews, setLatestNews] = useState([])
  const [impactCards, setImpactCards] = useState([])

  useEffect(() => {
    let isMounted = true

    async function loadContent() {
      const content = await getHomeContent()
      if (!isMounted) return
      setLatestNews(content.latestNews)
      setImpactCards(content.impactCards)
    }

    loadContent()

    return () => {
      isMounted = false
    }
  }, [])

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('.fade-in-section')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="home-page">
      <Hero />

      {/* Latest News Section */}
      <section className="latest-news fade-in-section">
        <div className="container">
          <h2 className="section-title">Latest News & Updates</h2>
          <p className="section-subtitle">Stay informed about our recent activities and impact stories</p>

          <div className="news-grid">
            {latestNews.map((item) => (
              <Link key={item.id} to={item.link} className="news-card">
                <div className="news-image">
                  <img src={item.image} alt={item.title} />
                  {item.badge ? <span className="news-badge">{item.badge}</span> : null}
                </div>
                <div className="news-content">
                  <span className="news-date">{item.displayDate}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="news-cta">
            <Link to="/blog">
              <button className="view-all-btn">View All News →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="home-overview fade-in-section" aria-labelledby="overview-heading">
        <div className="container">
          <h2 id="overview-heading">Our Mission</h2>
          <p className="overview-text">
            To empower women with disabilities by advancing their rights, expanding access to opportunities, and fostering collaboration to drive inclusive and sustainable progress.
          </p>

          <div className="home-cards">
            <Link to="/about" className="home-card-link">
              <article className="home-card">
                <div className="card-icon" aria-hidden="true">🎯</div>
                <h3>Our Mission</h3>
                <p>Creating lasting change through community-focused programs and partnerships.</p>
              </article>
            </Link>

            <Link to="/impact" className="home-card-link">
              <article className="home-card">
                <div className="card-icon" aria-hidden="true">🌍</div>
                <h3>Global Reach</h3>
                <p>Working across multiple regions to support those who need it most.</p>
              </article>
            </Link>

            <Link to="/get-involved" className="home-card-link">
              <article className="home-card">
                <div className="card-icon" aria-hidden="true">💪</div>
                <h3>Get Involved</h3>
                <p>Join us in making a difference through volunteering, donations, or partnerships.</p>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* Wave Divider (to dark) */}
      <div className="section-divider section-divider-dark">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#0f172a"></path>
        </svg>
      </div>

      {/* Featured Impact Section */}
      <section className="featured-impact fade-in-section" aria-labelledby="impact-heading">
        <div className="container">
          <h2 id="impact-heading" className="section-title">Our Impact in Action</h2>
          <p className="section-subtitle">
            {/* TODO: Add description */}
            See the real difference we're making in communities around the world
          </p>

          <div className="impact-cards">
            {impactCards.map((card, index) => (
              <Link key={card.id} to={card.link} className="impact-card-link">
                <article className={`impact-card card-${index + 1}`}>
                  <div className="impact-card-image">
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className="impact-card-content">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <span className="view-gallery-hint" aria-hidden="true">📸 View Gallery →</span>
                  </div>
                  <div className="card-glow" aria-hidden="true"></div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider (dark to gradient) */}
      <div className="section-divider section-divider-gradient">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"></path>
        </svg>
      </div>

      {/* Call to Action Section */}
      <section className="home-cta fade-in-section">
        <div className="container">
          <h2>Ready to Make a Difference?</h2>
          <p>Your support can change lives. Join us in our mission today.</p>
          <div className="cta-buttons">
            <Link to="/get-involved">
              <button className="cta-btn primary">Donate Now</button>
            </Link>
            <Link to="/about">
              <button className="cta-btn secondary">Learn More</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
