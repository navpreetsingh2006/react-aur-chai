import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'

function BlogPost() {
  const { id } = useParams()
  const post = posts.find(p => p.id === parseInt(id))

  if (!post) return <div className="container"><h2>Post not found!</h2></div>

  return (
    <div className="container post-page">
      <Link to="/blog">← Back to Blog</Link>
      <h1>{post.title}</h1>
      <p className="meta">{post.author} · {post.date} · <span className="tag">{post.category}</span></p>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
    </div>
  )
}
export default BlogPost