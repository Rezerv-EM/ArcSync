# Changelog

# ArcSync 0.1.2

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
