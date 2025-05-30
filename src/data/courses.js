// src/data/courses.js

export const courses = [
  {
    id: 1,
    title: "Pmath451 Measure Theory",
    description: "An introduction to measure theory and Lebesgue spaces.",
    instructor: "M. Kennedy, M. Brannan",
    semester: "Fall 2024, Winter 2025",
    pdfUrl: "/assets/pdfs/courses/PMATH_451_Measure_Theory_Notes.pdf",
    topics: [
      "Measure Theory",
      "Borel Sets",
      "Integration",
      "Lebesgue Integration",
      "Lebesgue Spaces",
      "convolution",
      "Fourier Transform"
    ],
    difficulty: "Intermediate",
    duration: "16 weeks",
    notes: `
      <h2>Course Overview</h2>
      <p>This course provides a comprehensive introduction to machine learning, covering both theoretical foundations and practical applications.</p>
      
      <h3>Key Learning Outcomes</h3>
      <ul>
        <li>Understand fundamental ML algorithms and their applications</li>
        <li>Implement ML models from scratch and using libraries</li>
        <li>Evaluate model performance and avoid overfitting</li>
        <li>Work with real-world datasets and preprocessing techniques</li>
      </ul>
      
      <h3>Projects Completed</h3>
      <ul>
        <li>Housing price prediction using linear regression</li>
        <li>Image classification with neural networks</li>
        <li>Customer segmentation using clustering</li>
        <li>Sentiment analysis of movie reviews</li>
      </ul>
    `,
    resources: [
      {
        type: "textbook",
        title: "Pattern Recognition and Machine Learning",
        author: "Christopher Bishop"
      },
      {
        type: "online",
        title: "Andrew Ng's Machine Learning Course",
        url: "https://www.coursera.org/learn/machine-learning"
      }
    ]
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    description: "In-depth study of fundamental data structures and algorithmic problem-solving techniques.",
    instructor: "Prof. Johnson",
    semester: "Spring 2024",
    pdfUrl: "/assets/pdfs/data-structures-notes.pdf",
    topics: [
      "Arrays and Strings",
      "Linked Lists",
      "Stacks and Queues",
      "Binary Trees",
      "Binary Search Trees",
      "Heaps",
      "Hash Tables",
      "Graphs",
      "Dynamic Programming",
      "Sorting Algorithms"
    ],
    difficulty: "Intermediate",
    duration: "14 weeks",
    notes: `
      <h2>Course Overview</h2>
      <p>This course focuses on the design and analysis of efficient algorithms and data structures.</p>
      
      <h3>Algorithm Analysis</h3>
      <p>We studied time and space complexity using Big O notation:</p>
      <ul>
        <li>O(1) - Constant time</li>
        <li>O(log n) - Logarithmic time</li>
        <li>O(n) - Linear time</li>
        <li>O(n log n) - Linearithmic time</li>
        <li>O(n²) - Quadratic time</li>
      </ul>
      
      <h3>Key Data Structures</h3>
      <p>Each data structure has its optimal use cases:</p>
      <ul>
        <li><strong>Arrays:</strong> Fast random access, cache-friendly</li>
        <li><strong>Linked Lists:</strong> Dynamic size, efficient insertion/deletion</li>
        <li><strong>Hash Tables:</strong> O(1) average case lookup</li>
        <li><strong>Binary Trees:</strong> Hierarchical data organization</li>
        <li><strong>Graphs:</strong> Modeling relationships and networks</li>
      </ul>
    `,
    resources: [
      {
        type: "textbook",
        title: "Introduction to Algorithms",
        author: "Cormen, Leiserson, Rivest, and Stein"
      },
      {
        type: "online",
        title: "LeetCode Problem Practice",
        url: "https://leetcode.com"
      }
    ]
  },
  {
    id: 3,
    title: "Full-Stack Web Development",
    description: "Complete web development course covering frontend, backend, and database technologies.",
    instructor: "Ms. Davis",
    semester: "Summer 2024",
    pdfUrl: "/assets/pdfs/web-dev-notes.pdf",
    topics: [
      "HTML5 & CSS3",
      "JavaScript ES6+",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Authentication",
      "Deployment",
      "Testing"
    ],
    difficulty: "Beginner to Intermediate",
    duration: "12 weeks",
    notes: `
      <h2>Course Overview</h2>
      <p>This intensive course covers the complete web development stack from frontend to backend.</p>
      
      <h3>Frontend Technologies</h3>
      <ul>
        <li><strong>HTML5:</strong> Semantic markup and modern features</li>
        <li><strong>CSS3:</strong> Flexbox, Grid, animations, and responsive design</li>
        <li><strong>JavaScript:</strong> ES6+ features, async programming, DOM manipulation</li>
        <li><strong>React:</strong> Components, hooks, state management, routing</li>
      </ul>
      
      <h3>Backend Technologies</h3>
      <ul>
        <li><strong>Node.js:</strong> Server-side JavaScript runtime</li>
        <li><strong>Express.js:</strong> Web application framework</li>
        <li><strong>MongoDB:</strong> NoSQL database and Mongoose ODM</li>
        <li><strong>REST APIs:</strong> Design principles and implementation</li>
      </ul>
      
      <h3>Final Project</h3>
      <p>Built a full-stack social media application with features including:</p>
      <ul>
        <li>User authentication and authorization</li>
        <li>Create, read, update, delete posts</li>
        <li>Real-time chat functionality</li>
        <li>Image upload and processing</li>
        <li>Responsive design for mobile and desktop</li>
      </ul>
    `,
    resources: [
      {
        type: "online",
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org"
      },
      {
        type: "textbook",
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke"
      }
    ]
  },
  {
    id: 4,
    title: "Database Systems",
    description: "Comprehensive study of database design, SQL, and database management systems.",
    instructor: "Dr. Wilson",
    semester: "Fall 2023",
    pdfUrl: "/assets/pdfs/database-systems-notes.pdf",
    topics: [
      "Relational Model",
      "SQL Fundamentals",
      "Database Design",
      "Normalization",
      "Indexing",
      "Query Optimization",
      "Transactions",
      "Concurrency Control",
      "NoSQL Databases"
    ],
    difficulty: "Intermediate",
    duration: "15 weeks",
    notes: `
      <h2>Database Fundamentals</h2>
      <p>This course covered the theoretical and practical aspects of database systems.</p>
      
      <h3>Relational Database Design</h3>
      <p>Key principles of good database design:</p>
      <ul>
        <li>Entity-Relationship modeling</li>
        <li>Normalization (1NF, 2NF, 3NF, BCNF)</li>
        <li>Primary and foreign key constraints</li>
        <li>Referential integrity</li>
      </ul>
      
      <h3>SQL Mastery</h3>
      <p>Covered advanced SQL concepts including:</p>
      <ul>
        <li>Complex joins and subqueries</li>
        <li>Window functions and CTEs</li>
        <li>Stored procedures and triggers</li>
        <li>Performance optimization techniques</li>
      </ul>
    `,
    resources: [
      {
        type: "textbook",
        title: "Database System Concepts",
        author: "Silberschatz, Galvin, and Gagne"
      }
    ]
  }
];

// Helper functions
export const getCourseById = (id) => {
  return courses.find(course => course.id === parseInt(id));
};

export const getCoursesByDifficulty = (difficulty) => {
  return courses.filter(course => course.difficulty === difficulty);
};

export const getCoursesByTopic = (topic) => {
  return courses.filter(course => 
    course.topics.some(t => t.toLowerCase().includes(topic.toLowerCase()))
  );
};

export const getAllTopics = () => {
  const topics = new Set();
  courses.forEach(course => {
    course.topics.forEach(topic => topics.add(topic));
  });
  return Array.from(topics).sort();
};

export const getDifficultyLevels = () => {
  const levels = new Set();
  courses.forEach(course => levels.add(course.difficulty));
  return Array.from(levels);
};