import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">MyBlog</a>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar