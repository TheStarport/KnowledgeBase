---
title: BASES
---

## Overview
These files are used to define the room INI files present in each base, as well as the starting room when the based is loaded. Files in `DATA\UNIVERSE\SYSTEMS\INTRO\BASES\` specifically are used to define the [room](rooms.md) ini files the menu screens use.

### Vanilla Examples

* `DATA\UNIVERSE\SYSTEMS\LI01\BASES\li01_01_base.ini`
* `DATA\UNIVERSE\SYSTEMS\RH02\BASESrh02_06_base.ini`
* `DATA\UNIVERSE\SYSTEMS\INTRO\BASES\intro1_base.ini`

## Syntax

Blocks should be called in the below order. Multiple `[Room]` blocks may be called.

### BaseInfo

```ini
[BaseInfo]
nickname = STRING
start_room = STRING
```

| Parameter  | Information |
| ---------- | ----------- |
| nickname   |             |
| start_room |             |

### Room

```ini
[Room]
nickname = STRING
file = PATH
```

| Parameter | Information |
| --------- | ----------- |
| nickname  |             |
| file      |             |
