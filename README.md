# ArcSync

**English** | [Русский](README.ru.md)

**Game launcher and save-game sync for Windows.** Like Steam Cloud, but for every game:
titles from Steam, GOG, Epic and Microsoft Store, plus games installed manually — all in
one library.

There are no servers of ours. Your save files go to one place only: the cloud folder
**you** choose — OneDrive, Google Drive, Dropbox, MEGA, Nextcloud, Yandex.Disk — or any
other folder that already syncs for you.

[![Version](https://img.shields.io/badge/version-0.1-6C60FF)](../../releases/latest)
[![Windows](https://img.shields.io/badge/Windows-10%20%7C%2011%20x64-2FD8F0)](#requirements)
[![Price](https://img.shields.io/badge/price-free-3CCF7A)](#license)
[![Telemetry](https://img.shields.io/badge/telemetry-none-3CCF7A)](#privacy)

## Features

* **Protects your saves.** ArcSync finds where each game keeps its save files, watches
  them for changes and copies them into your cloud folder. After a Windows reinstall or on
  another PC it puts them back exactly where the game expects them.
* **Builds your library.** Only games that are actually installed on this PC. Launchers,
  boosters, emulators and other applications never end up in the list.
* **Launches games** from the game card, tracks play time and remembers when a game was
  last played.
* **Keeps backups.** A local archive per game, one-click restore, and a log of what was
  synced and when.
* **Stays out of the way.** Lives in the system tray, syncs on events (game launch, game
  exit, Windows shutdown) and on a schedule. It does not slow games down.

## Install

1. Download the latest **`ArcSync_Setup_<version>.exe`** from the
   [Releases](../../releases/latest) page — it is the only file you need.
2. Run it. Windows will show a blue **SmartScreen** warning — that is expected for
   software without a paid code-signing certificate. Click **"More info" → "Run anyway"**.
   See [Verifying the download](#verifying-the-download) to check the file yourself.
3. On first launch pick your cloud folder (or hit "Suggest folder" — ArcSync will find
   OneDrive / Google Drive / Yandex.Disk on your disk). Then just play.

You do **not** need to install .NET, the Windows App SDK or anything else — everything is
bundled in the installer.

### Requirements

* Windows 10 (build 19041 or newer) or Windows 11, **64-bit**.
* Administrator rights: without them Windows does not allow writing saves into protected
  folders ("Documents", AppData). The installer asks for them.
* About 160 MB of free disk space.

> **Language note:** the application interface, the EULA and this documentation are
> currently in **Russian**. An English interface is planned.

## How it works

* .NET 8 and WinUI 3, a regular desktop application (not a Microsoft Store package).
* The tracking engine runs inside the same process as the UI — no separate service to
  install.
* A game is identified **by the contents of its folder**, not by its name, so only real
  games make it into the library.
* Covers, banners and descriptions come from open sources (Steam, Wikipedia, PCGamingWiki
  and others) and are cached on disk.
* Before copying anything, ArcSync checks that the file really is a save file and not a
  cache, log or mod.

## Privacy

* **No telemetry.** No usage statistics, no ads, no data about you or your PC is sent
  anywhere.
* Saves go **only** to your cloud folder. ArcSync has no servers of its own.
* Application data (settings, history, cover cache) stays on your PC in
  `%LOCALAPPDATA%\ArcSync`.
* Your cloud folder is never cleaned automatically: ArcSync only adds and updates its own
  copies. It never touches other people's files.
* The only outbound requests are for game art and descriptions — and all that is sent is
  the game title.

## FAQ

**Where do my saves go?**
Into the `ArcSync` folder inside the cloud folder you picked. You can open it from the app
with the "Open cloud folder" button.

**What happens if I uninstall a game?**
Its copies stay in "Backups" and in the cloud, and syncing keeps protecting them.

**A game was not detected. What now?**
Press "Rescan" in the toolbar — you can install a new game without restarting ArcSync. If
the game lives in an unusual place, add it manually with "+" in the library.

**Does it sync Steam Cloud games?**
Licensed games keep their own cloud (Steam Cloud, Epic, GOG), so ArcSync leaves them alone
and shows them in a separate section — this way the library is not cluttered with
duplicates.

**My antivirus complains. Why?**
The installer is not code-signed (certificates cost money), so SmartScreen and some
antivirus products warn about an "unknown publisher". You can verify the file by its
SHA-256 — see below.

## Verifying the download

`SHA256SUMS.txt` sits next to the installer in the release. Compare:

```
certutil -hashfile ArcSync_Setup_<version>.exe SHA256
```

The hash must match the line in `SHA256SUMS.txt`. Always download ArcSync from this
repository's Releases page: a copy from anywhere else may have been modified.

## Third-party components

The list of libraries, fonts and data sources with their licences is in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Feedback

Found a bug or have a suggestion? Open an **Issue** in this repository. Please describe
what you did and what happened; if it is about a specific game, add its name and where it
is installed.

## License

ArcSync is free of charge. The source code is not published and remains with the author;
redistributing modified builds and selling the program are not allowed. The full terms are
in [EULA.txt](EULA.txt) (Russian).
