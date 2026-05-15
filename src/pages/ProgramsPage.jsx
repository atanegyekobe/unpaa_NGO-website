import Programs from '../components/Programs'
import introImage from '../assets/disability_inclusion_hero_team.jpeg'
import valuesImage from '../assets/prof_naami_pic_about.jpeg'
import goalsImage from '../assets/mad_victoria_kofiedu_pic_about.jpeg'
import './ProgramsPage.css'

function ProgramsPage() {
  return (
    <div className="programs-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Programs</h1>
          <p>Discover the initiatives making a real difference in communities</p>
        </div>
      </div>

      <section className="programs-intro container" aria-labelledby="programs-intro-heading">
        <div className="intro-copy">
          <span className="eyebrow">What drives the work</span>
          <h2 id="programs-intro-heading">Built to turn advocacy into practical change.</h2>
          <p>
            Our programs combine rights-based advocacy, skills development, community awareness, and partnerships so women with disabilities can lead, participate, and thrive.Partnership and Support
This project was made possible through the generous support of our donors and partners, including [Partner Names]. We are grateful for the community's involvement in every step of the process, from design to construction.

Looking Forward
The opening of this community center is just the beginning. We have plans to expand our programming and services based on community needs and feedback. We invite everyone to visit the center and become part of this exciting new chapter for our community.
          </p>
        </div>

        <div className="intro-media" aria-label="Program highlights and image">
          <div className="intro-photo-wrap">
            <img src={introImage} alt="Women collaborating during a community inclusion session" className="intro-photo" />
            <p className="image-caption">Community spaces where advocacy becomes visible action.</p>
          </div>
          <div className="intro-highlights">
            <div className="highlight-pill">Rights-first</div>
            <div className="highlight-pill">Community-led</div>
            <div className="highlight-pill">Impact-driven</div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="core-values container" aria-labelledby="core-values-heading">
        <div className="section-kicker">
          <span>Principles</span>
    
        </div>
        <div className="section-split">
          <div className="section-split__content">
            <h2 id="core-values-heading" className="section-title">Core Values</h2>
            <div className="values-grid">
              <article className="value-card">
                <h3>Inclusion</h3>
                <p>We promote full and meaningful participation of women with disabilities in all spheres of life without discrimination.</p>
              </article>

              <article className="value-card">
                <h3>Equity and Justice</h3>
                <p>We uphold the rights of women with disabilities and work to eliminate systemic inequalities and barriers.</p>
              </article>

              <article className="value-card">
                <h3>Empowerment</h3>
                <p>We believe in building the confidence, capacity, and leadership of women with disabilities to take control of their lives.</p>
              </article>

              <article className="value-card">
                <h3>Dignity and Respect</h3>
                <p>We value every individual and promote respect for diversity, identity, and lived experiences.</p>
              </article>

              <article className="value-card">
                <h3>Solidarity and Collaboration</h3>
                <p>We work together as a united network and with partners to achieve shared goals and collective impact.</p>
              </article>

              <article className="value-card">
                <h3>Accountability and Transparency</h3>
                <p>We are committed to responsible governance, ethical conduct, and openness in all our actions.</p>
              </article>

              <article className="value-card">
                <h3>Advocacy and Voice</h3>
                <p>We amplify the voices of women with disabilities and champion their representation in decision-making spaces.</p>
              </article>
            </div>
          </div>

          <figure className="section-split__visual section-visual">
            <img src={valuesImage} alt="Programs participant and team representative standing together" />
            <figcaption className="image-caption">People-centered work begins with dignity, trust, and shared purpose.</figcaption>
          </figure>
        </div>
      </section>

      {/* Strategic Goals / Objectives Section (themed groups) */}
      <section className="goals container" aria-labelledby="goals-heading">
        <div className="section-kicker">
          <span>Priorities</span>
          <p></p>
        </div>
        <div className="section-split section-split--reverse">
          <figure className="section-split__visual section-visual section-visual--warm">
            <img src={goalsImage} alt="Leadership moment featuring women with disabilities" />
            <figcaption className="image-caption">Goals framed around rights, access, leadership, and partnerships.</figcaption>
          </figure>

          <div className="section-split__content">
            <h2 id="goals-heading" className="section-title">Strategic Goals</h2>
            <div className="goal-groups">
              <article className="goal-card">
                <h3>Rights & Policy</h3>
                <div className="goal-points">
                  <p>To promote the recognition, protection, and enforcement of the rights of women with disabilities in line with national laws and international conventions.</p>
                  <p>To advocate for and support the development, implementation, and monitoring of inclusive policies, plans, and programs at local, national, and regional levels.</p>
                </div>
              </article>

              <article className="goal-card">
                <h3>Education, Skills & Livelihoods</h3>
                <div className="goal-points">
                  <p>To enhance access to quality education, vocational training, employment, and entrepreneurship opportunities for women with disabilities.</p>
                </div>
              </article>

              <article className="goal-card">
                <h3>Leadership & Participation</h3>
                <div className="goal-points">
                  <p>To build the skills, confidence, and leadership abilities of women with disabilities to enable their meaningful participation in decision-making processes.</p>
                </div>
              </article>

              <article className="goal-card">
                <h3>Awareness & Partnerships</h3>
                <div className="goal-points">
                  <p>To raise awareness and challenge stigma, discrimination, and harmful practices affecting women with disabilities.</p>
                  <p>To establish and strengthen partnerships with government institutions, civil society organizations, development partners, and the private sector to influence policy and programs that benefit women with disabilities.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>


      
      {/* Program Details Section */}
      <section className="program-details" aria-labelledby="how-it-works-heading">
        <div className="container">
          <div className="section-kicker section-kicker--light">
   
           
          </div>
          <h2 id="how-it-works-heading" className="section-title">How Our Programs Work</h2>
          <div className="process-layout">
            

            <div className="process-grid">
              <article className="step-card">
                <div className="step-number" aria-hidden="true">1</div>
                <h3>Identify Needs</h3>
                <p>We work closely with communities to understand their specific challenges and requirements.</p>
              </article>

              <article className="step-card">
                <div className="step-number" aria-hidden="true">2</div>
                <h3>Develop Solutions</h3>
                <p>Our team creates tailored programs that address the identified needs effectively.</p>
              </article>

              <article className="step-card">
                <div className="step-number" aria-hidden="true">3</div>
                <h3>Implement & Support</h3>
                <p>We execute programs with continuous monitoring and support for sustainable impact.</p>
              </article>

              <article className="step-card">
                <div className="step-number" aria-hidden="true">4</div>
                <h3>Measure Impact</h3>
                <p>We track outcomes and share results transparently with our supporters and communities.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProgramsPage
