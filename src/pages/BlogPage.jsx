import { Link } from 'react-router-dom'
import './BlogPage.css'

function BlogPage() {
  // TODO: Replace with actual blog posts from your CMS
  const blogPosts = [
    {
      id: 1,
      title: 'New Community Center Opens in Rural District',
      excerpt: 'We are thrilled to announce the opening of our new community center, providing essential services to over 500 families.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      date: 'March 15, 2024',
      category: 'Community Development',
      author: 'NEWDA Team'
    },
    {
      id: 2,
      title: 'Education Program Reaches 1000 Students',
      excerpt: 'Our education initiative has successfully reached its milestone of enrolling 1000 students in quality learning programs.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      date: 'March 10, 2024',
      category: 'Education',
      author: 'NEWDA Team'
    },
    {
      id: 3,
      title: 'Healthcare Outreach Success Story',
      excerpt: 'Last month we provided free healthcare services to remote communities, screening over 300 individuals.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
      date: 'March 5, 2024',
      category: 'Healthcare',
      author: 'NEWDA Team'
    },
    {
      id: 4,
      title: 'Partnership with Local Schools Announced',
      excerpt: 'NEWDA partners with 10 local schools to enhance educational infrastructure and provide learning materials.',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
      date: 'February 28, 2024',
      category: 'Partnerships',
      author: 'NEWDA Team'
    },
    {
      id: 5,
      title: 'Volunteer Training Program Launch',
      excerpt: 'Join our new volunteer training program designed to equip community members with essential skills.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
      date: 'February 20, 2024',
      category: 'Volunteers',
      author: 'NEWDA Team'
    },
    {
      id: 6,
      title: 'Water Well Project Completed',
      excerpt: 'Clean water now accessible to 200 families thanks to our new water well project in the eastern region.',
      image: 'https://images.unsplash.com/photo-1559436888-0b9e12ea0a99?w=800&q=80',
      date: 'February 15, 2024',
      category: 'Infrastructure',
      author: 'NEWDA Team'
    }
  ]

  const categories = ['All', 'Community Development', 'Education', 'Healthcare', 'Partnerships', 'Volunteers', 'Infrastructure']

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
              <button key={index} className={`filter-btn ${index === 0 ? 'active' : ''}`}>
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="featured-post">
            <div className="featured-post-image">
              <img src={blogPosts[0].image} alt={blogPosts[0].title} />
              <span className="featured-badge">Featured</span>
            </div>
            <div className="featured-post-content">
              <div className="post-meta">
                <span className="post-category">{blogPosts[0].category}</span>
                <span className="post-date">{blogPosts[0].date}</span>
              </div>
              <h2>{blogPosts[0].title}</h2>
              <p>{blogPosts[0].excerpt}</p>
              <Link to={`/blog/${blogPosts[0].id}`} className="read-more-btn">
                Read Full Story →
              </Link>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="blog-grid">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
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
