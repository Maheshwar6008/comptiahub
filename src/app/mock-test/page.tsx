"use client";
import React from "react";
import { motion } from "framer-motion";
import CourseLayout from "@/components/layout/CourseLayout";
import { mockTests } from "@/lib/data/mock-test-data";
import Link from "next/link";
import { FileQuestion, Clock, Target, Award, ArrowRight } from "lucide-react";

function MockTestHub() {
    return (
        <div className="page-transition max-w-4xl mx-auto px-4 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">📝 Mock Tests</h1>
                <p className="text-gray-400 text-sm">Real exam-style practice tests. Two chances per question — wrong answer pe ek aur try milega!</p>
            </div>

            <div className="grid gap-4">
                {mockTests.map((test, idx) => (
                    <motion.div key={test.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
                        <Link href={`/mock-test/${test.id}`}
                            className="block bg-[#14141f] border border-[#2a2a3a] rounded-xl p-6 hover:border-amber-500/30 transition-all group card-glow">
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">{test.title}</h2>
                                        <p className="text-sm text-gray-400 mt-1">{test.description}</p>
                                        <div className="flex flex-wrap gap-4 mt-3">
                                            <span className="flex items-center gap-1 text-xs text-gray-500"><FileQuestion className="w-3.5 h-3.5" /> {test.questions.length} Questions</span>
                                            <span className="flex items-center gap-1 text-xs text-gray-500"><Clock className="w-3.5 h-3.5" /> {test.timeMinutes} Minutes</span>
                                            <span className="flex items-center gap-1 text-xs text-gray-500"><Target className="w-3.5 h-3.5" /> Passing: {test.passingScore}/{test.totalMarks}</span>
                                        </div>
                                    </div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-amber-400 transition-colors mt-2" />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="mt-6 bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-amber-400 mb-2">💡 How The Two-Chance System Works</h3>
                <ol className="list-decimal list-inside space-y-1 text-xs text-gray-400">
                    <li>Select your answer for each question</li>
                    <li>If <span className="text-green-400">correct</span> → answer locks with explanation shown</li>
                    <li>If <span className="text-red-400">wrong</span> → you get a <span className="text-yellow-400">second chance</span> to pick the right answer</li>
                    <li>If wrong again → <span className="text-green-400">correct answer highlighted</span> with full explanation</li>
                    <li>View your complete score and review all answers at the end</li>
                </ol>
            </div>
        </div>
    );
}

export default function MockTestPage() {
    return (
        <CourseLayout>
            <MockTestHub />
        </CourseLayout>
    );
}
