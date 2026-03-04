import Impact from '../components/Impact'
import './ImpactPage.css'

function ImpactPage() {
  return (
    <div className="impact-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Impact</h1>
          <p>See the real difference we're making in communities worldwide</p>
        </div>
      </div>
      
      <Impact />
      
      {/* Annual Report Section */}
      <section className="reports-section" aria-labelledby="reports-heading">
        <div className="container">
          <h2 id="reports-heading" className="section-title">Annual Reports & Transparency</h2>
          <p className="section-subtitle">
            We believe in complete transparency. View our annual reports and financial statements.
          </p>

          <div className="reports-grid" role="list">
            <article className="report-card" role="listitem">
              <div className="report-icon" aria-hidden="true">📊</div>
              <h3>2024 Annual Report</h3>
              <p>Our achievements and financial summary for 2024</p>
              <button className="download-btn" aria-label="Download 2024 Annual Report PDF">Download PDF</button>
            </article>

            <article className="report-card" role="listitem">
              <div className="report-icon" aria-hidden="true">💰</div>
              <h3>Financial Statements</h3>
              <p>Detailed financial breakdown and transparency reports</p>
              <button className="download-btn" aria-label="Download Financial Statements PDF">Download PDF</button>
            </article>

            <article className="report-card" role="listitem">
              <div className="report-icon" aria-hidden="true">🎯</div>
              <h3>Impact Assessment</h3>
              <p>Comprehensive evaluation of our program outcomes</p>
              <button className="download-btn" aria-label="Download Impact Assessment PDF">Download PDF</button>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ImpactPage
