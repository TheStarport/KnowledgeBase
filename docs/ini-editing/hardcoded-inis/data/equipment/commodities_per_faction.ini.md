---
title: commodities_per_faction.ini
---

## Overview

This file describes commodities that a faction's trader NPCs will carry.

### Vanilla Examples

* `DATA\EQUIPMENT\commodities_per_faction.ini`

## Syntax

Multiples of each block may be defined.

### [FactionGood]

```ini
[FactionGood]
faction = STRING
MarketGood = STRING
```

| Parameter  | Information                                                                        |
| ---------- | ---------------------------------------------------------------------------------- |
| faction    | A faction name as defined in [`faction_prop.ini`](../missions/faction_prop.ini.md) |
| MarketGood | A commodity as defined in [`goods.ini`](../../../typed-inis/goods.md)              |