import Contact from '../components/Contact'
import './ContactPage.css'

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us - we'd love to hear from you</p>
        </div>
      </div>
      
      <Contact />
      
      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div className="faq-list">
            <div className="faq-item">
              <h3>How can I donate to NEWDA?</h3>
              <p>You can donate through our website, by bank transfer, or by contacting us directly. All donations are tax-deductible.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I volunteer with your organization?</h3>
              <p>Yes! We welcome volunteers. Please fill out the contact form or email us directly to learn about current opportunities.</p>
            </div>
            
            <div className="faq-item">
              <h3>Where does NEWDA operate?</h3>
              <p>We currently operate in multiple regions. Contact us to learn more about our specific program locations and reach.</p>
            </div>
            
            <div className="faq-item">
              <h3>How can I stay updated on your work?</h3>
              <p>Subscribe to our newsletter, follow us on social media, or check our website regularly for updates on our programs and impact.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
