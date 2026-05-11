import './About.css'
import aboutImage from '../assets/Cecilia_fofo_Ashaley_pic_about .jpg'

function About() {
  return (
    <section className="about" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading" className="section-title"></h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              {/* TODO: Replace with actual mission */}
              Cecilia fofo Ashaley is a mother with 9 years lived experience of psychosocial disability, with five year working experience in the mental health space, advocating for the right of persons with disabilities, providing peer support and contributing to research in the are of mental health.
            </p>

            
          </div>
          
          <div className="about-image">
            <img
              className="about-image-photo"
              src={aboutImage}
              alt="Cecilia Fofo Ashaley"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
