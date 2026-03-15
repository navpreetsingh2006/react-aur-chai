import Hero from '../components/Hero'
import BlogCard from '../components/BlogCard'
import { posts } from '../data/posts'

function Home() {
  return (
    <div>
      <Hero />
      <div className="container">
        <h2>Latest Posts</h2>
        <div className="grid">
          {posts.slice(0, 3).map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Home