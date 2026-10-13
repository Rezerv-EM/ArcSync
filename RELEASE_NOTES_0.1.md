# ArcSync 0.1 — first public release

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
