# 🧠 Chapter 12: Final Revision Master Sheet
## CompTIA A+ Core 1 + Core 2 — Last Day Revision

---

> **🎯 Yeh sheet EXAM KE 1 DIN PEHLE padhne ke liye hai!**
> **Ultra-short notes — sirf KEY POINTS — quick scan karo aur ready ho jao!**

---

# 🔵 CORE 1 (220-1201) ULTRA-SHORT NOTES

---

## 📱 Domain 1: Mobile Devices (15%)

```
RAM → SO-DIMM (laptop) | DIMM (desktop)
DDR4 ≠ DDR3 ≠ DDR5 (physically different!)
Storage: NVMe > SATA SSD > HDD (speed)
M.2 2280 = most common laptop SSD (22mm × 80mm)
Battery: Li-Ion (standard) | Li-Poly (premium) | Swelling = DANGER!
Thunderbolt = USB-C shape + ⚡ symbol (Data+Display+Power)
Docking Station = Multiple peripherals via single cable
IMAP (993) = Sync everywhere | POP3 (995) = Download & delete
SMTP = Send email (25/587) 
MDM = Mobile Device Management (remote wipe, lock, policies)
BYOD = Bring Your Own | COPE = Company Owned, Personal Enabled
2.4 GHz = More range | 5 GHz = More speed | 6 GHz = Most speed
Bluetooth: 10m (v4) | 40m (v5) | NFC: 4cm
GPS = Satellites | A-GPS = Satellites + Cell towers
```

---

## 🌐 Domain 2: Networking (20%)

```
OSI 7 Layers (Bottom→Top): Please Do Not Throw Sausage Pizza Away
  Physical → Data Link → Network → Transport → Session → Presentation → Application

TCP/IP 4 Layers: Network Access → Internet → Transport → Application

Data Units: Bits(L1) → Frames(L2) → Packets(L3) → Segments(L4) → Data(L5-7)

Hub(L1,broadcast) → Switch(L2,MAC) → Router(L3,IP)

TCP = Reliable (SYN→SYN-ACK→ACK) | UDP = Fast, unreliable

CRITICAL PORTS:
  20/21=FTP | 22=SSH | 23=Telnet | 25=SMTP | 53=DNS
  67/68=DHCP | 80=HTTP | 110=POP3 | 143=IMAP | 443=HTTPS
  445=SMB | 3389=RDP | 587=SMTPS | 993=IMAPS | 995=POP3S
  389=LDAP | 636=LDAPS | 161/162=SNMP

IPv4 = 32-bit | IPv6 = 128-bit
Private IPs: 10.x.x.x | 172.16-31.x.x | 192.168.x.x
DHCP = DORA (Discover, Offer, Request, Acknowledge)
DNS = Domain → IP | NAT = Private IP → Public IP

Cables: Cat5e(1G) | Cat6(10G@55m) | Cat6a(10G@100m) | Cat8(40G@30m)
Fiber: SMF(long dist,laser) | MMF(short dist,LED)
PoE: 802.3af(15W) | 802.3at(30W) | 802.3bt(100W)

Wireless: 1,6,11 = 2.4GHz non-overlapping channels
WPA2 = AES-CCMP (good) | WPA3 = SAE (best) | WEP = NEVER!

Troubleshoot: ping 127.0.0.1 → gateway → 8.8.8.8 → google.com
Commands: ipconfig /all | /release | /renew | /flushdns
          ping | tracert | nslookup | netstat -an | pathping
```

---

## 🖥️ Domain 3: Hardware (25%)

```
Motherboard: ATX(big) > mATX(medium) > Mini-ITX(small)
BIOS=old | UEFI=new | CMOS battery=CR2032 | POST=Power-On Self-Test

CPU: Cores=real workers | Threads=virtual | GHz=speed
Intel: i3<i5<i7<i9 | AMD: Ryzen 3<5<7<9
Socket must match: Intel LGA ≠ AMD AM4/AM5
Thermal paste = CPU↔Heatsink (pea-sized, replace 2-3 yrs)

RAM: DDR4=288pin(DIMM)/260pin(SO-DIMM) | DDR5=288pin/262pin
Dual Channel = Same size RAM in matching color slots
Minimum: 8GB | Recommended: 16GB

RAID: 0=Stripe(speed,NO backup) | 1=Mirror(2 disk min)
      5=Stripe+Parity(3 disk min) | 10=Mirror+Stripe(4 disk min)

PSU: AC→DC | 24-pin(mobo) | 8-pin(CPU) | 6/8-pin(GPU) | SATA(drives)
80 PLUS: Bronze<Gold<Platinum<Titanium (efficiency)
⚠️ NEVER OPEN PSU!

Display: VGA(analog) → DVI → HDMI(audio+video) → DisplayPort → USB-C
Laser Printer: Processing→Charging→Exposing→Developing→Transferring→Fusing→Cleaning
  "People Can Eat Delicious Turkey For Christmas"
```

---

## ☁️ Domain 4: Virtualization & Cloud (11%)

```
Hypervisor: Type 1=Bare Metal(ESXi,Hyper-V) | Type 2=Hosted(VirtualBox,VMware WS)
VM: Full OS each | Container: Shared OS (Docker), lighter, faster

Cloud Services: IaaS(infra) → PaaS(platform) → SaaS(software-ready to use)
  IaaS=AWS EC2 | PaaS=Heroku | SaaS=Gmail,Office365

Deployment: Public | Private | Hybrid(most popular) | Community
VDI = Virtual Desktop Infrastructure (thin clients)
Snapshot = VM state save (undo point)
```

---

## 🔧 Domain 5: Troubleshooting (29%)

```
⭐ 6 STEPS: Identify → Establish Theory → Test → Plan → Verify → Document
  "I Eat Tasty Pizza Very Daily"

POST fail: Beep codes | RAM reseat | Minimum config
BSOD: Note stop code → Safe Mode → sfc /scannow → memtest86 → chkdsk
Boot fail: BIOS boot order → Startup Repair → System Restore → Reinstall
Overheat: Clean fans + Thermal paste + Ventilation + Cooling pad
Network: ping flow (127.0.0.1→gateway→8.8.8.8→domain)
Printer: Test page → Connection → Queue → Driver → Spooler restart
```

---

# 🟢 CORE 2 (220-1202) ULTRA-SHORT NOTES

---

## 💻 Domain 1: Operating Systems (28%)

```
File Systems: NTFS(Win,permissions,encrypt) | FAT32(4GB limit) | exFAT(cross-platform)
             ext4(Linux) | APFS(macOS)

Windows: Home(no BitLocker/Domain/GP) vs Pro(all features) vs Enterprise
32-bit = max 4GB RAM | 64-bit = 128GB+ RAM

Tools (msc commands):
  devmgmt.msc=Device Mgr | diskmgmt.msc=Disk Mgmt | services.msc=Services
  eventvwr.msc=Event Viewer | compmgmt.msc=Computer Mgmt | gpedit.msc=Group Policy
  regedit=Registry(CAREFUL!) | msconfig=Boot config | msinfo32=System Info

CMD: dir|cd|md|rd|copy|move|del|ren|cls|type
     sfc /scannow | chkdsk /f /r | diskpart | format | gpupdate /force
     DISM /online /cleanup-image /restorehealth | shutdown /s /r
     ipconfig | ping | tracert | nslookup | netstat | net user

PowerShell: Get-Process | Stop-Process | Get-Service | Get-EventLog | Set-ExecutionPolicy

Linux: ls|cd|pwd|mkdir|rm|cp|mv|cat|sudo|chmod|chown|grep|apt|yum
  chmod 755 = rwxr-xr-x | chmod 644 = rw-r--r--

macOS: FileVault=BitLocker | Time Machine=Backup | APFS | Keychain | Spotlight
Mobile: Android=Open,customizable | iOS=Closed,secure | MDM for both
```

---

## 🔒 Domain 2: Security (28%)

```
⭐ CIA: Confidentiality(secret) + Integrity(accurate) + Availability(accessible)
AAA: Authentication(who) + Authorization(what) + Accounting(track)
Least Privilege = Minimum access needed

MALWARE:
  Virus=user action | Worm=auto-spread | Trojan=disguised
  Ransomware=encrypt+pay | Spyware=spy | Keylogger=keyboard record
  Rootkit=deep hidden | Adware=ads | Botnet=zombie PC | Cryptominer=mine crypto

Social Engineering:
  Phishing=email | Vishing=voice/call | Smishing=SMS
  Spear Phishing=targeted | Whaling=CEO target
  Shoulder Surfing=peek | Tailgating=follow-in | Dumpster Diving=trash search

Password Attacks: Brute Force(all combos) | Dictionary(common words) | Rainbow Table(hashes)
Network Attacks: DDoS | MITM | DNS Poisoning | Evil Twin | ARP Spoof

Encryption: Symmetric=1 key(AES) | Asymmetric=2 keys(RSA,public+private)
MFA: Something you KNOW + HAVE + ARE (min 2 different categories!)
  ❌ Password + Security Q = NOT MFA (both "know")
  ✅ Password + Phone OTP = MFA (know + have)

Wireless: WEP(NEVER!) | WPA(weak) | WPA2/AES(good) | WPA3/SAE(best)
  Personal=PSK(home) | Enterprise=RADIUS(office)

BitLocker=Windows disk encrypt(Pro+) | EFS=File encrypt(NTFS)
FileVault=macOS | HTTPS=Web encrypt

Backup: Full(slow backup,fast restore) | Incremental(fast backup,slow restore)
        Differential(medium both) | 3-2-1 Rule: 3copies,2media,1offsite
Data Destroy: Standard format(recoverable!) → Low-level → Degaussing(HDD) → Shredding(best)
```

---

## 🛠️ Domain 3: Software Troubleshooting (23%)

```
⭐ MALWARE REMOVAL 7 STEPS:
  1.Identify → 2.Quarantine(DISCONNECT!) → 3.Disable System Restore
  → 4.Remediate(Safe Mode+Scan) → 5.Schedule scans+Enable SR
  → 6.Educate user → 7.Enable updates+Monitor

Slow PC: Task Manager → Check CPU/RAM/Disk → SSD upgrade #1 fix
BSOD: Note stop code → Safe Mode → sfc → chkdsk → driver rollback
Boot: WinRE (Shift+Restart) → Startup Repair | System Restore | Reset
Safe Mode: Shift+Restart → Troubleshoot → Startup Settings → F4/F5

Browser: Certificate error=check date/time | Pop-ups=adware scan
         Proxy set by malware=turn OFF | Reset browser if hijacked

Mobile: Battery drain=background apps | Storage full=clear cache+cloud
        Overheating=close heavy apps | No signal=airplane toggle

Windows Update stuck: net stop wuauserv → delete SoftwareDistribution → net start wuauserv
```

---

## 📋 Domain 4: Operational Procedures (21%)

```
Ticket: New→In Progress→Pending→Resolved→Closed
Change Mgmt: Request→Review→Approve→Plan(rollback!)→Implement→Verify→Document
3-2-1 Backup: 3 copies | 2 media types | 1 offsite
GFS: Grandfather(monthly) | Father(weekly) | Son(daily)
RTO=how fast recover | RPO=how much data loss ok | MTTR=avg repair time | MTBF=avg uptime

⚡ ESD: Wrist strap | Anti-static mat | Touch metal case | 40-60% humidity
⚠️ NEVER OPEN PSU (lethal capacitors!)
🔥 Electrical fire = Class C extinguisher | Temperature: 18-27°C

Communication: Listen → Empathize → Clarify → Solve → Follow up
Don't: Interrupt | Blame user | Use jargon | Promise what you can't deliver

Scripting: .bat(CMD) | .ps1(PowerShell) | .sh(Bash) | .py(Python) | .vbs(VBScript)
Remote: RDP(3389) | VNC(5900) | SSH(22) | RMM tools(managed service)
AI in IT: Chatbots, predictive analytics, automated monitoring, ethical use
E-waste: Proper recycling | Batteries=hazardous | NEVER regular trash!
SDS = Safety Data Sheet (chemical safety info)
```

---

# 🎯 PORT NUMBERS — QUICK REFERENCE CARD

```
╔═══════════════════════════════════════════════╗
║              PORT NUMBER CHEAT SHEET          ║
╠══════╦════════════╦══════════════════════════╣
║ PORT ║ PROTOCOL   ║ SERVICE                  ║
╠══════╬════════════╬══════════════════════════╣
║  20  ║ TCP        ║ FTP Data                 ║
║  21  ║ TCP        ║ FTP Control              ║
║  22  ║ TCP        ║ SSH (Secure Shell)       ║
║  23  ║ TCP        ║ Telnet (insecure!)       ║
║  25  ║ TCP        ║ SMTP (Send email)        ║
║  53  ║ TCP/UDP    ║ DNS                      ║
║  67  ║ UDP        ║ DHCP Server              ║
║  68  ║ UDP        ║ DHCP Client              ║
║  80  ║ TCP        ║ HTTP                     ║
║ 110  ║ TCP        ║ POP3                     ║
║ 143  ║ TCP        ║ IMAP                     ║
║ 161  ║ UDP        ║ SNMP                     ║
║ 389  ║ TCP        ║ LDAP                     ║
║ 443  ║ TCP        ║ HTTPS                    ║
║ 445  ║ TCP        ║ SMB                      ║
║ 587  ║ TCP        ║ SMTP Secure (STARTTLS)   ║
║ 636  ║ TCP        ║ LDAPS                    ║
║ 993  ║ TCP        ║ IMAPS                    ║
║ 995  ║ TCP        ║ POP3S                    ║
║ 3389 ║ TCP        ║ RDP                      ║
║ 5900 ║ TCP        ║ VNC                      ║
╚══════╩════════════╩══════════════════════════╝
```

---

# 📖 ACRONYM BUSTER — Top 100

| Acronym | Full Form |
|---|---|
| BIOS | Basic Input/Output System |
| UEFI | Unified Extensible Firmware Interface |
| POST | Power-On Self-Test |
| CPU | Central Processing Unit |
| GPU | Graphics Processing Unit |
| RAM | Random Access Memory |
| ROM | Read-Only Memory |
| SSD | Solid State Drive |
| HDD | Hard Disk Drive |
| NVMe | Non-Volatile Memory Express |
| PSU | Power Supply Unit |
| UPS | Uninterruptible Power Supply |
| RAID | Redundant Array of Independent Disks |
| NTFS | New Technology File System |
| ESD | Electrostatic Discharge |
| DHCP | Dynamic Host Configuration Protocol |
| DNS | Domain Name System |
| NAT | Network Address Translation |
| TCP | Transmission Control Protocol |
| UDP | User Datagram Protocol |
| OSI | Open Systems Interconnection |
| IP | Internet Protocol |
| MAC | Media Access Control |
| LAN | Local Area Network |
| WAN | Wide Area Network |
| WLAN | Wireless Local Area Network |
| VPN | Virtual Private Network |
| SSH | Secure Shell |
| RDP | Remote Desktop Protocol |
| FTP | File Transfer Protocol |
| HTTP | Hypertext Transfer Protocol |
| HTTPS | HTTP Secure |
| SMTP | Simple Mail Transfer Protocol |
| IMAP | Internet Message Access Protocol |
| POP3 | Post Office Protocol v3 |
| LDAP | Lightweight Directory Access Protocol |
| SNMP | Simple Network Management Protocol |
| SMB | Server Message Block |
| PoE | Power over Ethernet |
| AP | Access Point |
| SSID | Service Set Identifier |
| WPA | Wi-Fi Protected Access |
| AES | Advanced Encryption Standard |
| MFA | Multi-Factor Authentication |
| DDoS | Distributed Denial of Service |
| MITM | Man in the Middle |
| CIA | Confidentiality, Integrity, Availability |
| AAA | Authentication, Authorization, Accounting |
| IaaS | Infrastructure as a Service |
| PaaS | Platform as a Service |
| SaaS | Software as a Service |
| VDI | Virtual Desktop Infrastructure |
| VM | Virtual Machine |
| MDM | Mobile Device Management |
| BYOD | Bring Your Own Device |
| RTO | Recovery Time Objective |
| RPO | Recovery Point Objective |
| MTTR | Mean Time to Repair |
| MTBF | Mean Time Between Failures |
| SDS | Safety Data Sheet |
| UAC | User Account Control |
| GPO | Group Policy Object |
| EFS | Encrypting File System |
| APFS | Apple File System |
| SMF | Single-Mode Fiber |
| MMF | Multi-Mode Fiber |
| UTP | Unshielded Twisted Pair |
| STP | Shielded Twisted Pair |
| SO-DIMM | Small Outline DIMM |

---

# 🏆 LAST DAY EXAM TIPS

```
╔══════════════════════════════════════════════════╗
║              EXAM DAY GOLDEN RULES               ║
╠══════════════════════════════════════════════════╣
║                                                  ║
║  ⏰ BEFORE EXAM:                                 ║
║  • Raat ko achhi neend lo (8 hours minimum)      ║
║  • Subah halka naashta karo                      ║
║  • Valid ID le ke jao (Passport/Aadhar)          ║
║  • 15 min pehle pahuncho                         ║
║  • Relax — aapne preparation ki hai! 💪          ║
║                                                  ║
║  📝 DURING EXAM:                                 ║
║  • PBQs (Performance-Based) SKIP karo pehle      ║
║    → MCQs pehle solve karo → PBQs baad mein      ║
║  • 90 questions, 90 minutes = 1 min per question ║
║  • Difficult question? FLAG karo, aage badho     ║
║  • Read EACH option carefully — tricky options!   ║
║  • "BEST" answer dhundho, not just correct       ║
║  • Eliminate obviously wrong answers first        ║
║  • Time manage karo — last 15 min revision       ║
║  • NEVER leave blank — guess karke bhi mark karo ║
║                                                  ║
║  🎯 EXAM STRATEGY:                               ║
║  • First pass: Easy questions answer karo         ║
║  • Second pass: Flagged questions attempt karo    ║
║  • Third pass: Review all answers                 ║
║  • Trust your first instinct (usually correct!)   ║
║                                                  ║
║  💡 TRICKY QUESTION TIPS:                        ║
║  • "BEST" answer → Most secure/professional      ║
║  • "FIRST" step → Usually "Identify" or "Ask"    ║
║  • "MOST LIKELY" → Common cause first             ║
║  • Troubleshooting → Always try SIMPLE fix first  ║
║  • Security → When in doubt, choose MORE secure   ║
║                                                  ║
╚══════════════════════════════════════════════════╝
```

---

## 🌟 Final Message

```
╔══════════════════════════════════════════════════╗
║                                                  ║
║   Aapne poori mehnat se padhai ki hai.           ║
║   Aap TAYAAR hain! ✅                            ║
║                                                  ║
║   Yaad rakhna:                                   ║
║   • IT field mein har koi kabhi beginner tha      ║
║   • Certification bas starting point hai          ║
║   • Real learning job pe hogi                     ║
║   • Galtiyan se seekhna — yeh normal hai          ║
║   • Aap yeh kar sakte hain! 💪🚀                 ║
║                                                  ║
║   Best of luck for your CompTIA A+ Exam! 🎯      ║
║                                                  ║
║   "The expert in anything was once a beginner."   ║
║                          — Helen Hayes            ║
║                                                  ║
╚══════════════════════════════════════════════════╝
```

---

*🧠 REVISION COMPLETE! AAP READY HAIN! ALL THE BEST! 🎉🏆*
