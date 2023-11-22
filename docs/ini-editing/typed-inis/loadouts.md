---
title: loadouts
---

:::caution

This page is a work in progress!

There may be missing, incomplete or incorrect information on this page as it's still being built! Take information here with a pinch of salt, and feel free to contribute and correct things!

:::

## Overview

These files are used to define ship and solar loadouts.

### Vanilla Examples

* `DATA\SOLAR\loadouts.ini`
* `DATA\SHIPS\loadouts.ini`
* `DATA\SHIPS\loadouts_utility.ini`

## Syntax

### [Loadout]

```ini
[Loadout]
nickname = STRING
archetype = STRING
equip = STRING, STRING ;OPTIONAL, MULTIPLE
cargo = STRING, INT ;OPTIONAL, MULTIPLE
```

| Parameter | Information                                                                                                                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------- |
| nickname  | The nickname of the loadout, as referenced in [`npcships.ini`](../hardcoded-inis/data/missions/npcships.ini.md).            |
| archetype | The archetype of the object the loadout belongs to. This is typically a solar or a ship.                                    |
| equip     | The name of the equipment to mount from [equipment](./equipment.md), followed by the hardpoint on the model to mount it to. |
| cargo     | The name of the cargo for the ship or object to carry, followed by the amount.                                              |