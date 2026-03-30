"use client";
import React from "react";
import { motion } from "framer-motion";
import CourseLayout from "@/components/layout/CourseLayout";
import LessonContent from "@/components/ui/LessonContent";
import { useCourse } from "@/lib/course-context";
import { courseData } from "@/lib/data/course-data";
import {
    Smartphone, Globe, Monitor, Cloud, Wrench, Laptop, Shield, Bug,
    ClipboardList, BookOpen, GraduationCap, Clock, Users, Award, ArrowRight,
    CheckCircle, Star, Cpu, Target
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    Smartphone, Globe, Monitor, Cloud, Wrench, Laptop, Shield, Bug, ClipboardList, BookOpen, GraduationCap
};

function CourseHome() {
    const { currentLesson, setCurrentLesson } = useCourse();

    if (currentLesson) {
        return <LessonContent />;
    }

    return (
        <div className="page-transition overflow-y-auto">
            {/* Hero */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
                <div className="relative max-w-5xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-medium rounded-full border border-amber-500/20">CompTIA A+ 2024</span>
                            <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-medium rounded-full border border-orange-500/20">Core 1 + Core 2</span>
                        </div>
                        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                            CompTIA A+ <span className="gradient-text">Learning Hub</span>
                        </h1>
                        <p className="text-gray-400 text-base lg:text-lg max-w-2xl mb-6">{courseData.subtitle}</p>
                        <div className="flex flex-wrap gap-6 mb-8">
                            {[
                                { icon: BookOpen, label: "9 Modules", value: "14+ Lessons" },
                                { icon: Clock, label: "Duration", value: courseData.duration },
                                { icon: Target, label: "Mock Tests", value: "3 Full Tests" },
                                { icon: Award, label: "Passing", value: "675-700/900" },
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <stat.icon className="w-4 h-4 text-amber-400" />
                                    <div>
                                        <div className="text-white text-sm font-semibold">{stat.value}</div>
                                        <div className="text-gray-500 text-xs">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => setCurrentLesson("module-1", "l-1-1")}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all text-sm">
                            Start Learning <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Exam Info */}
            <div className="max-w-5xl mx-auto px-4 lg:px-8 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="bg-[#14141f] border border-[#2a2a3a] rounded-xl p-5 card-glow">
                        <h3 className="text-sm font-semibold text-amber-400 mb-3 flex items-center gap-2"><Cpu className="w-4 h-4" /> Core 1 — 220-1201</h3>
                        <ul className="space-y-1.5 text-xs text-gray-400">
                            <li className="flex items-center gap-2"><span className="text-amber-400">15%</span> Mobile Devices</li>
                            <li className="flex items-center gap-2"><span className="text-amber-400">20%</span> Networking</li>
                            <li className="flex items-center gap-2"><span className="text-amber-400">25%</span> Hardware</li>
                            <li className="flex items-center gap-2"><span className="text-amber-400">11%</span> Virtualization & Cloud</li>
                            <li className="flex items-center gap-2"><span className="text-amber-400">29%</span> Troubleshooting</li>
                        </ul>
                        <div className="mt-3 pt-3 border-t border-[#2a2a3a] text-xs text-gray-500">90 questions • 90 minutes • Passing: 675/900</div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                        className="bg-[#14141f] border border-[#2a2a3a] rounded-xl p-5 card-glow">
                        <h3 className="text-sm font-semibold text-orange-400 mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> Core 2 — 220-1202</h3>
                        <ul className="space-y-1.5 text-xs text-gray-400">
                            <li className="flex items-center gap-2"><span className="text-orange-400">28%</span> Operating Systems</li>
                            <li className="flex items-center gap-2"><span className="text-orange-400">28%</span> Security</li>
                            <li className="flex items-center gap-2"><span className="text-orange-400">23%</span> Software Troubleshooting</li>
                            <li className="flex items-center gap-2"><span className="text-orange-400">21%</span> Operational Procedures</li>
                        </ul>
                        <div className="mt-3 pt-3 border-t border-[#2a2a3a] text-xs text-gray-500">90 questions • 90 minutes • Passing: 700/900</div>
                    </motion.div>
                </div>

                {/* Modules Grid */}
                <h2 className="text-xl font-bold text-white mb-4">📚 Course Modules</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                    {courseData.modules.map((mod, idx) => {
                        const Icon = iconMap[mod.icon] || BookOpen;
                        return (
                            <motion.div key={mod.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * idx }}
                                onClick={() => { if (mod.lessons.length > 0) setCurrentLesson(mod.id, mod.lessons[0].id); }}
                                className="bg-[#14141f] border border-[#2a2a3a] rounded-xl p-4 hover:border-amber-500/30 cursor-pointer transition-all group card-glow">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Module {idx + 1} • {mod.part}</div>
                                        <h3 className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">{mod.title}</h3>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mb-2 line-clamp-2">{mod.description}</p>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-gray-600">{mod.lessons.length} lessons</span>
                                    <span className="text-gray-600">{mod.duration}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Trainer */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                    className="bg-[#14141f] border border-[#2a2a3a] rounded-xl p-6 card-glow">
                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                            M
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-white">{courseData.trainer.name}</h3>
                            <p className="text-xs text-amber-400 mb-2">{courseData.trainer.title}</p>
                            <p className="text-xs text-gray-400">Comprehensive CompTIA A+ study material designed with real-world examples, Hinglish explanations, and interactive practice for exam success.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default function CoursePage() {
    return (
        <CourseLayout>
            <CourseHome />
        </CourseLayout>
    );
}
