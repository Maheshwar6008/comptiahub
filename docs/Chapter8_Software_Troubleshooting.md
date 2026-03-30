# 🛠️ Chapter 8: Software Troubleshooting
## CompTIA A+ Core 2 (220-1202) — Domain 3.0 (23%)

---

> **🎯 Is chapter mein aap seekhenge:**
> - Windows ke common problems aur solutions
> - Browser issues fix karna
> - Malware detect aur remove karna (Best Practice Process)
> - Mobile device troubleshooting
> - Security issues fix karna

---

## 8.1 Windows Troubleshooting

### 🔹 Common Windows Problems & Solutions

### 8.1.1 Slow Performance

**"Computer bahut slow chal raha hai" — sabse common complaint!**

```
Slow PC Diagnostic Flowchart:

Task Manager kholo (Ctrl+Shift+Esc)
         │
    ┌────┼────┐
    ↓    ↓    ↓
  CPU   RAM   Disk
  100%? 100%? 100%?
    │    │     │
    ↓    ↓     ↓
  Check  Too   HDD?
  which  many  → SSD
  process apps  upgrade!
  is     open?  
  using  → Close OR
  most   → Upgrade RAM
```

**Solutions:**
| Problem | Solution |
|---|---|
| Too many startup programs | Task Manager → Startup tab → Disable unnecessary |
| Too many browser tabs | Close unused tabs, use tab management extensions |
| Low RAM | Upgrade RAM (8GB minimum recommend karo) |
| HDD instead of SSD | SSD upgrade = sabse bada improvement! |
| Malware/Virus | Full antivirus scan run karo |
| Windows updates pending | Updates install karo, restart karo |
| Temp files | Disk Cleanup ya `cleanmgr` run karo |
| Fragmented HDD | Defragment karo (SSD pe mat karo!) |
| Visual effects | System Properties → Advanced → Performance → Adjust for best performance |

### 8.1.2 BSOD (Blue Screen) — Detailed

**Common Stop Codes & Fixes:**
| Stop Code | Likely Cause | Fix |
|---|---|---|
| WHEA_UNCORRECTABLE_ERROR | Hardware (CPU/RAM) | Hardware diagnostics, check temps |
| KERNEL_DATA_INPAGE_ERROR | HDD/SSD failure | chkdsk /f /r, replace drive |
| SYSTEM_SERVICE_EXCEPTION | Driver conflict | Safe Mode → Update/rollback driver |
| DPC_WATCHDOG_VIOLATION | SSD driver issue | Update SSD firmware/driver |
| WIN32K_POWER_WATCHDOG_TIMEOUT | Display driver | Update GPU drivers |

### 8.1.3 Boot Issues — Recovery Options

**Windows Recovery Environment (WinRE):**
```
Access: Hold Shift + Click Restart, OR boot from USB

Windows Recovery Options:
├── System Restore → Previous restore point pe wapas jao
├── Startup Repair → Automatic boot fix
├── Command Prompt → Manual repair commands
├── Uninstall Updates → Last update remove karo
├── System Image Recovery → Full image se restore
├── UEFI Settings → BIOS/UEFI open karo
└── Reset this PC → Factory reset
    ├── Keep my files → Apps remove, files rakho
    └── Remove everything → Full wipe + reinstall
```

**Safe Mode:**
- Windows starts with MINIMUM drivers
- Use: Driver problems, malware removal, troubleshooting
- Access: Shift + Restart → Troubleshoot → Startup Settings → F4 (Safe Mode) ya F5 (Safe Mode with Networking)

**Boot Configuration (bcdedit):**
```cmd
bcdedit /enum           → Current boot config dekho
bcdedit /set safeboot   → Safe boot enable
bcdedit /deletevalue safeboot → Safe boot disable
bootrec /fixmbr         → Master Boot Record fix
bootrec /fixboot         → Boot sector fix
bootrec /rebuildbcd     → BCD rebuild
```

### 8.1.4-8.1.6 Application & Service Issues

| Problem | Symptoms | Solution |
|---|---|---|
| **App crash** | "Not responding", force close | Restart app, update, reinstall, compatibility mode |
| **Service failure** | Feature not working | services.msc → Restart service, set to Automatic |
| **Windows Update stuck** | Updates downloading forever | `net stop wuauserv` → delete SoftwareDistribution folder → `net start wuauserv` |
| **Permission denied** | "Access denied" error | Run as admin, check NTFS permissions |
| **DLL missing** | "xyz.dll not found" | Reinstall app, sfc /scannow |
| **.NET error** | App won't start | Repair/reinstall .NET Framework |

---

## 8.2 Browser Troubleshooting

### Common Browser Issues:

| Problem | Cause | Solution |
|---|---|---|
| **Certificate error** | Expired/invalid SSL cert, wrong date/time | Check system date/time, continue if trusted |
| **Slow browser** | Too many extensions, cache full | Clear cache, disable extensions |
| **Redirects** | Malware, DNS hijack | Malware scan, check DNS settings, reset browser |
| **Pop-ups** | Adware, weak pop-up blocker | Enable pop-up blocker, scan for adware |
| **Can't reach site** | DNS, proxy settings | Clear DNS cache, check proxy settings, try different browser |
| **Profile corruption** | Browser crashes frequently | Create new profile, backup bookmarks |

**Browser Reset Steps:**
```
Chrome:  Settings → Reset settings → Restore to defaults
Firefox: Help → More Troubleshooting Info → Refresh Firefox
Edge:    Settings → Reset settings → Restore to defaults
```

**Proxy Settings Check:**
```
Windows: Settings → Network → Proxy → Should be OFF (unless company)
Browser: Usually follows system proxy settings
 
If malware set proxy → Internet nahi chalega → Proxy OFF karo
```

---

## 8.3 Malware Removal — Best Practice Process ⭐⭐⭐

**CompTIA ka OFFICIAL Malware Removal Process — EXAM MEIN AAYEGA!**

```
╔══════════════════════════════════════════════════╗
║    MALWARE REMOVAL — 7 STEP BEST PRACTICE       ║
╠══════════════════════════════════════════════════╣
║                                                  ║
║  1. IDENTIFY malware symptoms                    ║
║     → Slow PC, pop-ups, unknown programs         ║
║                                                  ║
║  2. QUARANTINE infected system                   ║
║     → Network se DISCONNECT karo!                ║
║                                                  ║
║  3. DISABLE System Restore                       ║
║     → Malware restore point mein chhup sakta hai ║
║                                                  ║
║  4. REMEDIATE (Remove malware)                   ║
║     → Safe Mode mein boot karo                   ║
║     → Antivirus update karo                      ║
║     → Full scan + removal                        ║
║     → Anti-malware tool bhi chalaao              ║
║                                                  ║
║  5. SCHEDULE scans & ENABLE System Restore       ║
║     → Regular scans schedule karo                ║
║     → System Restore wapas ON karo               ║
║                                                  ║
║  6. EDUCATE the user                             ║
║     → User ko batao kaise avoid karein           ║
║     → Don't click unknown links!                 ║
║                                                  ║
║  7. ENABLE updates & MONITOR                     ║
║     → Windows Update ON karo                     ║
║     → Antivirus definitions update               ║
║                                                  ║
╚══════════════════════════════════════════════════╝
```

**Memory Trick:** "**I** **Q**uickly **D**isable **R**ansomware, **S**ecure **E**verything, **E**nough **M**alware!"
> Identify → Quarantine → Disable SR → Remediate → Schedule/Enable → Educate → Enable updates/Monitor

**Malware Symptoms to Identify:**
- PC suddenly slow ho gaya
- Pop-ups / Ads zyada aa rahe hain
- Unknown programs installed dikh rahe hain
- Browser homepage change ho gaya
- Friends ko aapke account se spam messages ja rahe hain
- Antivirus disabled ho gaya automatically
- Files encrypt/lock ho gaye (Ransomware!)
- Disk space suddenly kam ho gayi
- Network traffic abnormally high

**Practical Scenario:**
> *"Employee ka screen pe 'Your files are encrypted — pay 2 Bitcoin' aa raha hai"*
>
> Step 1: **Identify** — Ransomware hai
> Step 2: **Quarantine** — IMMEDIATELY network cable nikalo, Wi-Fi off karo
> Step 3: **Disable System Restore** — Restore points delete karo
> Step 4: **Remediate** — Safe Mode boot, AV scan. Ransomware usually decryption key ke bina files nahi khulti, so backup se restore karo
> Step 5: **Schedule** — Daily scans set karo, System Restore ON karo
> Step 6: **Educate** — User ko batao suspicious emails mat kholo
> Step 7: **Enable updates** — Windows Update + AV definitions update

---

## 8.4 Mobile Device Troubleshooting

| Problem | Symptoms | Solutions |
|---|---|---|
| **Battery drain** | Phone jaldi discharge | Check battery usage, close background apps, reduce brightness, battery saver ON |
| **Slow phone** | Lagging, apps slow | Clear cache, delete unused apps, restart, factory reset (last resort) |
| **Overheating** | Phone bahut garam | Close heavy apps, remove case, avoid direct sunlight, check for malware |
| **No signal** | No network bars | Airplane mode toggle, restart, check SIM, reset network settings |
| **App crash** | App band ho jaata hai | Update app, clear app cache, reinstall |
| **Storage full** | "Not enough space" | Delete old photos/videos, clear cache, move to cloud/SD card |
| **Touch issues** | Screen respond nahi kar raha | Clean screen, restart, check screen protector, calibrate |
| **Bluetooth issues** | Can't pair/connect | Toggle BT off/on, remove old pairings, restart both devices |
| **GPS not working** | Location wrong | Enable high accuracy mode, clear GPS cache, check permissions |

---

## 8.5 Security Troubleshooting

| Problem | Cause | Solution |
|---|---|---|
| **Account lockout** | Too many wrong passwords | Wait for lockout timer, admin unlock, check for brute force attack |
| **Certificate errors** | Expired cert, wrong date | Check system date/time, install certificate, warn user about risks |
| **Unauthorized access** | Weak passwords, stolen credentials | Change passwords, enable MFA, review access logs |
| **Unexpected reboots** | Updates, malware, driver issues | Check Event Viewer, scan for malware, review update history |
| **Firewall blocking** | Legitimate app blocked | Add firewall exception, check rules |
| **Missing antivirus updates** | Connectivity, subscription expired | Check internet, renew subscription, manual update |

---

## 📊 MIND MAP — Chapter 8

```
                  🛠️ SOFTWARE TROUBLESHOOTING
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
    ┌─────▼─────┐    ┌─────▼─────┐    ┌─────▼─────┐
    │  WINDOWS  │    │  MALWARE  │    │  MOBILE   │
    │  ISSUES   │    │  REMOVAL  │    │  ISSUES   │
    └─────┬─────┘    └─────┬─────┘    └─────┬─────┘
          │                │                 │
    Slow PC:          7 Steps:          Battery drain
    Task Mgr          1.Identify        Slow phone
    SSD upgrade       2.Quarantine      Overheating
    Cleanup           3.Disable SR      App crash
                      4.Remediate       Storage full
    BSOD:             5.Schedule/SR
    Stop codes        6.Educate       ┌─────────────┐
    Safe Mode         7.Updates/Mon   │  SECURITY   │
    sfc, chkdsk                       │  ISSUES     │
                                      └─────┬───────┘
    Boot:           Browser:          Account lockout
    WinRE           Certificate      Cert errors
    Recovery        Pop-ups          Firewall block
    bootrec         Proxy            Unauthorized
                    Reset            access
```

---

## 💼 Interview Questions

### Beginner:
1. **Q:** Computer slow hai — pehla step kya hoga?
   **A:** Task Manager kholo (Ctrl+Shift+Esc), Performance tab dekho — CPU, RAM, ya Disk 100% hai? Jahan bottleneck hai wahan se troubleshoot karo.

### Scenario-Based:
2. **Q:** User ka browser homepage change ho gaya aur pop-ups aa rahe hain. Kya karoge?
   **A:** Adware/malware infection hai. Steps: (1) Browser extensions check — unknown remove, (2) Anti-malware scan (Malwarebytes), (3) Browser reset, (4) Check installed programs — unknown uninstall, (5) DNS/proxy check.

3. **Q:** CompTIA malware removal ke steps batao.
   **A:** 7 steps: Identify symptoms → Quarantine (disconnect) → Disable System Restore → Remediate (Safe Mode + scan) → Schedule scans + Enable SR → Educate user → Enable updates + Monitor.

---

## 📋 Quick Notes

```
══════════════════════════════════════════
  CHAPTER 8: SOFTWARE TROUBLESHOOTING — QUICK NOTES
══════════════════════════════════════════
✅ Slow PC: Check Task Manager → CPU/RAM/Disk usage
✅ 100% Disk usually = HDD → SSD upgrade best fix
✅ BSOD: Note stop code → Safe Mode → sfc → chkdsk
✅ Boot fail: WinRE → Startup Repair/System Restore
✅ Safe Mode: Shift+Restart → F4 (basic) / F5 (networking)
✅ Malware Removal (7 steps): IQDRSEE/M
✅ Identify → Quarantine → Disable SR → Remediate → Schedule → Educate → Enable/Monitor
✅ ALWAYS quarantine (disconnect) before removing malware!
✅ Browser issues: Clear cache, disable extensions, reset browser
✅ Proxy settings: If malware set it → turn OFF
✅ Mobile: Battery drain → check background apps
✅ Windows Update stuck → Stop wuauserv → Delete SoftwareDistribution → Start wuauserv
══════════════════════════════════════════
```

---

## 🃏 Flashcards

| # | Q | A |
|---|---|---|
| 1 | Malware removal ka Step 2? | Quarantine (Network se disconnect karo) |
| 2 | System Restore kyun disable karte hain malware removal mein? | Malware restore point mein chhup sakta hai |
| 3 | Safe Mode mein kya hota hai? | Minimum drivers load, basic display, troubleshooting ke liye |
| 4 | bootrec /fixmbr kya karta hai? | Master Boot Record fix karta hai |
| 5 | Browser homepage apne aap change ho gaya — kya hua? | Adware/Browser hijacker malware infection |
| 6 | sfc /scannow kab use karein? | Jab corrupt system files suspected ho |
| 7 | BSOD ke baad kya note karna zaroori hai? | Stop code (error code) |
| 8 | Mobile battery drain ka common fix? | Background apps close, brightness reduce, battery saver ON |
| 9 | WinRE kaise access karein? | Shift + Restart, or boot from USB |
| 10 | Malware removal ka last step? | Enable updates aur monitor |

---

## 🔨 Hands-on Practice

1. **Task Manager** ke saare tabs explore karo — Startup tab mein unnecessary programs disable karo
2. **Disk Cleanup** run karo — `cleanmgr` → Windows temp files delete karo
3. **Safe Mode mein boot** karo aur experience karo
4. **Event Viewer** mein recent errors dekho aur Google karo unka meaning
5. **Browser settings** check karo — extensions, proxy, homepage
6. **Malwarebytes Free** install karo aur quick scan run karo
7. **System Restore point** manually create karo: Search → "Create restore point"

---

*🛠️ Chapter 8 Complete! Next: Chapter 9 — Operational Procedures! 📋*
