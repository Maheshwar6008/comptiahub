"use client";
import React, { createContext, useContext, useState, useCallback, useEffect, useMemo } from "react";
import { courseData, Module, Lesson } from "./data/course-data";

interface CourseContextType {
    currentModule: Module | null;
    currentLesson: Lesson | null;
    setCurrentLesson: (moduleId: string, lessonId: string) => void;
    completedLessons: Set<string>;
    toggleLessonComplete: (lessonId: string) => void;
    trainerMode: boolean;
    toggleTrainerMode: () => void;
    searchQuery: string;
    setSearchQuery: (q: string) => void;
    searchResults: { module: Module; lesson: Lesson }[];
    nextLesson: () => void;
    prevLesson: () => void;
    hasNext: boolean;
    hasPrev: boolean;
    progress: number;
    totalLessons: number;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export function CourseProvider({ children }: { children: React.ReactNode }) {
    const [currentModuleId, setCurrentModuleId] = useState<string | null>(null);
    const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
    const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
    const [trainerMode, setTrainerMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        try {
            const saved = localStorage.getItem("comptia-completedLessons");
            if (saved) setCompletedLessons(new Set(JSON.parse(saved)));
            const tm = localStorage.getItem("comptia-trainerMode");
            if (tm) setTrainerMode(JSON.parse(tm));
        } catch {}
    }, []);

    useEffect(() => {
        try { localStorage.setItem("comptia-completedLessons", JSON.stringify([...completedLessons])); } catch {}
    }, [completedLessons]);

    useEffect(() => {
        try { localStorage.setItem("comptia-trainerMode", JSON.stringify(trainerMode)); } catch {}
    }, [trainerMode]);

    const currentModule = useMemo(() => courseData.modules.find(m => m.id === currentModuleId) || null, [currentModuleId]);
    const currentLesson = useMemo(() => currentModule?.lessons.find(l => l.id === currentLessonId) || null, [currentModule, currentLessonId]);

    const allLessons = useMemo(() => {
        const list: { module: Module; lesson: Lesson }[] = [];
        courseData.modules.forEach(m => m.lessons.forEach(l => list.push({ module: m, lesson: l })));
        return list;
    }, []);

    const totalLessons = allLessons.length;
    const progress = completedLessons.size;

    const currentIndex = useMemo(() => {
        if (!currentLessonId) return -1;
        return allLessons.findIndex(x => x.lesson.id === currentLessonId);
    }, [allLessons, currentLessonId]);

    const hasNext = currentIndex < allLessons.length - 1 && currentIndex >= 0;
    const hasPrev = currentIndex > 0;

    const setCurrentLesson = useCallback((moduleId: string, lessonId: string) => {
        setCurrentModuleId(moduleId);
        setCurrentLessonId(lessonId);
    }, []);

    const toggleLessonComplete = useCallback((lessonId: string) => {
        setCompletedLessons(prev => {
            const next = new Set(prev);
            if (next.has(lessonId)) next.delete(lessonId); else next.add(lessonId);
            return next;
        });
    }, []);

    const toggleTrainerMode = useCallback(() => setTrainerMode(p => !p), []);

    const nextLesson = useCallback(() => {
        if (hasNext) {
            const next = allLessons[currentIndex + 1];
            setCurrentModuleId(next.module.id);
            setCurrentLessonId(next.lesson.id);
        }
    }, [hasNext, allLessons, currentIndex]);

    const prevLesson = useCallback(() => {
        if (hasPrev) {
            const prev = allLessons[currentIndex - 1];
            setCurrentModuleId(prev.module.id);
            setCurrentLessonId(prev.lesson.id);
        }
    }, [hasPrev, allLessons, currentIndex]);

    const searchResults = useMemo(() => {
        if (!searchQuery.trim()) return [];
        const q = searchQuery.toLowerCase();
        return allLessons.filter(({ lesson }) =>
            lesson.title.toLowerCase().includes(q) ||
            lesson.content.explanation.some(e => e.toLowerCase().includes(q)) ||
            lesson.content.keyPoints.some(k => k.toLowerCase().includes(q))
        );
    }, [searchQuery, allLessons]);

    return (
        <CourseContext.Provider value={{
            currentModule, currentLesson, setCurrentLesson,
            completedLessons, toggleLessonComplete,
            trainerMode, toggleTrainerMode,
            searchQuery, setSearchQuery, searchResults,
            nextLesson, prevLesson, hasNext, hasPrev,
            progress, totalLessons
        }}>
            {children}
        </CourseContext.Provider>
    );
}

export function useCourse() {
    const ctx = useContext(CourseContext);
    if (!ctx) throw new Error("useCourse must be inside CourseProvider");
    return ctx;
}
