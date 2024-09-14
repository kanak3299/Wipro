// src/BlogPage.js
import React from 'react';
import blogPosts from './blogPosts';
import './BlogPage.css'; // Import your CSS file for styling

const BlogPage = () => {
  return (
    <div className="blog-container">
      <h1>Our Blog</h1>
      <div className="blog-posts">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-date">{post.date}</p>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href={post.link} className="blog-read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
