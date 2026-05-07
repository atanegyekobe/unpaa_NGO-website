import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getGalleryContent } from '../content/contentService'
import './GalleryPage.css'

function GalleryPage() {
  const { category } = useParams()
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState(category || 'all')
  const [galleryImages, setGalleryImages] = useState({ community: [], education: [], healthcare: [] })
  const [filteredImages, setFilteredImages] = useState([])

  useEffect(() => {
    setActiveCategory(category || 'all')
  }, [category])

  useEffect(() => {
    let isMounted = true

    async function loadGallery() {
      const content = await getGalleryContent(activeCategory)
      if (!isMounted) return
      setGalleryImages(content.categories)
      setFilteredImages(content.images)
    }

    loadGallery()

    return () => {
      isMounted = false
    }
  }, [activeCategory])

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
              All Images ({(galleryImages.community?.length ?? 0) + (galleryImages.education?.length ?? 0) + (galleryImages.healthcare?.length ?? 0)})
            </button>
            <button
              className={`filter-btn ${activeCategory === 'community' ? 'active' : ''}`}
              onClick={() => setActiveCategory('community')}
              aria-pressed={activeCategory === 'community'}
              aria-label="Show community development images"
            >
              Community ({galleryImages.community?.length ?? 0})
            </button>
            <button
              className={`filter-btn ${activeCategory === 'education' ? 'active' : ''}`}
              onClick={() => setActiveCategory('education')}
              aria-pressed={activeCategory === 'education'}
              aria-label="Show education program images"
            >
              Education ({galleryImages.education?.length ?? 0})
            </button>
            <button
              className={`filter-btn ${activeCategory === 'healthcare' ? 'active' : ''}`}
              onClick={() => setActiveCategory('healthcare')}
              aria-pressed={activeCategory === 'healthcare'}
              aria-label="Show healthcare program images"
            >
              Healthcare ({galleryImages.healthcare?.length ?? 0})
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
