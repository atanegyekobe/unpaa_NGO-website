import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // TODO: Replace these placeholder images with your actual images
  // Place images in src/assets/ and import them, or use external URLs
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80',
      title: 'NEWDA',
      subtitle: 'Making a Difference in Communities',
      description: 'Empowering communities through sustainable development'
    },
    {
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80',
      title: 'Transform Lives',
      subtitle: 'Creating Lasting Impact',
      description: 'Join us in our mission to create positive change'
    },
    {
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80',
      title: 'Together We Can',
      subtitle: 'Build a Better Tomorrow',
      description: 'Your support makes all the difference'
    }
  ]

  // Auto-slide timer (changes every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="hero" aria-label="Hero section with image slideshow">
      {/* Slider Background */}
      <div className="hero-slider" role="region" aria-label="Image slideshow" aria-live="polite">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={slide.title}
          >
            <div className="hero-overlay"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title fade-in">{slides[currentSlide].title}</h1>
        <p className="hero-subtitle fade-in">{slides[currentSlide].subtitle}</p>
        <p className="hero-description fade-in">{slides[currentSlide].description}</p>
        <div className="hero-buttons fade-in">
          <Link to="/about">
            <button className="btn-primary" aria-label="Learn more about NEWDA">Learn More</button>
          </Link>
          <Link to="/get-involved">
            <button className="btn-secondary" aria-label="Support NEWDA's cause">Support Our Cause</button>
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        className="slider-arrow slider-arrow-left" 
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <span aria-hidden="true">‹</span>
      </button>
      <button 
        className="slider-arrow slider-arrow-right" 
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <span aria-hidden="true">›</span>
      </button>

      {/* Dots Navigation */}
      <div className="slider-dots" role="group" aria-label="Slideshow navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? 'true' : 'false'}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
