// src/data/blogPosts.js

export const blogPosts = [
  {
    id: 1,
    title: "My First Blog Post",
    date: "2025-03-29",
    excerpt: "This is a preview of my first blog post. Click to read more.",
    content: `
      <h2>Welcome to My Blog</h2>
      <p>This is my first blog post where I share my thoughts and experiences.</p>
      
      <h3>What I've Learned</h3>
      <p>Starting this blog has been an exciting journey. Here are some key insights:</p>
      <ul>
        <li>Writing helps clarify thoughts</li>
        <li>Sharing knowledge benefits everyone</li>
        <li>Regular posting builds good habits</li>
      </ul>
      
      <h3>Looking Forward</h3>
      <p>I'm excited to continue sharing my learning journey with you all.</p>
    `,
    tags: ["personal", "blogging", "first-post"],
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "Learning React: My Journey",
    date: "2025-03-28",
    excerpt: "My journey learning React and building this website from scratch.",
    content: `
      <h2>Why I Chose React</h2>
      <p>React has become one of the most popular JavaScript libraries for building user interfaces, and for good reason.</p>
      
      <h3>Key Benefits I've Discovered</h3>
      <ul>
        <li><strong>Component-Based Architecture:</strong> Makes code reusable and maintainable</li>
        <li><strong>Virtual DOM:</strong> Improves performance</li>
        <li><strong>Large Ecosystem:</strong> Tons of libraries and tools available</li>
        <li><strong>Strong Community:</strong> Great support and learning resources</li>
      </ul>
      
      <h3>Challenges I Faced</h3>
      <p>Learning React wasn't without its challenges:</p>
      <ul>
        <li>Understanding JSX syntax initially</li>
        <li>Grasping the concept of state management</li>
        <li>Learning when to use hooks vs class components</li>
      </ul>
      
      <h3>Resources That Helped</h3>
      <p>Here are some resources that made my learning journey smoother:</p>
      <ul>
        <li>React Official Documentation</li>
        <li>freeCodeCamp React Course</li>
        <li>Building small projects like this website</li>
      </ul>
    `,
    tags: ["react", "javascript", "learning", "web-development"],
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "Understanding Git and Version Control",
    date: "2025-03-27",
    excerpt: "A beginner's guide to Git and why version control is essential for any developer.",
    content: `
      <h2>What is Version Control?</h2>
      <p>Version control is a system that tracks changes to files over time, allowing you to recall specific versions later.</p>
      
      <h3>Why Git?</h3>
      <p>Git is the most popular version control system because it's:</p>
      <ul>
        <li>Distributed - every clone is a full backup</li>
        <li>Fast - most operations are local</li>
        <li>Flexible - supports various workflows</li>
        <li>Reliable - strong integrity checks</li>
      </ul>
      
      <h3>Essential Git Commands</h3>
      <pre><code>git init          # Initialize a repository
git add .         # Stage all changes
git commit -m ""  # Commit with message
git push          # Push to remote
git pull          # Pull from remote</code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Write clear, descriptive commit messages</li>
        <li>Commit often, but make each commit meaningful</li>
        <li>Use branches for features and experiments</li>
        <li>Keep your repository clean and organized</li>
      </ul>
    `,
    tags: ["git", "version-control", "development", "tutorial"],
    readTime: "4 min read"
  }
];

// Helper functions
export const getBlogPostById = (id) => {
  return blogPosts.find(post => post.id === parseInt(id));
};

export const getBlogPostsByTag = (tag) => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

export const getRecentBlogPosts = (count = 3) => {
  return blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
};

export const getAllTags = () => {
  const tags = new Set();
  blogPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};