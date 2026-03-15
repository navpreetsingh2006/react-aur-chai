import BlogCard from '../components/BlogCard'
import { posts } from '../data/posts'

function Blog() {
  return (
    <div className="container">
      <h1>All Posts</h1>
      <div className="grid">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
export default Blog