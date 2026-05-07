import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getBlogContent } from '../content/contentService'
import './BlogPage.css'

function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([])
  const [categories, setCategories] = useState(['All'])
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    let isMounted = true

    async function loadContent() {
      const content = await getBlogContent()
      if (!isMounted) return
      setBlogPosts(content.posts)
      setCategories(content.categories)
    }

    loadContent()

    return () => {
      isMounted = false
    }
  }, [])

  const visiblePosts = useMemo(() => {
    if (activeCategory === 'All') return blogPosts
    return blogPosts.filter(p => p.category === activeCategory)
  }, [activeCategory, blogPosts])

  const featuredPost = visiblePosts[0]
  const restPosts = visiblePosts.slice(1)

  return (
    <div className="blog-page">
      <div className="page-header">
        <div className="container">
          <h1>News & Updates</h1>
          <p>Stay informed about our latest projects, stories, and impact</p>
        </div>
      </div>

      <section className="blog-content">
        <div className="container">
          {/* Category Filter */}
          <div className="blog-filters">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost ? (
            <div className="featured-post">
              <div className="featured-post-image">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <span className="featured-badge">Featured</span>
              </div>
              <div className="featured-post-content">
                <div className="post-meta">
                  <span className="post-category">{featuredPost.category}</span>
                  <span className="post-date">{featuredPost.displayDate}</span>
                </div>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <Link to={`/blog/${featuredPost.id}`} className="read-more-btn">
                  Read Full Story →
                </Link>
              </div>
            </div>
          ) : null}

          {/* Blog Grid */}
          <div className="blog-grid">
            {restPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-date">{post.displayDate}</span>
                    <span className="blog-author">By {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="blog-read-more">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="load-more-container">
            <button className="load-more-btn">Load More Articles</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
