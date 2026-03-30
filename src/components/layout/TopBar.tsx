"use client";
import React from "react";
import { useCourse } from "@/lib/course-context";
import { ChevronLeft, ChevronRight, GraduationCap, Home } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
    const { currentModule, currentLesson, trainerMode, toggleTrainerMode, nextLesson, prevLesson, hasNext, hasPrev } = useCourse();

    return (
        <header className="sticky top-0 z-30 bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#2a2a3a] px-4 lg:px-6 py-2.5">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0 ml-10 lg:ml-0">
                    <Link href="/course" className="text-gray-500 hover:text-amber-400 transition-colors">
                        <Home className="w-4 h-4" />
                    </Link>
                    {currentModule && (
                        <>
                            <span className="text-gray-600 text-xs">/</span>
                            <span className="text-gray-400 text-xs truncate max-w-[120px]">{currentModule.title}</span>
                        </>
                    )}
                    {currentLesson && (
                        <>
                            <span className="text-gray-600 text-xs">/</span>
                            <span className="text-amber-400 text-xs truncate max-w-[200px] font-medium">{currentLesson.title}</span>
                        </>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={prevLesson} disabled={!hasPrev}
                        className="p-1.5 rounded-lg hover:bg-[#1a1a2e] text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button onClick={nextLesson} disabled={!hasNext}
                        className="p-1.5 rounded-lg hover:bg-[#1a1a2e] text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                    <button onClick={toggleTrainerMode}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${trainerMode ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" : "bg-[#1a1a2e] text-gray-400 border border-[#2a2a3a] hover:text-white"}`}>
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Trainer</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
