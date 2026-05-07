import './Contact.css'

function Contact() {
  return (
    <section className="contact">
      <div className="container">
       {/* <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          {/* TODO: Replace with actual description *
          We'd love to hear from you. Reach out to us with any questions or inquiries.
        </p>*/}

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Address</h3>
                <p><h4>Contact Us to reach us at our office location.</h4></p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p><h3><a href="mailto:newda2025@gmail.com">newda2025@gmail.com</a></h3></p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h3>Phone</h3>
                <p><h3>0599663098 / 0242502083</h3></p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div>
                <h3>Office Hours</h3>
                <p><h3>Monday - Friday: 9:00 AM - 5:00 PM</h3></p>
                <p><h3>Weekend: Closed</h3></p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🔗</div>
              <div>
                <h3>Follow Us</h3>
                <div className="social-links">
                  <p className="detail"><a href="https://www.facebook.com/NEWDAOfficial" target="_blank" rel="noopener noreferrer">Facebook: @NEWDAOfficial</a></p>
                  <p className="detail"><a href="https://www.linkedin.com/company/NEWDAOFFICIAL" target="_blank" rel="noopener noreferrer">LinkedIn: NEWDAOFFICIAL</a></p>
                  <p className="detail"><a href="https://www.instagram.com/newdaofficial" target="_blank" rel="noopener noreferrer">Instagram: @newdaofficial</a></p>
                  <p className="detail"><a href="https://www.youtube.com/@NEWDAOFFICIAL" target="_blank" rel="noopener noreferrer">YouTube: @NEWDAOFFICIAL</a></p>
                  <p className="detail"><a href="https://www.tiktok.com/@newda.official" target="_blank" rel="noopener noreferrer">TikTok: @newda.official</a></p>
                </div>
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
