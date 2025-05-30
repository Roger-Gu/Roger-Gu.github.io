import React, { useState } from 'react';
import { FileText, Book, Home, User, Download, ExternalLink } from 'lucide-react';
// Import data from separate files
import { blogPosts } from './data/blogPosts';
import { courses } from './data/courses';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const Navigation = () => (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-800">My Website</div>
          <div className="flex space-x-6">
            {[
              { id: 'home', label: 'Home', icon: Home },
              { id: 'blog', label: '观林碎语', icon: FileText },
              { id: 'courses', label: 'Courses', icon: Book },
              { id: 'coc', label: 'Call of Cthulhu', icon: FileText },
              { id: 'about', label: 'About', icon: User }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  activeSection === id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="space-y-12">
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to My Website</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A place for my thoughts, course notes, and the Call of Cthulhu TRPG games.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FileText className="mr-2 text-blue-600" />
            Recent Blog Posts
          </h2>
          <div className="space-y-4">
            {blogPosts.slice(0, 2).map(post => (
              <div key={post.id} className="border-l-4 border-blue-200 pl-4">
                <h3 className="font-medium text-gray-900">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setActiveSection('blog')}
            className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            View all posts →
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Book className="mr-2 text-green-600" />
            Course Notes
          </h2>
          <div className="space-y-4">
            {courses.slice(0, 2).map(course => (
              <div key={course.id} className="border-l-4 border-green-200 pl-4">
                <h3 className="font-medium text-gray-900">{course.title}</h3>
                <p className="text-gray-600 text-sm">{course.description}</p>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setActiveSection('courses')}
            className="mt-4 text-green-600 hover:text-green-800 font-medium"
          >
            View all courses →
          </button>
        </div>
      </div>
    </div>
  );

  const BlogPage = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Posts</h1>
        <p className="text-gray-600">My thoughts and experiences</p>
      </div>

      <div className="space-y-6">
        {blogPosts.map(post => (
          <article key={post.id} className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{post.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              Read more →
            </button>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        ))}
      </div>
    </div>
  );

  const CoursesPage = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Notes</h1>
        <p className="text-gray-600">My academic journey and learning resources</p>
      </div>

      <div className="grid gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
              </div>
              <div className="flex space-x-2 ml-4">
                <a 
                  href={course.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-3 py-2 rounded-md hover:bg-blue-200 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>View</span>
                </a>
                <a 
                  href={course.pdfUrl} 
                  download
                  className="flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-2 rounded-md hover:bg-green-200 transition-colors"
                >
                  <Download size={16} />
                  <span>Download</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Topics Covered:</h3>
              <div className="flex flex-wrap gap-2">
                {course.topics.map(topic => (
                  <span key={topic} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About Me</h1>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-sm border">
        <p className="text-gray-700 mb-6 leading-relaxed">
          Welcome to my personal website! I'm passionate about Mathematics, Physics, and Call of Cthulhu!!! 
          This site serves as a platform where I document my learning journey, share insights through blog posts, 
          and organize my course materials.
        </p>
        
        <p className="text-gray-700 mb-6 leading-relaxed">
          Whether you're here to read my latest thoughts on technology trends, access my course notes, 
          or just learn more about my academic and professional journey, I hope you find something valuable.
        </p>
        
        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What You'll Find Here</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Blog posts about my thoughts and experiences</li>
            <li>• Comprehensive course notes from my academic studies</li>
            <li>• Call of Cthulhu TRPG games!!!</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'blog': return <BlogPage />;
      case 'courses': return <CoursesPage />;
      case 'about': return <AboutPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <footer className="bg-white border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>&copy; 2025 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
