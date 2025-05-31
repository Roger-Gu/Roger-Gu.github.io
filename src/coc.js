import { Download, ExternalLink, Tag } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { rulesCOC, getRuleById } from './data/COC_rules';
import { COC_worlds } from './data/COC_worlds';
import { COC_modules, getLastCOCModules, getCOCModuleById, getCOCModuleByTag } from './data/COC_items';

export const COCPage = () => {
    const navigate = useNavigate();
    const [, setSelectedTag] = useState(null);

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Call of Cthulhu!!!</h1>
                <p className="text-gray-600">一起堕入深渊；一起拥抱疯狂；一起掉SAN吧！！！</p>
            </div>
            <div className="text-center">
                <h2 className="text-gray-700">以下是一些COC的规则</h2>
            </div>
            <div className="grid gap-6">
                {rulesCOC.map(rule => (
                    <div key={rule.id} className="bg-white p-6 rounded-lg shadow-sm border">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                                <h2
                                    className="text-2xl font-semibold text-gray-900 mb-2 cursor-pointer hover:text-green-600"
                                    onClick={() => navigate(`/coc/rules/${rule.id}`)}
                                >
                                    {rule.title}
                                </h2>
                                <p className="text-gray-600 mb-3">{rule.description}</p>
                            </div>
                            <div className="flex space-x-2 ml-4">
                                <a
                                    href={rule.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-3 py-2 rounded-md hover:bg-blue-200 transition-colors"
                                >
                                    <ExternalLink size={16} />
                                    <span>View PDF</span>
                                </a>
                                <a
                                    href={rule.pdfUrl}
                                    download
                                    className="flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-2 rounded-md hover:bg-green-200 transition-colors"
                                >
                                    <Download size={16} />
                                    <span>Download</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <h2 className="text-gray-700">我们的COC故事分处于两个世界观之中</h2>
            </div>

            <div className="grid gap-6">
                {COC_worlds.map(world => (
                    <div key={world.id} className="bg-white p-6 rounded-lg shadow-sm border">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                                <h2
                                    className="text-2xl font-semibold text-gray-900 mb-2 cursor-pointer hover:text-green-600"
                                    onClick={() => navigate(`/coc/worlds/${world.id}`)}
                                >
                                    {world.title}
                                </h2>
                                <p className="text-gray-600 mb-3">{world.description}</p>
                            </div>
                            <div className="flex space-x-2 ml-4">
                                <a
                                    href={world.googleDocUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-3 py-2 rounded-md hover:bg-blue-200 transition-colors"
                                >
                                    <ExternalLink size={16} />
                                    <span>View Google Doc</span>
                                </a>
                                <a
                                    href={world.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-3 py-2 rounded-md hover:bg-blue-200 transition-colors"
                                >
                                    <ExternalLink size={16} />
                                    <span>View PDF</span>
                                </a>
                                <a
                                    href={world.pdfUrl}
                                    download
                                    className="flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-2 rounded-md hover:bg-green-200 transition-colors"
                                >
                                    <Download size={16} />
                                    <span>Download</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <h2 className="text-gray-700">以下是一些秀林生的原创模组</h2>
            </div>

            <div className="grid gap-6">
                {getLastCOCModules(1).map(module => (
                    <div key={module.id} className="bg-white p-6 rounded-lg shadow-sm border">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                                <h2
                                    className="text-2xl font-semibold text-gray-900 mb-2 cursor-pointer hover:text-green-600"
                                    onClick={() => navigate(`/coc/modules/${module.id}`)}
                                >
                                    {module.title}
                                </h2>
                                <p className="text-gray-600 mb-3">{module.description}</p>
                                <p className="text-gray-600 mb-3">{"事件年份:" + module.year}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {module.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200"
                                        onClick={() => {
                                            setSelectedTag(tag);
                                            navigate('/coc/modules');
                                        }}
                                    >
                                        <Tag size={12} className="inline mr-1" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const COCRuleDetail = () => {
    const { ruleId } = useParams();
    const navigate = useNavigate();
    const rule = getRuleById(ruleId);

    if (!rule) {
        return <div>Rule not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto">
            <button
                onClick={() => navigate('/coc')}
                className="mb-6 text-green-600 hover:text-green-800 font-medium"
            >
                ← 返回COC主界面
            </button>

            <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{rule.title}</h1>
                        <p className="text-gray-600 mb-4">{rule.description}</p>
                    </div>
                    <div className="flex space-x-2 ml-4">
                        <a
                            href={rule.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-3 py-2 rounded-md hover:bg-blue-200 transition-colors"
                        >
                            <ExternalLink size={16} />
                            <span>View PDF</span>
                        </a>
                        <a
                            href={rule.pdfUrl}
                            download
                            className="flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-2 rounded-md hover:bg-green-200 transition-colors"
                        >
                            <Download size={16} />
                            <span>Download</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const COCWorldDetail = () => {
    const { worldId } = useParams();
    const navigate = useNavigate();
    const world = COC_worlds.find(w => w.id === parseInt(worldId));

    if (!world) {
        return <div>World not found</div>;
    }

    return (
        <div className="space-y-8">
            <button
                onClick={() => navigate('/coc')}
                className="mb-6 text-green-600 hover:text-green-800 font-medium"
            >
                ← 返回COC主界面
            </button>

            <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{world.title}</h1>
                        <p className="text-gray-600 mb-4">{world.description}</p>
                    </div>
                    <div className="flex space-x-2 ml-4">
                        <a
                            href={world.googleDocUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-3 py-2 rounded-md hover:bg-blue-200 transition-colors"
                        >
                            <ExternalLink size={16} />
                            <span>View Google Doc</span>
                        </a>
                        <a
                            href={world.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-3 py-2 rounded-md hover:bg-blue-200 transition-colors"
                        >
                            <ExternalLink size={16} />
                            <span>View PDF</span>
                        </a>
                        <a
                            href={world.pdfUrl}
                            download
                            className="flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-2 rounded-md hover:bg-green-200 transition-colors"
                        >
                            <Download size={16} />
                            <span>Download</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const COCModuleDetail = () => {
    const { moduleId } = useParams();
    const navigate = useNavigate();
    const [, setSelectedTag] = useState(null);
    const module = getCOCModuleById(moduleId);

    if (!module) {
        return <div>Module not found. 模组未找到。</div>;
    }

    return (
        <div className="max-w-4xl mx-auto">
            <button
                onClick={() => navigate('/coc')}
                className="mb-6 text-blue-600 hover:text-blue-800 font-medium"
            >
                ← 返回COC主界面
            </button>

            <article className="bg-white p-8 rounded-lg shadow-sm border">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{module.title}</h1>
                <p className="text-right text-gray-600 mb-4">{module.author}</p>
                <p className="text-gray-600 mb-6">{module.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {module.tags.map(tag => (
                        <span
                            key={tag}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200"
                            onClick={() => {
                                setSelectedTag(tag);
                                navigate('/coc/modules');
                            }}
                        >
                            <Tag size={12} className="inline mr-1" />
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-gray-600 mb-6 italic">{"卷首语：" + module.authorWords}</p>
                <p className="text-gray-600 mb-6">{"背景：" + module.background}</p>
            </article>
        </div>
    );
};