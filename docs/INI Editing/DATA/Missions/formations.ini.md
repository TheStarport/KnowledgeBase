---
title: formations.ini
---

[Return to parent folder (MISSIONS)](../../Missions/index.md)

## Overview

This file determines formations used by encounters in [encounter INI files](./Encounters/encounters.ini.md).

## Syntax

Multiple `[Formation]` blocks can be defined.

### [Formation]

```ini
[Formation]
nickname = STRING
pos = INT, INT, INT ;repeatable
pl_pos = INT, INT, INT ;optional
```

| Parameter | Information                                                                                                                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname  | How the formation is referred to elsewhere.                                                                                                                                                                       |
| pos       | X, Y and Z coordinates relative to the center of the formation. The number of keys here will limit the number of NPCs that can spawn per formation                                                                |
| pl_pos    | X, Y and Z coordinates relative to the center of the formation. This might refer to the squad leader, determining where they spawn specifically where they are present. More testing is required to confirm this. |
