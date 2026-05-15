import { useParams, Link } from 'react-router-dom'
import './BlogPostPage.css'
import postHeaderImage from '../assets/Cecilia_fofo_Ashaley_pic_about .jpeg'

function BlogPostPage() {
  const { id } = useParams()

  // TODO: Replace with actual blog post data from your CMS
  const post = {
    id: 1,
    title: 'Women with Disabilities Making Impact in Communities and the World',
    image: postHeaderImage,
    date: 'May 15, 2026',
    author: 'NEWDA Team',
    category: 'Community Development',
    readTime: '5 min read',
    content: `
      <p>
Cecilia fofo Ashaley is a mother with 9 years lived experience of psychosocial disability, with five year working experience in the mental health space, advocating for the right of persons with disabilities, providing peer support and contributing to research in the area of mental health.
.</p>

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
              <a className="share-btn facebook" href="https://www.facebook.com/NEWDAOfficial" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
              <a className="share-btn linkedin" href="https://www.linkedin.com/company/NEWDAOFFICIAL" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
              <a className="share-btn instagram" href="https://www.instagram.com/newdaofficial" target="_blank" rel="noopener noreferrer">📷 Instagram</a>
              <a className="share-btn youtube" href="https://www.youtube.com/@NEWDAOFFICIAL" target="_blank" rel="noopener noreferrer">▶ YouTube</a>
              <a className="share-btn tiktok" href="https://www.tiktok.com/@newda.official" target="_blank" rel="noopener noreferrer">🎵 TikTok</a>
              <a className="share-btn email" href="mailto:newda2025@gmail.com?subject=Story%20from%20NEWDA">📧 Email</a>
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
