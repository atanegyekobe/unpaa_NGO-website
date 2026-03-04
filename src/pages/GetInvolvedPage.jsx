import GetInvolved from '../components/GetInvolved'
import './GetInvolvedPage.css'

function GetInvolvedPage() {
  return (
    <div className="get-involved-page">
      <div className="page-header">
        <div className="container">
          <h1>Get Involved</h1>
          <p>Join us in making a lasting difference in communities worldwide</p>
        </div>
      </div>
      
      <GetInvolved />
      
      {/* Why Support Section */}
      <section className="why-support">
        <div className="container">
          <h2 className="section-title">Why Your Support Matters</h2>
          
          <div className="support-reasons">
            <div className="reason">
              <div className="reason-icon">✨</div>
              <h3>Direct Impact</h3>
              <p>100% of your donation goes directly to programs that change lives.</p>
            </div>
            
            <div className="reason">
              <div className="reason-icon">🔍</div>
              <h3>Full Transparency</h3>
              <p>See exactly where your contributions are making a difference.</p>
            </div>
            
            <div className="reason">
              <div className="reason-icon">🌟</div>
              <h3>Sustainable Change</h3>
              <p>We focus on long-term solutions that empower communities.</p>
            </div>
            
            <div className="reason">
              <div className="reason-icon">🤝</div>
              <h3>Community Driven</h3>
              <p>Local communities lead our initiatives for lasting impact.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetInvolvedPage
