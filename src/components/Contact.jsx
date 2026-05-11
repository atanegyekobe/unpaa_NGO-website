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
                  <p className="detail">
                    <a href="https://www.facebook.com/NEWDAOfficial" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.1c0-2.2 1.3-3.4 3.3-3.4.96 0 1.96.17 1.96.17v2.2h-1.12c-1.1 0-1.44.68-1.44 1.37v1.66h2.45l-.39 2.9h-2.06v7A10 10 0 0022 12z"/></svg>
                      Facebook: @NEWDAOfficial
                    </a>
                  </p>
                  <p className="detail">
                    <a href="https://www.linkedin.com/company/NEWDAOFFICIAL" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4.98 3.5A2.5 2.5 0 004.98 8.5 2.5 2.5 0 004.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.8 2.6 4.8 6v7H19v-6.1c0-1.5 0-3.5-2.1-3.5-2.1 0-2.4 1.6-2.4 3.4V21H9z"/></svg>
                      LinkedIn: NEWDAOFFICIAL
                    </a>
                  </p>
                  <p className="detail">
                    <a href="https://www.instagram.com/newdaofficial" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A4.8 4.8 0 1016.8 13 4.8 4.8 0 0012 8.2zm5.2-2.7a1.1 1.1 0 11-1.1 1.1 1.1 1.1 0 011.1-1.1z"/></svg>
                      Instagram: @newdaofficial
                    </a>
                  </p>
                  <p className="detail">
                    <a href="https://www.youtube.com/@NEWDAOFFICIAL" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M23.5 6.2s-.2-1.6-.8-2.3c-.7-.9-1.5-.9-1.9-1-2.7-.2-6.7-.2-6.7-.2h-.1s-4 0-6.7.2c-.4 0-1.2.1-1.9 1C.7 4.6.5 6.2.5 6.2S.2 8 .2 9.9v.2C.2 12.7.5 14.6.5 14.6s.2 1.6.8 2.3c.7.9 1.6.9 2 1 1.5.1 6.4.2 6.4.2s4 0 6.7-.2c.4 0 1.2-.1 1.9-1 .6-.7.8-2.3.8-2.3s.3-1.9.3-3.8v-.2c0-1.9-.3-3.7-.3-3.7zM9.8 15.6V8.4l6.1 3.6-6.1 3.6z"/></svg>
                      YouTube: @NEWDAOFFICIAL
                    </a>
                  </p>
                  <p className="detail">
                    <a href="https://www.tiktok.com/@newda.official" target="_blank" rel="noopener noreferrer">
                      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16 3.5v8.2a3.3 3.3 0 01-3.3-3.3H11a5 5 0 000 10 5 5 0 005-5V7.2a3 3 0 001-3.7 7 7 0 01-1 0z"/></svg>
                      TikTok: @newda.official
                    </a>
                  </p>
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
