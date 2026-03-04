import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './GalleryPage.css'

function GalleryPage() {
  const { category } = useParams()
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState(category || 'all')

  // Gallery images organized by category
  const galleryImages = {
    community: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
        title: 'Community Workshop',
        description: 'Local community members participating in skill development workshop',
        category: 'Community Development'
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
        title: 'Community Meeting',
        description: 'Gathering to discuss community needs and solutions',
        category: 'Community Development'
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80',
        title: 'Resource Distribution',
        description: 'Distributing essential resources to community members',
        category: 'Community Development'
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=800&q=80',
        title: 'Infrastructure Development',
        description: 'Building sustainable infrastructure for communities',
        category: 'Community Development'
      }
    ],
    education: [
      {
        id: 5,
        url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
        title: 'Classroom Learning',
        description: 'Students engaged in interactive learning activities',
        category: 'Education'
      },
      {
        id: 6,
        url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
        title: 'Outdoor Education',
        description: 'Children participating in outdoor learning programs',
        category: 'Education'
      },
      {
        id: 7,
        url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
        title: 'Technology Training',
        description: 'Computer literacy training for students',
        category: 'Education'
      },
      {
        id: 8,
        url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
        title: 'Library Resources',
        description: 'Students accessing educational resources in library',
        category: 'Education'
      }
    ],
    healthcare: [
      {
        id: 9,
        url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
        title: 'Medical Checkup',
        description: 'Healthcare professionals providing medical examinations',
        category: 'Healthcare'
      },
      {
        id: 10,
        url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80',
        title: 'Health Outreach',
        description: 'Mobile health clinic reaching remote communities',
        category: 'Healthcare'
      },
      {
        id: 11,
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
        title: 'Vaccination Program',
        description: 'Community vaccination and immunization program',
        category: 'Healthcare'
      },
      {
        id: 12,
        url: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80',
        title: 'Health Education',
        description: 'Teaching health and wellness practices to communities',
        category: 'Healthcare'
      }
    ]
  }

  // Get all images or filtered by category
  const getFilteredImages = () => {
    if (activeCategory === 'all') {
      return [...galleryImages.community, ...galleryImages.education, ...galleryImages.healthcare]
    }
    return galleryImages[activeCategory] || []
  }

  const filteredImages = getFilteredImages()

  // Close lightbox with ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [selectedImage])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [selectedImage])

  return (
    <div className="gallery-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <Link to="/" className="back-link" aria-label="Go back to homepage">
            ← Back to Home
          </Link>
          <h1>Impact Gallery</h1>
          <p>Explore our work through photos from the field</p>
        </div>
      </div>

      {/* Category Filters */}
      <section className="gallery-filters" aria-label="Gallery category filters">
        <div className="container">
          <div className="filter-buttons">
            <button
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
              aria-pressed={activeCategory === 'all'}
              aria-label="Show all gallery images"
            >
              All Images ({galleryImages.community.length + galleryImages.education.length + galleryImages.healthcare.length})
            </button>
            <button
              className={`filter-btn ${activeCategory === 'community' ? 'active' : ''}`}
              onClick={() => setActiveCategory('community')}
              aria-pressed={activeCategory === 'community'}
              aria-label="Show community development images"
            >
              Community ({galleryImages.community.length})
            </button>
            <button
              className={`filter-btn ${activeCategory === 'education' ? 'active' : ''}`}
              onClick={() => setActiveCategory('education')}
              aria-pressed={activeCategory === 'education'}
              aria-label="Show education program images"
            >
              Education ({galleryImages.education.length})
            </button>
            <button
              className={`filter-btn ${activeCategory === 'healthcare' ? 'active' : ''}`}
              onClick={() => setActiveCategory('healthcare')}
              aria-pressed={activeCategory === 'healthcare'}
              aria-label="Show healthcare program images"
            >
              Healthcare ({galleryImages.healthcare.length})
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section" aria-label="Image gallery">
        <div className="container">
          <div className="gallery-grid">
            {filteredImages.map((image) => (
              <article 
                key={image.id} 
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedImage(image)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View ${image.title} in full size`}
              >
                <div className="gallery-image-wrapper">
                  <img 
                    src={image.url} 
                    alt={image.description}
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <span className="view-icon" aria-hidden="true">🔍</span>
                    <p className="overlay-text">Click to enlarge</p>
                  </div>
                </div>
                <div className="gallery-caption">
                  <h3>{image.title}</h3>
                  <span className="category-badge">{image.category}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="lightbox"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <div 
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.description}
            />
            <div className="lightbox-caption">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
              <span className="lightbox-category">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryPage
