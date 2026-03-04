import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AccessibilityToolbar from './components/AccessibilityToolbar'
import PageTransition from './components/PageTransition'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProgramsPage from './pages/ProgramsPage'
import ImpactPage from './pages/ImpactPage'
import GetInvolvedPage from './pages/GetInvolvedPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import GalleryPage from './pages/GalleryPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        {/* Skip to Content Link for Keyboard Users */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <ScrollToTop />
        <Navbar />

        {/* Accessibility Toolbar */}
        <AccessibilityToolbar />

        <main id="main-content" role="main">
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/impact" element={<ImpactPage />} />
              <Route path="/get-involved" element={<GetInvolvedPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostPage />} />
              <Route path="/gallery/:category" element={<GalleryPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
          </PageTransition>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
