---
title: news.ini
---

## Overview

This file governs the news items present in the game, where they appear, and at which point in the storyline they show up.

## Syntax

Multiple `[NewsItem]` blocks can be defined.

### [NewsItem]

```ini
[NewsItem]
rank = STRING, STRING
autoselect
icon = STRING
logo = STRING
category = INT
headline = INT
text = INT
base = STRING ;repeatable
```

| Parameter  | Information                                                                                                                                                          |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| rank       | The ranks between which the news item will appear. These are hardcoded.                                                                                              |
| autoselect | If this key is present, the news item will be automatically selected when the news panel is opened.                                                                  |
| icon       | The small icon used in the news selection list. The names of these are hardcoded, and the textures can be found in 3db files in `DATA\INTERFACE\NEURONET\NEWSVENDOR` |
| logo       | The large icon used when you select the news item. By default these are loaded from `DATA\INTERFACE\NEURONET\NEWSVENDOR\newsvendor.txm`                              |
| category   | This value seems to be unused and can be left out of `[NewsItem]` blocks entirely with no problems.                                                                  |
| headline   | The string value for the tagline.                                                                                                                                    |
| text       | The string value for the news story content.                                                                                                                         |
| base       | The base this news story appears at. Multiple base keys can be defined.                                                                                              |
