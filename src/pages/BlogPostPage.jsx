import { useParams, Link } from 'react-router-dom'
import './BlogPostPage.css'

function BlogPostPage() {
  const { id } = useParams()

  // TODO: Replace with actual blog post data from your CMS
  const post = {
    id: 1,
    title: 'New Community Center Opens in Rural District',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    date: 'March 15, 2024',
    author: 'NEWDA Team',
    category: 'Community Development',
    readTime: '5 min read',
    content: `
      <p>We are incredibly excited to announce the grand opening of our new community center in the rural district of [Location Name]. This milestone represents months of planning, fundraising, and collaboration with local community members.</p>

      <h2>A Space for Everyone</h2>
      <p>The new 5,000 square foot facility includes:</p>
      <ul>
        <li>A multipurpose hall for community gatherings and events</li>
        <li>Educational classrooms for adult learning programs</li>
        <li>A computer lab with internet access</li>
        <li>A health clinic for basic medical services</li>
        <li>Children's play area and library</li>
      </ul>

      <h2>Community Impact</h2>
      <p>This center will serve over 500 families in the surrounding area, providing essential services that were previously unavailable. Local residents will now have access to:</p>
      <ul>
        <li>Adult education and vocational training programs</li>
        <li>Healthcare screenings and consultations</li>
        <li>Computer literacy classes</li>
        <li>Youth programs and activities</li>
        <li>Community meetings and social events</li>
      </ul>

      <h2>Partnership and Support</h2>
      <p>This project was made possible through the generous support of our donors and partners, including [Partner Names]. We are grateful for the community's involvement in every step of the process, from design to construction.</p>

      <h2>Looking Forward</h2>
      <p>The opening of this community center is just the beginning. We have plans to expand our programming and services based on community needs and feedback. We invite everyone to visit the center and become part of this exciting new chapter for our community.</p>

      <p><strong>Join us for the official opening ceremony on [Date] at [Time]. All are welcome!</strong></p>
    `
  }

  return (
    <div className="blog-post-page">
      {/* Header Image */}
      <div className="post-header-image">
        <img src={post.image} alt={post.title} />
        <div className="post-header-overlay">
          <div className="container">
            <Link to="/blog" className="back-btn">← Back to News</Link>
            <span className="post-header-category">{post.category}</span>
            <h1 className="post-header-title">{post.title}</h1>
            <div className="post-header-meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <article className="post-content">
        <div className="container">
          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Share Section */}
          <div className="post-share">
            <h3>Share this story</h3>
            <div className="share-buttons">
              <button className="share-btn facebook">📘 Facebook</button>
              <button className="share-btn twitter">🐦 Twitter</button>
              <button className="share-btn linkedin">💼 LinkedIn</button>
              <button className="share-btn email">📧 Email</button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="related-posts">
            <h3>Related Stories</h3>
            <div className="related-posts-grid">
              <Link to="/blog/2" className="related-post-card">
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80" alt="Related" />
                <div className="related-post-content">
                  <span className="related-category">Education</span>
                  <h4>Education Program Reaches 1000 Students</h4>
                </div>
              </Link>

              <Link to="/blog/3" className="related-post-card">
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80" alt="Related" />
                <div className="related-post-content">
                  <span className="related-category">Healthcare</span>
                  <h4>Healthcare Outreach Success Story</h4>
                </div>
              </Link>

              <Link to="/blog/4" className="related-post-card">
                <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80" alt="Related" />
                <div className="related-post-content">
                  <span className="related-category">Partnerships</span>
                  <h4>Partnership with Local Schools Announced</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default BlogPostPage
