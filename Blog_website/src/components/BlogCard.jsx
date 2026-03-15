import { Link } from 'react-router-dom'

function BlogCard({ post, index }) {
  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img src={post.image} alt={post.title} />
        <span className="card-number">#{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="card-body">
        <span className="tag">{post.category}</span>
        <h2>{post.title}</h2>
        <p>{post.summary}</p>
        <div className="divider"></div>
        <p className="meta">{post.author} · {post.date}</p>
        <Link to={`/blog/${post.id}`} className="read-more">Read More</Link>
      </div>
    </div>
  )
}
export default BlogCard