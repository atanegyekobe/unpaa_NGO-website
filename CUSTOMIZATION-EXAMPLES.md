# 📚 Common Customization Examples

This file contains code examples for the most common customizations you'll need to make.

## 1. Adding Your Logo

**In `src/components/Navbar.jsx`**, replace this:
```jsx
<div className="nav-logo">
  <span className="logo-placeholder">NEWDA</span>
</div>
```

With this:
```jsx
<div className="nav-logo">
  <img src="/path-to-your-logo.png" alt="NEWDA Logo" className="logo-image" />
</div>
```

Then add to `src/components/Navbar.css`:
```css
.logo-image {
  height: 50px;
  width: auto;
}
```

## 2. Adding a New Program

**In `src/components/Programs.jsx`**, add to the programs array:
```javascript
const programs = [
  // ... existing programs ...
  {
    title: 'Your New Program Name',
    description: 'Describe what this program does and who it helps.',
    icon: '🌟' // Use an emoji or add image later
  }
]
```

## 3. Updating Statistics

**In `src/components/Impact.jsx`**, modify the stats array:
```javascript
const stats = [
  { number: '15,000+', label: 'Lives Impacted' },
  { number: '75+', label: 'Villages Reached' },
  { number: '150+', label: 'Projects Completed' },
  { number: '30+', label: 'Partner Organizations' }
]
```

## 4. Adding Real Images

**Step 1:** Place your image in `src/assets/` folder (e.g., `about-us.jpg`)

**Step 2:** Import it in your component:
```javascript
import aboutImage from './assets/about-us.jpg'
```

**Step 3:** Use it (example in About.jsx):
```jsx
<div className="about-image">
  <img src={aboutImage} alt="About NEWDA" />
</div>
```

## 5. Changing Colors Globally

Create a new file `src/theme.css`:
```css
:root {
  --primary-color: #2563eb;    /* Your brand blue */
  --secondary-color: #764ba2;  /* Your brand purple */
  --accent-color: #10b981;     /* Accent green */
  --text-dark: #1e293b;
  --text-light: #64748b;
  --background-light: #f8fafc;
}
```

Import it in `main.jsx`:
```javascript
import './theme.css'
```

Then use in CSS files:
```css
.donate-btn {
  background: var(--primary-color);
}
```

## 6. Adding a Hero Background Image

**In `src/components/Hero.css`**, modify the `.hero` class:
```css
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/path-to-your-hero-image.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 2rem;
}

/* Make overlay darker for better text readability */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Increased from 0.3 */
}
```

## 7. Connecting Social Media Links

**In `src/components/Footer.jsx`**, replace the `#` with your actual URLs:
```jsx
<div className="social-links">
  <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer" className="social-link">📘</a>
  <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" className="social-link">🐦</a>
  <a href="https://instagram.com/your-account" target="_blank" rel="noopener noreferrer" className="social-link">📷</a>
  <a href="https://linkedin.com/company/your-company" target="_blank" rel="noopener noreferrer" className="social-link">💼</a>
</div>
```

## 8. Making Contact Form Work with EmailJS

**Step 1:** Install EmailJS
```bash
npm install @emailjs/browser
```

**Step 2:** Sign up at https://www.emailjs.com and get your credentials

**Step 3:** Update `src/components/Contact.jsx`:
```jsx
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Sending...')

    emailjs.sendForm(
      'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID',     // Replace with your EmailJS template ID
      e.target,
      'YOUR_PUBLIC_KEY'       // Replace with your EmailJS public key
    )
      .then(() => {
        setFormStatus('Message sent successfully!')
        e.target.reset()
      })
      .catch(() => {
        setFormStatus('Failed to send message. Please try again.')
      })
  }

  return (
    <section id="contact" className="contact">
      {/* ... existing code ... */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <input type="text" name="subject" placeholder="Subject" required />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </form>
    </section>
  )
}
```

## 9. Adding a Donation Button Link

**In `src/components/Navbar.jsx`**, update the donate button:
```jsx
<a href="https://your-donation-platform.com/newda" target="_blank" rel="noopener noreferrer">
  <button className="donate-btn">Donate Now</button>
</a>
```

Or if you're using a payment gateway like PayPal, Stripe, etc., you'll integrate their button component.

## 10. Adding a Google Map

**In `src/components/Contact.jsx`**, add after contact info:
```jsx
<div className="map-container">
  <iframe
    title="NEWDA Location"
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL_HERE"
    width="100%"
    height="400"
    style={{ border: 0, borderRadius: '10px' }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>
```

To get your embed URL:
1. Go to Google Maps
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL

## 11. Adding More Success Stories

**In `src/components/Impact.jsx`**, add to stories array (you'll need to create this):
```javascript
const stories = [
  {
    title: 'Community Water Project',
    description: 'How we brought clean water to 500 families in rural areas.',
    image: waterProjectImg
  },
  {
    title: 'Education Initiative Success',
    description: '100 children now have access to quality education.',
    image: educationImg
  }
  // Add more stories...
]
```

## 12. Making Mobile Menu Close on Click

**In `src/components/Navbar.jsx`**, update nav links:
```jsx
<a 
  href="#home" 
  className="nav-link"
  onClick={() => setIsMenuOpen(false)}
>
  Home
</a>
```

Do this for all nav links.

## 🎯 Pro Tips

1. **Use high-quality images** - They make a huge difference in professional appearance
2. **Keep descriptions concise** - Visitors scan more than they read
3. **Test on mobile** - Most visitors will be on phones
4. **Update regularly** - Keep impact numbers and stories current
5. **Add testimonials** - Social proof builds trust

---

Need more examples? Check the official React and Vite documentation, or look at the existing component code for patterns to follow!
