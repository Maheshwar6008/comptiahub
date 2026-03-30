"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { courseData } from "@/lib/data/course-data";
import { LanguageProvider, useLanguage } from "@/lib/language-context";
import {
    BookOpen, Clock, Users, Award, ArrowRight, CheckCircle, Sparkles,
    Smartphone, Globe, Monitor, Cloud, Wrench, Laptop, Shield, Bug,
    ClipboardList, GraduationCap, ExternalLink
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    Smartphone, Globe, Monitor, Cloud, Wrench, Laptop, Shield, Bug, ClipboardList, BookOpen, GraduationCap
};

const whatYouLearnEN = [
    "Master laptop & mobile device hardware components and repair",
    "Configure and manage networking — TCP/IP, OSI, ports & protocols",
    "Build and troubleshoot PC hardware — CPU, RAM, storage, PSU",
    "Deploy virtualization & cloud computing — VMs, IaaS, SaaS",
    "Install and manage Operating Systems — Windows, Linux, macOS",
    "Implement cybersecurity — malware, encryption, firewalls, MFA",
];
const whatYouLearnHI = [
    "Laptop & mobile device hardware components aur repair seekhein",
    "Networking manage karein — TCP/IP, OSI, ports & protocols",
    "PC hardware build aur troubleshoot karein — CPU, RAM, storage, PSU",
    "Virtualization & Cloud Computing — VMs, IaaS, SaaS deploy karein",
    "Operating Systems install aur manage karein — Windows, Linux, macOS",
    "Cybersecurity implement karein — malware, encryption, firewalls, MFA",
];
const prereqEN = [
    "Basic computer knowledge", "Internet browsing experience",
    "Curiosity and willingness to learn", "No prior IT experience required!"
];
const prereqHI = [
    "Basic computer knowledge — ON/OFF karna aata ho", "Internet use karna aata ho",
    "Curiosity aur seekhne ki willingness", "No prior IT experience required!"
];

function LandingContent() {
    const { lang, toggleLang } = useLanguage();
    const t = (en: string, hi: string) => lang === "en" ? en : hi;
    const wyl = lang === "en" ? whatYouLearnEN : whatYouLearnHI;
    const prereqs = lang === "en" ? prereqEN : prereqHI;

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
            {/* Language Toggle - Fixed */}
            <button onClick={toggleLang}
                className="fixed top-4 right-4 z-50 flex items-center gap-1.5 px-3 py-1.5 bg-[#14141f] border border-[#2a2a3a] rounded-full text-xs font-medium hover:border-amber-500/50 transition-colors">
                🌐 {lang === "en" ? "Hinglish" : "English"}
            </button>

            {/* Hero */}
            <section className="relative min-h-[70vh] flex items-center justify-center text-center px-4">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10 max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 text-amber-400 text-xs font-medium rounded-full border border-amber-500/20 mb-6">
                        <Sparkles className="w-3.5 h-3.5" /> {t("Interactive Training Platform", "Interactive Training Platform")}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">CompTIA A+</h1>
                    <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto">
                        {t("Hardware, Networking & IT Support Certification for the Modern Technician",
                           "Hardware, Networking & IT Support Certification — Complete Study Guide")}
                    </p>
                    <div className="flex justify-center gap-8 mb-8">
                        <div className="text-center"><BookOpen className="w-5 h-5 text-amber-400 mx-auto mb-1" /><span className="text-white font-semibold text-sm">9 {t("Modules","Modules")}</span><br/><span className="text-gray-500 text-xs">Core 1 + Core 2</span></div>
                        <div className="text-center"><Users className="w-5 h-5 text-amber-400 mx-auto mb-1" /><span className="text-white font-semibold text-sm">16 {t("Lessons","Lessons")}</span><br/><span className="text-gray-500 text-xs">{t("In-depth coverage","Complete coverage")}</span></div>
                        <div className="text-center"><Clock className="w-5 h-5 text-amber-400 mx-auto mb-1" /><span className="text-white font-semibold text-sm">22 {t("Weeks","Weeks")}</span><br/><span className="text-gray-500 text-xs">{t("Recommended","Recommended")}</span></div>
                    </div>
                    <Link href="/course" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all text-sm">
                        ▶ {t("Start Learning", "Start Learning")} <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </section>

            {/* Trainer */}
            <section className="max-w-4xl mx-auto px-4 py-12">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-[#14141f] border border-[#2a2a3a] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-3xl flex-shrink-0">M</div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">{t("Your Trainer:", "Your Trainer:")}</p>
                        <h3 className="text-xl font-bold text-white">{courseData.trainer.name}</h3>
                        <p className="text-sm text-gray-400 mb-1">{courseData.trainer.title}</p>
                        <p className="text-sm text-gray-500 mb-3">{t("CompTIA A+ & IT Infrastructure Expert", "CompTIA A+ & IT Infrastructure Expert")}</p>
                        {courseData.trainer.linkedin && (
                            <a href={courseData.trainer.linkedin} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors">
                                <ExternalLink className="w-3.5 h-3.5" /> Connect on LinkedIn
                            </a>
                        )}
                    </div>
                </motion.div>
            </section>

            {/* What You'll Learn */}
            <section className="max-w-4xl mx-auto px-4 py-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">{t("What You'll Learn", "Aap Kya Seekhenge")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {wyl.map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                            className="bg-[#14141f] border border-[#2a2a3a] rounded-xl p-4 flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-300">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Prerequisites */}
            <section className="max-w-4xl mx-auto px-4 py-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{t("Prerequisites", "Prerequisites")}</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {prereqs.map((p, i) => (
                        <motion.span key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                            className="px-4 py-2 bg-[#14141f] border border-[#2a2a3a] rounded-full text-sm text-gray-400">{p}</motion.span>
                    ))}
                </div>
            </section>

            {/* Course Modules */}
            <section className="max-w-5xl mx-auto px-4 py-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">{t("Course Modules", "Course Modules")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {courseData.modules.map((mod, idx) => {
                        const Icon = iconMap[mod.icon] || BookOpen;
                        return (
                            <motion.div key={mod.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}>
                                <Link href="/course" className="block bg-[#14141f] border border-[#2a2a3a] rounded-xl p-5 hover:border-amber-500/30 transition-all group h-full">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400"><Icon className="w-4 h-4" /></div>
                                        <span className="text-xs text-gray-500">Module {idx + 1}</span>
                                    </div>
                                    <h3 className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors mb-1">{mod.title}</h3>
                                    <p className="text-xs text-gray-500 mb-3 line-clamp-2">{mod.description}</p>
                                    <div className="flex items-center justify-between text-xs text-gray-600">
                                        <span>{mod.lessons.length} {t("Lessons","Lessons")}</span>
                                        <ArrowRight className="w-3.5 h-3.5 group-hover:text-amber-400 transition-colors" />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-gradient-to-b from-[#14141f] to-[#0f0f17] border border-[#2a2a3a] rounded-2xl p-10">
                    <Award className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-3">{t("Prepare for CompTIA A+ Certification", "CompTIA A+ Certification ke liye Ready Ho Jaao")}</h2>
                    <p className="text-gray-400 text-sm max-w-lg mx-auto mb-6">
                        {t("This training aligns with CompTIA A+ Core 1 (220-1201) & Core 2 (220-1202). Master the concepts and gain hands-on experience to pass with confidence.",
                           "Yeh training CompTIA A+ Core 1 (220-1201) & Core 2 (220-1202) se aligned hai. Concepts master karein aur confidence ke saath exam pass karein.")}
                    </p>
                    <Link href="/course" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a2e] border border-[#2a2a3a] rounded-xl text-white text-sm font-medium hover:border-amber-500/50 transition-colors">
                        <GraduationCap className="w-4 h-4" /> {t("Begin Your Journey", "Apna Journey Shuru Karein")}
                    </Link>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#2a2a3a] py-6 text-center">
                <p className="text-xs text-gray-600">© 2026 Maheshwar. All rights reserved.</p>
                <p className="text-xs text-amber-400/60 mt-1">CompTIA A+ — Interactive Training Platform</p>
            </footer>
        </div>
    );
}

export default function HomePage() {
    return (
        <LanguageProvider>
            <LandingContent />
        </LanguageProvider>
    );
}
