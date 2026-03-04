# NEWDA - NGO Website

A professional, fully-featured **multi-page** website for the NEWDA Non-Governmental Organization built with React, Vite, and React Router.

## 🚀 Features

- **Multi-Page Architecture** - Separate pages for each section (not just scrolling!)
- **Responsive Navigation** - Mobile-friendly navbar with smooth page transitions
- **Home Page** - Hero section with overview and call-to-action
- **About Page** - Mission, vision, values, and team section
- **Programs Page** - Showcase programs with detailed process flow
- **Impact Page** - Statistics, success stories, and annual reports
- **Get Involved Page** - Multiple ways to support with compelling reasons
- **Contact Page** - Contact form, info, and FAQ section
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices

## 📦 Installation

```bash
# Navigate to the project directory
cd NEWDA

# Install dependencies (including react-router-dom)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🌐 Website Structure

The website is now a **multi-page application** with separate routes:

- **`/`** - Home page (Hero + overview)
- **`/about`** - About page (Mission, vision, values, team)
- **`/programs`** - Programs page (All programs + process)
- **`/impact`** - Impact page (Statistics, stories, reports)
- **`/get-involved`** - Get Involved page (Donate, volunteer, partner)
- **`/contact`** - Contact page (Form, info, FAQ)

Each page has its own route and loads independently!

## 🔧 Customization Guide

All placeholder content is marked with `{/* TODO: Replace with actual ... */}` comments. Here's what you need to update:

### 1. **Logo** (`src/components/Navbar.jsx`)
- Replace the text logo with your actual logo image
- Update line with `<span className="logo-placeholder">NEWDA</span>`

### 2. **Hero Section** (`src/components/Hero.jsx`)
- Replace mission statement
- Update hero description
- Optionally add a background image to the hero section in `Hero.css`

### 3. **About Section** (`src/components/About.jsx`)
- Replace mission statement
- Replace vision statement
- Update organizational values
- Replace the image placeholder with actual organization image

### 4. **Programs** (`src/components/Programs.jsx`)
- Update the `programs` array with your actual programs
- Replace program titles, descriptions, and icons
- Add more programs by adding objects to the array

### 5. **Impact Section** (`src/components/Impact.jsx`)
- Update statistics in the `stats` array
- Replace success stories with actual stories
- Add images to story cards

### 6. **Contact Information** (`src/components/Contact.jsx`)
- Replace address, email, phone numbers
- Update office hours
- Connect the form to your backend/email service

### 7. **Footer** (`src/components/Footer.jsx`)
- Replace tagline
- Update social media links
- Add actual social media URLs

### 8. **Colors & Branding**
You can update the color scheme by modifying the CSS files:
- Primary Blue: `#2563eb` (used throughout)
- Purple Gradient: `#667eea` to `#764ba2` (hero and impact sections)
- Update these colors globally in the respective CSS files

### 9. **Favicon & Meta Tags** (`index.html`)
- Replace `/vite.svg` with your organization logo
- Update meta description
- Update page title if needed

## 📁 Project Structure

```
NEWDA/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx & Navbar.css
│   │   ├── Hero.jsx & Hero.css
│   │   ├── About.jsx & About.css
│   │   ├── Programs.jsx & Programs.css
│   │   ├── Impact.jsx & Impact.css
│   │   ├── GetInvolved.jsx & GetInvolved.css
│   │   ├── Contact.jsx & Contact.css
│   │   └── Footer.jsx & Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
└── package.json
```

## 🎨 Adding Images

To add images:

1. Place your images in `src/assets/` folder
2. Import them in your component:
   ```javascript
   import yourImage from './assets/your-image.jpg'
   ```
3. Use them:
   ```jsx
   <img src={yourImage} alt="Description" />
   ```

## 📧 Connecting Contact Form

The contact form currently doesn't submit anywhere. To make it functional:

1. **Option 1**: Use a service like FormSpree, EmailJS, or Netlify Forms
2. **Option 2**: Connect to your own backend API
3. **Option 3**: Use mailto link (basic solution)

Example with EmailJS:
```javascript
// Install: npm install @emailjs/browser
import emailjs from '@emailjs/browser'

const handleSubmit = (e) => {
  e.preventDefault()
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
    .then(() => alert('Message sent!'))
    .catch(() => alert('Failed to send'))
}
```

## 🌐 Deployment

Deploy to platforms like:
- **Vercel**: `vercel deploy`
- **Netlify**: Connect your Git repository
- **GitHub Pages**: Update `vite.config.js` with base path

## 📝 License

This template is created for NEWDA organization.

---

Built with ❤️ for NEWDA
