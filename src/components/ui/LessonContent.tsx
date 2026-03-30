"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCourse } from "@/lib/course-context";
import { useLanguage } from "@/lib/language-context";
import { lessonTranslations } from "@/lib/data/translations-en";
import {
    CheckCircle, Circle, ChevronLeft, ChevronRight, BookOpen, Target, AlertTriangle,
    Award, Lightbulb, ArrowRight, GraduationCap, MessageCircle
} from "lucide-react";

export default function LessonContent() {
    const { currentModule, currentLesson, completedLessons, toggleLessonComplete, trainerMode, nextLesson, prevLesson, hasNext, hasPrev } = useCourse();
    const { lang } = useLanguage();

    if (!currentLesson || !currentModule) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-center p-8">
                    <BookOpen className="w-16 h-16 text-amber-500/30 mx-auto mb-4" />
                    <h2 className="text-xl font-semibold text-white mb-2">{lang === "en" ? "Select a Lesson" : "Lesson Select Karein"}</h2>
                    <p className="text-gray-500 text-sm">{lang === "en" ? "Choose a lesson from the sidebar to start learning" : "Sidebar se ek lesson choose karein"}</p>
                </div>
            </div>
        );
    }

    const isCompleted = completedLessons.has(currentLesson.id);
    const hiContent = currentLesson.content;
    const enContent = lessonTranslations[currentLesson.id];

    // Pick content based on language
    const explanation = lang === "en" && enContent ? enContent.explanation : hiContent.explanation;
    const keyPoints = lang === "en" && enContent ? enContent.keyPoints : hiContent.keyPoints;
    const whyItMatters = lang === "en" && enContent ? enContent.whyItMatters : hiContent.whyItMatters;
    const commonMistakes = lang === "en" && enContent ? enContent.commonMistakes : hiContent.commonMistakes;
    const interviewTips = lang === "en" && enContent ? enContent.interviewTips : hiContent.interviewTips;
    const examTips = lang === "en" && enContent ? enContent.examTips : hiContent.examTips;
    const trainerNotes = lang === "en" && enContent ? enContent.trainerNotes : currentLesson.trainerNotes;

    const archTitle = lang === "en" && enContent?.archTitle ? enContent.archTitle : hiContent.architecture?.title;
    const archSteps = hiContent.architecture ? hiContent.architecture.steps.map((s, i) => ({
        ...s,
        title: lang === "en" && enContent?.archSteps?.[i] ? enContent.archSteps[i].title : s.title,
        description: lang === "en" && enContent?.archSteps?.[i] ? enContent.archSteps[i].description : s.description,
    })) : undefined;

    const Section = ({ title, icon: Icon, color, children }: { title: string; icon: React.ElementType; color: string; children: React.ReactNode }) => (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <div className="flex items-center gap-2 mb-3">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${color}`}><Icon className="w-4 h-4" /></div>
                <h3 className="text-base font-semibold text-white">{title}</h3>
            </div>
            {children}
        </motion.div>
    );

    const t = (en: string, hi: string) => lang === "en" ? en : hi;

    return (
        <div className="page-transition max-w-4xl mx-auto px-4 lg:px-8 py-6">
            <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full font-medium">{currentModule.part}</span>
                    <span className="text-xs text-gray-500">{currentModule.title}</span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-gray-500">{currentLesson.duration}</span>
                </div>
                <h1 className="text-2xl font-bold text-white mb-1">{currentLesson.title}</h1>
            </div>

            <Section title={t("Concept Explanation", "Concept Explanation")} icon={BookOpen} color="bg-amber-500/20 text-amber-400">
                <div className="space-y-3">
                    {explanation.map((para, i) => (<p key={i} className="text-gray-300 text-sm leading-relaxed">{para}</p>))}
                </div>
            </Section>

            {archSteps && (
                <Section title={archTitle || ""} icon={Target} color="bg-purple-500/20 text-purple-400">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {archSteps.map((step) => (
                            <div key={step.step} className="bg-[#14141f] border border-[#2a2a3a] rounded-lg p-3 hover:border-amber-500/30 transition-colors">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-5 h-5 bg-amber-500/20 text-amber-400 rounded text-xs flex items-center justify-center font-bold">{step.step}</span>
                                    <span className="text-sm font-medium text-white">{step.title}</span>
                                </div>
                                <p className="text-xs text-gray-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            <Section title={t("Key Points", "Key Points")} icon={Lightbulb} color="bg-green-500/20 text-green-400">
                <div className="space-y-2">
                    {keyPoints.map((point, i) => (
                        <div key={i} className="flex items-start gap-2 bg-[#14141f] border border-[#2a2a3a] rounded-lg px-3 py-2">
                            <ArrowRight className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{point}</span>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title={t("Why It Matters", "Why It Matters")} icon={Target} color="bg-blue-500/20 text-blue-400">
                <p className="text-sm text-gray-300 bg-blue-500/5 border border-blue-500/20 rounded-lg p-3">{whyItMatters}</p>
            </Section>

            <Section title={t("Common Mistakes", "Common Mistakes")} icon={AlertTriangle} color="bg-red-500/20 text-red-400">
                <div className="space-y-2">
                    {commonMistakes.map((m, i) => (
                        <div key={i} className="flex items-start gap-2 bg-red-500/5 border border-red-500/10 rounded-lg px-3 py-2">
                            <AlertTriangle className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{m}</span>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title={t("Interview Tips", "Interview Tips")} icon={MessageCircle} color="bg-cyan-500/20 text-cyan-400">
                <div className="space-y-2">
                    {interviewTips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-2 bg-cyan-500/5 border border-cyan-500/10 rounded-lg px-3 py-2">
                            <MessageCircle className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{tip}</span>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title={t("Exam Tips", "Exam Tips")} icon={Award} color="bg-yellow-500/20 text-yellow-400">
                <div className="space-y-2">
                    {examTips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-2 bg-yellow-500/5 border border-yellow-500/10 rounded-lg px-3 py-2">
                            <Award className="w-3.5 h-3.5 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{tip}</span>
                        </div>
                    ))}
                </div>
            </Section>

            <AnimatePresence>
                {trainerMode && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                        <Section title={t("Trainer Notes", "Trainer Notes")} icon={GraduationCap} color="bg-amber-500/20 text-amber-400">
                            <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4 space-y-3">
                                <div><h4 className="text-xs font-semibold text-amber-400 mb-1">💬 {t("Talking Points", "Talking Points")}</h4><ul className="space-y-1">{trainerNotes.talkingPoints.map((p, i) => <li key={i} className="text-xs text-gray-400">• {p}</li>)}</ul></div>
                                <div><h4 className="text-xs font-semibold text-amber-400 mb-1">🌍 {t("Real Examples", "Real Examples")}</h4><ul className="space-y-1">{trainerNotes.realExamples.map((p, i) => <li key={i} className="text-xs text-gray-400">• {p}</li>)}</ul></div>
                                <div><h4 className="text-xs font-semibold text-amber-400 mb-1">❓ {t("Questions to Ask", "Questions to Ask")}</h4><ul className="space-y-1">{trainerNotes.questionsToAsk.map((p, i) => <li key={i} className="text-xs text-gray-400">• {p}</li>)}</ul></div>
                            </div>
                        </Section>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#2a2a3a]">
                <button onClick={prevLesson} disabled={!hasPrev} className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-[#1a1a2e] disabled:opacity-30 transition-all">
                    <ChevronLeft className="w-4 h-4" /> {t("Previous", "Previous")}
                </button>
                <button onClick={() => toggleLessonComplete(currentLesson.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${isCompleted ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-amber-500 text-white hover:bg-amber-600 shadow-lg shadow-amber-500/20"}`}>
                    {isCompleted ? <CheckCircle className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                    {isCompleted ? t("Completed ✓", "Completed ✓") : t("Mark Complete", "Mark Complete")}
                </button>
                <button onClick={nextLesson} disabled={!hasNext} className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-[#1a1a2e] disabled:opacity-30 transition-all">
                    {t("Next", "Next")} <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
