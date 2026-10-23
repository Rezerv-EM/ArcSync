# v0.1.1

**Autostart**
- Fixed: the "Start with Windows" checkbox in the installer did nothing — it now creates the
  elevated logon task (and removes it when unchecked)
- Fixed: autostart silently died after a system clock correction — the task trigger was
  created with a start boundary in the future; it is now registered from XML with a fixed
  past boundary
- Fixed: the autostart task was skipped on battery and killed by Task Scheduler after 72 h
- Fixed: double-clicking the shortcut while the app is in the tray now opens the window

**Startup**
- Fixed: on a cold start the window stayed invisible for minutes — the installed-games index
  is now rebuilt in the background instead of blocking the UI thread
- Fixed: the tray icon is created before the first page loads, so the app is always reachable

**Library**
- Fixed: an installed Unreal Engine (Epic Games\UE_5.8) was listed as a game
- Fixed: an in-progress Steam download (`steamapps\downloading`) was listed as a game
- Fixed: folders inside a git working tree (dev builds) were listed as games
- Fixed: game subfolders (e.g. Call of Duty `sp26`) were listed as separate games and hid
  the real game behind a "container"
- Fixed: folders without a single executable were listed as games

**UI**
- Fixed: the first-run guide note was cut off instead of wrapping
- Fixed: a ghost window frame was drawn around the splash card

**Other**
- The version is now defined in one place and the app reports its real version
- README is no longer tied to a specific version in the download file name

---

Requires Windows 10 (build 19041+) or Windows 11, 64-bit. The installer is not code-signed:
SmartScreen will warn about an unknown publisher — that is expected.

```text
certutil -hashfile ArcSync_Setup_0.1.1.exe SHA256
```

Compare with `SHA256SUMS.txt` attached to this release.
