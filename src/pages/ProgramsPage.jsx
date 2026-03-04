import Programs from '../components/Programs'
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
      
      <Programs />
      
      {/* Program Details Section */}
      <section className="program-details" aria-labelledby="how-it-works-heading">
        <div className="container">
          <h2 id="how-it-works-heading" className="section-title">How Our Programs Work</h2>

          <ol className="process-steps" role="list">
            <li className="step" role="listitem">
              <div className="step-number" aria-hidden="true">1</div>
              <h3>Identify Needs</h3>
              <p>We work closely with communities to understand their specific challenges and requirements.</p>
            </li>

            <li className="step" role="listitem">
              <div className="step-number" aria-hidden="true">2</div>
              <h3>Develop Solutions</h3>
              <p>Our team creates tailored programs that address the identified needs effectively.</p>
            </li>

            <li className="step" role="listitem">
              <div className="step-number" aria-hidden="true">3</div>
              <h3>Implement & Support</h3>
              <p>We execute programs with continuous monitoring and support for sustainable impact.</p>
            </li>

            <li className="step" role="listitem">
              <div className="step-number" aria-hidden="true">4</div>
              <h3>Measure Impact</h3>
              <p>We track outcomes and share results transparently with our supporters and communities.</p>
            </li>
          </ol>
        </div>
      </section>
    </div>
  )
}

export default ProgramsPage
