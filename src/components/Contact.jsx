import './Contact.css'

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          {/* TODO: Replace with actual description */}
          We'd love to hear from you. Reach out to us with any questions or inquiries.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>[Your Office Address Here]</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>info@newda.org</p>
                <p>contact@newda.org</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h4>Phone</h4>
                <p>+1 (XXX) XXX-XXXX</p>
                <p>+1 (XXX) XXX-XXXX</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div>
                <h4>Office Hours</h4>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Weekend: Closed</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
