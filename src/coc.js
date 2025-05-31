import { Download, ExternalLink } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { rulesCOC, getRuleById } from './data/COC_rules';
import { COC_worlds } from './data/COC_worlds';

export const COCPage = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Call of Cthulhu!!!</h1>
                <p className="text-gray-600">一起堕入深渊；一起吟诵诅咒；一起掉SAN吧！！！</p>
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
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{world.title}</h1>
                        <p className="text-gray-600 mb-4">{world.description}</p>
                    </div>
                    <div className="flex space-x-2 ml-4">
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