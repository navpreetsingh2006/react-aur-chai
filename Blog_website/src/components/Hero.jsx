import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-badge">✦ Web Dev Blog</div>
        <h1>Welcome to <span>MyBlog</span></h1>
        <p>Thoughts on React, CSS, JavaScript and modern frontend tools</p>
        <div className="hero-buttons">
          <Link to="/blog" className="hero-btn">Explore Posts →</Link>
          <Link to="/about" className="hero-btn-outline">About Us</Link>
        </div>
      </div>
    </div>
  )
}
export default Hero