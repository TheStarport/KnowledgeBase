---
title: formations.ini
---

## Overview

This file defines formations which can be used by factions in [faction_prop.ini](./faction_prop.ini.md).

## Syntax

Multiple `[Formation]` blocks can be defined.

### [Formation]

```ini
[Formation]
nickname = STRING
pos = INT, INT, INT ;repeatable
pl_pos = INT, INT, INT ;optional
```

| Parameter | Information |
| --------- | ----------- |
| nickname  | How the formation is referred to elsewhere. |
| pos       | X, Y and Z coordinates relative to the center of the formation. The number of keys here will limit the number of NPCs that can spawn per formation. NPCs spawned by encounters will always try to catch up with the formation leader. Meaning any too big distance between formation members to the current leader will keep them constantly switching to cruise engines. |
| pl_pos    | X, Y and Z coordinates relative to the center of the formation. |
