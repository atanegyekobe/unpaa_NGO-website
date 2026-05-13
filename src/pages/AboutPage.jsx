import About from '../components/About'
import './AboutPage.css'
import profNaami from '../assets/prof_naami_pic_about.jpeg'
import madVeronica from '../assets/mad_victoria_kofiedu_pic_about.jpeg'

function AboutPage() {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
         <p><h3>About Us</h3></p>
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
              <img className="member-photo" src={profNaami} alt="Prof Augustna Naami" />
              <h3>Prof Augustna Naami</h3>
              <p className="member-role">Associate Professor of Disability and Social Work at the Department of Social Work, University of Ghana</p>
              <p className="member-bio"> Read more about Prof Augustna Naami's background and contributions.</p>
            </article>

            <article className="team-member" role="listitem">
              <img className="member-photo" src={madVeronica} alt="Madam Veronica Kofiedu" />
              <h3>Madam Veronica Kofiedu</h3>
              <p className="member-role"> Founder and Executive Director of the Women with Disability Development
and Advocacy Organization (WODAO)</p>
              <p className="member-bio">Read more about Madam Veronica Kofiedu's background and contributions.</p>
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
