"use client";
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MockTest, MockQuestion } from "@/lib/data/mock-test-data";
import { useLanguage } from "@/lib/language-context";
import { mockTranslationsEN } from "@/lib/data/mock-translations-en";
import { CheckCircle, XCircle, RotateCcw, ArrowRight, Trophy, Target, Clock } from "lucide-react";

type QuestionState = "unanswered" | "first-wrong" | "correct" | "failed";

interface QuestionResult {
    state: QuestionState;
    selectedAnswer: string | null;
    firstAttempt: string | null;
    attempts: number;
}

export default function MockTestEngine({ test }: { test: MockTest }) {
    const { lang } = useLanguage();
    const t = (en: string, hi: string) => lang === "en" ? en : hi;
    const [currentQ, setCurrentQ] = useState(0);
    const [results, setResults] = useState<Record<string, QuestionResult>>(
        Object.fromEntries(test.questions.map(q => [q.id, { state: "unanswered", selectedAnswer: null, firstAttempt: null, attempts: 0 }]))
    );
    const [showResults, setShowResults] = useState(false);
    const [started, setStarted] = useState(false);

    const question = test.questions[currentQ];
    const qResult = results[question.id];

    const handleAnswer = useCallback((key: string) => {
        const q = test.questions[currentQ];
        const r = results[q.id];
        if (r.state === "correct" || r.state === "failed") return;

        if (key === q.correctAnswer) {
            setResults(prev => ({ ...prev, [q.id]: { ...prev[q.id], state: "correct", selectedAnswer: key, attempts: prev[q.id].attempts + 1, firstAttempt: prev[q.id].firstAttempt || key } }));
        } else {
            if (r.state === "first-wrong") {
                setResults(prev => ({ ...prev, [q.id]: { ...prev[q.id], state: "failed", selectedAnswer: key, attempts: prev[q.id].attempts + 1 } }));
            } else {
                setResults(prev => ({ ...prev, [q.id]: { ...prev[q.id], state: "first-wrong", selectedAnswer: key, firstAttempt: key, attempts: 1 } }));
            }
        }
    }, [currentQ, results, test.questions]);

    const getOptionStyle = (key: string) => {
        const q = test.questions[currentQ];
        const r = results[q.id];

        if (r.state === "correct") {
            if (key === q.correctAnswer) return "border-green-500 bg-green-500/10 text-green-400 correct-answer";
            if (key === r.firstAttempt && r.firstAttempt !== q.correctAnswer) return "border-red-500/30 bg-red-500/5 text-red-400/50 line-through";
            return "border-[#2a2a3a] text-gray-600";
        }
        if (r.state === "failed") {
            if (key === q.correctAnswer) return "border-green-500 bg-green-500/10 text-green-400 correct-answer";
            if (key === r.selectedAnswer || key === r.firstAttempt) return "border-red-500 bg-red-500/10 text-red-400 wrong-answer";
            return "border-[#2a2a3a] text-gray-600";
        }
        if (r.state === "first-wrong") {
            if (key === r.selectedAnswer) return "border-red-500/50 bg-red-500/5 text-red-400/60 line-through";
            return "border-[#2a2a3a] text-gray-300 hover:border-amber-500/50 hover:bg-amber-500/5 cursor-pointer";
        }
        return "border-[#2a2a3a] text-gray-300 hover:border-amber-500/50 hover:bg-amber-500/5 cursor-pointer";
    };

    const isAnswered = qResult.state === "correct" || qResult.state === "failed";

    const totalCorrect = Object.values(results).filter(r => r.state === "correct").length;
    const totalAnswered = Object.values(results).filter(r => r.state === "correct" || r.state === "failed").length;
    const scorePercent = test.questions.length > 0 ? Math.round((totalCorrect / test.questions.length) * 100) : 0;
    const scoreValue = Math.round((totalCorrect / test.questions.length) * test.totalMarks);
    const passed = scoreValue >= test.passingScore;

    const resetTest = () => {
        setResults(Object.fromEntries(test.questions.map(q => [q.id, { state: "unanswered", selectedAnswer: null, firstAttempt: null, attempts: 0 }])));
        setCurrentQ(0);
        setShowResults(false);
    };

    if (!started) {
        return (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto p-6">
                <div className="bg-[#14141f] border border-[#2a2a3a] rounded-2xl p-8 text-center card-glow">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Target className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">{test.title}</h1>
                    <p className="text-gray-400 text-sm mb-6">{test.description}</p>
                    <div className="flex justify-center gap-6 mb-6">
                        <div className="text-center"><div className="text-xl font-bold text-amber-400">{test.questions.length}</div><div className="text-xs text-gray-500">Questions</div></div>
                        <div className="text-center"><div className="text-xl font-bold text-amber-400">{test.timeMinutes}</div><div className="text-xs text-gray-500">Minutes</div></div>
                        <div className="text-center"><div className="text-xl font-bold text-amber-400">{test.passingScore}/{test.totalMarks}</div><div className="text-xs text-gray-500">Passing</div></div>
                    </div>
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 mb-6 text-left">
                        <p className="text-xs text-amber-400 font-medium mb-1">💡 Two-Chance System</p>
                        <p className="text-xs text-gray-400">{t("Select a wrong answer and you get a second chance. Wrong again and the correct answer is highlighted with an explanation.", "Wrong answer select kare toh ek aur chance milega. Doosri baar bhi galat ho toh correct answer highlight ho jayega with explanation.")}</p>
                    </div>
                    <button onClick={() => setStarted(true)} className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all text-sm">
                        Start Test →
                    </button>
                </div>
            </motion.div>
        );
    }

    if (showResults) {
        return (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto p-6">
                <div className="bg-[#14141f] border border-[#2a2a3a] rounded-2xl p-8 text-center card-glow">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${passed ? "bg-green-500/20" : "bg-red-500/20"}`}>
                        <Trophy className={`w-10 h-10 ${passed ? "text-green-400" : "text-red-400"}`} />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-1">{passed ? "🎉 Congratulations! PASS" : "❌ Not Passed"}</h2>
                    <p className="text-gray-400 text-sm mb-6">{passed ? t("Excellent! You passed!", "Bahut accha! Aap ne pass kar liya!") : t("Don't worry — try again!", "Koi baat nahi — dobara try karo!")}</p>
                    <div className="flex justify-center gap-8 mb-6">
                        <div><div className="text-3xl font-bold text-white">{scoreValue}<span className="text-lg text-gray-500">/{test.totalMarks}</span></div><div className="text-xs text-gray-500">Score</div></div>
                        <div><div className="text-3xl font-bold text-green-400">{totalCorrect}<span className="text-lg text-gray-500">/{test.questions.length}</span></div><div className="text-xs text-gray-500">Correct</div></div>
                        <div><div className="text-3xl font-bold text-amber-400">{scorePercent}%</div><div className="text-xs text-gray-500">Accuracy</div></div>
                    </div>
                    <div className="flex justify-center gap-3">
                        <button onClick={resetTest} className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition-colors text-sm font-medium">
                            <RotateCcw className="w-4 h-4" /> Retry Test
                        </button>
                    </div>
                    {/* Review all questions */}
                    <div className="mt-8 space-y-4 text-left">
                        <h3 className="text-sm font-semibold text-white">Review Answers:</h3>
                        {test.questions.map((q, idx) => {
                            const r = results[q.id];
                            return (
                                <div key={q.id} className={`p-3 rounded-lg border ${r.state === "correct" ? "border-green-500/20 bg-green-500/5" : "border-red-500/20 bg-red-500/5"}`}>
                                    <p className="text-xs text-gray-300 mb-1"><span className="text-gray-500">Q{idx+1}.</span> {lang === "en" && mockTranslationsEN[q.id] ? mockTranslationsEN[q.id].question : q.question}</p>
                                    <p className="text-xs"><span className={r.state === "correct" ? "text-green-400" : "text-red-400"}>{r.state === "correct" ? "✓" : "✗"} Your: {r.selectedAnswer}</span> <span className="text-gray-500">| Correct: <span className="text-green-400">{q.correctAnswer}</span></span></p>
                                    <p className="text-xs text-gray-500 mt-1">{lang === "en" && mockTranslationsEN[q.id] ? mockTranslationsEN[q.id].explanation : q.explanation}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-4 lg:p-6">
            {/* Progress bar */}
            <div className="mb-6">
                <div className="flex justify-between text-xs mb-2">
                    <span className="text-gray-400">Question {currentQ + 1} / {test.questions.length}</span>
                    <span className="text-amber-400">{totalCorrect} correct • {totalAnswered} answered</span>
                </div>
                <div className="h-1.5 bg-[#1a1a2e] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-300" style={{ width: `${((currentQ + 1) / test.questions.length) * 100}%` }} />
                </div>
                {/* Question dots */}
                <div className="flex flex-wrap gap-1 mt-2">
                    {test.questions.map((q, idx) => {
                        const r = results[q.id];
                        let dotColor = "bg-[#2a2a3a]";
                        if (r.state === "correct") dotColor = "bg-green-500";
                        else if (r.state === "failed") dotColor = "bg-red-500";
                        else if (r.state === "first-wrong") dotColor = "bg-yellow-500";
                        return (
                            <button key={q.id} onClick={() => setCurrentQ(idx)}
                                className={`w-5 h-5 rounded text-[9px] font-medium flex items-center justify-center transition-all ${dotColor} ${idx === currentQ ? "ring-2 ring-amber-400 ring-offset-1 ring-offset-[#0a0a0f]" : ""} ${r.state === "correct" ? "text-white" : r.state === "failed" ? "text-white" : "text-gray-500"}`}>
                                {idx + 1}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
                <motion.div key={question.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                    <div className="bg-[#14141f] border border-[#2a2a3a] rounded-2xl p-6 card-glow">
                        <h3 className="text-base font-semibold text-white mb-1">Q{currentQ + 1}.</h3>
                        <p className="text-sm text-gray-200 mb-5">{lang === "en" && mockTranslationsEN[question.id] ? mockTranslationsEN[question.id].question : question.question}</p>

                        {/* Second chance hint */}
                        {qResult.state === "first-wrong" && (
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                                className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                                <p className="text-xs text-yellow-400 font-medium">{t("⚠️ Wrong answer! You have one more chance — select the correct answer!", "⚠️ Galat answer! Ek aur chance hai — sahi answer select karo!")}</p>
                            </motion.div>
                        )}

                        {/* Options */}
                        <div className="space-y-2.5">
                            {question.options.map(opt => {
                                const isDisabled = isAnswered || (qResult.state === "first-wrong" && opt.key === qResult.selectedAnswer);
                                return (
                                    <button key={opt.key} onClick={() => !isDisabled && handleAnswer(opt.key)} disabled={isDisabled}
                                        className={`w-full text-left p-3.5 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${getOptionStyle(opt.key)} ${isDisabled ? "cursor-not-allowed" : ""}`}>
                                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                                            (isAnswered && opt.key === question.correctAnswer) ? "bg-green-500 text-white" :
                                            (isAnswered && (opt.key === qResult.selectedAnswer || opt.key === qResult.firstAttempt) && opt.key !== question.correctAnswer) ? "bg-red-500/50 text-white" :
                                            "bg-[#1a1a2e]"
                                        }`}>
                                            {isAnswered && opt.key === question.correctAnswer ? <CheckCircle className="w-4 h-4" /> :
                                             isAnswered && (opt.key === qResult.selectedAnswer || opt.key === qResult.firstAttempt) && opt.key !== question.correctAnswer ? <XCircle className="w-4 h-4" /> :
                                             opt.key}
                                        </span>
                                        <span className="text-sm">{lang === "en" && mockTranslationsEN[question.id] ? (mockTranslationsEN[question.id].options.find(o => o.key === opt.key)?.text || opt.text) : opt.text}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Explanation after answered */}
                        <AnimatePresence>
                            {isAnswered && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4">
                                    <div className={`p-4 rounded-xl border ${qResult.state === "correct" ? "bg-green-500/5 border-green-500/20" : "bg-red-500/5 border-red-500/20"}`}>
                                        <div className="flex items-center gap-2 mb-1">
                                            {qResult.state === "correct" ? <CheckCircle className="w-4 h-4 text-green-400" /> : <XCircle className="w-4 h-4 text-red-400" />}
                                            <span className={`text-sm font-medium ${qResult.state === "correct" ? "text-green-400" : "text-red-400"}`}>
                                                {qResult.state === "correct" ? (qResult.attempts === 1 ? "✅ Correct! First try!" : "✅ Correct! (2nd attempt)") : "❌ Incorrect"}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-400 mt-1">{lang === "en" && mockTranslationsEN[question.id] ? mockTranslationsEN[question.id].explanation : question.explanation}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
                <button onClick={() => setCurrentQ(Math.max(0, currentQ - 1))} disabled={currentQ === 0}
                    className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-[#1a1a2e] disabled:opacity-30 transition-all">
                    ← Previous
                </button>
                {currentQ === test.questions.length - 1 ? (
                    <button onClick={() => setShowResults(true)}
                        className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-amber-500/25 transition-all">
                        View Results 🏆
                    </button>
                ) : (
                    <button onClick={() => setCurrentQ(Math.min(test.questions.length - 1, currentQ + 1))}
                        className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm text-amber-400 hover:bg-amber-500/10 transition-all">
                        Next <ArrowRight className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
}
