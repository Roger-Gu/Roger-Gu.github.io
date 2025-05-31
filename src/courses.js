import { Download, ExternalLink } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { courses, getCourseById } from './data/courses';

export const CoursesPage = () => {
    const navigate = useNavigate();

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
                                    onClick={() => navigate(`/courses/${course.id}`)}
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

export const CourseDetail = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const course = getCourseById(courseId);

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto">
            <button
                onClick={() => navigate('/courses')}
                className="mb-6 text-green-600 hover:text-green-800 font-medium"
            >
                ← Back to all courses
            </button>

            <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
                        <p className="text-gray-600 mb-4">{course.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                            <div>Instructor: {course.instructor}</div>
                            <div>Semester: {course.semester}</div>
                            <div>Difficulty: {course.difficulty}</div>
                            <div>Duration: {course.duration}</div>
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
        </div>
    );
};