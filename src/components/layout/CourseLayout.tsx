"use client";
import React from "react";
import { CourseProvider } from "@/lib/course-context";
import { LanguageProvider } from "@/lib/language-context";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function CourseLayout({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <CourseProvider>
                <div className="flex h-screen overflow-hidden bg-[#0a0a0f]">
                    <Sidebar />
                    <div className="flex-1 flex flex-col overflow-hidden">
                        <TopBar />
                        <main className="flex-1 overflow-y-auto">
                            {children}
                        </main>
                    </div>
                </div>
            </CourseProvider>
        </LanguageProvider>
    );
}
