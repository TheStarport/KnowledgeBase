---
title: costumes
---

## Overview
The costumes ini type matches together body parts defined in [bodyparts](bodyparts.md). Costumes are what is actually used elsewhere in the game, such as in [mbases.ini](../hardcoded-inis/data/missions/mbases.ini.md) or story files.

### Vanilla Examples

* `DATA\CHARACTERS\costumes.ini`

## Syntax

### Costume
```ini
[Costume]
nickname = STRING
body = STRING
righthand = STRING
lefthand = STRING
```
| Parameter | Information                                                                         |
| --------- | ----------------------------------------------------------------------------------- |
| nickname  | See nickname for more information.                                                  |
| body      | Reference to a Body (see [bodyparts](bodyparts.md) for available bodies).           |
| righthand | Reference to a RightHand (see [bodyparts](bodyparts.md) for available right hands). |
| lefthand  | Reference to a LeftHand (see [bodyparts](bodyparts.md) for available left hands).   |