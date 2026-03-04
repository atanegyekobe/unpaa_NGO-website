import About from '../components/About'
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>About NEWDA</h1>
          <p>Learn more about our organization, mission, and values</p>
        </div>
      </div>
      
      <About />
      
      {/* Additional About Content */}
      <section className="team-section" aria-labelledby="team-heading">
        <div className="container">
          <h2 id="team-heading" className="section-title">Our Team</h2>
          <p className="section-subtitle">
            {/* TODO: Add team description */}
            Meet the dedicated people behind our mission
          </p>

          <div className="team-grid" role="list">
            <article className="team-member" role="listitem">
              <div className="member-photo-placeholder" role="img" aria-label="Photo of Executive Director">
                <span aria-hidden="true">Photo</span>
              </div>
              <h3>Team Member Name</h3>
              <p className="member-role">Executive Director</p>
              <p className="member-bio">Brief bio about the team member goes here.</p>
            </article>

            <article className="team-member" role="listitem">
              <div className="member-photo-placeholder" role="img" aria-label="Photo of Program Director">
                <span aria-hidden="true">Photo</span>
              </div>
              <h3>Team Member Name</h3>
              <p className="member-role">Program Director</p>
              <p className="member-bio">Brief bio about the team member goes here.</p>
            </article>

            <article className="team-member" role="listitem">
              <div className="member-photo-placeholder" role="img" aria-label="Photo of Communications Manager">
                <span aria-hidden="true">Photo</span>
              </div>
              <h3>Team Member Name</h3>
              <p className="member-role">Communications Manager</p>
              <p className="member-bio">Brief bio about the team member goes here.</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
