"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courseData } from "@/lib/data/course-data";
import { useCourse } from "@/lib/course-context";
import {
    Smartphone, Globe, Monitor, Cloud, Wrench, Laptop, Shield, Bug,
    ClipboardList, ChevronDown, ChevronRight, Search, CheckCircle,
    Circle, X, Menu, BookOpen, GraduationCap
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
    Smartphone, Globe, Monitor, Cloud, Wrench, Laptop, Shield, Bug, ClipboardList, BookOpen, GraduationCap
};

export default function Sidebar() {
    const { currentModule, currentLesson, setCurrentLesson, completedLessons, searchQuery, setSearchQuery, searchResults, progress, totalLessons } = useCourse();
    const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set(currentModule ? [currentModule.id] : []));
    const [mobileOpen, setMobileOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const toggleModule = (id: string) => {
        setExpandedModules(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id); else next.add(id);
            return next;
        });
    };

    const handleLessonClick = (moduleId: string, lessonId: string) => {
        setCurrentLesson(moduleId, lessonId);
        setMobileOpen(false);
    };

    const progressPercent = totalLessons > 0 ? Math.round((progress / totalLessons) * 100) : 0;

    const sidebarContent = (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-4 border-b border-[#2a2a3a]">
                <Link href="/course" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-amber-500/20">
                        A+
                    </div>
                    <div>
                        <h1 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">CompTIA A+</h1>
                        <p className="text-[10px] text-gray-500">Learning Hub</p>
                    </div>
                </Link>
            </div>

            {/* Progress */}
            <div className="px-4 py-3 border-b border-[#2a2a3a]">
                <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-amber-400 font-medium">{progress}/{totalLessons} ({progressPercent}%)</span>
                </div>
                <div className="h-1.5 bg-[#1a1a2e] rounded-full overflow-hidden">
                    <motion.div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" initial={{ width: 0 }} animate={{ width: `${progressPercent}%` }} transition={{ duration: 0.5 }} />
                </div>
            </div>

            {/* Search */}
            <div className="px-4 py-2 border-b border-[#2a2a3a]">
                <div className="relative">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                    <input
                        type="text" placeholder="Search lessons..."
                        value={searchQuery}
                        onChange={e => { setSearchQuery(e.target.value); setShowSearch(true); }}
                        onFocus={() => setShowSearch(true)}
                        className="w-full pl-8 pr-8 py-1.5 bg-[#1a1a2e] border border-[#2a2a3a] rounded-lg text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50"
                    />
                    {searchQuery && (
                        <button onClick={() => { setSearchQuery(""); setShowSearch(false); }} className="absolute right-2 top-1/2 -translate-y-1/2">
                            <X className="w-3.5 h-3.5 text-gray-500 hover:text-white" />
                        </button>
                    )}
                </div>
                {showSearch && searchResults.length > 0 && (
                    <div className="mt-2 max-h-48 overflow-y-auto space-y-1">
                        {searchResults.map(({ module, lesson }) => (
                            <button key={lesson.id} onClick={() => { handleLessonClick(module.id, lesson.id); setShowSearch(false); setSearchQuery(""); }}
                                className="w-full text-left px-2 py-1.5 text-xs rounded bg-[#1a1a2e] hover:bg-amber-500/10 text-gray-300 hover:text-amber-400 transition-colors">
                                <span className="text-gray-500">{module.title} → </span>{lesson.title}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Quick Links */}
            <div className="px-4 py-2 border-b border-[#2a2a3a] flex gap-1">
                <Link href="/mock-test" className="flex-1 text-[10px] py-1.5 px-2 bg-amber-500/10 text-amber-400 rounded-md text-center hover:bg-amber-500/20 transition-colors font-medium" onClick={() => setMobileOpen(false)}>
                    📝 Mock Tests
                </Link>
                <Link href="/case-studies" className="flex-1 text-[10px] py-1.5 px-2 bg-orange-500/10 text-orange-400 rounded-md text-center hover:bg-orange-500/20 transition-colors font-medium" onClick={() => setMobileOpen(false)}>
                    🛠️ Cases
                </Link>
                <Link href="/revision" className="flex-1 text-[10px] py-1.5 px-2 bg-yellow-500/10 text-yellow-400 rounded-md text-center hover:bg-yellow-500/20 transition-colors font-medium" onClick={() => setMobileOpen(false)}>
                    🧠 Revision
                </Link>
            </div>

            {/* Modules */}
            <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
                {courseData.modules.map((mod, idx) => {
                    const Icon = iconMap[mod.icon] || BookOpen;
                    const isExpanded = expandedModules.has(mod.id);
                    const modLessonsCompleted = mod.lessons.filter(l => completedLessons.has(l.id)).length;
                    const allDone = modLessonsCompleted === mod.lessons.length && mod.lessons.length > 0;

                    return (
                        <div key={mod.id}>
                            <button onClick={() => toggleModule(mod.id)}
                                className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition-all duration-200 group text-xs ${currentModule?.id === mod.id ? "bg-amber-500/10 text-amber-400" : "text-gray-400 hover:bg-[#1a1a2e] hover:text-white"}`}>
                                <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 text-[10px] font-bold ${allDone ? "bg-green-500/20 text-green-400" : currentModule?.id === mod.id ? "bg-amber-500/20 text-amber-400" : "bg-[#1a1a2e] text-gray-500"}`}>
                                    {allDone ? <CheckCircle className="w-3.5 h-3.5" /> : <Icon className="w-3.5 h-3.5" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1">
                                        <span className="text-[10px] text-gray-600">M{idx + 1}</span>
                                        <span className="truncate font-medium">{mod.title}</span>
                                    </div>
                                    <span className="text-[10px] text-gray-600">{mod.part} • {modLessonsCompleted}/{mod.lessons.length}</span>
                                </div>
                                {isExpanded ? <ChevronDown className="w-3.5 h-3.5 flex-shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />}
                            </button>
                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden pl-6 space-y-0.5 mt-0.5">
                                        {mod.lessons.map(lesson => {
                                            const isActive = currentLesson?.id === lesson.id;
                                            const isDone = completedLessons.has(lesson.id);
                                            return (
                                                <button key={lesson.id} onClick={() => handleLessonClick(mod.id, lesson.id)}
                                                    className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-left transition-all text-xs ${isActive ? "bg-amber-500/15 text-amber-400" : "text-gray-500 hover:bg-[#1a1a2e] hover:text-gray-300"}`}>
                                                    {isDone ? <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" /> : <Circle className="w-3 h-3 flex-shrink-0" />}
                                                    <span className="truncate">{lesson.title}</span>
                                                </button>
                                            );
                                        })}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    return (
        <>
            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden fixed top-3 left-3 z-50 p-2 bg-[#14141f] border border-[#2a2a3a] rounded-lg text-white">
                <Menu className="w-5 h-5" />
            </button>

            {/* Mobile overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="lg:hidden fixed inset-0 bg-black/60 z-40" />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside className={`fixed lg:static top-0 left-0 h-screen w-72 bg-[#0f0f17] border-r border-[#2a2a3a] z-50 transition-transform lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {sidebarContent}
            </aside>
        </>
    );
}
