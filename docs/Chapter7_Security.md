# 🔒 Chapter 7: Security
## CompTIA A+ Core 2 (220-1202) — Domain 2.0 (28%) — HIGHEST WEIGHT!

---

> **🎯 Yeh Core 2 ka SABSE IMPORTANT chapter hai — 28%!**
> - Cyber threats kya hain aur kaise bachein
> - Malware types aur removal
> - Security measures — passwords, encryption, MFA
> - Physical security
> - IT professional ke liye security bahut zaroori skill hai!

---

## 7.1 Security Fundamentals

### 🔹 Concept Explanation

### 7.1.1 CIA Triad — Security Ki Foundation ⭐

**CIA = Confidentiality, Integrity, Availability**

```
         ╔═══════════════════╗
         ║  CONFIDENTIALITY  ║
         ║ (Sirf authorized  ║
         ║  log dekh sake)   ║
         ╚════════╤══════════╝
                  │
    ╔═════════════╪═════════════╗
    ║             │             ║
╔═══╧════╗              ╔══════╧═════╗
║INTEGRITY║              ║AVAILABILITY║
║(Data sahi║             ║(Jab chahiye║
║ rahna    ║             ║ tab mile)  ║
║chahiye)  ║             ║            ║
╚══════════╝             ╚════════════╝
```

| Principle | Matlab | Example |
|---|---|---|
| **Confidentiality** | Data SIRF authorized log dekh sakein | Password protection, encryption |
| **Integrity** | Data mein koi UNAUTHORIZED change na ho | Hashing, digital signatures |
| **Availability** | Jab data chahiye TAB available ho | Backup, redundancy, UPS |

**Real-Life Example:**
> Aapka bank account:
> - **Confidentiality:** Sirf aap aur bank aapka balance dekh sake ✅
> - **Integrity:** Koi aapke balance ko secretly change na kar sake ✅
> - **Availability:** Jab ATM jao toh kaam kare, bank ka server down na ho ✅

### 7.1.2 AAA Framework

| A | Full Form | Kya Karta Hai | Example |
|---|---|---|---|
| **Authentication** | कौन हो? | Identity verify | Username + Password |
| **Authorization** | क्या कर सकते हो? | Permissions check | Admin vs Normal user |
| **Accounting** | क्या किया? | Actions log/track | Audit logs |

### 7.1.3 Principle of Least Privilege

> Har user ko SIRF UTNA access do jitna uske kaam ke liye zaroori hai. Zyada nahi!
>
> Example: Receptionist ko sirf appointment system ka access chahiye — ussey server room ka access mat do!

### 7.1.4 Defense in Depth

```
Multiple layers of security (like an onion 🧅):

Layer 1: ──── Physical Security (Locks, CCTV, Guards)
Layer 2: ──── Network Security (Firewall, IDS/IPS)
Layer 3: ──── Host Security (Antivirus, OS hardening)
Layer 4: ──── Application Security (Updates, patches)
Layer 5: ──── Data Security (Encryption, backups)
Layer 6: ──── User Training (Awareness, policies)

Ek layer fail ho gayi? Koi nahi — baaki layers protect karegi! ✅
```

---

## 7.2 Threats aur Attacks

### 7.2.1 Malware Types ⭐⭐⭐

**Malware = Malicious Software = Bura Software**

| Malware Type | Kya Karta Hai | Real Example |
|---|---|---|
| **Virus** | File se attach hota hai, spread karta hai (user action needed) | Email attachment se aata hai |
| **Worm** | Khud se spread hota hai (no user action!) | Network se automatically failta hai |
| **Trojan** | Achha dikhta hai but andar se bura | Free game download kiya — andar virus tha! |
| **Ransomware** | Files LOCK kar deta hai — paisa maangta hai! | "Pay $500 in Bitcoin to unlock your files" |
| **Spyware** | Chupke se aapki jaasusi karta hai | Browsing history, passwords chura leta hai |
| **Keylogger** | Keyboard ki HAR KEY record karta hai | Aapke passwords steal |
| **Rootkit** | OS ke deep level pe chhup jaata hai | Bahut mushkil detect karna |
| **Adware** | Unwanted ads dikhata hai | Pop-up ads baar baar aate hain |
| **Botnet** | Aapke PC ko zombie bana deta hai | Hacker aapke PC se DDoS attack karta hai |
| **Fileless Malware** | Memory mein chalta hai, file nahi banata | Antivirus se bachna easy |
| **Cryptominer** | Aapke PC se cryptocurrency mine karta hai | PC slow, fan tez, bijli bill zyada |

```
Malware Family Tree:

                    MALWARE
                       │
        ┌──────────────┼──────────────┐
        │              │              │
    Self-Spread    Stealth        Money-Based
    ┌───┴───┐    ┌───┴───┐      ┌───┴───┐
    │ Virus │    │Rootkit│      │Ransom-│
    │ Worm  │    │Spyware│      │ware   │
    └───────┘    │Keylog │      │Crypto │
                 │Fileles│      │Adware │
                 └───────┘      └───────┘
    
    Trojan → Disguise mein aata hai (any category)
    Botnet → PC ko slave bana deta hai
```

### 7.2.2 Social Engineering

**Social Engineering = LOG ko manipulate karke security todna (technology nahi — LOGO ko fool karna)**

| Attack | Kaise Karta Hai | Example |
|---|---|---|
| **Phishing** | Fake email/website se credentials churana | "Your SBI account is locked — click here to verify" |
| **Spear Phishing** | Specific person ko target karna | CEO ko fake email — "Hi Rahul, pls wire $50K" |
| **Whaling** | Very important person (CEO) ko target | Board member ko targeted attack |
| **Vishing** | Phone call se fraud | "Main bank se bol raha, OTP batao" |
| **Smishing** | SMS se fraud | "Congratulations! 50 lakh jeete — link click karo" |
| **Shoulder Surfing** | Peeche se screen/keyboard dekhna | ATM pe peeche khade hokar PIN dekhna 👀 |
| **Tailgating** | Peeche-peeche restricted area mein ghusna | Badge holder ke peeche office mein chale aana |
| **Dumpster Diving** | Kachre mein se information dhundhna | Office ka kachra check karna for passwords |
| **Impersonation** | Kisi aur ban ke aana | "Main IT department se hoon, password do" |

**Practical Scenario:**
> *"Ek employee ne email mein link click kar diya — ab uska computer lock ho gaya aur Bitcoin maang raha hai"*
>
> Yeh **Phishing + Ransomware** attack hai!
> 1. Computer TURANT network se disconnect karo (LAN cable nikalo/Wi-Fi off)
> 2. IT security team ko inform karo
> 3. Paisa MAT do — guarantee nahi ki files milegi
> 4. Backup se restore karo
> 5. Scan all connected systems
> 6. Employee training karwao — future prevention

### 7.2.3 Password Attacks

| Attack | How | Defense |
|---|---|---|
| **Brute Force** | Sab combinations try karta hai (a,b,c...aa,ab,ac...) | Long complex password + lockout policy |
| **Dictionary** | Common words try karta hai (password, 123456, admin) | Don't use common words |
| **Rainbow Table** | Pre-computed hash values se match karta hai | Salted hashing |
| **Credential Stuffing** | Leaked passwords doosri sites pe try | Different password har site pe! |

### 7.2.4 Network Attacks

| Attack | What | Defense |
|---|---|---|
| **DDoS** | Millions of requests → server crash | Load balancer, CDN, DDoS protection |
| **MITM** | Beech mein baith ke data read karta hai | HTTPS, VPN, certificate pinning |
| **DNS Poisoning** | Fake website pe redirect | DNSSEC, secure DNS |
| **ARP Spoofing** | MAC address table corrupt | Dynamic ARP inspection |
| **Evil Twin** | Fake Wi-Fi hotspot | Verify SSID, use VPN |
| **Deauthentication** | Wi-Fi clients forcefully disconnect | WPA3, 802.11w |

---

## 7.3 Security Measures

### 7.3.1-7.3.2 Firewall & Antivirus

**Firewall = Network ka SECURITY GUARD**
- Rules-based: Allow/Block traffic based on IP, Port, Protocol
- **Windows Firewall:** Built-in, enable karo!
- **Hardware Firewall:** Router mein built-in firewall

**Antivirus = Malware ka DETECTOR aur KILLER**
- Real-time protection ON rakhein
- Regular signature updates
- Full scan weekly karo
- Windows Defender = Free aur achha ✅

### 7.3.3 Encryption

| Type | How | Example |
|---|---|---|
| **Symmetric** | Ek hi key se lock aur unlock | AES (fast, bulk data ke liye) |
| **Asymmetric** | Do keys — Public (lock) + Private (unlock) | RSA (secure communication) |

```
Symmetric (Single Key):
Sender ──[Key 🔑]──→ LOCK 🔒 ──[Same Key 🔑]──→ Receiver UNLOCK
Both sides same key rakhte hain

Asymmetric (Key Pair):
Sender ──[Receiver's PUBLIC Key 🔓]──→ ENCRYPTED
Receiver ──[Receiver's PRIVATE Key 🔑]──→ DECRYPTED
Public key sabko pata, Private key sirf owner ke paas!
```

**Encryption Use Cases:**
- **BitLocker** — Full disk encryption (Windows Pro+)
- **EFS** — File-level encryption (NTFS pe)
- **FileVault** — macOS disk encryption
- **HTTPS** — Web traffic encryption (SSL/TLS)
- **VPN** — Network traffic encryption

### 7.3.5 Multi-Factor Authentication (MFA) ⭐

**MFA = Ek se zyada tarike se identity prove karo**

```
Authentication Factors:

Something you KNOW     → Password, PIN
Something you HAVE     → Phone, Smart Card, Token
Something you ARE      → Fingerprint, Face, Iris (Biometric)
Somewhere you ARE      → GPS location
Something you DO       → Typing pattern, gait

Two-Factor = 2 DIFFERENT categories se
  ✅ Password + OTP on phone (Know + Have)
  ❌ Password + Security question (both are Know!)
```

**Real-Life Example:**
> ATM se paisa nikalna = 2FA!
> - **Something you HAVE** → ATM card
> - **Something you KNOW** → PIN
> Dono chahiye — sirf card ya sirf PIN se nahi chalega!

---

## 7.4 Wireless Security

| Protocol | Year | Security Level | Current Status |
|---|---|---|---|
| **WEP** | 1999 | ❌ Very Weak (minutes mein crack) | NEVER USE! |
| **WPA** | 2003 | ⚠️ Weak (TKIP) | Outdated |
| **WPA2** | 2004 | ✅ Good (AES-CCMP) | Current standard |
| **WPA3** | 2018 | ✅✅ Best (SAE) | Latest, recommended |

**WPA2 Types:**
- **WPA2-Personal (PSK)** — Shared password (home use)
- **WPA2-Enterprise** — RADIUS server se authenticate (office use)

---

## 7.5 Physical Security

| Measure | Purpose |
|---|---|
| **Cable Locks** | Laptop ko desk se lock karo |
| **Server Room Lock** | Biometric/badge access only |
| **CCTV** | Surveillance cameras |
| **Mantrap** | Double door — ek khulta hai tab doosra lock |
| **Badge/Key Card** | Swipe card for building entry |
| **Guard** | Security personnel |
| **Bollards** | Vehicle barriers outside building |

---

## 7.6 Data Security

### Backup Types:
| Type | Kya Backup Karta | Speed | Restore Speed |
|---|---|---|---|
| **Full** | SARI files har baar | Slowest | Fastest |
| **Incremental** | Sirf CHANGE hui files (last backup se) | Fastest | Slowest (need all) |
| **Differential** | Sirf CHANGE hui files (last FULL se) | Medium | Medium (need full + last diff) |

```
Example: Monday Full backup, then daily changes:

Day:     Mon    Tue    Wed    Thu    Fri
Full:    [ALL]
Incr:           [+new] [+new] [+new] [+new]  (sirf naya)
Diff:           [+new] [+Mon  [+Mon  [+Mon   (sab naya since Mon)
                        +Tue]  +Tue   +Tue
                               +Wed]  +Wed
                                      +Thu]
                                      
Restore Wednesday (Incremental): Need Mon + Tue + Wed
Restore Wednesday (Differential): Need Mon + Wed only
```

### Data Destruction Methods:
| Method | How | Level |
|---|---|---|
| **Standard Format** | Quick format | Data recoverable! ⚠️ |
| **Low-level Format** | Overwrite with zeros | More secure |
| **Degaussing** | Magnetic field se erase (HDD only) | Very secure |
| **Shredding** | Physical destruction | Most secure ✅ |
| **Crypto Erase** | Encryption key delete | Very secure (SSD) |

---

## 7.7 Workstation Security

**Password Policy Best Practices:**
- Minimum 8-12 characters
- Mix: Uppercase + Lowercase + Numbers + Symbols
- Change every 90 days
- Account lockout after 5 failed attempts
- No reuse of last 5 passwords

**Windows Security Settings:**
- **Windows Defender Firewall** → ON rakhein
- **Windows Defender Antivirus** → Real-time protection ON
- **BitLocker** → Disk encrypt karo (Pro ke liye)
- **UAC** (User Account Control) → ON rakhein
- **Windows Update** → Regular updates install karo
- **Screensaver lock** → 5-10 min inactivity pe lock

---

## 📊 MIND MAP — Chapter 7

```
                    🔒 SECURITY
                        │
      ┌─────────────────┼─────────────────┐
      │                 │                 │
 ┌────▼────┐     ┌─────▼─────┐    ┌─────▼─────┐
 │CONCEPTS │     │  THREATS  │    │ DEFENSES  │
 └────┬────┘     └─────┬─────┘    └─────┬─────┘
      │                │                 │
 CIA Triad:       Malware:          Firewall
 Confid.          Virus, Worm       Antivirus
 Integrity        Trojan, Ransom    Encryption
 Availab.         Spyware, Root     (Sym/Asym)
                  Keylogger         VPN
 AAA:                               MFA
 Authen.         Social Eng:       BitLocker/EFS
 Author.         Phishing           
 Account.        Vishing           Wireless:
                  Tailgating        WPA2/WPA3
 Least           Shoulder Surf     
 Privilege                         Physical:
                  Network:         Locks, CCTV
 Defense in      DDoS, MITM       Mantrap
 Depth           DNS Poison        
                  Evil Twin        Data:
                                   Backup (F/I/D)
                  Password:        Destruction
                  Brute Force      DLP
                  Dictionary
```

---

## 💼 Interview Questions

### Beginner:
1. **Q:** CIA Triad kya hai?
   **A:** Security ki foundation — Confidentiality (secret rakhna), Integrity (data sahi rakhna), Availability (jab chahiye tab mile).

2. **Q:** Phishing kya hai?
   **A:** Fake email/message bhej ke user se sensitive info (password, card details) churana. Example: fake bank email saying "verify your account."

### Intermediate:
3. **Q:** Symmetric aur Asymmetric encryption mein kya difference hai?
   **A:** Symmetric = ek key for both lock/unlock (AES), fast. Asymmetric = two keys (public+private), slower but more secure for key exchange (RSA).

4. **Q:** Full, Incremental, aur Differential backup mein kya difference hai?
   **A:** Full = sab backup. Incremental = last backup se changes. Differential = last full backup se changes. Restore mein Incremental slowest (sab chahiye), Differential moderate.

### Scenario-Based:
5. **Q:** Office mein ek employee ka PC suspicious behave kar raha hai — pop-ups, slow, unknown processes. Kya karoge?
   **A:** (1) Network se disconnect, (2) Full antivirus scan, (3) Task Manager se suspicious processes check, (4) Safe Mode mein boot karke scan, (5) Malware removal tool use, (6) Agar nahi solve hua toh clean OS install from backup, (7) Document aur report karo.

---

## 📋 Quick Notes

```
══════════════════════════════════════════
    CHAPTER 7: SECURITY — QUICK NOTES
══════════════════════════════════════════
✅ CIA = Confidentiality, Integrity, Availability
✅ AAA = Authentication, Authorization, Accounting
✅ Least Privilege = Minimum access rights needed
✅ Virus needs user action, Worm spreads automatically
✅ Ransomware = Files lock, pay demand (DON'T pay!)
✅ Phishing = Fake email, Vishing = Fake call, Smishing = Fake SMS
✅ Brute Force = All combos try, Dictionary = Common words try
✅ Symmetric encryption = 1 key (AES), Asymmetric = 2 keys (RSA)
✅ MFA = 2+ different factor types (Know + Have + Are)
✅ WPA2 = Good, WPA3 = Best (WEP = NEVER USE!)
✅ WPA2-Personal = Home (PSK), WPA2-Enterprise = Office (RADIUS)
✅ BitLocker = Windows Pro+ disk encryption
✅ Full backup = Slowest backup, fastest restore
✅ Incremental = Fastest backup, slowest restore
✅ Differential = Middle ground
✅ Degaussing = Magnetic erase (HDD only, NOT SSD)
✅ UAC, Firewall, Updates = ALWAYS keep ON!
══════════════════════════════════════════
```

---

## 🃏 Flashcards

| # | Q | A |
|---|---|---|
| 1 | CIA mein C ka matlab? | Confidentiality |
| 2 | Worm aur Virus mein key difference? | Worm automatically spread, Virus needs user action |
| 3 | Ransomware kya karta hai? | Files encrypt/lock karke paisa maangta hai |
| 4 | Phishing ka defence? | Check sender email, don't click suspicious links, verify |
| 5 | WPA3 mein kaunsa protocol use hota hai? | SAE (Simultaneous Authentication of Equals) |
| 6 | BitLocker kismein milta hai? | Windows Pro, Enterprise, Education |
| 7 | MFA ke 3 factors? | Something you Know, Have, Are |
| 8 | AES kaun sa encryption type hai? | Symmetric |
| 9 | RSA kaun sa encryption type hai? | Asymmetric |
| 10 | Incremental backup kya save karta hai? | Sirf changes since last backup (any type) |

---

## 🔨 Hands-on Practice

1. **Windows Firewall** Settings explore karo — rules dekho
2. **Windows Defender** se Full Scan run karo
3. **BitLocker status** check karo: CMD → `manage-bde -status`
4. **Password Manager** install karo (Bitwarden — free!) — strong passwords use karo
5. **2FA enable karo** — Google, Email, Banking accounts pe
6. **Phishing test** — KnowBe4 ka free phishing quiz try karo
7. **Event Viewer** mein security logs dekho

---

*🔒 Chapter 7 Complete! Next: Chapter 8 — Software Troubleshooting! 🛠️*
