import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CompTIA A+ Learning Hub — Core 1 & Core 2 Complete Guide",
    description: "Master CompTIA A+ (220-1201 & 220-1202) with interactive lessons, mock tests, case studies, and revision sheets. Beginner-friendly IT certification training.",
    keywords: "CompTIA A+, certification, IT support, hardware, networking, security, study guide",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="dark">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
