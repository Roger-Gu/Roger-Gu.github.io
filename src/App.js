import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { FileText, Book, Home, User, Clock } from 'lucide-react';

// Import data from separate files
import { getRecentBlogPosts } from './data/blogPosts';
import { BlogPage, BlogPostDetail  } from './blogs';
import { getCourses } from './data/courses';
import { CoursesPage, CourseDetail } from './courses';
import { COCPage, COCRuleDetail, COCWorldDetail } from './coc';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            to="/"
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            Roger's Website
          </Link>
          <div className="flex space-x-6">
            {[
              { path: '/', label: 'Home', icon: Home },
              { path: '/blogs', label: '观林碎语', icon: FileText },
              { path: '/courses', label: 'Courses', icon: Book },
              { path: '/coc', label: 'Call of Cthulhu', icon: () => <img src="/assets/images/奈亚之印记.jpg" alt="Call of Cthulhu icon" className="w-5 h-5" /> },
              { path: '/about', label: 'About', icon: User }
            ].map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  isActive(path)
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  const recentPosts = getRecentBlogPosts(2);

  return (
    <div className="space-y-12">
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Roger's Website</h1>
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
                  onClick={() => navigate(`/blogs/${post.id}`)}
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
          <Link
            to="/blogs"
            className="mt-4 text-blue-600 hover:text-blue-800 font-medium inline-block"
          >
            View all posts →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Book className="mr-2 text-green-600" />
            Course Notes
          </h2>
          <div className="space-y-4">
            {getCourses(3).map(course => (
              <div key={course.id} className="border-l-4 border-green-200 pl-4">
                <h3
                  className="font-medium text-gray-900 cursor-pointer hover:text-green-600"
                  onClick={() => navigate(`/courses/${course.id}`)}
                >
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mb-1">{course.semester} • {course.difficulty}</p>
                <p className="text-gray-600 text-sm">{course.description}</p>
              </div>
            ))}
          </div>
          <Link
            to="/courses"
            className="mt-4 text-green-600 hover:text-green-800 font-medium inline-block"
          >
            View all courses →
          </Link>
        </div>
      </div>
    </div>
  );
};


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

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blogs/:postId" element={<BlogPostDetail />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            <Route path="/coc" element={<COCPage />} />
            <Route path="/coc/rules/:ruleId" element={<COCRuleDetail />} />
            <Route path="/coc/worlds/:worldId" element={<COCWorldDetail />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <footer className="bg-white border-t mt-16">
          <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600">
            <p>&copy; 2025 Roger's Website. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;