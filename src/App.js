import React, { useState } from 'react';
import { FileText, Book, Home, User, Download, ExternalLink, Clock, Tag } from 'lucide-react';

// Import data from separate files
import { blogPosts, getRecentBlogPosts } from './data/blogPosts';
import { courses } from './data/courses';
import { rulesCOC } from './data/rulesCOC';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  const Navigation = () => (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div
            className="text-xl font-bold text-gray-800 cursor-pointer"
            onClick={() => {
              setActiveSection('home');
            }}
          >
            My Website
          </div>
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
                onClick={() => {
                  setActiveSection(id);
                }}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${activeSection === id
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

  const HomePage = () => {
    const recentPosts = getRecentBlogPosts(2);

    return (
      <div className="space-y-12">
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to My Website</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A place for my thoughts, blog posts, course notes, and Call of Cthulhu TRPG games.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FileText className="mr-2 text-blue-600" />
              Recent Blog Posts
            </h2>
            <div className="space-y-4">
              {recentPosts.map(post => (
                <div key={post.id} className="border-l-4 border-blue-200 pl-4">
                  <h3
                    className="font-medium text-gray-900 cursor-pointer hover:text-blue-600"
                    onClick={() => {
                      setSelectedBlogPost(post);
                      setActiveSection('blog');
                    }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2 flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.date} • {post.readTime}
                  </p>
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
                  <h3
                    className="font-medium text-gray-900 cursor-pointer hover:text-green-600"
                    onClick={() => {
                      setSelectedCourse(course);
                      setActiveSection('courses');
                    }}
                  >
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-1">{course.semester} • {course.difficulty}</p>
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
  };

  const BlogPage = () => {
    if (selectedBlogPost) {
      return (
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedBlogPost(null)}
            className="mb-6 text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to all posts
          </button>

          <article className="bg-white p-8 rounded-lg shadow-sm border">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedBlogPost.title}</h1>
            <div className="flex items-center space-x-4 text-gray-500 text-sm mb-6">
              <span className="flex items-center">
                <Clock size={14} className="mr-1" />
                {selectedBlogPost.date}
              </span>
              <span>{selectedBlogPost.readTime}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedBlogPost.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200"
                  onClick={() => {
                    setSelectedTag(tag);
                    setSelectedBlogPost(null);
                  }}
                >
                  <Tag size={12} className="inline mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedBlogPost.content }}
            />
          </article>
        </div>
      );
    }

    const displayPosts = selectedTag
      ? blogPosts.filter(post => post.tags.includes(selectedTag))
      : blogPosts;

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {selectedTag ? `Posts tagged "${selectedTag}"` : 'Blog Posts'}
          </h1>
          <p className="text-gray-600">My thoughts and experiences</p>

          {selectedTag && (
            <button
              onClick={() => setSelectedTag(null)}
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              ← View all posts
            </button>
          )}
        </div>

        <div className="space-y-6">
          {displayPosts.map(post => (
            <article key={post.id} className="bg-white p-6 rounded-lg shadow-sm border">
              <h2
                className="text-2xl font-semibold text-gray-900 mb-2 cursor-pointer hover:text-blue-600"
                onClick={() => setSelectedBlogPost(post)}
              >
                {post.title}
              </h2>
              <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {post.date}
                </span>
                <span>{post.readTime}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm cursor-pointer hover:bg-gray-200"
                    onClick={() => setSelectedTag(tag)}
                  >
                    <Tag size={12} className="inline mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <button
                onClick={() => setSelectedBlogPost(post)}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </button>
            </article>
          ))}
        </div>
      </div>
    );
  };

  const CoursesPage = () => {
    if (selectedCourse) {
      return (
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setSelectedCourse(null)}
            className="mb-6 text-green-600 hover:text-green-800 font-medium"
          >
            ← Back to all courses
          </button>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedCourse.title}</h1>
                <p className="text-gray-600 mb-4">{selectedCourse.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                  <div>Instructor: {selectedCourse.instructor}</div>
                  <div>Semester: {selectedCourse.semester}</div>
                  <div>Difficulty: {selectedCourse.difficulty}</div>
                  <div>Duration: {selectedCourse.duration}</div>
                </div>
              </div>
              <div className="flex space-x-2 ml-4">
                <a 
                  href={selectedCourse.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-3 py-2 rounded-md hover:bg-blue-200 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>View PDF</span>
                </a>
                <a 
                  href={selectedCourse.pdfUrl} 
                  download
                  className="flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-2 rounded-md hover:bg-green-200 transition-colors"
                >
                  <Download size={16} />
                  <span>Download</span>
                </a>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Topics Covered:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedCourse.topics.map(topic => (
                  <span key={topic} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedCourse.notes }}
            />
            
            {selectedCourse.resources && (
              <div className="mt-8 pt-6 border-t">
                <h3 className="font-medium text-gray-900 mb-3">Additional Resources:</h3>
                <ul className="space-y-2">
                  {selectedCourse.resources.map((resource, index) => (
                    <li key={index} className="flex items-center">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs mr-3">
                        {resource.type}
                      </span>
                      {resource.url ? (
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {resource.title}
                        </a>
                      ) : (
                        <span>{resource.title} by {resource.author}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Notes</h1>
          <p className="text-gray-600">My academic journey and learning resources</p>
        </div>

        <div className="grid gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h2 
                    className="text-2xl font-semibold text-gray-900 mb-2 cursor-pointer hover:text-green-600"
                    onClick={() => setSelectedCourse(course)}
                  >
                    {course.title}
                  </h2>
                  <p className="text-gray-600 mb-3">{course.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <span>{course.semester}</span>
                    <span>•</span>
                    <span>{course.difficulty}</span>
                    <span>•</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <a 
                  href={course.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-3 py-2 rounded-md hover:bg-blue-200 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>View PDF</span>
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
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Topics Covered:</h3>
              <div className="flex flex-wrap gap-2">
                {course.topics.map(topic => (
                  <span key={topic} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: course.notes }}
            />
            
            {course.resources && (
              <div className="mt-8 pt-6 border-t">
                <h3 className="font-medium text-gray-900 mb-3">Additional Resources:</h3>
                <ul className="space-y-2">
                  {course.resources.map((resource, index) => (
                    <li key={index} className="flex items-center">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs mr-3">
                        {resource.type}
                      </span>
                      {resource.url ? (
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {resource.title}
                        </a>
                      ) : (
                        <span>{resource.title} by {resource.author}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    );
  };  

    const COCPage = () => (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Call of Cthulhu</h1>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm border">
        <p className="text-gray-700 mb-6 leading-relaxed">
          欢迎来到克苏鲁的呼唤！准备好掉SAN吧！
        </p>

        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">规则</h2>
          <p>以下是一些克苏鲁呼唤的跑团规则。</p>
          <ul className="space-y-2 text-gray-700">
            {rulesCOC.map(rule => (
              <li key={rule.id} className="flex items-center">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs mr-3">
                  {rule.id}
                </span>
                <a 
                  href={rule.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {rule.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
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
    switch (activeSection) {
      case 'blog': return <BlogPage />;
      case 'courses': return <CoursesPage />;
      case 'coc': return <COCPage />;
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
