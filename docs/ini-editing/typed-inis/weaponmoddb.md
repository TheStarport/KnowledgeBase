---
title: weapontype
---

## Overview

Contains `[WeaponType]` entries that determine weapon effectiveness against different types of shield.

## Syntax

`[WeaponType]` blocks are repeatable.

### Vanilla Examples

* `DATA\EQUIPMENT\weaponmoddb.ini`

### WeaponType

```ini
[WeaponType]
nickname = STRING ;repeatable
shield_mod = STRING, FLOAT
```

| Parameter  | Information                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------------- |
| nickname   | How this WeaponType is referenced by the `weapon_type` key in [equipment](./equipment.md) files.    |
| shield_mod | Defines an arbitrary shield type and a % effectiveness of this WeaponType against that shield type. |
