import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

// Local hero images (place your images in src/assets/)
import hero1 from '../assets/Cecilia_fofo_Ashaley_pic_about .jpg'
import hero2 from '../assets/disability_inclusion_hero_team.jpeg'
//import hero2 from '../assets/hero_2.jpg'
//import hero3 from '../assets/hero_3.jpg'

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Hero slides (now using local images). Add files under `src/assets/` if you want more slides
  const slides = [
    {
      image: hero1,
      title: 'Women with Disabilities',
      subtitle: 'Leading Change in Communities',
      description: 'Empowering women with disabilities through advocacy, peer support, and sustainable development'
    }
    ,
    {
      image: hero2,
      title: 'Inclusion in Action',
      subtitle: 'Programs for Women with Disabilities',
      description: 'Building skills, confidence, and opportunities through training and outreach initiatives'
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
