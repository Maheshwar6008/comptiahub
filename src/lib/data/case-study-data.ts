export interface CaseStudy {
    id: string;
    title: string;
    emoji: string;
    problem: string;
    user: string;
    analysis: string[];
    steps: { title: string; detail: string }[];
    resolution: string;
    keyLearning: string;
    prevention?: string[];
}

export const caseStudies: CaseStudy[] = [
    {
        id: "case-1", title: "User Ka Laptop Slow Hai", emoji: "🐢",
        problem: "Priya (Marketing team) ne complaint kiya: 'Mera laptop bahut slow ho gaya hai, kuch bhi khulne mein 2-3 minute lag raha hai.'",
        user: "Priya — Marketing Team",
        analysis: ["Too many startup programs", "Low RAM / RAM issue", "HDD instead of SSD (disk bottleneck)", "Malware infection", "Temp files / disk full", "Windows updates pending", "Background processes consuming resources"],
        steps: [
            { title: "Task Manager Check", detail: "Ctrl+Shift+Esc → Performance Tab: CPU 15% (OK), RAM 92% (HIGH!), Disk 100% (CRITICAL!)" },
            { title: "Theory", detail: "HDD 100% + RAM 92% = HDD bottleneck + low RAM" },
            { title: "Quick Fixes", detail: "Disable startup programs, clean temp files (cleanmgr), close unnecessary programs" },
            { title: "Long-term Solution", detail: "SSD Upgrade (MOST EFFECTIVE!), RAM upgrade 4GB → 16GB, Windows Updates, Antivirus scan" },
            { title: "Verify", detail: "Laptop now boots in 15 seconds (was 3 minutes!)" },
            { title: "Document", detail: "Ticket closed with resolution: SSD upgrade + RAM upgrade" }
        ],
        resolution: "SSD upgrade + RAM upgrade. Boot time reduced from 3 minutes to 15 seconds!",
        keyLearning: "HDD → SSD upgrade sabse bada performance improvement hai!"
    },
    {
        id: "case-2", title: "WiFi Connect Nahi Ho Raha", emoji: "📶",
        problem: "Rahul (Accounts team): 'Mera laptop Wi-Fi se connect nahi ho raha. Baaki logon ka chal raha hai.'",
        user: "Rahul — Accounts Team",
        analysis: ["Wi-Fi adapter disabled", "Airplane mode ON", "Driver issue", "IP conflict", "Saved password wrong", "MAC filtering"],
        steps: [
            { title: "Basic Checks", detail: "Airplane mode OFF ✅, Wi-Fi toggle ON ✅, Office Wi-Fi visible? ❌ NOT showing!" },
            { title: "Device Manager Check", detail: "Network Adapters → Wi-Fi adapter has ⚠️ Yellow triangle = Driver problem!" },
            { title: "Driver Fix", detail: "Right-click → Update Driver → Search automatically. If no update: Uninstall → Restart → Auto reinstall" },
            { title: "Verify", detail: "Wi-Fi networks visible ✅, Connected to office network ✅, ping google.com ✅" }
        ],
        resolution: "Wi-Fi driver was corrupt (possibly after Windows update). Driver reinstall fixed the issue.",
        keyLearning: "Device Manager yellow triangle = driver problem. Reinstall driver is often the fix."
    },
    {
        id: "case-3", title: "Printer Kaam Nahi Kar Raha", emoji: "🖨️",
        problem: "Finance team ka shared printer print nahi kar raha — 5 employees affected.",
        user: "Finance Team (5 users)",
        analysis: ["Printer offline", "Paper jam", "Toner empty", "Network cable disconnected", "Print spooler stuck", "Driver issue"],
        steps: [
            { title: "Scope Identification", detail: "Nobody can print → Printer-side issue (not individual)" },
            { title: "Physical Check", detail: "Paper ✅, Toner ✅, Power ✅, Network cable ⚠️ LOOSE!" },
            { title: "Fix", detail: "Network cable properly connected, printer restarted, test page printed ✅" },
            { title: "Root Cause", detail: "Cleaning staff accidentally disconnected cable during night cleaning" }
        ],
        resolution: "Loose network cable. Properly reconnected and tested.",
        keyLearning: "Always check PHYSICAL connections first — cables, power, paper. Simple things solve most problems!",
        prevention: ["Cable management — route cables neatly", "Label all cables", "Secure connections with cable management clips"]
    },
    {
        id: "case-4", title: "Computer Start Nahi Ho Raha", emoji: "💀",
        problem: "Amit ka desktop ON hi nahi ho raha — power button dabane pe kuch nahi hota.",
        user: "Amit — IT Department",
        analysis: ["Power cable unplugged", "Surge protector OFF", "PSU rear switch OFF", "PSU dead", "Front panel connectors loose", "Outlet not working"],
        steps: [
            { title: "Power Cable", detail: "Plugged in? YES ✅" },
            { title: "Surge Protector", detail: "Turned ON? YES ✅" },
            { title: "PSU Rear Switch", detail: "⚠️ PSU back switch was OFF! Someone accidentally flipped it." },
            { title: "Fix", detail: "Switched PSU to ON → Computer started normally!" },
            { title: "Verify", detail: "Full boot, all peripherals working ✅" }
        ],
        resolution: "PSU rear switch was accidentally turned OFF. Flipped to ON — problem solved!",
        keyLearning: "Always check the SIMPLEST things first! Power switch, cables, plugs — before assuming hardware failure."
    },
    {
        id: "case-5", title: "Blue Screen (BSOD)", emoji: "💙",
        problem: "Sneha ka laptop random BSOD — din mein 2-3 baar crash. Stop Code: KERNEL_DATA_INPAGE_ERROR",
        user: "Sneha — Design Team",
        analysis: ["Storage device failure", "Corrupt system files", "RAM issue", "Driver conflict", "Overheating"],
        steps: [
            { title: "Research Stop Code", detail: "KERNEL_DATA_INPAGE_ERROR = Storage device read/write error" },
            { title: "Disk Health Check", detail: "chkdsk C: /f /r + wmic diskdrive get status → Result: 'Pred Fail' = Drive dying! 🔴" },
            { title: "Immediate Backup", detail: "All important files backed up to USB and cloud immediately" },
            { title: "Drive Replacement", detail: "New SSD installed → Windows fresh install → Data restored → Apps reinstalled" },
            { title: "Verify", detail: "No BSOD in 3 days → Issue resolved ✅" }
        ],
        resolution: "Hard drive was failing (SMART predicted failure). Replaced with SSD, fresh Windows install.",
        keyLearning: "BSOD stop codes tell you WHERE the problem is. ALWAYS backup before the drive completely dies!"
    },
    {
        id: "case-6", title: "Virus Aa Gaya Hai", emoji: "🦠",
        problem: "Receptionist Pooja ka computer: Pop-ups, browser homepage changed, unknown toolbar installed.",
        user: "Pooja — Reception",
        analysis: ["Adware infection", "Browser hijacker", "Potentially unwanted programs (PUPs)", "Suspicious downloads"],
        steps: [
            { title: "1. Identify", detail: "Symptoms: Adware + Browser Hijacker" },
            { title: "2. Quarantine", detail: "Network cable removed, Wi-Fi disconnected" },
            { title: "3. Disable System Restore", detail: "System Properties → System Restore OFF (malware can hide in restore points)" },
            { title: "4. Remediate", detail: "Safe Mode → Windows Defender Full Scan → Malwarebytes scan → Remove threats → Browser reset → Uninstall suspicious programs" },
            { title: "5. Enable Protection", detail: "System Restore ON, weekly scan scheduled" },
            { title: "6. Educate User", detail: "Taught Pooja: don't download from unknown sites, don't click suspicious links" },
            { title: "7. Update", detail: "Windows Update ON, Defender definitions updated, browser updated" }
        ],
        resolution: "Adware removed using CompTIA 7-step malware removal process. Browser reset to defaults.",
        keyLearning: "Follow the 7-step process: Identify → Quarantine → Disable SR → Remediate → Schedule → Educate → Update"
    },
    {
        id: "case-7", title: "Email Nahi Ja Rahi", emoji: "📧",
        problem: "HR Manager ke phone se office emails send nahi ho rahe. Receive ho rahe hain but send fails.",
        user: "HR Manager",
        analysis: ["SMTP server misconfigured", "Port blocked", "Authentication issue", "Network connectivity", "Server outage"],
        steps: [
            { title: "Diagnosis", detail: "Receive working ✅ (IMAP OK) → Send failing ❌ (SMTP issue)" },
            { title: "Check SMTP Settings", detail: "Current: Port 25 (WRONG!) → ISP blocking port 25 for spam prevention" },
            { title: "Fix", detail: "Changed to Port 587 (TLS/STARTTLS), enabled TLS encryption" },
            { title: "Verify", detail: "Test email sent successfully ✅" }
        ],
        resolution: "SMTP port was 25 (blocked by ISP). Changed to port 587 with TLS encryption.",
        keyLearning: "SMTP port 25 is often blocked by ISPs. Use port 587 with TLS for secure email sending."
    },
    {
        id: "case-8", title: "Password Bhool Gaya", emoji: "🔑",
        problem: "Intern Riya ne Windows password bhool gaya. Important presentation aaj deni hai!",
        user: "Riya — Intern",
        analysis: ["Domain-joined vs Local account", "Microsoft account linked?", "Password reset disk?", "Admin account available?"],
        steps: [
            { title: "Check Account Type", detail: "Domain-joined PC (office computer)" },
            { title: "Contact IT Admin", detail: "Admin resets password in Active Directory" },
            { title: "User Login", detail: "Riya logs in with new temp password" },
            { title: "Force Change", detail: "First login → must change password immediately" },
            { title: "Prevention Setup", detail: "Microsoft account linked, password manager recommended" }
        ],
        resolution: "IT Admin reset password via Active Directory. User changed password on first login.",
        keyLearning: "Domain accounts: Admin resets in AD. Local accounts: Microsoft account or recovery options. Always have a password reset plan!"
    },
    {
        id: "case-9", title: "New Employee Setup", emoji: "👤",
        problem: "Naye employee Monday ko join kar rahe hain. Complete IT setup karna hai — hardware to access.",
        user: "New Joinee (Onboarding)",
        analysis: ["Hardware setup", "Software installation", "Account creation", "Security configuration", "Documentation"],
        steps: [
            { title: "Hardware", detail: "Laptop unbox, monitor+keyboard+mouse connect, docking station setup, headset provide" },
            { title: "Software", detail: "Windows image, domain join, Office 365, company apps, antivirus verify, VPN client" },
            { title: "Accounts", detail: "AD account, email, department groups, shared folders, printer access, MFA enable" },
            { title: "Security", detail: "BitLocker enable, temp password (force change), MDM enroll, policies verify" },
            { title: "Documentation", detail: "Asset tag, inventory update, welcome packet, quick training" }
        ],
        resolution: "Complete onboarding checklist followed — employee ready to work on Day 1!",
        keyLearning: "Have a standard onboarding checklist. Systematic approach ensures nothing is missed."
    },
    {
        id: "case-10", title: "Hard Drive Crash — No Backup", emoji: "💔",
        problem: "Graphic designer Meera ki hard drive crash. 6 months ka design work — koi backup nahi tha.",
        user: "Meera — Design Team",
        analysis: ["Software recovery possible?", "Professional recovery needed?", "Physical damage assessment", "Backup strategy implementation"],
        steps: [
            { title: "Assessment", detail: "Drive making clicking sounds — physical failure, not spinning properly" },
            { title: "Software Recovery", detail: "Connected as external drive — partial files recovered using R-Studio (40% success)" },
            { title: "Professional Recovery", detail: "Sent to clean room service — additional 30% recovered. Cost: ₹35,000" },
            { title: "Prevention Implementation", detail: "OneDrive sync enabled, weekly external backup, 3-2-1 rule, SMART monitoring alerts" },
            { title: "User Training", detail: "Save to cloud always, not just local. 'Backup nahi hai toh data nahi hai!'" }
        ],
        resolution: "Partial data recovered (70%). ₹35,000 spent on professional recovery. 3-2-1 backup implemented.",
        keyLearning: "'Backup nahi hai toh data nahi hai!' Always assume drives WILL fail — question is WHEN, not IF.",
        prevention: ["Automated cloud backup (OneDrive/Google Drive)", "Weekly external drive backup", "3-2-1 Rule: 3 copies, 2 media, 1 offsite", "SMART disk monitoring", "Regular user training"]
    }
];
