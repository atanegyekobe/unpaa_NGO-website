import './About.css'
import aboutImage from '../assets/NEWDA LOGO.png'

function About() {
  return (
    <section className="about" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading" className="section-title"></h2>
        <div className="about-content">
          <div className="about-text">
           
          </div>
          
          <div className="about-image">
            <img
              className="about-image-photo"
              src={aboutImage}
              alt="Cecilia Fofo Ashaley"
            />
          </div>

          <div className="about-cards" aria-label="About highlights">
            <article className="about-card">
              <h3>Our Mission</h3>
              <p>To empower women with disabilities by advancing their rights, expanding access to opportunities, and fostering collaboration for inclusive and sustainable progress.</p>
            </article>

            <article className="about-card">
              <h3>Our Vision</h3>
              <p>An inclusive society where all women with disabilities in Ghana and across Africa thrive with equity, dignity, and full participation in every aspect of life.</p>
            </article>

            <article className="about-card">
              <h3>General Goals</h3>
              <p>To promote empowerment and inclusion through rights advocacy, equitable access to opportunities, and active participation in social, economic, and political life.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
