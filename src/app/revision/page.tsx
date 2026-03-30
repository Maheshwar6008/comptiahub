"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CourseLayout from "@/components/layout/CourseLayout";
import { ChevronDown, ChevronRight } from "lucide-react";

const sections = [
    { id: "mobile", title: "📱 Mobile Devices (15%)", color: "amber", items: [
        "RAM → SO-DIMM (laptop) | DIMM (desktop)", "DDR4 ≠ DDR3 ≠ DDR5 (physically different!)",
        "Storage: NVMe > SATA SSD > HDD (speed)", "M.2 2280 = most common laptop SSD (22mm × 80mm)",
        "Battery: Li-Ion (standard) | Li-Poly (premium) | Swelling = DANGER!",
        "Thunderbolt = USB-C shape + ⚡ symbol (Data+Display+Power)",
        "IMAP (993) = Sync all devices | POP3 (995) = Download & delete",
        "SMTP = Send email (25/587) | MDM = Remote wipe, lock, policies",
        "2.4 GHz = Range | 5 GHz = Speed | 6 GHz = Most speed",
        "Bluetooth: 10m (v4) | 40m (v5) | NFC: 4cm"
    ]},
    { id: "networking", title: "🌐 Networking (20%)", color: "blue", items: [
        "OSI (Bottom→Top): Please Do Not Throw Sausage Pizza Away",
        "Hub(L1) → Switch(L2,MAC) → Router(L3,IP)",
        "TCP = Reliable (SYN→SYN-ACK→ACK) | UDP = Fast (gaming, DNS)",
        "Ports: 22=SSH | 25=SMTP | 53=DNS | 80=HTTP | 443=HTTPS | 3389=RDP",
        "Secure: 587=SMTPS | 993=IMAPS | 995=POP3S | 636=LDAPS",
        "IPv4 = 32-bit | IPv6 = 128-bit",
        "Private: 10.x.x.x | 172.16-31.x.x | 192.168.x.x",
        "DHCP = DORA | DNS = Domain→IP | NAT = Private→Public IP",
        "Cables: Cat5e(1G) | Cat6(10G@55m) | Cat6a(10G@100m)",
        "WPA2=AES-CCMP | WPA3=SAE | WEP=NEVER!",
        "2.4GHz non-overlapping: channels 1, 6, 11"
    ]},
    { id: "hardware", title: "🖥️ Hardware (25%)", color: "purple", items: [
        "Motherboard: ATX > mATX > Mini-ITX", "UEFI = modern BIOS | CMOS = CR2032 | POST = self-test",
        "CPU socket MUST match motherboard", "Thermal paste = CPU↔Heatsink (pea-sized)",
        "DDR4 DIMM=288pin | DDR4 SO-DIMM=260pin",
        "RAID: 0=Speed | 1=Mirror(2) | 5=Parity(3 min) | 10=Both(4 min)",
        "PSU: 24-pin(mobo) | 8-pin(CPU) | 6/8-pin(GPU) | ⚠️ NEVER OPEN!",
        "80 PLUS: Bronze < Gold < Platinum < Titanium",
        "Laser 7 steps: People Can Eat Delicious Turkey For Christmas",
        "Display: VGA→DVI→HDMI(audio+video)→DisplayPort→USB-C"
    ]},
    { id: "cloud", title: "☁️ Virtualization & Cloud (11%)", color: "cyan", items: [
        "Type 1=Bare Metal (ESXi) | Type 2=Hosted (VirtualBox)",
        "Container=shared OS (Docker) | VM=full OS each",
        "IaaS=AWS EC2 | PaaS=Heroku | SaaS=Gmail,Office365",
        "Public | Private | Hybrid (most popular) | Community",
        "VDI = Virtual Desktop | Snapshot = VM state save"
    ]},
    { id: "troubleshoot", title: "🔧 Troubleshooting (29%)", color: "red", items: [
        "⭐ 6 Steps: I Eat Tasty Pizza Very Daily",
        "Identify → Theory → Test → Plan → Verify → Document",
        "BSOD: stop code → Safe Mode → sfc /scannow → chkdsk",
        "Boot fail: BIOS boot order → Startup Repair → Restore",
        "Network: ping 127.0.0.1 → gateway → 8.8.8.8 → domain",
        "Overheat: Clean fans + Thermal paste + Ventilation"
    ]},
    { id: "os", title: "💻 Operating Systems (28%)", color: "green", items: [
        "NTFS=permissions,encrypt | FAT32=4GB limit | exFAT=cross-platform",
        "Windows Home = NO BitLocker, Domain, Group Policy",
        "32-bit=max 4GB RAM | 64-bit=128GB+ RAM",
        "sfc /scannow=repair files | chkdsk /f /r=disk errors",
        "Linux: chmod 755=rwxr-xr-x | apt=Ubuntu | yum=RHEL",
        "macOS: FileVault=BitLocker | Time Machine=Backup",
        "Scripting: .bat(CMD) | .ps1(PowerShell) | .sh(Bash) | .py(Python)"
    ]},
    { id: "security", title: "🔒 Security (28%)", color: "orange", items: [
        "CIA: Confidentiality + Integrity + Availability",
        "Virus=user action | Worm=AUTO-spread | Ransomware=encrypt+pay",
        "Phishing=email | Vishing=voice | Smishing=SMS | Whaling=CEO",
        "MFA: Know+Have+Are (min 2 DIFFERENT categories!)",
        "Symmetric=1 key(AES) | Asymmetric=2 keys(RSA)",
        "WEP=NEVER | WPA2=AES(good) | WPA3=SAE(best)",
        "BitLocker=Win disk | EFS=file encrypt | FileVault=macOS",
        "Backup: Full | Incremental(since ANY) | Differential(since FULL)",
        "3-2-1: 3 copies, 2 media, 1 offsite",
        "⭐ Malware 7: Identify→Quarantine→Disable SR→Remediate→Schedule→Educate→Update"
    ]},
    { id: "ops", title: "📋 Operational Procedures (21%)", color: "yellow", items: [
        "Ticket: New→In Progress→Pending→Resolved→Closed",
        "Change: Request→Approve→Plan(rollback!)→Implement→Verify→Document",
        "ESD: wrist strap, anti-static mat, 40-60% humidity",
        "⚠️ NEVER OPEN PSU — lethal capacitors!",
        "RTO=recovery time | RPO=data loss ok | MTTR=repair time",
        "Remote: RDP(3389) | VNC(5900) | SSH(22)",
        "E-waste: proper recycling | SDS=Safety Data Sheet"
    ]}
];

const ports = [
    { port: "20/21", protocol: "FTP" }, { port: "22", protocol: "SSH" }, { port: "23", protocol: "Telnet" },
    { port: "25", protocol: "SMTP" }, { port: "53", protocol: "DNS" }, { port: "67/68", protocol: "DHCP" },
    { port: "80", protocol: "HTTP" }, { port: "110", protocol: "POP3" }, { port: "143", protocol: "IMAP" },
    { port: "161/162", protocol: "SNMP" }, { port: "389", protocol: "LDAP" }, { port: "443", protocol: "HTTPS" },
    { port: "445", protocol: "SMB" }, { port: "587", protocol: "SMTPS" }, { port: "636", protocol: "LDAPS" },
    { port: "993", protocol: "IMAPS" }, { port: "995", protocol: "POP3S" }, { port: "3389", protocol: "RDP" },
    { port: "5900", protocol: "VNC" },
];

const colorMap: Record<string, string> = {
    amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    red: "text-red-400 bg-red-500/10 border-red-500/20",
    green: "text-green-400 bg-green-500/10 border-green-500/20",
    orange: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    yellow: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
};

function RevisionContent() {
    const [expanded, setExpanded] = useState<Set<string>>(new Set(["mobile"]));

    const toggle = (id: string) => {
        setExpanded(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id); else next.add(id);
            return next;
        });
    };

    return (
        <div className="page-transition max-w-4xl mx-auto px-4 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">🧠 Final Revision Master Sheet</h1>
                <p className="text-gray-400 text-sm">Exam ke 1 din pehle padhne ke liye — ultra-short notes, sirf KEY POINTS!</p>
            </div>

            {/* Quick Reference Sections */}
            <div className="space-y-3 mb-8">
                {sections.map((section, idx) => {
                    const isOpen = expanded.has(section.id);
                    const colors = colorMap[section.color] || colorMap.amber;
                    return (
                        <motion.div key={section.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                            className="bg-[#14141f] border border-[#2a2a3a] rounded-xl overflow-hidden">
                            <button onClick={() => toggle(section.id)} className="w-full flex items-center justify-between p-4 hover:bg-[#1a1a2e] transition-colors">
                                <h3 className="text-sm font-semibold text-white">{section.title}</h3>
                                {isOpen ? <ChevronDown className="w-4 h-4 text-gray-500" /> : <ChevronRight className="w-4 h-4 text-gray-500" />}
                            </button>
                            {isOpen && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-4 pb-4">
                                    <div className="space-y-1.5">
                                        {section.items.map((item, i) => (
                                            <div key={i} className={`text-xs px-3 py-1.5 rounded-lg border ${colors}`}>{item}</div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* Port Numbers */}
            <div className="bg-[#14141f] border border-[#2a2a3a] rounded-xl p-5 mb-8">
                <h3 className="text-sm font-semibold text-white mb-3">🔢 Port Numbers — Quick Reference</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                    {ports.map(p => (
                        <div key={p.port} className="flex items-center gap-2 bg-[#1a1a2e] rounded-lg px-3 py-1.5">
                            <span className="text-xs font-mono font-bold text-amber-400 w-12">{p.port}</span>
                            <span className="text-xs text-gray-400">{p.protocol}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Exam Tips */}
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-white mb-3">🏆 Exam Day Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-300">
                    <div className="space-y-1.5">
                        <p className="text-amber-400 font-medium">⏰ Before Exam:</p>
                        <p>• 8 hours sleep, halka naashta, valid ID, 15 min early</p>
                        <p>• Relax — aapne preparation ki hai! 💪</p>
                    </div>
                    <div className="space-y-1.5">
                        <p className="text-amber-400 font-medium">📝 During Exam:</p>
                        <p>• PBQs SKIP karo pehle → MCQs solve → PBQs baad mein</p>
                        <p>• 1 min/question | FLAG difficult ones | NEVER leave blank</p>
                    </div>
                    <div className="space-y-1.5">
                        <p className="text-amber-400 font-medium">🎯 Strategy:</p>
                        <p>• "BEST" answer = most professional/secure</p>
                        <p>• "FIRST" step = usually Identify or Ask</p>
                    </div>
                    <div className="space-y-1.5">
                        <p className="text-amber-400 font-medium">💡 Remember:</p>
                        <p>• Trust first instinct (usually correct!)</p>
                        <p>• Eliminate obviously wrong answers first</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function RevisionPage() {
    return (
        <CourseLayout>
            <RevisionContent />
        </CourseLayout>
    );
}
