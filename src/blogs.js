import { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Clock, Tag } from 'lucide-react';
import { blogPosts, getBlogPostById, getBlogPostsByTag } from './data/blogPosts';

export const BlogPage = () => {
    const [selectedTag, setSelectedTag] = useState(null);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    // Get current tag from URL
    const tag = searchParams.get("tag");
    useEffect(() => {
        if (tag) {
            setSelectedTag(tag);
        } else {
            setSelectedTag(null);
        }
    }, [tag]);

    const displayPosts = selectedTag
        ? getBlogPostsByTag(selectedTag)
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
                            onClick={() => navigate(`/blogs/${post.id}`)}
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
                                    onClick={() => {
                                        setSelectedTag(tag);
                                        setSearchParams({ tag });
                                    }}
                                >
                                    <Tag size={12} className="inline mr-1" />
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-gray-700 mb-4">{post.excerpt}</p>
                        <button
                            onClick={() => navigate(`/blogs/${post.id}`)}
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

export const BlogPostDetail = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [selectedTag, setSelectedTag] = useState(null);
    const post = getBlogPostById(postId);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto">
            <button
                onClick={() => navigate('/blogs')}
                className="mb-6 text-blue-600 hover:text-blue-800 font-medium"
            >
                ← Back to all posts
            </button>

            <article className="bg-white p-8 rounded-lg shadow-sm border">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
                <div className="flex items-center space-x-4 text-gray-500 text-sm mb-6">
                    <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.date}
                    </span>
                    <span>{post.readTime}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map(tag => (
                        <span
                            key={tag}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200"
                            onClick={() => {
                                setSelectedTag(tag);
                                navigate('/blogs?tag=' + tag);
                            }}
                        >
                            <Tag size={12} className="inline mr-1" />
                            {tag}
                        </span>
                    ))}
                </div>

                <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </div>
    );
};