// src/data/courses.js

export const courses = [
  {
    id: "phys454",
    title: "Phys454 Advanced Quantum Theory",
    description: "Mathematical structure and physical principles which underlie quantum theory.",
    instructor: "A. Kempf",
    semester: "Fall 2023",
    pdfUrl: "/assets/pdfs/courses/Phys454_Quantum_theory_Notes.pdf",
    topics: [
      "Hilbert Spaces",
      "Quantum Operators",
      "Quantum States",
      "Quantum Measurements",
      "Quantum Entanglement",
      "Quantum Information Theory",
    ],
    difficulty: "Intermediate",
    duration: "12 weeks",
    notes: `
      <h3>Chapters</h3>
      <ul>
        <li>To be updated</li>
      </ul>
    `,
    resources: [
      {
        type: "online",
        title: "Advanced Quantum Theory, AMATH 473/673, PHYS454 in Fall 2023",
        author: "A. Kempf",
        url: "https://uwaterloo.ca/physics-of-information-lab/teaching/advanced-quantum-theory-amath-473673-phys454-fall-2023"
      }
    ]
  },

  {
    id: "pmath465",
    title: "Pmath465 Smooth Manifolds",
    description: "An introduction to smooth manifolds and differential geometry.",
    instructor: "D. Park",
    semester: "Fall 2023",
    pdfUrl: "/assets/pdfs/courses/Pmath465_Smooth_Manifold_Notes.pdf",
    topics: [
      "Smooth manifolds",
      "Smooth maps",
      "Tangent vectors",
      "Tangent and cotangent bundles",
      "Vector fields",
      "Tensor fields",
      "Differential forms",
      "Lie derivatives",
      "integral curves"
    ],
    difficulty: "Demanding",
    duration: "12 weeks",
    notes: `
      Omitted most proofs. This only serves as a list of results that might be useful, mostly for general relativity.
    `,
    resources: [
      {
        type: "textbook",
        title: "Introduction to Smooth Manifolds",
        author: "John M. Lee"
      }
    ]
  },
  {
    id: "pmath651",
    title: "Pmath651 Measure Theory",
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
    id: "amath753",
    title: "Amath753 Advanced Partial Differential Equations",
    description: "The main themes are well-posedness of problems, Hilbert space methods, variational principles and integral equation methods. ",
    instructor: "",
    semester: "Winter 2025",
    pdfUrl: "/assets/pdfs/courses/Amath753_Advanced_PDEs.pdf",
    topics: [
      "Hilbert Spaces",
      "Lebesgue Spaces",
      "Sobolev Spaces",
      "well-posedness of problems"
    ],
    difficulty: "Intermediate",
    duration: "12 weeks",
    notes: `
      Please refer to my Measure Theory notes for more details on Lebesgue Spaces.
      Please refer to my Functional Analysis notes for more details on Banach Spaces, Weak Topologies, and compact operators.
    `,
    resources: [
      {
        type: "textbook",
        title: "Partial Differential Equations",
        author: "Lawrence C. Evans"
      }
    ]
  },
  {
    id: "pmath753",
    title: "Pmath753 Functional Analysis",
    description: "The main themes are Banach and Hilbert spaces, bounded linear maps, Hahn-Banach theorem, open mapping theorem, closed graph theorem, topologies, nets, Hausdorff spaces, dual spaces, weak topologies, Tychonoff's theorem, Banach-Alaoglu theorem, reflexive spaces, adjoint and compact operators, spectral theory. ",
    instructor: "M. Brannan",
    semester: "Fall 2025",
    pdfUrl: "/assets/pdfs/courses/Pmath753_Functional_Analysis.pdf",
    topics: [
      "Topological spaces",
      "Banach spaces",
      "Weak Topologies",
      "Compact operators",
      "Spectral Theory"
    ],
    difficulty: "Intermediate",
    duration: "12 weeks",
    notes: `
      We would assume that you have basic knowledge of some real analysis (See Prof. New's notes on Pmath351, and Prof Tran's notes on Amath731).
    `,
    resources: [
      {
        type: "textbook",
        title: "Functional Analysis and Operator Algebras",
        author: "Kenneth R. Davidson"
      }
    ]
  }
];

// Helper functions
export const getCourseById = (id) => {
  return courses.find(course => course.id === id);
};

export const getLatestCourses = (count = 3) => {
  return courses.slice(Math.max(courses.length - count, 0));
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