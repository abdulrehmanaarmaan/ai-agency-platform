import { HelpCircle, Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';

const FAQ = () => {

    const faqs = [
        {
            question: "What do I need to get started?",
            answer: "To get started with Nubien, simply reach out via our contact form. We'll schedule a discovery call to understand your AI needs and project goals."
        },
        {
            question: "What kind of customization is available?",
            answer: "We offer full-scale customization from neural model selection to front-end UI/UX, ensuring the AI agent fits your brand identity perfectly."
        },
        {
            question: "How easy is it to edit for beginners?",
            answer: "Our platform is designed with a high-level API and modular components, making it accessible for developers of all levels to implement and iterate."
        },
        {
            question: "Let me know more about moneyback guarantee?",
            answer: "We offer a 14-day evaluation period. If our initial integration doesn't meet the agreed-upon technical milestones, we provide a full refund."
        },
        {
            question: "Do I need to know how to code?",
            answer: "While our dashboard is user-friendly, some knowledge of API integration is helpful for custom workflows. We also offer fully managed services."
        },
        {
            question: "What will I get after purchasing the template?",
            answer: "You receive the full source code, documentation, pre-trained model hooks, and 6 months of technical support for your AI infrastructure."
        }
    ];

    return (
        <div className="bg-slate-950 text-white min-h-screen">
            <section className="relative pt-32 pb-24 px-6 overflow-hidden">
                {/* Subtle Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">

                    {/* Left Side: Header Content */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                            <HelpCircle size={14} className="text-purple-400" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">FAQ</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight">
                            Frequently <br /> <span className="text-slate-500">Asked Questions</span>
                        </h1>

                        <p className="text-slate-400 font-medium max-w-sm leading-relaxed">
                            Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.
                        </p>
                    </div>

                    {/* Right Side: Accordion List */}
                    <div className="lg:col-span-7 space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

// Helper Component for the Toggle Logic
const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`group border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white/5 border-white/10' : 'bg-transparent hover:bg-white/[0.02]'
                }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-8 py-7 flex items-center justify-between text-left"
            >
                <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                    }`}>
                    {question}
                </span>
                <div className={`p-1 rounded-full transition-transform duration-300 ${isOpen ? 'bg-purple-600 text-white rotate-180' : 'text-slate-600'
                    }`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </div>
            </button>

            <div
                className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 pb-8 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <p className="text-slate-500 font-medium leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

export default FAQ;