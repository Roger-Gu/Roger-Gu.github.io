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
      "General measures and measurability",
      "Caratheodory Extension theorem and construction of measures",
      "Integration theory, convergence theorems",
      "Measure on Locally compact Hausdorff spaces",
      "Lebesgue Spaces",
      "Product measures, Fubini's theorem",
      "Signed and Complex measures",
      "Dual of functional spaces",
      "Convolution and Fourier Transform"
    ],
    difficulty: "Intermediate",
    duration: "12 weeks",
    notes: `
      <h3>Chapters</h3>
      <ul>
        <li>Measures</li>
        <li>Intergration</li>
        <li>Construction of measures</li>
        <li>Borel Measures on Topological spaces</li>
        <li>Lebesgue Spaces</li>
        <li>Lp-spaces</li>
        <li>Complex measures</li>
        <li>Dual of functional spaces</li>
        <li>Product measures</li>
        <li>Convolution and Fourier Transform</li>
        <li>Bochner Spaces</li>
      </ul>
    `,
    resources: [
    ]
  },
  {
    id: "test",
    title: "Data Structures and Algorithms(just a template for testing)",
    description: "A template for testing.",
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

export const getCourses = (count = 3) => {
  return courses.slice(0, count);
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