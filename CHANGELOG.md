# Changelog

# ArcSync 0.1.4

**Startup and performance**
- Fixed: the engine waited for a full disk scan on the first start of the day and after every update ("Starting" for 1–2 minutes). It now starts in about a second from the known library; the scan runs in the background and the library refreshes only if something changed.
- Improved: lower CPU use while idle — the running-game check no longer scans all system processes on every refresh when no game is running.
- Fixed: Activity, the backup journal and Analytics could appear empty while a sync was writing to the journal.

**Saves and sync**
- Fixed: Sync, Restore, Backup, Archive and Delete did nothing for games whose names produce an invalid command file name (many Cyrillic titles and titles with "?").
- Fixed: two PCs sharing one cloud folder overwrote each other's installed-games list and launch paths.
- Fixed: a damaged or partially downloaded cloud copy of app data could replace the local one.
- Fixed: a file temporarily locked by OneDrive was reported as a sync error. It is now retried and reported only if the lock persists.
- Improved: local backups made before a cloud restore are kept for 7 days (up to 8) instead of only the last 2.
- Fixed: games started through a .vbs/.cmd loader had no play session (no playtime, no sync on exit).
- Fixed: text log files (log.txt, *_log.txt) were treated as saves.

**Library and notifications**
- Fixed: uninstalled games that only have saves left were moved to the archive and back on every start, producing 15+ "Archived" notifications each time.
- Fixed: cleared notifications could come back after a restart.
- Fixed: non-game entries (analytics SDK and iCloud data folders) could stay in the archive and keep showing sync errors. They are removed when there is no installed game and no saves.
- Improved: bulk events are grouped into one notification; each notification can be dismissed separately.

**Security**
- Improved: the data folder is protected from changes by programs running without administrator rights.
- Improved: links open only as http/https; folders open in Explorer without administrator rights; system tools are started by full path; DLLs are not loaded from the current folder; network responses are size-limited.

**Interface**
- Changed: notifications moved to the sidebar above Settings, with a badge; new glass panel with animations.
- Improved: highlighted current section, glass card edges, accent hover on buttons and rows, gradient page titles, aligned numbers in statistics and better text contrast in all themes. Accent colors follow the selected theme.
- Fixed: a card or library row lost its original background after the pointer left it.

## 0.1.3

**Library**
- Fixed: a game that was the only item inside a wrapper folder (store or repack folder) could disappear from the library.
- Fixed: nested and container installations from the 0.1.2 known limitations are now classified correctly; the discovery test suite passes.
- Fixed: one installation could appear as several games; repack uploader credits in folder names no longer change the game title.
- Fixed: desktop applications built on UI frameworks (Electron, CEF, Qt) could be listed as games. XNA games are now recognized.
- Fixed: an uninstalled program could stay in the library because of a registry entry with a similar name.
- Improved: games installed by Epic Games Launcher are recognized as store licenses with their own cloud, like Steam.

**Launch**
- Improved: a game managed by a launcher is started through that launcher. Ownership is decided by launcher records, not by names.
- Improved: newly installed games are found and can be launched right away; the installer's shortcut is used as the launch target.

**Saves**
- Fixed: a game's install folder, or another program's data with a similar name, could be selected as a save folder.
- Fixed: folders with only Steam-emulator bookkeeping, uninstaller leftovers, or a folder nested inside another save folder of the same game were treated as separate save folders.
- Fixed: a large file whose own name marks it as a save was skipped.
- Improved: quarantined files now get a decision, and a changed file selection is synced as a change.
- Fixed: updated detection rules now apply to existing installations; one install folder written in different forms is treated as one folder.

**Cloud and restore**
- Fixed: a merged duplicate card could sync the same saves into a second cloud folder. One game now uses one cloud folder across PCs.
- Fixed: "Add to mine" created "(from cloud)" copies of files that were already identical.
- Fixed: "Restore from cloud" could pull abandoned save sets of older layouts into old paths. Only the game's current sets are restored.
- Fixed: a path recorded under another Windows user is mapped to the current user; a renamed cloud set is found.
- Fixed: the game sees restored saves after every regular sync, not only after the Restore button.
- Fixed: online-only cloud files were skipped as links; ArcSync service files and their cloud conflict copies were treated as saves.
- Improved: a missing cloud copy is reported as a result, not as an error.

**Covers, banners and descriptions**
- Fixed: art and descriptions could come from another game (a sequel, a remake or a series article). Cover, banner, logo and description now share one game identity, taken first from the game files.
- Fixed: art was looked up by the repack folder name instead of the game title.
- Added: community art from SteamGridDB for games without their own store art. The title and release year must match; only the game title is sent.
- Improved: banners are chosen by picture quality. Small store images and box covers are no longer stretched into a banner when full-size art exists.
- Improved: cached art is re-checked against the current rules after an update and replaced if it belongs to another game.
- Fixed: logos of newer Steam games were missing.

**Interface**
- Improved: smoother page transitions and lighting; the welcome screen opens about twice as fast.
- Fixed: the engine indicator showed "Engine not responding" while the engine was still starting.
- Added: Settings → About → Collect diagnostics.

---

**Known limitations**
- Games that have no art in stores or in the community database still get a banner built from their cover.

Requires Windows 10 (build 19041+) or Windows 11, x64. Runtime dependencies are bundled.

Download **ArcSync_Setup_0.1.3.exe**. An in-place update does not require uninstalling first. Keeping a separate save backup before upgrading is recommended.

The installer is **not code-signed**. SmartScreen may show an unknown publisher; this is not proof of file safety. Download only from this repository and compare with the attached `SHA256SUMS.txt`:

```text
certutil -hashfile ArcSync_Setup_0.1.3.exe SHA256
```

---
## 0.1.2

**Language**
- Added: Russian / English interface switching in Settings, without restarting.
- Added: localized pages, dialogs, tray actions, notifications and status labels.
- Added: game descriptions and separate description caches for each language.
- Fixed: an unchanged autostart setting could block saving other settings.

**Saves**
- Fixed: mod-manager folders could be selected as save folders.
- Improved: AppID-based discovery of emulator-managed Steam save folders.
- Fixed: invalid cloud save-folder hints could be persisted before validation.
- Fixed: the game page and folder actions could disagree about the active save folder.

**Library**
- Fixed: a deleted copy of a game could leave a second card with disconnected save roots.
- Improved: save-root associations move to the remaining installed copy; the old name becomes an alias. This merge does not move or delete save files.

**Project**
- Refreshed the website and added five real interface screenshots to the repository.
- Reorganized the README and release history.

---

**Known limitations**
- Some nested/container installations may still be misclassified. The same discovery-test failures reproduce in the pre-localization baseline; this release does not resolve them.

Requires Windows 10 (build 19041+) or Windows 11, x64. Runtime dependencies are bundled.

Download **ArcSync_Setup_0.1.2.exe**. An in-place update does not require uninstalling first. Keeping a separate save backup before upgrading is recommended.

The installer is **not code-signed**. SmartScreen may show an unknown publisher; this is not proof of file safety. Download only from this repository and compare with the attached `SHA256SUMS.txt`:

```text
certutil -hashfile ArcSync_Setup_0.1.2.exe SHA256
```

---
## 0.1.1

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

---
## 0.1

**File:** `ArcSync_Setup_0.1.exe` · 43.6 MB
**SHA-256:** `923e0fcaacfb0ea3f197c344b8413bbf400be1b489e5458e81995d2a6b8bafc8`

Game launcher and save-game sync for Windows: your saves travel to your own cloud folder
and come back on any PC.

## What's inside

* **Save syncing.** Finds where each game keeps its saves, watches for changes, copies them
  into your cloud folder and restores them on another PC exactly where the game expects
  them.
* **Library.** Only games that are really installed: Steam, GOG, Epic, Microsoft Store and
  manually installed ones. Launchers, emulators and boosters are filtered out.
* **Backups.** A local archive per game, one-click restore, and a sync log.
* **Game launching and play time** straight from the game card.
* **Tray app** that syncs on events: game launch, game exit, Windows shutdown.
* **Artwork.** Covers, banners and descriptions are pulled from open sources and cached on
  disk.

## Install

1. Download `ArcSync_Setup_0.1.exe` below and run it.
2. Windows will show **SmartScreen** ("Windows protected your PC") — that is expected: the
   installer is not signed with a paid certificate. Click **"More info" → "Run anyway"**.
3. On first launch choose your cloud folder (OneDrive, Google Drive, Dropbox, MEGA,
   Nextcloud, Yandex.Disk — or any other) or press "Suggest folder".

You do not need to install .NET, the Windows App SDK or anything else — everything is
bundled.

**Requirements:** Windows 10 (build 19041+) or Windows 11, 64-bit, administrator rights
(needed to write saves into protected folders).

## Verifying the download

```
certutil -hashfile ArcSync_Setup_0.1.exe SHA256
```

The hash must match the line in `SHA256SUMS.txt` from this release. Always download
ArcSync from this page.

## Good to know

* **The installer is not code-signed** — SmartScreen will warn. That is not a build
  failure, it is the absence of a paid code-signing certificate.
* **No telemetry.** Saves go only to your own cloud folder; the app has no servers.
* **The interface is currently in Russian.** English is planned for a future release.
* Your cloud folder is never cleaned automatically: ArcSync only adds and updates its own
  copies.

## Feedback

Bugs and suggestions — please open an **Issue**. If it is about a specific game, tell us
its name and where it is installed so we can reproduce it.
