"use client";
import React from "react";
import { useParams } from "next/navigation";
import CourseLayout from "@/components/layout/CourseLayout";
import MockTestEngine from "@/components/ui/MockTestEngine";
import { mockTests } from "@/lib/data/mock-test-data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function TestContent() {
    const params = useParams();
    const testId = params.testId as string;
    const test = mockTests.find(t => t.id === testId);

    if (!test) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-center p-8">
                    <h2 className="text-xl font-semibold text-white mb-2">Test Not Found</h2>
                    <Link href="/mock-test" className="text-amber-400 text-sm hover:underline">← Back to Mock Tests</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="py-4">
            <div className="max-w-3xl mx-auto px-4 lg:px-6 mb-4">
                <Link href="/mock-test" className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-amber-400 transition-colors">
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Mock Tests
                </Link>
            </div>
            <MockTestEngine test={test} />
        </div>
    );
}

export default function MockTestPageClient() {
    return (
        <CourseLayout>
            <TestContent />
        </CourseLayout>
    );
}
