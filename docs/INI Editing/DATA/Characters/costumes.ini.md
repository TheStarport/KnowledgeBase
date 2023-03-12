---
title: costumes.ini
---

[Return to parent folder (Characters)](../Characters/index.md)

## Overview
The costumes.ini file matches together body parts defined in [bodyparts.ini](./bodyparts.ini.md). Costumes are what is actually used elsewhere in the game, such as in [mbases.ini](./../Missions/mbases.ini.md) or story files.

## Syntax

### Costume
```ini
[Costume]
nickname = STRING
body = STRING
righthand = STRING
lefthand = STRING
```
| Parameter | Information                                                                                   |
| --------- | --------------------------------------------------------------------------------------------- |
| nickname  | See nickname for more information.                                                            |
| body      | Reference to a Body (see [bodyparts.ini](./bodyparts.ini.md) for available bodies).           |
| righthand | Reference to a RightHand (see [bodyparts.ini](./bodyparts.ini.md) for available right hands). |
| lefthand  | Reference to a LeftHand (see [bodyparts.ini](./bodyparts.ini.md) for available left hands).   |