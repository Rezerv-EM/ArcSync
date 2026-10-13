# ArcSync — сторонние компоненты и лицензии

Дата сборки: заполняется скриптом `tools\release\build_release.ps1`.

ArcSync распространяется как бесплатная программа. В поставку входят перечисленные ниже
компоненты сторонних разработчиков; каждый остаётся собственностью своего автора и
используется по его лицензии. Полные тексты лицензий, которые требуют сопровождения
копией, лежат в папке `licenses\` рядом с этим файлом.

---

## 1. Компоненты .NET и NuGet

| Компонент | Версия | Лицензия | Правообладатель |
|---|---|---|---|
| Microsoft .NET Runtime (среда выполнения, поставляется целиком) | 8.0 | MIT | © .NET Foundation и участники |
| Microsoft.Windows.SDK.NET / WinRT.Runtime (из Windows targeting pack) | 10.0.19041 | MIT | © Microsoft Corporation |
| Microsoft Windows App SDK (`Microsoft.WindowsAppSDK`) | 1.6.250228001 | Microsoft Software License Terms | © Microsoft Corporation |
| Microsoft WebView2 (`Microsoft.Web.WebView2`) | 1.0.2651.64 | Microsoft Software License Terms | © Microsoft Corporation |
| Newtonsoft.Json (входит в состав Windows App SDK) | 13.0.1 | MIT | © James Newton-King |
| CommunityToolkit.Mvvm | 8.2.2 | MIT | © .NET Foundation и участники |
| Microsoft.Data.Sqlite / Microsoft.Data.Sqlite.Core | 8.0.7 | MIT | © .NET Foundation и участники |
| System.Drawing.Common | 8.0.7 | MIT | © .NET Foundation и участники |
| Microsoft.Win32.SystemEvents | 8.0.0 | MIT | © .NET Foundation и участники |
| System.Memory | 4.5.3 | MIT | © .NET Foundation и участники |
| H.NotifyIcon / H.NotifyIcon.WinUI / H.GeneratedIcons.System.Drawing | 2.1.0 | MIT | © havendv |
| SQLitePCLRaw.core / .provider.e_sqlite3 / .bundle_e_sqlite3 / .lib.e_sqlite3 | 2.1.6 | Apache License 2.0 | © 2014–2023 SourceGear, LLC |
| SQLite (в составе `e_sqlite3.dll`) | — | Public Domain | авторы SQLite |

### Не поставляется

`Microsoft.Windows.SDK.BuildTools` 10.0.26100.1742 используется только на этапе сборки
(в нём лежат `makepri.exe` и другие утилиты) и в поставку не входит.

---

## 2. Шрифты

В программе используется **Inter**. Лицензия — SIL Open Font License 1.1; полный текст:
`licenses\Inter-OFL.txt`.

```
Copyright 2016 The Inter Project Authors (https://github.com/rsms/inter)
This Font Software is licensed under the SIL Open Font License, Version 1.1.
```

---

## 3. Изображения и знаки

- Иконка программы (`app_icon.png`, `icon.ico`, экран приветствия) — собственная работа
  автора ArcSync.
- Логотипы облачных сервисов в настройках (`Assets\clouds\*.png`: Dropbox, Google Drive,
  OneDrive, Яндекс.Диск, Mail.ru, MEGA, Nextcloud) — товарные знаки соответствующих
  владельцев. Используются только для того, чтобы пользователь узнал свой сервис; это не
  означает, что кто-либо из них поддерживает или одобряет ArcSync.
- Обложки, баннеры, кадры и описания игр, которые программа получает из внешних
  источников во время работы, остаются собственностью разработчиков и издателей
  соответствующих игр.

---

## 4. Внешние источники данных

ArcSync обращается к открытым источникам только во время работы программы, по запросу
пользователя, и кэширует полученное локально. Ничего из перечисленного ниже не
перепродаётся и не перераспространяется отдельно от программы.

| Источник | Что берём | Лицензия и условия |
|---|---|---|
| **PCGamingWiki** (`pcgamingwiki.com`) | имя исполняемого файла игры из инфобокса статьи | Содержимое доступно по лицензии [Creative Commons Attribution-NonCommercial-ShareAlike 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/). Материал используется в некоммерческой бесплатной программе, с указанием источника. PCGamingWiki не поддерживает ArcSync и не связан с ним. |
| **Wikipedia / Wikimedia** (`*.wikipedia.org`, `upload.wikimedia.org`) | краткое и полное описание игры, часть изображений | Текст — [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) и GFDL; изображения — по лицензии, указанной на странице файла. Ссылка на источник сохраняется рядом с кэшированным описанием. |
| **Steam / Valve** (`store.steampowered.com`, `api.steampowered.com`, `shared.akamai.steamstatic.com`) | обложки, баннеры, кадры, короткие описания | Steam Web API Terms of Use: данные предоставляются «как есть» и только для личного использования конечным пользователем. ArcSync не поддерживается Valve Corporation и не связан с ней; Steam и Valve — зарегистрированные товарные знаки Valve Corporation. |
| **VNDB** (`api.vndb.org`) | обложки визуальных новелл | База — Open Database License (ODbL 1.0), содержимое — Database Contents License (DbCL 1.0), © участники VNDB. |
| **IGDB / Twitch** (`api.igdb.com`) | обложки и арты | API бесплатен для некоммерческого использования по Twitch Developer Service Agreement; ключи пользователь указывает свои. © IGDB / Twitch Interactive, Inc. |
| **TheGamesDB** (`api.thegamesdb.net`) | обложки и фоны | Используется с ключом пользователя; условия публикуются владельцем сервиса. |
| **SteamGridDB** (`steamgriddb.com`) | обложки и фоны | Используется с ключом пользователя; условия публикуются владельцем сервиса. |
| **libretro-thumbnails** (`raw.githubusercontent.com/libretro-thumbnails`) | обложки ретро-игр | Арт принадлежит разработчикам и издателям соответствующих игр. |
| **Microsoft Store** (`storeedgefd.dsx.mp.microsoft.com`) | обложки | Публичный поисковый интерфейс магазина; © Microsoft Corporation. |
| **GOG** (`catalog.gog.com`) | обложки | © GOG sp. z o.o. |
| **GitHub REST API** (`api.github.com`) | поиск репозиториев с артом | По GitHub Terms of Service, раздел об API. |

Обращения к перечисленным сервисам выполняются по HTTPS с описательным User-Agent.
Никакие персональные данные пользователя в эти сервисы не отправляются; телеметрии в
ArcSync нет.

---

## 5. Полные тексты лицензий

| Файл | Что содержит |
|---|---|
| `licenses\WindowsAppSDK-license.txt` | условия использования Microsoft Windows App SDK |
| `licenses\WindowsAppSDK-NOTICE.txt` | уведомления о стороннем коде внутри Windows App SDK |
| `licenses\WebView2-LICENSE.txt` | условия использования Microsoft WebView2 |
| `licenses\WebView2-NOTICE.txt` | уведомления о стороннем коде внутри WebView2 |
| `licenses\CommunityToolkit-Mvvm-THIRD-PARTY-NOTICES.txt` | уведомления CommunityToolkit.Mvvm |
| `licenses\Inter-OFL.txt` | SIL Open Font License 1.1 (шрифт Inter) |
| `licenses\MIT.txt` | текст лицензии MIT, под которую распространяются компоненты .NET и пакеты с пометкой MIT |
| `licenses\Apache-2.0.txt` | текст лицензии Apache 2.0 (SQLitePCLRaw, SQLite) |

Если какой-либо файл отсутствует в поставке, полный текст соответствующей лицензии
можно получить у автора ArcSync по запросу.
