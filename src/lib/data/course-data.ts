export interface TrainerNote {
    talkingPoints: string[];
    realExamples: string[];
    questionsToAsk: string[];
}

export interface Lesson {
    id: string;
    title: string;
    slug: string;
    duration: string;
    content: {
        explanation: string[];
        keyPoints: string[];
        architecture?: {
            title: string;
            steps: { step: number; title: string; description: string; icon?: string }[];
        };
        whyItMatters: string;
        commonMistakes: string[];
        interviewTips: string[];
        examTips: string[];
    };
    trainerNotes: TrainerNote;
}

export interface Module {
    id: string;
    title: string;
    slug: string;
    description: string;
    icon: string;
    lessons: Lesson[];
    duration: string;
    part: string;
}

export interface CourseData {
    title: string;
    subtitle: string;
    trainer: { name: string; title: string; email: string; linkedin?: string };
    duration: string;
    prerequisites: string[];
    whatYouWillLearn: string[];
    targetAudience: string[];
    modules: Module[];
}

export const courseData: CourseData = {
    title: "CompTIA A+",
    subtitle: "Core 1 (220-1201) & Core 2 (220-1202) — Complete Study Guide",
    trainer: {
        name: "Maheshwar",
        title: "Infrastructure & Cloud Administrator (HCLTech)",
        email: "maheshwarkumar5629@gmail.com",
        linkedin: "https://www.linkedin.com/in/maheshwar-kumar-0092832b7/",
    },
    duration: "22 Weeks (Recommended)",
    prerequisites: [
        "Basic computer knowledge — ON/OFF karna aata ho",
        "Internet use karna aata ho",
        "Curiosity aur seekhne ki willingness",
        "No prior IT experience required!",
    ],
    whatYouWillLearn: [
        "Laptop & mobile device hardware components aur repair",
        "Networking fundamentals — TCP/IP, OSI, ports & protocols",
        "PC hardware — CPU, RAM, storage, motherboard, PSU",
        "Virtualization & Cloud Computing — VMs, IaaS, SaaS",
        "Hardware & Network troubleshooting methodology",
        "Operating Systems — Windows, Linux, macOS",
        "Security — Malware, encryption, firewalls, MFA",
        "Software troubleshooting & operational procedures",
    ],
    targetAudience: [
        "IT field mein bilkul naye students",
        "Non-technical background se IT mein aane wale",
        "CompTIA A+ certification aspirants",
        "Help Desk / Desktop Support career seekers",
        "Women entering IT — aap yeh kar sakti hain! 💪",
    ],
    modules: [
        {
            id: "module-1", title: "Mobile Devices", slug: "mobile-devices",
            description: "Laptop hardware, mobile connectivity, ports, docking stations, and device configuration",
            icon: "Smartphone", duration: "2-3 weeks", part: "Core 1",
            lessons: [
                {
                    id: "l-1-1", title: "Laptop Hardware Components", slug: "laptop-hardware", duration: "30 mins",
                    content: {
                        explanation: [
                            "Laptop ek portable computer hai — sab parts (monitor, keyboard, CPU, battery) ek chhoti body mein fit hote hain. Technician ke liye yeh samajhna zaroori hai ki andar kya-kya hai.",
                            "Laptop ke andar milte hain: Display Panel (LCD/LED/OLED/IPS screen), Keyboard (scissor switch), Trackpad, System Board (motherboard — sab kuch isse connected), RAM (SO-DIMM — chhoti RAM sticks), Storage (SSD/HDD), Battery (Li-Ion/Li-Poly), Wireless Card (Wi-Fi + Bluetooth), Speakers, Webcam, aur Biometric devices (fingerprint, IR camera).",
                            "Desktop vs Laptop ka sabse bada difference: laptop mein zyada tar parts SOLDERED hote hain — matlab permanently jude — isliye upgrade mushkil hota hai. Desktop mein sab removable aur upgradeable hota hai."
                        ],
                        keyPoints: [
                            "Display types: LCD (basic), LED (better), IPS (best angles), OLED (premium, deepest blacks), TN (fast, gaming)",
                            "Display components: Backlight, Digitizer (touch), Wi-Fi antenna (screen bezel mein)",
                            "RAM: SO-DIMM (laptop) vs DIMM (desktop) — DDR4 ≠ DDR3 physically",
                            "Storage: HDD (slow) → SATA SSD (fast) → NVMe SSD (fastest, 3500+ MB/s)",
                            "M.2 2280 = most common laptop SSD (22mm × 80mm)",
                            "Battery: Li-Ion (standard), Li-Poly (premium) — swelling = DANGER!",
                            "Wireless card: Wi-Fi + Bluetooth combo, Mini PCIe or M.2 slot",
                            "Biometrics: Fingerprint reader, IR Camera (Windows Hello)"
                        ],
                        architecture: {
                            title: "Laptop Internal Architecture",
                            steps: [
                                { step: 1, title: "Display", description: "LCD/LED/OLED + digitizer + antenna", icon: "Monitor" },
                                { step: 2, title: "Input", description: "Keyboard + Trackpad + Biometrics", icon: "Keyboard" },
                                { step: 3, title: "Motherboard", description: "CPU + RAM + Storage + Wi-Fi connected", icon: "Cpu" },
                                { step: 4, title: "Power", description: "Battery (Li-Ion) + AC adapter", icon: "Zap" }
                            ]
                        },
                        whyItMatters: "IT Support mein sabse common kaam laptop repair aur troubleshooting hai. Agar aapko parts ki pehchaan nahi toh diagnose nahi kar paoge. HDD → SSD upgrade sabse bada performance improvement hai!",
                        commonMistakes: [
                            "Ribbon cable jor se khenchna — bahut nazuk hota hai, toot jayega",
                            "DDR4 RAM DDR3 slot mein lagane ki koshish — physically fit nahi hogi",
                            "Battery swelling ignore karna — fire hazard hai!",
                            "Wi-Fi antenna wires galat connect karna — range kam ho jayegi"
                        ],
                        interviewTips: [
                            "Laptop ke andar ke sabhi components naam se bata sako",
                            "HDD vs SSD difference aur upgrade process explain karo",
                            "SO-DIMM vs DIMM difference batao"
                        ],
                        examTips: [
                            "SO-DIMM = Laptop RAM, DIMM = Desktop RAM — yaad rakhein",
                            "NVMe uses PCIe interface, SATA SSD uses SATA interface",
                            "M.2 2280 = 22mm wide × 80mm long",
                            "Li-Ion = standard, no memory effect. NiCd = old, memory effect"
                        ]
                    },
                    trainerNotes: {
                        talkingPoints: ["Show laptop teardown images", "Compare SO-DIMM vs DIMM physically", "Demo SSD vs HDD boot time"],
                        realExamples: ["HDD → SSD upgrade makes laptop 3-5x faster", "Battery swelling — show images of dangerous swollen batteries"],
                        questionsToAsk: ["Aapke laptop mein kitni RAM hai?", "SSD hai ya HDD?", "Kabhi laptop khola hai repair ke liye?"]
                    }
                },
                {
                    id: "l-1-2", title: "Mobile Device Ports & Accessories", slug: "ports-accessories", duration: "25 mins",
                    content: {
                        explanation: [
                            "Ports laptop ke 'doors' hain jahan se external devices connect hote hain. USB evolution samajhna zaroori hai: USB 2.0 (480 Mbps) → USB 3.0 (5 Gbps) → USB4 (40 Gbps).",
                            "USB-C sabse important connector hai aaj — dono taraf se insert hota hai, data + power + display sab support karta hai. Thunderbolt bhi USB-C shape ka hai lekin zyada powerful — ⚡ symbol se identify karo.",
                            "Docking Station = ek box mein bahut saare ports. Laptop ko ek cable se connect karo aur monitor, keyboard, mouse, printer, ethernet — sab mil jaye. Port Replicator similar but limited."
                        ],
                        keyPoints: [
                            "USB-A (rectangular, one-way), USB-C (oval, reversible), Micro-USB (old phones)",
                            "Thunderbolt = USB-C shape + ⚡ symbol — Data + Display + Power",
                            "HDMI = Video + Audio, DisplayPort = Professional displays, VGA = Analog (old)",
                            "Docking Station: multiple peripherals via single cable, charges laptop too",
                            "Port Replicator: limited ports, usually no charging",
                            "Lightning = Apple proprietary connector (being replaced by USB-C)"
                        ],
                        whyItMatters: "Users daily port-related problems le ke aate hain — cable kaam nahi kar raha, monitor connect nahi ho raha. Sahi port aur cable identify karna IT support ka basic skill hai.",
                        commonMistakes: [
                            "Thunderbolt aur USB-C confuse karna — ⚡ symbol check karo",
                            "USB 2.0 cable se USB 3.0 speed expect karna",
                            "Wrong adapter use karna for display connection"
                        ],
                        interviewTips: ["USB generations aur speeds batao", "Thunderbolt vs USB-C difference explain karo"],
                        examTips: ["Thunderbolt has ⚡ symbol — this is a common exam question", "HDMI carries audio + video, VGA is video only", "USB 3.0 ports are usually blue colored"]
                    },
                    trainerNotes: {
                        talkingPoints: ["Show different USB cables physically", "Demo docking station setup"],
                        realExamples: ["Office setup with docking station — one cable does everything"],
                        questionsToAsk: ["Aapke laptop mein kaunse ports hain?"]
                    }
                },
                {
                    id: "l-1-3", title: "Mobile Device Connectivity", slug: "mobile-connectivity", duration: "25 mins",
                    content: {
                        explanation: [
                            "Mobile devices multiple wireless technologies use karte hain: Wi-Fi (internet), Bluetooth (short range devices), NFC (4cm — payments), IR (TV remote).",
                            "Wi-Fi standards yaad rakhein: 802.11n (Wi-Fi 4), 802.11ac (Wi-Fi 5, 5GHz only), 802.11ax (Wi-Fi 6/6E — 6GHz bhi). 2.4GHz = more range but slower, 5GHz = faster but less range, 6GHz = fastest but least range.",
                            "Cellular: 4G LTE (100 Mbps) vs 5G (1-10 Gbps). Mobile Hotspot se phone ka internet laptop mein use kar sakte ho. GPS satellites se location track hota hai."
                        ],
                        keyPoints: [
                            "Wi-Fi: 2.4GHz (range zyada), 5GHz (speed zyada), 6GHz (fastest)",
                            "Bluetooth: 10m range (v4), 40m (v5) — earbuds, mouse, speakers",
                            "NFC: 4cm range — Google/Apple Pay, tap payments",
                            "802.11ac = Wi-Fi 5 = 5GHz only | 802.11ax = Wi-Fi 6 = 2.4+5+6GHz",
                            "IMAP (port 993) = sync everywhere | POP3 (port 995) = download & delete",
                            "SMTP = Send email (port 25/587) | MDM = Mobile Device Management"
                        ],
                        whyItMatters: "Wi-Fi connectivity problems sabse common IT support issues mein se hain. 2.4GHz vs 5GHz samajhna, email protocols jaanna — yeh daily kaam aayega.",
                        commonMistakes: [
                            "802.11ac ko dual-band samajhna — it's 5GHz ONLY",
                            "POP3 use karna jab multiple devices pe email chahiye — IMAP use karo",
                            "Wi-Fi range issues ke liye frequency band consider na karna"
                        ],
                        interviewTips: ["Wi-Fi standards aur frequencies explain karo", "IMAP vs POP3 difference batao with real example"],
                        examTips: ["802.11ac = 5GHz ONLY — very common trick question", "Non-overlapping 2.4GHz channels: 1, 6, 11", "NFC range = ~4cm — exam loves this fact"]
                    },
                    trainerNotes: {
                        talkingPoints: ["Compare 2.4 vs 5 vs 6 GHz with real signal test", "Show email setup on phone"],
                        realExamples: ["Airport pe free Wi-Fi use karna — VPN zaroori hai"],
                        questionsToAsk: ["Ghar mein 2.4 or 5GHz use karte ho?", "MDM ka experience hai?"]
                    }
                }
            ]
        },
        {
            id: "module-2", title: "Networking", slug: "networking",
            description: "Network types, OSI/TCP-IP models, IP addressing, ports, protocols, hardware, and wireless",
            icon: "Globe", duration: "3-4 weeks", part: "Core 1",
            lessons: [
                {
                    id: "l-2-1", title: "Networking Fundamentals & Models", slug: "network-fundamentals", duration: "35 mins",
                    content: {
                        explanation: [
                            "Network = Do ya zyada computers jo aapas mein connected hain aur data share kar sakte hain. Types: LAN (building), WAN (cities), MAN (city), PAN (personal — Bluetooth), WLAN (wireless LAN).",
                            "OSI Model — 7 Layers (neeche se upar): Physical → Data Link → Network → Transport → Session → Presentation → Application. Yaad karne ka trick: 'Please Do Not Throw Sausage Pizza Away'.",
                            "TCP/IP Model — 4 Layers: Network Access → Internet → Transport → Application. Real-world internet isi pe chalta hai. TCP = reliable (3-way handshake: SYN→SYN-ACK→ACK), UDP = fast but unreliable."
                        ],
                        keyPoints: [
                            "OSI 7 Layers: Physical(bits) → DataLink(frames) → Network(packets) → Transport(segments)",
                            "Hub(L1, broadcast) → Switch(L2, MAC address) → Router(L3, IP address)",
                            "TCP = Reliable, connection-oriented (SYN→SYN-ACK→ACK)",
                            "UDP = Fast, connectionless — gaming, streaming, DNS",
                            "Star topology: central switch/hub — most common, single point of failure",
                            "Client-Server vs Peer-to-Peer network models"
                        ],
                        architecture: {
                            title: "OSI Model Layers",
                            steps: [
                                { step: 1, title: "Physical", description: "Cables, bits, electrical signals", icon: "Radio" },
                                { step: 2, title: "Data Link", description: "Frames, MAC address, Switch", icon: "Layers" },
                                { step: 3, title: "Network", description: "Packets, IP address, Router", icon: "Globe" },
                                { step: 4, title: "Transport", description: "TCP/UDP, Segments, Ports", icon: "ArrowRight" }
                            ]
                        },
                        whyItMatters: "Networking har IT job ka foundation hai. Troubleshooting mein OSI model se systematically har layer check karte hain — Physical se Application tak.",
                        commonMistakes: [
                            "Hub aur Switch confuse karna — Hub broadcasts, Switch is smart (MAC table)",
                            "TCP aur UDP ka use case galat samajhna",
                            "OSI layers ka order bhool jaana — mnemonic use karo!"
                        ],
                        interviewTips: ["OSI 7 layers aur TCP/IP 4 layers explain karo", "TCP vs UDP difference with examples"],
                        examTips: ["Hub=L1, Switch=L2, Router=L3 — exam mein bahut aata hai", "TCP 3-way handshake: SYN → SYN-ACK → ACK", "Know data units per layer: bits, frames, packets, segments"]
                    },
                    trainerNotes: {
                        talkingPoints: ["Draw OSI model on whiteboard", "Explain with real packet flow example"],
                        realExamples: ["YouTube streaming uses UDP, email uses TCP"],
                        questionsToAsk: ["Router aur Switch mein kya difference hai?"]
                    }
                },
                {
                    id: "l-2-2", title: "IP Addressing & Common Ports", slug: "ip-addressing-ports", duration: "30 mins",
                    content: {
                        explanation: [
                            "IPv4 = 32-bit address (e.g., 192.168.1.1). Private IPs: 10.x.x.x, 172.16-31.x.x, 192.168.x.x. Public IP internet pe unique hota hai. NAT private IP ko public IP mein translate karta hai.",
                            "IPv6 = 128-bit address — IPv4 addresses khatam ho rahe hain isliye banaya gaya. DHCP automatically IP assign karta hai (DORA: Discover, Offer, Request, Acknowledge). DNS domain name ko IP mein convert karta hai.",
                            "Common ports yaad rakhein — exam mein zaroor aate hain: FTP(20/21), SSH(22), Telnet(23), SMTP(25), DNS(53), DHCP(67/68), HTTP(80), POP3(110), IMAP(143), HTTPS(443), SMB(445), RDP(3389)."
                        ],
                        keyPoints: [
                            "IPv4 = 32-bit | IPv6 = 128-bit",
                            "Private: 10.x.x.x | 172.16-31.x.x | 192.168.x.x",
                            "DHCP = DORA process | DNS = Domain → IP",
                            "Critical ports: 22=SSH, 25=SMTP, 53=DNS, 80=HTTP, 443=HTTPS, 3389=RDP",
                            "Secure ports: 587=SMTPS, 993=IMAPS, 995=POP3S, 636=LDAPS",
                            "NAT = Private IP → Public IP translation"
                        ],
                        whyItMatters: "IP addressing aur ports networking ka core hai. Firewall rules, troubleshooting, security — sab mein ports jaanna zaroori hai. Yeh exam mein bhi heavily tested hai.",
                        commonMistakes: [
                            "172.32.x.x ko private IP samajhna — private sirf 172.16-31.x.x tak hai",
                            "HTTP(80) aur HTTPS(443) confuse karna",
                            "DHCP aur DNS ka function mix-up karna"
                        ],
                        interviewTips: ["Top 10 port numbers bata sako", "Private vs Public IP difference explain karo"],
                        examTips: ["Port numbers MUST memorize — 22,25,53,80,443,3389 minimum", "192.168.x.x = Private IP — exam trap: 192.168 vs 191.168", "DHCP = DORA — Discover, Offer, Request, Acknowledge"]
                    },
                    trainerNotes: {
                        talkingPoints: ["Show ipconfig /all output", "Demo DNS resolution with nslookup"],
                        realExamples: ["Home router does NAT — all devices share one public IP"],
                        questionsToAsk: ["Aapke computer ka IP address kya hai? (ipconfig se check karo)"]
                    }
                },
                {
                    id: "l-2-3", title: "Network Hardware & Wireless", slug: "network-hardware-wireless", duration: "30 mins",
                    content: {
                        explanation: [
                            "Network hardware: Hub (L1, broadcast sab ko), Switch (L2, MAC table se smart delivery), Router (L3, IP-based routing between networks), Access Point (wireless connectivity), Firewall (traffic filter).",
                            "Cables: Cat 5e (1 Gbps), Cat 6 (10 Gbps @ 55m), Cat 6a (10 Gbps @ 100m). Fiber: Single-mode (long distance, laser) vs Multi-mode (short, LED). Connectors: RJ-45 (ethernet), RJ-11 (phone), LC/SC (fiber).",
                            "Wireless security: WEP (NEVER use!), WPA (weak), WPA2/AES (good, current standard), WPA3/SAE (best). SOHO router setup: DHCP, port forwarding, QoS, firmware updates important hai."
                        ],
                        keyPoints: [
                            "Cat5e=1Gbps | Cat6=10Gbps@55m | Cat6a=10Gbps@100m",
                            "Fiber: SMF (single-mode, long, laser) vs MMF (multi-mode, short, LED)",
                            "PoE: 802.3af (15W) | 802.3at (30W) | 802.3bt (100W)",
                            "WPA2=AES-CCMP | WPA3=SAE | WEP=NEVER!",
                            "2.4GHz non-overlapping channels: 1, 6, 11",
                            "Network tools: ping, ipconfig, tracert, nslookup, netstat"
                        ],
                        whyItMatters: "Network hardware select karna, cable run karna, wireless configure karna — yeh practical IT skills hain. Wi-Fi troubleshooting daily kaam hai.",
                        commonMistakes: [
                            "Cat5 aur Cat5e confuse karna — Cat5 obsolete hai",
                            "WEP use karna — it's crackable in minutes!",
                            "Channel overlap ignore karna — 2.4GHz mein 1, 6, 11 use karo"
                        ],
                        interviewTips: ["Cable types aur speeds batao", "WPA2 vs WPA3 difference explain karo"],
                        examTips: ["PoE standards: af=15W, at=30W, bt=100W", "Fiber connectors: LC (small), SC (square), ST (twist)", "Channels 1, 6, 11 = non-overlapping in 2.4GHz"]
                    },
                    trainerNotes: {
                        talkingPoints: ["Show different cable types", "Demo ping troubleshooting flow"],
                        realExamples: ["Office Wi-Fi slow — channel overlap was the issue"],
                        questionsToAsk: ["Ghar mein kaunsa Wi-Fi security use karte ho?"]
                    }
                }
            ]
        },
        {
            id: "module-3", title: "Hardware", slug: "hardware",
            description: "Motherboard, CPU, RAM, storage, PSU, displays, printers, and custom PC builds",
            icon: "Monitor", duration: "3-4 weeks", part: "Core 1",
            lessons: [
                {
                    id: "l-3-1", title: "Motherboard, CPU & RAM", slug: "motherboard-cpu-ram", duration: "35 mins",
                    content: {
                        explanation: [
                            "Motherboard = computer ka main circuit board — sab kuch isse connected hota hai. Form factors: ATX (big), Micro-ATX (medium), Mini-ITX (small). BIOS/UEFI firmware boot process control karta hai. CMOS battery (CR2032) settings save rakhti hai.",
                            "CPU = Computer ka Brain. Architecture: x86 (32-bit), x64 (64-bit), ARM (mobile). Cores = real workers, Threads = virtual workers, GHz = speed. Intel (i3<i5<i7<i9) vs AMD (Ryzen 3<5<7<9). Socket match zaroori hai — Intel LGA ≠ AMD AM4/AM5.",
                            "RAM = Short-term memory (desk jaisi). DDR4 = 288-pin DIMM / 260-pin SO-DIMM. DDR5 = newer, faster. Dual channel = same size RAM in matching color slots. ECC = Error Correcting (servers). Minimum 8GB recommended, 16GB best."
                        ],
                        keyPoints: [
                            "Motherboard: ATX > mATX > Mini-ITX (size order)",
                            "UEFI = modern BIOS | CMOS battery = CR2032 | POST = Power-On Self-Test",
                            "CPU socket MUST match motherboard — Intel LGA ≠ AMD AM",
                            "Thermal paste between CPU and heatsink — pea-sized amount",
                            "DDR4 DIMM = 288-pin | DDR4 SO-DIMM = 260-pin",
                            "RAID: 0=Speed(no backup) | 1=Mirror | 5=Parity(3 drives min) | 10=Mirror+Stripe(4 min)"
                        ],
                        whyItMatters: "Hardware knowledge = IT career ka foundation. PC build karna, upgrade karna, repair karna — sab ke liye yeh components samajhne zaroori hain.",
                        commonMistakes: [
                            "Wrong CPU socket mein CPU lagane ki koshish — pins toot jayenge",
                            "Thermal paste bahut zyada lagana — pea-sized amount enough hai",
                            "DDR4 aur DDR5 physically different hain — swap nahi hote",
                            "RAID 0 ko backup samajhna — RAID 0 mein NO redundancy hai!"
                        ],
                        interviewTips: ["PC build process step by step batao", "RAID levels explain karo with use cases"],
                        examTips: ["ATX 24-pin main power connector", "Thermal paste = improves heat transfer (not cools directly)", "RAID 5 minimum 3 drives, RAID 10 minimum 4 drives"]
                    },
                    trainerNotes: {
                        talkingPoints: ["Show motherboard components physically or via images", "Demo BIOS/UEFI setup"],
                        realExamples: ["Gaming PC build vs Office PC — different requirements"],
                        questionsToAsk: ["Kabhi PC build kiya hai?", "RAID ka experience hai?"]
                    }
                },
                {
                    id: "l-3-2", title: "Storage, PSU & Peripherals", slug: "storage-psu-peripherals", duration: "30 mins",
                    content: {
                        explanation: [
                            "Storage: HDD (spinning disk, slow), SATA SSD (fast, 550 MB/s), NVMe SSD (fastest, 3500-7000 MB/s). RAID configurations for redundancy and performance. External storage: USB drives, NAS (Network Attached Storage).",
                            "PSU (Power Supply Unit) = AC power ko DC mein convert karta hai. Connectors: 24-pin (motherboard), 8-pin (CPU), 6/8-pin (GPU), SATA (drives). 80 PLUS rating efficiency batata hai. ⚠️ NEVER OPEN PSU — lethal capacitors inside!",
                            "Printers: Laser (toner, fast, office), Inkjet (liquid ink, photos), Thermal (heat, receipts), 3D (layers, prototyping). Laser printer 7 steps: Processing → Charging → Exposing → Developing → Transferring → Fusing → Cleaning."
                        ],
                        keyPoints: [
                            "PSU: AC→DC | 24-pin mobo | 8-pin CPU | 6/8-pin GPU | SATA drives",
                            "80 PLUS: Bronze < Gold < Platinum < Titanium (efficiency)",
                            "⚠️ NEVER open PSU — capacitors store lethal charge!",
                            "Laser 7 steps: Process → Charge → Expose → Develop → Transfer → Fuse → Clean",
                            "Display: VGA(analog) → DVI → HDMI(audio+video) → DisplayPort → USB-C",
                            "UPS = battery backup during power outage | Surge protector = voltage spike protection"
                        ],
                        whyItMatters: "Storage selection, power management, aur printer troubleshooting — daily IT tasks hain. PSU safety critical hai — NEVER open it!",
                        commonMistakes: [
                            "PSU kholna try karna — LETHAL hai!",
                            "Wrong wattage PSU select karna — system unstable hoga",
                            "Laser printer mein Fusing step miss karna — exam mein aata hai"
                        ],
                        interviewTips: ["Laser printer ke 7 steps batao", "PSU wattage calculation explain karo"],
                        examTips: ["Laser printer steps mnemonic: 'People Can Eat Delicious Turkey For Christmas'", "PSU NEVER open — exam tests safety knowledge", "Fusing = Heat fixes toner to paper"]
                    },
                    trainerNotes: {
                        talkingPoints: ["Show different PSU connectors", "Demo printer troubleshooting"],
                        realExamples: ["Office printer paper jam — most common IT support call"],
                        questionsToAsk: ["Printer troubleshoot kiya hai kabhi?"]
                    }
                }
            ]
        },
        {
            id: "module-4", title: "Virtualization & Cloud", slug: "virtualization-cloud",
            description: "Hypervisors, VMs, containers, cloud service models (IaaS/PaaS/SaaS), and deployment",
            icon: "Cloud", duration: "1-2 weeks", part: "Core 1",
            lessons: [
                {
                    id: "l-4-1", title: "Virtualization & Cloud Computing", slug: "virtualization-cloud-computing", duration: "30 mins",
                    content: {
                        explanation: [
                            "Virtualization = ek physical computer mein multiple virtual computers chalana. Hypervisor software yeh possible banata hai. Type 1 (Bare Metal) = directly hardware pe — ESXi, Hyper-V. Type 2 (Hosted) = OS ke upar — VirtualBox, VMware Workstation.",
                            "Containers vs VMs: VM mein full OS hota hai har ek mein (heavy). Container shared OS use karta hai (Docker) — lighter, faster start. Snapshot = VM ki state save karna (undo point jaisa).",
                            "Cloud: IaaS = Infrastructure (AWS EC2 — aapko server milta hai), PaaS = Platform (Heroku — development platform), SaaS = Software (Gmail, Office 365 — ready to use). Deployment: Public, Private, Hybrid (most popular), Community."
                        ],
                        keyPoints: [
                            "Type 1 hypervisor = Bare Metal (ESXi, Hyper-V) — directly on hardware",
                            "Type 2 hypervisor = Hosted (VirtualBox, VMware WS) — on top of OS",
                            "Container = shared OS (Docker) | VM = full OS each",
                            "IaaS=Infrastructure | PaaS=Platform | SaaS=Ready-to-use software",
                            "Public cloud=shared | Private=dedicated | Hybrid=mix | Community=shared purpose",
                            "VDI = Virtual Desktop Infrastructure — thin clients access virtual desktops"
                        ],
                        whyItMatters: "Cloud computing IT industry ka future hai. Almost har organization cloud use kar rahi hai. IaaS/PaaS/SaaS samajhna interviews aur exam dono ke liye zaroori hai.",
                        commonMistakes: [
                            "Type 1 aur Type 2 hypervisor confuse karna",
                            "Container mein full OS samajhna — container shares host OS",
                            "IaaS, PaaS, SaaS ke examples mix-up karna"
                        ],
                        interviewTips: ["Cloud service models with examples explain karo", "VM vs Container difference batao"],
                        examTips: ["ESXi = Type 1 (bare metal)", "VirtualBox = Type 2 (hosted)", "Microsoft 365 = SaaS, AWS EC2 = IaaS", "Hybrid cloud = most popular deployment model"]
                    },
                    trainerNotes: {
                        talkingPoints: ["Demo VirtualBox VM creation", "Compare IaaS vs PaaS vs SaaS with daily examples"],
                        realExamples: ["Gmail = SaaS, AWS = IaaS — simple daily examples"],
                        questionsToAsk: ["Cloud services use karte ho? Kaunse?"]
                    }
                }
            ]
        },
        {
            id: "module-5", title: "Hardware & Network Troubleshooting", slug: "troubleshooting-hw-nw",
            description: "CompTIA troubleshooting methodology, hardware issues, network problems, and printer fixes",
            icon: "Wrench", duration: "2-3 weeks", part: "Core 1",
            lessons: [
                {
                    id: "l-5-1", title: "Troubleshooting Methodology & Hardware", slug: "troubleshooting-methodology", duration: "35 mins",
                    content: {
                        explanation: [
                            "CompTIA ke 6 troubleshooting steps (BAHUT IMPORTANT — exam mein zaroor aayega): 1) Identify the problem 2) Establish a theory 3) Test the theory 4) Establish a plan of action 5) Verify full system functionality 6) Document findings. Mnemonic: 'I Eat Tasty Pizza Very Daily'.",
                            "Hardware troubleshooting: POST fail = beep codes check karo, RAM reseat karo. BSOD = stop code note karo → Safe Mode → sfc /scannow → chkdsk. Boot fail = BIOS boot order check karo → Startup Repair. Overheating = clean fans + thermal paste + ventilation.",
                            "Network troubleshooting flow: ping 127.0.0.1 (loopback) → ping gateway → ping 8.8.8.8 (internet) → ping google.com (DNS). Commands: ipconfig /all, /release, /renew, /flushdns, ping, tracert, nslookup, netstat."
                        ],
                        keyPoints: [
                            "⭐ 6 Steps: Identify → Theory → Test → Plan → Verify → Document",
                            "POST fail: beep codes, RAM reseat, minimum configuration",
                            "BSOD: note stop code → Safe Mode → sfc /scannow → memtest86 → chkdsk",
                            "Boot fail: check BIOS boot order → Startup Repair → System Restore",
                            "Network: ping 127.0.0.1 → gateway → 8.8.8.8 → domain name",
                            "Printer: test page → connection → queue → driver → spooler restart"
                        ],
                        architecture: {
                            title: "Troubleshooting Methodology",
                            steps: [
                                { step: 1, title: "Identify", description: "Gather info, question user", icon: "Search" },
                                { step: 2, title: "Theory", description: "Probable cause establish karo", icon: "Brain" },
                                { step: 3, title: "Test", description: "Theory test karo, escalate if needed", icon: "Target" },
                                { step: 4, title: "Plan & Fix", description: "Action plan banao, implement karo", icon: "Wrench" },
                                { step: 5, title: "Verify", description: "Full system check karo", icon: "CheckCircle" },
                                { step: 6, title: "Document", description: "Solution document karo", icon: "FileText" }
                            ]
                        },
                        whyItMatters: "Troubleshooting methodology IT support ka sabse important skill hai. Systematic approach se problems faster solve hote hain. Exam mein 29% weight hai — highest!",
                        commonMistakes: [
                            "Steps ka order bhool jaana — mnemonic use karo",
                            "Documentation skip karna — yeh last step hai but important hai",
                            "Complicated fix try karna pehle — ALWAYS simple things first!",
                            "OS reinstall karna bina diagnose kiye — root cause find karo pehle"
                        ],
                        interviewTips: ["6 troubleshooting steps explain karo with real example", "BSOD troubleshoot kaise karoge?"],
                        examTips: ["First step is ALWAYS 'Identify the problem'", "Troubleshooting domain = 29% weight — HIGHEST in Core 1", "'I Eat Tasty Pizza Very Daily' = mnemonic for 6 steps"]
                    },
                    trainerNotes: {
                        talkingPoints: ["Walk through a real troubleshooting scenario", "Demo ping troubleshooting flow"],
                        realExamples: ["User ka laptop slow tha — Task Manager se Disk 100% dikh gaya — SSD upgrade se fix"],
                        questionsToAsk: ["Koi real troubleshooting experience share karo"]
                    }
                }
            ]
        },
        {
            id: "module-6", title: "Operating Systems", slug: "operating-systems",
            description: "Windows, Linux, macOS fundamentals, command line, file systems, and mobile OS",
            icon: "Laptop", duration: "3-4 weeks", part: "Core 2",
            lessons: [
                {
                    id: "l-6-1", title: "OS Basics & Windows Administration", slug: "os-basics-windows", duration: "35 mins",
                    content: {
                        explanation: [
                            "Operating System = Computer ka Manager — hardware aur software ke beech bridge ka kaam karta hai. File Systems: NTFS (Windows, permissions, encryption), FAT32 (4GB file limit), exFAT (cross-platform, no limit), ext4 (Linux), APFS (macOS).",
                            "Windows editions: Home (basic, no BitLocker/Domain/Group Policy), Pro (all features), Enterprise (large organizations). 32-bit = max 4GB RAM, 64-bit = 128GB+ RAM. Important tools: Device Manager (devmgmt.msc), Disk Management (diskmgmt.msc), Event Viewer (eventvwr.msc), Registry Editor (regedit — CAREFUL!).",
                            "Command Prompt commands: dir, cd, md, rd, copy, move, del. System: sfc /scannow (repair files), chkdsk /f /r (disk check), diskpart, gpupdate /force. PowerShell: Get-Process, Get-Service, Set-ExecutionPolicy."
                        ],
                        keyPoints: [
                            "NTFS = permissions + encryption | FAT32 = 4GB limit | exFAT = cross-platform",
                            "Windows Home = NO BitLocker, NO Domain, NO Group Policy",
                            "32-bit = max 4GB RAM | 64-bit = 128GB+ RAM",
                            "sfc /scannow = repair system files | chkdsk /f /r = disk errors",
                            "MSC commands: devmgmt, diskmgmt, services, eventvwr, gpedit, compmgmt",
                            "PowerShell: .ps1 extension | Set-ExecutionPolicy to run scripts"
                        ],
                        whyItMatters: "Windows administration sabse common IT job function hai. CMD commands, system tools, file systems — yeh daily use hota hai troubleshooting mein.",
                        commonMistakes: [
                            "Registry edit bina backup ke karna — system break ho sakta hai",
                            "Group Policy Editor Home edition mein dhundhna — sirf Pro+ mein hai",
                            "FAT32 pe 4GB se badi file copy karne ki koshish — exFAT use karo"
                        ],
                        interviewTips: ["CMD commands list karo jo daily use karte ho", "NTFS vs FAT32 difference batao"],
                        examTips: ["Windows Home lacks: BitLocker, Domain Join, Group Policy, Remote Desktop (host)", "sfc /scannow vs chkdsk — both repair but different things", "gpedit.msc = NOT available in Home edition"]
                    },
                    trainerNotes: {
                        talkingPoints: ["Demo important CMD commands live", "Show Device Manager troubleshooting"],
                        realExamples: ["sfc /scannow fixed a corrupt Windows installation"],
                        questionsToAsk: ["CMD use karte ho daily? Kaunse commands?"]
                    }
                },
                {
                    id: "l-6-2", title: "Linux, macOS & Mobile OS", slug: "linux-macos-mobile", duration: "30 mins",
                    content: {
                        explanation: [
                            "Linux = Open source OS. Distributions: Ubuntu (beginner-friendly), Fedora, CentOS. Commands: ls (list), cd (directory change), pwd (current dir), mkdir, rm, cp, mv, cat, sudo (admin), chmod (permissions), apt install (Ubuntu package manager).",
                            "chmod permissions: rwx (read-write-execute). 755 = owner:rwx, group:r-x, others:r-x. 644 = owner:rw-, group:r--, others:r--. Chown = change ownership.",
                            "macOS: FileVault = BitLocker equivalent (disk encryption), Time Machine = Backup, Spotlight = Search, Keychain = Password manager, APFS = file system. Mobile OS: Android (open, customizable) vs iOS (closed, secure). MDM manages both."
                        ],
                        keyPoints: [
                            "Linux: ls, cd, pwd, mkdir, rm -rf, cp, mv, cat, grep, sudo, chmod, chown",
                            "chmod 755 = rwxr-xr-x | chmod 644 = rw-r--r--",
                            "apt install (Ubuntu/Debian) | yum install (RHEL/CentOS)",
                            "macOS: FileVault=encryption, Time Machine=backup, APFS=filesystem",
                            "Android = Open, Google Play | iOS = Closed, App Store",
                            "Scripting: .bat (CMD), .ps1 (PowerShell), .sh (Bash), .py (Python)"
                        ],
                        whyItMatters: "Multi-platform environment mein kaam karna common hai. Linux servers, macOS creative teams, mobile devices — sab manage karne aane chahiye.",
                        commonMistakes: [
                            "Linux mein rm -rf / galti se run karna — EVERYTHING delete ho jayega!",
                            "chmod 777 dena har file ko — security risk hai",
                            "macOS aur Windows shortcuts confuse karna — Cmd ≠ Ctrl"
                        ],
                        interviewTips: ["Basic Linux commands list karo", "FileVault ka Windows equivalent batao (BitLocker)"],
                        examTips: ["chmod 755 = rwxr-xr-x — exam mein calculations aate hain", "apt = Debian/Ubuntu, yum = RHEL/CentOS", "FileVault (macOS) = BitLocker (Windows)"]
                    },
                    trainerNotes: {
                        talkingPoints: ["Demo basic Linux commands in terminal", "Compare Windows vs macOS features"],
                        realExamples: ["Web servers mostly run on Linux — Ubuntu Server"],
                        questionsToAsk: ["Linux use kiya hai kabhi? Terminal comfortable hai?"]
                    }
                }
            ]
        },
        {
            id: "module-7", title: "Security", slug: "security",
            description: "CIA triad, malware, social engineering, encryption, wireless security, and data protection",
            icon: "Shield", duration: "3-4 weeks", part: "Core 2",
            lessons: [
                {
                    id: "l-7-1", title: "Security Fundamentals & Threats", slug: "security-fundamentals", duration: "35 mins",
                    content: {
                        explanation: [
                            "CIA Triad = Security ka foundation: Confidentiality (secret rakhna), Integrity (accurate rakhna), Availability (accessible rakhna). AAA = Authentication (kaun ho), Authorization (kya access hai), Accounting (kya kiya track karo).",
                            "Malware types: Virus (user action chahiye), Worm (auto-spread — sabse dangerous!), Trojan (disguised as good software), Ransomware (encrypt + pay demand), Spyware (spy karta hai), Keylogger (keyboard record), Rootkit (deep hidden), Adware (unwanted ads).",
                            "Social Engineering: Phishing (fake email), Vishing (voice/phone call fraud), Smishing (SMS fraud), Spear Phishing (targeted attack), Whaling (CEO target). Physical: Tailgating (follow-in without badge), Shoulder Surfing (peek at screen), Dumpster Diving (trash search)."
                        ],
                        keyPoints: [
                            "CIA: Confidentiality + Integrity + Availability",
                            "AAA: Authentication + Authorization + Accounting",
                            "Virus=user action | Worm=auto-spread | Trojan=disguised | Ransomware=encrypt+pay",
                            "Phishing=email | Vishing=voice | Smishing=SMS | Whaling=CEO target",
                            "Password attacks: Brute Force | Dictionary | Rainbow Table",
                            "Network attacks: DDoS, MITM, DNS Poisoning, Evil Twin, ARP Spoof"
                        ],
                        whyItMatters: "Security breaches cost companies millions. IT professional ke liye threats samajhna aur users ko educate karna critical responsibility hai.",
                        commonMistakes: [
                            "Virus aur Worm confuse karna — Worm auto-spreads, Virus needs user action",
                            "Phishing email pe click karna — always verify sender",
                            "MFA mein 2 passwords ko MFA samajhna — must be DIFFERENT categories (know+have+are)"
                        ],
                        interviewTips: ["CIA triad explain karo with examples", "Common malware types aur unke signs batao"],
                        examTips: ["Worm = auto-spread (no user action) — very common question", "MFA = 2+ factors from DIFFERENT categories: Know + Have + Are", "Phishing=email, Vishing=voice, Smishing=SMS — remember the pattern"]
                    },
                    trainerNotes: {
                        talkingPoints: ["Show phishing email examples", "Demo how ransomware works (safe simulation)"],
                        realExamples: ["WannaCry ransomware spread via worm — affected hospitals globally"],
                        questionsToAsk: ["Kabhi phishing email mili hai? Kaise identify ki?"]
                    }
                },
                {
                    id: "l-7-2", title: "Security Measures & Data Protection", slug: "security-measures", duration: "30 mins",
                    content: {
                        explanation: [
                            "Encryption: Symmetric = 1 key (AES — fast, data encryption), Asymmetric = 2 keys (RSA — public + private key pair). MFA = Something you KNOW (password) + HAVE (phone/token) + ARE (fingerprint/face). Minimum 2 DIFFERENT categories required!",
                            "Wireless Security: WEP (NEVER use — crackable), WPA (weak), WPA2/AES-CCMP (good, current standard), WPA3/SAE (best). Enterprise = RADIUS server authentication. Personal = PSK (pre-shared key).",
                            "Data protection: BitLocker = Windows disk encryption (Pro+ only), EFS = file-level encryption (NTFS). Backup types: Full (complete), Incremental (since last ANY backup — fast), Differential (since last FULL backup). 3-2-1 Rule: 3 copies, 2 media types, 1 offsite."
                        ],
                        keyPoints: [
                            "Symmetric encryption = 1 key (AES) | Asymmetric = 2 keys (RSA)",
                            "MFA: Know(password) + Have(phone) + Are(biometric) — min 2 different!",
                            "WEP=NEVER | WPA=weak | WPA2/AES=good | WPA3/SAE=best",
                            "BitLocker = Windows Pro+ disk encryption | EFS = file-level (NTFS)",
                            "Backup: Full | Incremental (since any backup) | Differential (since full)",
                            "3-2-1 Rule: 3 copies, 2 media, 1 offsite | Data destroy: degaussing, shredding"
                        ],
                        whyItMatters: "Data protection compliance (GDPR, HIPAA) require encryption aur proper backup. Security measures implement karna IT admin ka core responsibility hai.",
                        commonMistakes: [
                            "Password + Security Question = NOT MFA (both are 'know' category)",
                            "Incremental vs Differential confuse karna",
                            "Standard format se data permanently delete samajhna — recoverable hai!"
                        ],
                        interviewTips: ["Symmetric vs Asymmetric encryption explain karo", "3-2-1 backup rule batao"],
                        examTips: ["Symmetric = 1 key, Asymmetric = 2 keys — simple but tricky", "Incremental = since last ANY backup, Differential = since last FULL", "Standard format does NOT permanently destroy data!"]
                    },
                    trainerNotes: {
                        talkingPoints: ["Demo BitLocker setup", "Compare backup types with timeline"],
                        realExamples: ["Company lost data because backup was only on same server — no offsite!"],
                        questionsToAsk: ["Backup strategy kya hai aapki organization mein?"]
                    }
                }
            ]
        },
        {
            id: "module-8", title: "Software Troubleshooting", slug: "software-troubleshooting",
            description: "Windows issues, BSOD, malware removal, browser problems, and mobile troubleshooting",
            icon: "Bug", duration: "2-3 weeks", part: "Core 2",
            lessons: [
                {
                    id: "l-8-1", title: "Windows & Malware Troubleshooting", slug: "windows-malware-troubleshooting", duration: "35 mins",
                    content: {
                        explanation: [
                            "Malware Removal — CompTIA 7 Steps (EXAM MEIN ZAROOR AAYEGA): 1) Identify symptoms 2) Quarantine (DISCONNECT from network!) 3) Disable System Restore 4) Remediate (Safe Mode + scan) 5) Schedule scans + Enable System Restore 6) Educate the user 7) Enable updates + Monitor.",
                            "Windows Troubleshooting: Slow PC → Task Manager check CPU/RAM/Disk → SSD upgrade #1 fix. BSOD → note stop code → Safe Mode → sfc /scannow → chkdsk. Boot issues → WinRE (Shift+Restart) → Startup Repair → System Restore → Reset.",
                            "Browser issues: Certificate error = check date/time first, Pop-ups = adware scan, Homepage changed = browser hijacker → reset browser. Mobile: Battery drain = check background apps, Storage full = clear cache + use cloud."
                        ],
                        keyPoints: [
                            "⭐ Malware 7 Steps: Identify → Quarantine → Disable SR → Remediate → Schedule → Educate → Update",
                            "Step 2 QUARANTINE = DISCONNECT from network FIRST!",
                            "Slow PC: Task Manager → check Disk/CPU/RAM → #1 fix = SSD upgrade",
                            "BSOD: stop code → Safe Mode → sfc /scannow → driver rollback",
                            "Safe Mode: Shift+Restart → Troubleshoot → Startup Settings → F4/F5",
                            "Windows Update stuck: net stop wuauserv → delete SoftwareDistribution folder → restart"
                        ],
                        whyItMatters: "Malware removal aur Windows troubleshooting = daily IT support tasks. 7-step malware process exam mein almost guaranteed aata hai!",
                        commonMistakes: [
                            "Malware removal mein network disconnect na karna — spread ho sakta hai!",
                            "System Restore disable na karna — malware restore point mein hide ho sakta hai",
                            "User ko educate na karna — wahi galti dobara karenge"
                        ],
                        interviewTips: ["7-step malware removal process explain karo", "BSOD troubleshooting methodology batao"],
                        examTips: ["FIRST step in malware removal after identifying = QUARANTINE (disconnect!)", "Safe Mode access: Shift + Restart → Troubleshoot → Startup Settings", "sfc /scannow = System File Checker | chkdsk = Disk Check"]
                    },
                    trainerNotes: {
                        talkingPoints: ["Walk through 7-step malware removal live", "Demo Safe Mode boot"],
                        realExamples: ["Receptionist ka browser hijacked — 7-step process se fix kiya"],
                        questionsToAsk: ["Malware remove kiya hai kabhi? Process kya tha?"]
                    }
                }
            ]
        },
        {
            id: "module-9", title: "Operational Procedures", slug: "operational-procedures",
            description: "Documentation, backup strategies, safety, communication, scripting, remote access, and AI in IT",
            icon: "ClipboardList", duration: "2-3 weeks", part: "Core 2",
            lessons: [
                {
                    id: "l-9-1", title: "Documentation, Safety & Professionalism", slug: "documentation-safety", duration: "35 mins",
                    content: {
                        explanation: [
                            "Documentation: Ticketing system (New→In Progress→Pending→Resolved→Closed), Knowledge Base (solutions database), Change Management (Request→Review→Approve→Plan rollback→Implement→Verify→Document). Asset management = track all hardware/software.",
                            "Safety: ESD (Electrostatic Discharge) prevention — anti-static wrist strap, mat, touch metal case, 40-60% humidity. ⚠️ NEVER OPEN PSU — lethal capacitors! Electrical fire = Class C extinguisher. Proper lifting = bend knees, not back. E-waste proper recycling required.",
                            "Communication: Listen → Empathize → Clarify → Solve → Follow up. DON'T: interrupt, blame user, use jargon, promise what you can't deliver. Scripting basics: .bat (CMD), .ps1 (PowerShell), .sh (Bash), .py (Python). Remote: RDP (3389), VNC (5900), SSH (22)."
                        ],
                        keyPoints: [
                            "Ticket lifecycle: New → In Progress → Pending → Resolved → Closed",
                            "Change Management: always have a ROLLBACK PLAN!",
                            "ESD: wrist strap, anti-static mat, touch case, 40-60% humidity",
                            "RTO = how fast recover | RPO = acceptable data loss | MTTR = avg repair time",
                            "Scripting: .bat(CMD) | .ps1(PowerShell) | .sh(Bash) | .py(Python)",
                            "Remote: RDP(3389) | VNC(5900) | SSH(22) | RMM tools for managed service"
                        ],
                        whyItMatters: "Operational procedures = professional IT kaam karna. Documentation, safety, communication — yeh soft skills technical skills jitni important hain. AI in IT support growing rapidly.",
                        commonMistakes: [
                            "Documentation skip karna — baad mein same problem aaye toh reference nahi hoga",
                            "Change management mein rollback plan na banana — agar change fail ho toh?",
                            "ESD protection ignore karna — sensitive components damage ho sakte hain",
                            "Users ke saath jargon use karna — simple language mein batao"
                        ],
                        interviewTips: ["Change management process explain karo", "Difficult customer handle kaise karoge?"],
                        examTips: ["ESD prevention = anti-static wrist strap (most common answer)", "Rollback plan is CRITICAL part of change management", "PSU NEVER open — capacitors store lethal charge even when unplugged"]
                    },
                    trainerNotes: {
                        talkingPoints: ["Demo ticketing system workflow", "Practice communication scenarios"],
                        realExamples: ["Change management saved company when Windows update broke 500 PCs — rollback!"],
                        questionsToAsk: ["Ticketing system use kiya hai? ITSM tool?"]
                    }
                }
            ]
        }
    ]
};
