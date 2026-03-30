// English translations for all course content
// Each key maps lesson ID → field → English text

export const lessonTranslations: Record<string, {
    explanation: string[];
    keyPoints: string[];
    whyItMatters: string;
    commonMistakes: string[];
    interviewTips: string[];
    examTips: string[];
    archTitle?: string;
    archSteps?: { title: string; description: string }[];
    trainerNotes: { talkingPoints: string[]; realExamples: string[]; questionsToAsk: string[] };
}> = {
    "l-1-1": {
        explanation: [
            "A laptop is a portable computer — all parts (monitor, keyboard, CPU, battery) fit in a compact body. As a technician, you must know what's inside.",
            "Inside a laptop you'll find: Display Panel (LCD/LED/OLED/IPS), Keyboard (scissor switch), Trackpad, System Board (motherboard — everything connects to it), RAM (SO-DIMM — small RAM sticks), Storage (SSD/HDD), Battery (Li-Ion/Li-Poly), Wireless Card (Wi-Fi + Bluetooth), Speakers, Webcam, and Biometric devices (fingerprint, IR camera).",
            "The biggest difference between desktop and laptop: most laptop parts are SOLDERED — permanently attached — so upgrading is difficult. Desktop parts are all removable and upgradeable."
        ],
        keyPoints: [
            "Display types: LCD (basic), LED (better), IPS (best angles), OLED (premium, deepest blacks), TN (fast, gaming)",
            "Display components: Backlight, Digitizer (touch), Wi-Fi antenna (inside screen bezel)",
            "RAM: SO-DIMM (laptop) vs DIMM (desktop) — DDR4 ≠ DDR3 physically",
            "Storage: HDD (slow) → SATA SSD (fast) → NVMe SSD (fastest, 3500+ MB/s)",
            "M.2 2280 = most common laptop SSD form factor (22mm × 80mm)",
            "Battery: Li-Ion (standard), Li-Poly (premium) — swelling = DANGER!",
            "Wireless card: Wi-Fi + Bluetooth combo, Mini PCIe or M.2 slot",
            "Biometrics: Fingerprint reader, IR Camera (Windows Hello)"
        ],
        archTitle: "Laptop Internal Architecture",
        archSteps: [
            { title: "Display", description: "LCD/LED/OLED + digitizer + antenna" },
            { title: "Input", description: "Keyboard + Trackpad + Biometrics" },
            { title: "Motherboard", description: "CPU + RAM + Storage + Wi-Fi connected" },
            { title: "Power", description: "Battery (Li-Ion) + AC adapter" }
        ],
        whyItMatters: "Laptop repair and troubleshooting is the most common task in IT Support. If you can't identify the parts, you can't diagnose the problem. HDD → SSD upgrade is the single biggest performance improvement!",
        commonMistakes: [
            "Pulling ribbon cables too hard — they're very delicate and will break",
            "Trying to put DDR4 RAM in a DDR3 slot — they won't physically fit",
            "Ignoring battery swelling — it's a fire hazard!",
            "Connecting Wi-Fi antenna wires incorrectly — range will decrease"
        ],
        interviewTips: [
            "Be able to name all internal laptop components",
            "Explain the HDD vs SSD difference and upgrade process",
            "Describe SO-DIMM vs DIMM differences"
        ],
        examTips: [
            "SO-DIMM = Laptop RAM, DIMM = Desktop RAM — remember this",
            "NVMe uses PCIe interface, SATA SSD uses SATA interface",
            "M.2 2280 = 22mm wide × 80mm long",
            "Li-Ion = standard, no memory effect. NiCd = old, has memory effect"
        ],
        trainerNotes: {
            talkingPoints: ["Show laptop teardown images", "Compare SO-DIMM vs DIMM physically", "Demo SSD vs HDD boot time"],
            realExamples: ["HDD → SSD upgrade makes laptop 3-5x faster", "Battery swelling — show images of dangerous swollen batteries"],
            questionsToAsk: ["How much RAM does your laptop have?", "Do you have SSD or HDD?", "Have you ever opened a laptop for repair?"]
        }
    },
    "l-1-2": {
        explanation: [
            "Ports are the laptop's 'doors' where external devices connect. Understanding USB evolution is essential: USB 2.0 (480 Mbps) → USB 3.0 (5 Gbps) → USB4 (40 Gbps).",
            "USB-C is the most important connector today — reversible, supports data + power + display. Thunderbolt also uses USB-C shape but is more powerful — identify by the ⚡ symbol.",
            "Docking Station = a box with many ports. Connect your laptop with one cable and get monitor, keyboard, mouse, printer, ethernet — everything. Port Replicator is similar but more limited."
        ],
        keyPoints: [
            "USB-A (rectangular, one-way), USB-C (oval, reversible), Micro-USB (old phones)",
            "Thunderbolt = USB-C shape + ⚡ symbol — Data + Display + Power",
            "HDMI = Video + Audio, DisplayPort = Professional displays, VGA = Analog (old)",
            "Docking Station: multiple peripherals via single cable, charges laptop too",
            "Port Replicator: limited ports, usually no charging",
            "Lightning = Apple proprietary connector (being replaced by USB-C)"
        ],
        whyItMatters: "Users bring port-related problems daily — cable not working, monitor won't connect. Identifying the right port and cable is a basic IT support skill.",
        commonMistakes: [
            "Confusing Thunderbolt and USB-C — always check for the ⚡ symbol",
            "Expecting USB 3.0 speed with a USB 2.0 cable",
            "Using wrong adapter for display connections"
        ],
        interviewTips: ["List USB generations and their speeds", "Explain Thunderbolt vs USB-C differences"],
        examTips: ["Thunderbolt has ⚡ symbol — common exam question", "HDMI carries audio + video, VGA is video only", "USB 3.0 ports are usually blue colored"],
        trainerNotes: {
            talkingPoints: ["Show different USB cables physically", "Demo docking station setup"],
            realExamples: ["Office setup with docking station — one cable does everything"],
            questionsToAsk: ["What ports does your laptop have?"]
        }
    },
    "l-1-3": {
        explanation: [
            "Mobile devices use multiple wireless technologies: Wi-Fi (internet), Bluetooth (short-range devices), NFC (4cm — payments), IR (TV remote).",
            "Remember Wi-Fi standards: 802.11n (Wi-Fi 4), 802.11ac (Wi-Fi 5, 5GHz only), 802.11ax (Wi-Fi 6/6E — includes 6GHz). 2.4GHz = more range but slower, 5GHz = faster but less range, 6GHz = fastest but least range.",
            "Cellular: 4G LTE (100 Mbps) vs 5G (1-10 Gbps). Mobile Hotspot lets you share phone internet with laptop. GPS uses satellites for location tracking."
        ],
        keyPoints: [
            "Wi-Fi: 2.4GHz (more range), 5GHz (more speed), 6GHz (fastest)",
            "Bluetooth: 10m range (v4), 40m (v5) — earbuds, mouse, speakers",
            "NFC: 4cm range — Google/Apple Pay, tap payments",
            "802.11ac = Wi-Fi 5 = 5GHz only | 802.11ax = Wi-Fi 6 = 2.4+5+6GHz",
            "IMAP (port 993) = sync everywhere | POP3 (port 995) = download & delete",
            "SMTP = Send email (port 25/587) | MDM = Mobile Device Management"
        ],
        whyItMatters: "Wi-Fi connectivity problems are among the most common IT support issues. Understanding 2.4GHz vs 5GHz, knowing email protocols — this knowledge is used daily.",
        commonMistakes: [
            "Thinking 802.11ac is dual-band — it's 5GHz ONLY",
            "Using POP3 when email is needed on multiple devices — use IMAP instead",
            "Not considering frequency band for Wi-Fi range issues"
        ],
        interviewTips: ["Explain Wi-Fi standards and frequencies", "Describe IMAP vs POP3 with real example"],
        examTips: ["802.11ac = 5GHz ONLY — very common trick question", "Non-overlapping 2.4GHz channels: 1, 6, 11", "NFC range = ~4cm — exam loves this fact"],
        trainerNotes: {
            talkingPoints: ["Compare 2.4 vs 5 vs 6 GHz with real signal test", "Show email setup on phone"],
            realExamples: ["Using free Wi-Fi at airport — VPN is essential"],
            questionsToAsk: ["Do you use 2.4 or 5GHz at home?", "Any MDM experience?"]
        }
    },
    "l-2-1": {
        explanation: [
            "Network = Two or more computers connected together that can share data. Types: LAN (building), WAN (cities), MAN (city), PAN (personal — Bluetooth), WLAN (wireless LAN).",
            "OSI Model — 7 Layers (bottom to top): Physical → Data Link → Network → Transport → Session → Presentation → Application. Memory trick: 'Please Do Not Throw Sausage Pizza Away'.",
            "TCP/IP Model — 4 Layers: Network Access → Internet → Transport → Application. The real-world internet runs on this. TCP = reliable (3-way handshake: SYN→SYN-ACK→ACK), UDP = fast but unreliable."
        ],
        keyPoints: [
            "OSI 7 Layers: Physical(bits) → DataLink(frames) → Network(packets) → Transport(segments)",
            "Hub(L1, broadcast) → Switch(L2, MAC address) → Router(L3, IP address)",
            "TCP = Reliable, connection-oriented (SYN→SYN-ACK→ACK)",
            "UDP = Fast, connectionless — gaming, streaming, DNS",
            "Star topology: central switch/hub — most common, single point of failure",
            "Client-Server vs Peer-to-Peer network models"
        ],
        whyItMatters: "Networking is the foundation of every IT job. For troubleshooting, the OSI model lets you systematically check each layer — from Physical to Application.",
        commonMistakes: [
            "Confusing Hub and Switch — Hub broadcasts everything, Switch is smart (MAC table)",
            "Misunderstanding TCP vs UDP use cases",
            "Forgetting the OSI layer order — use the mnemonic!"
        ],
        interviewTips: ["Explain the OSI 7 layers and TCP/IP 4 layers", "Describe TCP vs UDP with examples"],
        examTips: ["Hub=L1, Switch=L2, Router=L3 — appears frequently on the exam", "TCP 3-way handshake: SYN → SYN-ACK → ACK", "Know data units per layer: bits, frames, packets, segments"],
        trainerNotes: {
            talkingPoints: ["Draw OSI model on whiteboard", "Explain with real packet flow example"],
            realExamples: ["YouTube streaming uses UDP, email uses TCP"],
            questionsToAsk: ["What's the difference between a Router and Switch?"]
        }
    },
    "l-2-2": {
        explanation: [
            "IPv4 = 32-bit address (e.g., 192.168.1.1). Private IPs: 10.x.x.x, 172.16-31.x.x, 192.168.x.x. Public IP is unique on the internet. NAT translates private IP to public IP.",
            "IPv6 = 128-bit address — created because IPv4 addresses are running out. DHCP automatically assigns IPs (DORA: Discover, Offer, Request, Acknowledge). DNS converts domain names to IP addresses.",
            "Memorize common ports — they appear on every exam: FTP(20/21), SSH(22), Telnet(23), SMTP(25), DNS(53), DHCP(67/68), HTTP(80), POP3(110), IMAP(143), HTTPS(443), SMB(445), RDP(3389)."
        ],
        keyPoints: ["IPv4 = 32-bit | IPv6 = 128-bit", "Private: 10.x.x.x | 172.16-31.x.x | 192.168.x.x", "DHCP = DORA process | DNS = Domain → IP", "Critical ports: 22=SSH, 25=SMTP, 53=DNS, 80=HTTP, 443=HTTPS, 3389=RDP", "Secure ports: 587=SMTPS, 993=IMAPS, 995=POP3S, 636=LDAPS", "NAT = Private IP → Public IP translation"],
        whyItMatters: "IP addressing and ports are the core of networking. Firewall rules, troubleshooting, security — knowing ports is essential. This is heavily tested on the exam.",
        commonMistakes: ["Thinking 172.32.x.x is a private IP — private is only 172.16-31.x.x", "Confusing HTTP(80) and HTTPS(443)", "Mixing up DHCP and DNS functions"],
        interviewTips: ["List the top 10 port numbers", "Explain Private vs Public IP differences"],
        examTips: ["Port numbers MUST be memorized — 22,25,53,80,443,3389 minimum", "192.168.x.x = Private IP — exam trap: 192.168 vs 191.168", "DHCP = DORA — Discover, Offer, Request, Acknowledge"],
        trainerNotes: { talkingPoints: ["Show ipconfig /all output", "Demo DNS resolution with nslookup"], realExamples: ["Home router does NAT — all devices share one public IP"], questionsToAsk: ["What's your computer's IP address? (check with ipconfig)"] }
    },
    "l-2-3": {
        explanation: [
            "Network hardware: Hub (L1, broadcasts to all), Switch (L2, smart delivery via MAC table), Router (L3, IP-based routing between networks), Access Point (wireless connectivity), Firewall (traffic filter).",
            "Cables: Cat 5e (1 Gbps), Cat 6 (10 Gbps @ 55m), Cat 6a (10 Gbps @ 100m). Fiber: Single-mode (long distance, laser) vs Multi-mode (short distance, LED). Connectors: RJ-45 (ethernet), RJ-11 (phone), LC/SC (fiber).",
            "Wireless security: WEP (NEVER use!), WPA (weak), WPA2/AES (good, current standard), WPA3/SAE (best). SOHO router setup: DHCP, port forwarding, QoS, firmware updates are important."
        ],
        keyPoints: ["Cat5e=1Gbps | Cat6=10Gbps@55m | Cat6a=10Gbps@100m", "Fiber: SMF (single-mode, long, laser) vs MMF (multi-mode, short, LED)", "PoE: 802.3af (15W) | 802.3at (30W) | 802.3bt (100W)", "WPA2=AES-CCMP | WPA3=SAE | WEP=NEVER!", "2.4GHz non-overlapping channels: 1, 6, 11", "Network tools: ping, ipconfig, tracert, nslookup, netstat"],
        whyItMatters: "Selecting network hardware, running cables, configuring wireless — these are practical IT skills. Wi-Fi troubleshooting is a daily task.",
        commonMistakes: ["Confusing Cat5 and Cat5e — Cat5 is obsolete", "Using WEP — it's crackable in minutes!", "Ignoring channel overlap — use channels 1, 6, 11 on 2.4GHz"],
        interviewTips: ["List cable types and their speeds", "Explain WPA2 vs WPA3 differences"],
        examTips: ["PoE standards: af=15W, at=30W, bt=100W", "Fiber connectors: LC (small), SC (square), ST (twist)", "Channels 1, 6, 11 = non-overlapping in 2.4GHz"],
        trainerNotes: { talkingPoints: ["Show different cable types", "Demo ping troubleshooting flow"], realExamples: ["Office Wi-Fi slow — channel overlap was the issue"], questionsToAsk: ["What Wi-Fi security do you use at home?"] }
    },
    "l-3-1": {
        explanation: [
            "Motherboard = computer's main circuit board — everything connects to it. Form factors: ATX (big), Micro-ATX (medium), Mini-ITX (small). BIOS/UEFI firmware controls boot process. CMOS battery (CR2032) stores settings.",
            "CPU = Computer's Brain. Architecture: x86 (32-bit), x64 (64-bit), ARM (mobile). Cores = real workers, Threads = virtual workers, GHz = speed. Intel (i3<i5<i7<i9) vs AMD (Ryzen 3<5<7<9). Socket match is essential — Intel LGA ≠ AMD AM4/AM5.",
            "RAM = Short-term memory (like a desk). DDR4 = 288-pin DIMM / 260-pin SO-DIMM. DDR5 = newer, faster. Dual channel = same size RAM in matching color slots. ECC = Error Correcting (servers). Minimum 8GB recommended, 16GB best."
        ],
        keyPoints: ["Motherboard: ATX > mATX > Mini-ITX (size order)", "UEFI = modern BIOS | CMOS battery = CR2032 | POST = Power-On Self-Test", "CPU socket MUST match motherboard — Intel LGA ≠ AMD AM", "Thermal paste between CPU and heatsink — pea-sized amount", "DDR4 DIMM = 288-pin | DDR4 SO-DIMM = 260-pin", "RAID: 0=Speed(no backup) | 1=Mirror | 5=Parity(3 drives min) | 10=Mirror+Stripe(4 min)"],
        whyItMatters: "Hardware knowledge is the foundation of an IT career. Building, upgrading, and repairing PCs — understanding these components is essential.",
        commonMistakes: ["Trying to put CPU in wrong socket — pins will break", "Applying too much thermal paste — pea-sized amount is enough", "DDR4 and DDR5 are physically different — they can't be swapped", "Thinking RAID 0 provides backup — RAID 0 has NO redundancy!"],
        interviewTips: ["Describe the PC build process step by step", "Explain RAID levels with use cases"],
        examTips: ["ATX 24-pin main power connector", "Thermal paste improves heat transfer (doesn't cool directly)", "RAID 5 minimum 3 drives, RAID 10 minimum 4 drives"],
        trainerNotes: { talkingPoints: ["Show motherboard components physically or via images", "Demo BIOS/UEFI setup"], realExamples: ["Gaming PC build vs Office PC — different requirements"], questionsToAsk: ["Have you ever built a PC?", "Any RAID experience?"] }
    },
    "l-3-2": {
        explanation: [
            "Storage: HDD (spinning disk, slow), SATA SSD (fast, 550 MB/s), NVMe SSD (fastest, 3500-7000 MB/s). RAID configurations for redundancy and performance. External storage: USB drives, NAS (Network Attached Storage).",
            "PSU (Power Supply Unit) converts AC power to DC. Connectors: 24-pin (motherboard), 8-pin (CPU), 6/8-pin (GPU), SATA (drives). 80 PLUS rating shows efficiency. ⚠️ NEVER OPEN PSU — lethal capacitors inside!",
            "Printers: Laser (toner, fast, office), Inkjet (liquid ink, photos), Thermal (heat, receipts), 3D (layers, prototyping). Laser printer 7 steps: Processing → Charging → Exposing → Developing → Transferring → Fusing → Cleaning."
        ],
        keyPoints: ["PSU: AC→DC | 24-pin mobo | 8-pin CPU | 6/8-pin GPU | SATA drives", "80 PLUS: Bronze < Gold < Platinum < Titanium (efficiency)", "⚠️ NEVER open PSU — capacitors store lethal charge!", "Laser 7 steps: Process → Charge → Expose → Develop → Transfer → Fuse → Clean", "Display: VGA(analog) → DVI → HDMI(audio+video) → DisplayPort → USB-C", "UPS = battery backup during power outage | Surge protector = voltage spike protection"],
        whyItMatters: "Storage selection, power management, and printer troubleshooting are daily IT tasks. PSU safety is critical — NEVER open it!",
        commonMistakes: ["Trying to open a PSU — it's LETHAL!", "Selecting wrong wattage PSU — system will be unstable", "Forgetting the Fusing step in laser printing — it's on the exam"],
        interviewTips: ["List the 7 laser printer steps", "Explain PSU wattage calculation"],
        examTips: ["Laser steps mnemonic: 'People Can Eat Delicious Turkey For Christmas'", "PSU NEVER open — exam tests safety knowledge", "Fusing = Heat fixes toner to paper"],
        trainerNotes: { talkingPoints: ["Show different PSU connectors", "Demo printer troubleshooting"], realExamples: ["Office printer paper jam — most common IT support call"], questionsToAsk: ["Have you ever troubleshot a printer?"] }
    },
    "l-4-1": {
        explanation: [
            "Virtualization = running multiple virtual computers inside one physical computer. Hypervisor software makes this possible. Type 1 (Bare Metal) = directly on hardware — ESXi, Hyper-V. Type 2 (Hosted) = on top of OS — VirtualBox, VMware Workstation.",
            "Containers vs VMs: Each VM has a full OS (heavy). Containers share the host OS (Docker) — lighter, faster startup. Snapshot = saving a VM's state (like an undo point).",
            "Cloud: IaaS = Infrastructure (AWS EC2 — you get a server), PaaS = Platform (Heroku — development platform), SaaS = Software (Gmail, Office 365 — ready to use). Deployment: Public, Private, Hybrid (most popular), Community."
        ],
        keyPoints: ["Type 1 hypervisor = Bare Metal (ESXi, Hyper-V) — directly on hardware", "Type 2 hypervisor = Hosted (VirtualBox, VMware WS) — on top of OS", "Container = shared OS (Docker) | VM = full OS each", "IaaS=Infrastructure | PaaS=Platform | SaaS=Ready-to-use software", "Public cloud=shared | Private=dedicated | Hybrid=mix | Community=shared purpose", "VDI = Virtual Desktop Infrastructure — thin clients access virtual desktops"],
        whyItMatters: "Cloud computing is the future of the IT industry. Almost every organization uses cloud. Understanding IaaS/PaaS/SaaS is essential for interviews and the exam.",
        commonMistakes: ["Confusing Type 1 and Type 2 hypervisors", "Thinking containers have a full OS — containers share the host OS", "Mixing up IaaS, PaaS, SaaS examples"],
        interviewTips: ["Explain cloud service models with examples", "Describe VM vs Container differences"],
        examTips: ["ESXi = Type 1 (bare metal)", "VirtualBox = Type 2 (hosted)", "Microsoft 365 = SaaS, AWS EC2 = IaaS", "Hybrid cloud = most popular deployment model"],
        trainerNotes: { talkingPoints: ["Demo VirtualBox VM creation", "Compare IaaS vs PaaS vs SaaS with daily examples"], realExamples: ["Gmail = SaaS, AWS = IaaS — simple daily examples"], questionsToAsk: ["Do you use cloud services? Which ones?"] }
    },
    "l-5-1": {
        explanation: [
            "CompTIA's 6 troubleshooting steps (VERY IMPORTANT — guaranteed on the exam): 1) Identify the problem 2) Establish a theory 3) Test the theory 4) Establish a plan of action 5) Verify full system functionality 6) Document findings. Mnemonic: 'I Eat Tasty Pizza Very Daily'.",
            "Hardware troubleshooting: POST fail = check beep codes, reseat RAM. BSOD = note stop code → Safe Mode → sfc /scannow → chkdsk. Boot fail = check BIOS boot order → Startup Repair. Overheating = clean fans + thermal paste + ventilation.",
            "Network troubleshooting flow: ping 127.0.0.1 (loopback) → ping gateway → ping 8.8.8.8 (internet) → ping google.com (DNS). Commands: ipconfig /all, /release, /renew, /flushdns, ping, tracert, nslookup, netstat."
        ],
        keyPoints: ["⭐ 6 Steps: Identify → Theory → Test → Plan → Verify → Document", "POST fail: beep codes, RAM reseat, minimum configuration", "BSOD: note stop code → Safe Mode → sfc /scannow → memtest86 → chkdsk", "Boot fail: check BIOS boot order → Startup Repair → System Restore", "Network: ping 127.0.0.1 → gateway → 8.8.8.8 → domain name", "Printer: test page → connection → queue → driver → spooler restart"],
        whyItMatters: "Troubleshooting methodology is the most important IT support skill. A systematic approach solves problems faster. This domain is 29% of the exam — the highest weight!",
        commonMistakes: ["Forgetting the step order — use the mnemonic", "Skipping documentation — it's the last step but very important", "Trying complicated fixes first — ALWAYS try simple things first!", "Reinstalling OS without diagnosing — find root cause first"],
        interviewTips: ["Explain the 6 troubleshooting steps with a real example", "How would you troubleshoot a BSOD?"],
        examTips: ["First step is ALWAYS 'Identify the problem'", "Troubleshooting domain = 29% weight — HIGHEST in Core 1", "'I Eat Tasty Pizza Very Daily' = mnemonic for 6 steps"],
        trainerNotes: { talkingPoints: ["Walk through a real troubleshooting scenario", "Demo ping troubleshooting flow"], realExamples: ["User's laptop was slow — Task Manager showed Disk 100% — SSD upgrade fixed it"], questionsToAsk: ["Share a real troubleshooting experience"] }
    },
    "l-6-1": {
        explanation: [
            "Operating System = Computer's Manager — acts as a bridge between hardware and software. File Systems: NTFS (Windows, permissions, encryption), FAT32 (4GB file limit), exFAT (cross-platform, no limit), ext4 (Linux), APFS (macOS).",
            "Windows editions: Home (basic, no BitLocker/Domain/Group Policy), Pro (all features), Enterprise (large organizations). 32-bit = max 4GB RAM, 64-bit = 128GB+ RAM. Important tools: Device Manager (devmgmt.msc), Disk Management (diskmgmt.msc), Event Viewer (eventvwr.msc), Registry Editor (regedit — BE CAREFUL!).",
            "Command Prompt commands: dir, cd, md, rd, copy, move, del. System: sfc /scannow (repair files), chkdsk /f /r (disk check), diskpart, gpupdate /force. PowerShell: Get-Process, Get-Service, Set-ExecutionPolicy."
        ],
        keyPoints: ["NTFS = permissions + encryption | FAT32 = 4GB limit | exFAT = cross-platform", "Windows Home = NO BitLocker, NO Domain, NO Group Policy", "32-bit = max 4GB RAM | 64-bit = 128GB+ RAM", "sfc /scannow = repair system files | chkdsk /f /r = disk errors", "MSC commands: devmgmt, diskmgmt, services, eventvwr, gpedit, compmgmt", "PowerShell: .ps1 extension | Set-ExecutionPolicy to run scripts"],
        whyItMatters: "Windows administration is the most common IT job function. CMD commands, system tools, file systems — these are used daily in troubleshooting.",
        commonMistakes: ["Editing registry without backup — can break the system", "Looking for Group Policy Editor in Home edition — it's Pro+ only", "Trying to copy 4GB+ files to FAT32 — use exFAT instead"],
        interviewTips: ["List CMD commands you use daily", "Explain NTFS vs FAT32 differences"],
        examTips: ["Windows Home lacks: BitLocker, Domain Join, Group Policy, Remote Desktop (host)", "sfc /scannow vs chkdsk — both repair but different things", "gpedit.msc = NOT available in Home edition"],
        trainerNotes: { talkingPoints: ["Demo important CMD commands live", "Show Device Manager troubleshooting"], realExamples: ["sfc /scannow fixed a corrupt Windows installation"], questionsToAsk: ["Do you use CMD daily? Which commands?"] }
    },
    "l-6-2": {
        explanation: [
            "Linux = Open source OS. Distributions: Ubuntu (beginner-friendly), Fedora, CentOS. Commands: ls (list), cd (change directory), pwd (current dir), mkdir, rm, cp, mv, cat, sudo (admin), chmod (permissions), apt install (Ubuntu package manager).",
            "chmod permissions: rwx (read-write-execute). 755 = owner:rwx, group:r-x, others:r-x. 644 = owner:rw-, group:r--, others:r--. chown = change ownership.",
            "macOS: FileVault = BitLocker equivalent (disk encryption), Time Machine = Backup, Spotlight = Search, Keychain = Password manager, APFS = file system. Mobile OS: Android (open, customizable) vs iOS (closed, secure). MDM manages both."
        ],
        keyPoints: ["Linux: ls, cd, pwd, mkdir, rm -rf, cp, mv, cat, grep, sudo, chmod, chown", "chmod 755 = rwxr-xr-x | chmod 644 = rw-r--r--", "apt install (Ubuntu/Debian) | yum install (RHEL/CentOS)", "macOS: FileVault=encryption, Time Machine=backup, APFS=filesystem", "Android = Open, Google Play | iOS = Closed, App Store", "Scripting: .bat (CMD), .ps1 (PowerShell), .sh (Bash), .py (Python)"],
        whyItMatters: "Working in multi-platform environments is common. Linux servers, macOS for creative teams, mobile devices — you need to manage all of them.",
        commonMistakes: ["Accidentally running rm -rf / on Linux — DELETES EVERYTHING!", "Giving chmod 777 to every file — major security risk", "Confusing macOS and Windows shortcuts — Cmd ≠ Ctrl"],
        interviewTips: ["List basic Linux commands", "What's the Windows equivalent of FileVault? (BitLocker)"],
        examTips: ["chmod 755 = rwxr-xr-x — expect calculations on the exam", "apt = Debian/Ubuntu, yum = RHEL/CentOS", "FileVault (macOS) = BitLocker (Windows)"],
        trainerNotes: { talkingPoints: ["Demo basic Linux commands in terminal", "Compare Windows vs macOS features"], realExamples: ["Web servers mostly run on Linux — Ubuntu Server"], questionsToAsk: ["Have you used Linux? Comfortable with terminal?"] }
    },
    "l-7-1": {
        explanation: [
            "CIA Triad = Security foundation: Confidentiality (keep it secret), Integrity (keep it accurate), Availability (keep it accessible). AAA = Authentication (who are you), Authorization (what access do you have), Accounting (track what was done).",
            "Malware types: Virus (requires user action), Worm (auto-spreads — most dangerous!), Trojan (disguised as legitimate software), Ransomware (encrypts + demands payment), Spyware (monitors activity), Keylogger (records keystrokes), Rootkit (deeply hidden), Adware (unwanted ads).",
            "Social Engineering: Phishing (fake email), Vishing (voice/phone fraud), Smishing (SMS fraud), Spear Phishing (targeted attack), Whaling (targeting executives). Physical: Tailgating (following in without badge), Shoulder Surfing (peeking at screen), Dumpster Diving (searching trash)."
        ],
        keyPoints: ["CIA: Confidentiality + Integrity + Availability", "AAA: Authentication + Authorization + Accounting", "Virus=user action | Worm=auto-spread | Trojan=disguised | Ransomware=encrypt+pay", "Phishing=email | Vishing=voice | Smishing=SMS | Whaling=CEO target", "Password attacks: Brute Force | Dictionary | Rainbow Table", "Network attacks: DDoS, MITM, DNS Poisoning, Evil Twin, ARP Spoof"],
        whyItMatters: "Security breaches cost companies millions. Understanding threats and educating users is a critical responsibility for IT professionals.",
        commonMistakes: ["Confusing Virus and Worm — Worm auto-spreads, Virus needs user action", "Clicking phishing emails — always verify the sender", "Thinking 2 passwords = MFA — must be DIFFERENT categories (know+have+are)"],
        interviewTips: ["Explain CIA triad with examples", "Describe common malware types and their signs"],
        examTips: ["Worm = auto-spread (no user action) — very common question", "MFA = 2+ factors from DIFFERENT categories: Know + Have + Are", "Phishing=email, Vishing=voice, Smishing=SMS — remember the pattern"],
        trainerNotes: { talkingPoints: ["Show phishing email examples", "Demo how ransomware works (safe simulation)"], realExamples: ["WannaCry ransomware spread via worm — affected hospitals globally"], questionsToAsk: ["Have you ever received a phishing email? How did you identify it?"] }
    },
    "l-7-2": {
        explanation: [
            "Encryption: Symmetric = 1 key (AES — fast, for data encryption), Asymmetric = 2 keys (RSA — public + private key pair). MFA = Something you KNOW (password) + HAVE (phone/token) + ARE (fingerprint/face). Minimum 2 DIFFERENT categories required!",
            "Wireless Security: WEP (NEVER use — crackable), WPA (weak), WPA2/AES-CCMP (good, current standard), WPA3/SAE (best). Enterprise = RADIUS server authentication. Personal = PSK (pre-shared key).",
            "Data protection: BitLocker = Windows disk encryption (Pro+ only), EFS = file-level encryption (NTFS). Backup types: Full (complete), Incremental (since last ANY backup — fast), Differential (since last FULL backup). 3-2-1 Rule: 3 copies, 2 media types, 1 offsite."
        ],
        keyPoints: ["Symmetric encryption = 1 key (AES) | Asymmetric = 2 keys (RSA)", "MFA: Know(password) + Have(phone) + Are(biometric) — min 2 different!", "WEP=NEVER | WPA=weak | WPA2/AES=good | WPA3/SAE=best", "BitLocker = Windows Pro+ disk encryption | EFS = file-level (NTFS)", "Backup: Full | Incremental (since any backup) | Differential (since full)", "3-2-1 Rule: 3 copies, 2 media, 1 offsite | Data destroy: degaussing, shredding"],
        whyItMatters: "Data protection compliance (GDPR, HIPAA) requires encryption and proper backup. Implementing security measures is a core IT admin responsibility.",
        commonMistakes: ["Password + Security Question ≠ MFA (both are 'know' category)", "Confusing Incremental and Differential backups", "Thinking standard format permanently deletes data — it's recoverable!"],
        interviewTips: ["Explain Symmetric vs Asymmetric encryption", "Describe the 3-2-1 backup rule"],
        examTips: ["Symmetric = 1 key, Asymmetric = 2 keys — simple but tricky", "Incremental = since last ANY backup, Differential = since last FULL", "Standard format does NOT permanently destroy data!"],
        trainerNotes: { talkingPoints: ["Demo BitLocker setup", "Compare backup types with timeline"], realExamples: ["Company lost data because backup was only on same server — no offsite!"], questionsToAsk: ["What's your organization's backup strategy?"] }
    },
    "l-8-1": {
        explanation: [
            "Malware Removal — CompTIA 7 Steps (GUARANTEED ON THE EXAM): 1) Identify symptoms 2) Quarantine (DISCONNECT from network!) 3) Disable System Restore 4) Remediate (Safe Mode + scan) 5) Schedule scans + Enable System Restore 6) Educate the user 7) Enable updates + Monitor.",
            "Windows Troubleshooting: Slow PC → Task Manager check CPU/RAM/Disk → SSD upgrade is #1 fix. BSOD → note stop code → Safe Mode → sfc /scannow → chkdsk. Boot issues → WinRE (Shift+Restart) → Startup Repair → System Restore → Reset.",
            "Browser issues: Certificate error = check date/time first, Pop-ups = adware scan, Homepage changed = browser hijacker → reset browser. Mobile: Battery drain = check background apps, Storage full = clear cache + use cloud."
        ],
        keyPoints: ["⭐ Malware 7 Steps: Identify → Quarantine → Disable SR → Remediate → Schedule → Educate → Update", "Step 2 QUARANTINE = DISCONNECT from network FIRST!", "Slow PC: Task Manager → check Disk/CPU/RAM → #1 fix = SSD upgrade", "BSOD: stop code → Safe Mode → sfc /scannow → driver rollback", "Safe Mode: Shift+Restart → Troubleshoot → Startup Settings → F4/F5", "Windows Update stuck: net stop wuauserv → delete SoftwareDistribution folder → restart"],
        whyItMatters: "Malware removal and Windows troubleshooting are daily IT support tasks. The 7-step malware process is almost guaranteed on the exam!",
        commonMistakes: ["Not disconnecting from network during malware removal — it can spread!", "Not disabling System Restore — malware can hide in restore points", "Not educating the user — they'll make the same mistake again"],
        interviewTips: ["Explain the 7-step malware removal process", "Describe your BSOD troubleshooting methodology"],
        examTips: ["FIRST step after identifying malware = QUARANTINE (disconnect!)", "Safe Mode access: Shift + Restart → Troubleshoot → Startup Settings", "sfc /scannow = System File Checker | chkdsk = Disk Check"],
        trainerNotes: { talkingPoints: ["Walk through 7-step malware removal live", "Demo Safe Mode boot"], realExamples: ["Receptionist's browser was hijacked — fixed with 7-step process"], questionsToAsk: ["Have you ever removed malware? What was the process?"] }
    },
    "l-9-1": {
        explanation: [
            "Documentation: Ticketing system (New→In Progress→Pending→Resolved→Closed), Knowledge Base (solutions database), Change Management (Request→Review→Approve→Plan rollback→Implement→Verify→Document). Asset management = track all hardware/software.",
            "Safety: ESD (Electrostatic Discharge) prevention — anti-static wrist strap, mat, touch metal case, 40-60% humidity. ⚠️ NEVER OPEN PSU — lethal capacitors! Electrical fire = Class C extinguisher. Proper lifting = bend knees, not back. E-waste requires proper recycling.",
            "Communication: Listen → Empathize → Clarify → Solve → Follow up. DON'T: interrupt, blame user, use jargon, promise what you can't deliver. Scripting basics: .bat (CMD), .ps1 (PowerShell), .sh (Bash), .py (Python). Remote: RDP (3389), VNC (5900), SSH (22)."
        ],
        keyPoints: ["Ticket lifecycle: New → In Progress → Pending → Resolved → Closed", "Change Management: always have a ROLLBACK PLAN!", "ESD: wrist strap, anti-static mat, touch case, 40-60% humidity", "RTO = how fast to recover | RPO = acceptable data loss | MTTR = avg repair time", "Scripting: .bat(CMD) | .ps1(PowerShell) | .sh(Bash) | .py(Python)", "Remote: RDP(3389) | VNC(5900) | SSH(22) | RMM tools for managed service"],
        whyItMatters: "Operational procedures mean doing IT work professionally. Documentation, safety, communication — these soft skills are as important as technical skills.",
        commonMistakes: ["Skipping documentation — no reference for future similar problems", "Not creating a rollback plan in change management — what if the change fails?", "Ignoring ESD protection — can damage sensitive components", "Using jargon with users — explain in simple language"],
        interviewTips: ["Explain the change management process", "How would you handle a difficult customer?"],
        examTips: ["ESD prevention = anti-static wrist strap (most common answer)", "Rollback plan is CRITICAL in change management", "PSU NEVER open — capacitors store lethal charge even when unplugged"],
        trainerNotes: { talkingPoints: ["Demo ticketing system workflow", "Practice communication scenarios"], realExamples: ["Change management saved company when Windows update broke 500 PCs — rollback!"], questionsToAsk: ["Have you used a ticketing system? Which ITSM tool?"] }
    }
};
