// src/data/courses.js

export const courses = [
  {
    id: "pmath451",
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
        <li>General measures and measurability</li>
        <li>Caratheodory Extension theorem and construction of measures</li>
        <li>Integration theory, convergence theorems</li>
        <li>Measure on Locally compact Hausdorff spaces</li>
        <li>Urysohn's lemma, Radon-Nikodym theorem</li>
        <li>Lp-spaces</li>
        <li>Product measures, Fubini's theorem</li>
        <li>Complex measures and Duality</li>
      </ul>
    `,
    resources: [
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
  }
];

// Helper functions
export const getCourseById = (id) => {
  return courses.find(course => course.id === id);
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