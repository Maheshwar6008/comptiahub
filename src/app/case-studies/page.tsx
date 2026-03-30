"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CourseLayout from "@/components/layout/CourseLayout";
import { caseStudies } from "@/lib/data/case-study-data";
import { ChevronDown, ChevronRight, CheckCircle, AlertTriangle, Lightbulb, User, Shield } from "lucide-react";

function CaseStudiesContent() {
    const [expandedCase, setExpandedCase] = useState<string | null>(null);
    const [revealedSteps, setRevealedSteps] = useState<Record<string, Set<number>>>({});

    const toggleCase = (id: string) => setExpandedCase(prev => prev === id ? null : id);

    const revealStep = (caseId: string, stepIdx: number) => {
        setRevealedSteps(prev => {
            const current = prev[caseId] || new Set();
            const next = new Set(current);
            next.add(stepIdx);
            return { ...prev, [caseId]: next };
        });
    };

    const revealAll = (caseId: string, totalSteps: number) => {
        const all = new Set(Array.from({ length: totalSteps }, (_, i) => i));
        setRevealedSteps(prev => ({ ...prev, [caseId]: all }));
    };

    return (
        <div className="page-transition max-w-4xl mx-auto px-4 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">🛠️ Real-World Case Studies</h1>
                <p className="text-gray-400 text-sm">10 practical IT support scenarios — exactly jaise real job mein milte hain. Problem → Analysis → Solution</p>
            </div>

            <div className="space-y-3">
                {caseStudies.map((cs, idx) => {
                    const isExpanded = expandedCase === cs.id;
                    const revealed = revealedSteps[cs.id] || new Set();

                    return (
                        <motion.div key={cs.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                            className="bg-[#14141f] border border-[#2a2a3a] rounded-xl overflow-hidden card-glow">
                            <button onClick={() => toggleCase(cs.id)}
                                className="w-full flex items-center gap-4 p-4 text-left hover:bg-amber-500/5 transition-colors">
                                <span className="text-2xl">{cs.emoji}</span>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-gray-500">Case {idx + 1}</span>
                                        <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">{cs.user}</span>
                                    </div>
                                    <h3 className="text-sm font-semibold text-white truncate">{cs.title}</h3>
                                </div>
                                {isExpanded ? <ChevronDown className="w-5 h-5 text-gray-500" /> : <ChevronRight className="w-5 h-5 text-gray-500" />}
                            </button>

                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                                        <div className="px-4 pb-5 space-y-4">
                                            {/* Problem */}
                                            <div className="bg-red-500/5 border border-red-500/10 rounded-lg p-3">
                                                <h4 className="text-xs font-semibold text-red-400 mb-1 flex items-center gap-1"><AlertTriangle className="w-3.5 h-3.5" /> Problem</h4>
                                                <p className="text-xs text-gray-300">{cs.problem}</p>
                                            </div>

                                            {/* Analysis */}
                                            <div className="bg-blue-500/5 border border-blue-500/10 rounded-lg p-3">
                                                <h4 className="text-xs font-semibold text-blue-400 mb-2">🔍 Possible Causes</h4>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {cs.analysis.map((a, i) => (
                                                        <span key={i} className="text-[10px] bg-[#1a1a2e] text-gray-400 px-2 py-0.5 rounded-full border border-[#2a2a3a]">{a}</span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Steps */}
                                            <div>
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="text-xs font-semibold text-amber-400">📋 Step-by-Step Solution</h4>
                                                    <button onClick={() => revealAll(cs.id, cs.steps.length)} className="text-[10px] text-gray-500 hover:text-amber-400 transition-colors">
                                                        Reveal All
                                                    </button>
                                                </div>
                                                <div className="space-y-2">
                                                    {cs.steps.map((step, i) => {
                                                        const isRevealed = revealed.has(i);
                                                        return (
                                                            <div key={i}>
                                                                {isRevealed ? (
                                                                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
                                                                        className="bg-[#1a1a2e] border border-[#2a2a3a] rounded-lg p-3">
                                                                        <div className="flex items-center gap-2 mb-1">
                                                                            <span className="w-5 h-5 bg-amber-500/20 text-amber-400 rounded text-[10px] flex items-center justify-center font-bold">{i + 1}</span>
                                                                            <span className="text-xs font-medium text-white">{step.title}</span>
                                                                        </div>
                                                                        <p className="text-xs text-gray-400 ml-7">{step.detail}</p>
                                                                    </motion.div>
                                                                ) : (
                                                                    <button onClick={() => revealStep(cs.id, i)}
                                                                        className="w-full text-left bg-[#1a1a2e] border border-dashed border-[#3a3a4a] rounded-lg p-3 hover:border-amber-500/30 transition-colors group">
                                                                        <div className="flex items-center gap-2">
                                                                            <span className="w-5 h-5 bg-[#2a2a3a] text-gray-500 rounded text-[10px] flex items-center justify-center font-bold group-hover:text-amber-400">{i + 1}</span>
                                                                            <span className="text-xs text-gray-500 group-hover:text-amber-400">Click to reveal Step {i + 1}: {step.title}</span>
                                                                        </div>
                                                                    </button>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {/* Resolution */}
                                            <div className="bg-green-500/5 border border-green-500/10 rounded-lg p-3">
                                                <h4 className="text-xs font-semibold text-green-400 mb-1 flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5" /> Resolution</h4>
                                                <p className="text-xs text-gray-300">{cs.resolution}</p>
                                            </div>

                                            {/* Key Learning */}
                                            <div className="bg-amber-500/5 border border-amber-500/10 rounded-lg p-3">
                                                <h4 className="text-xs font-semibold text-amber-400 mb-1 flex items-center gap-1"><Lightbulb className="w-3.5 h-3.5" /> Key Learning</h4>
                                                <p className="text-xs text-gray-300 font-medium">{cs.keyLearning}</p>
                                            </div>

                                            {/* Prevention */}
                                            {cs.prevention && (
                                                <div className="bg-purple-500/5 border border-purple-500/10 rounded-lg p-3">
                                                    <h4 className="text-xs font-semibold text-purple-400 mb-1">🛡️ Prevention</h4>
                                                    <ul className="space-y-1">{cs.prevention.map((p, i) => <li key={i} className="text-xs text-gray-400">• {p}</li>)}</ul>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export default function CaseStudiesPage() {
    return (
        <CourseLayout>
            <CaseStudiesContent />
        </CourseLayout>
    );
}
