'use client';
import Link from 'next/link';

export default function BlogList({ blogs }) {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <Link href={`/blog/${blog.slug}`} key={blog.slug} className="blog-card">
          <div className="card-content">
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
