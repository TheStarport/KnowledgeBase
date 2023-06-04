---
title: explosions
---

:::caution

This page is a work in progress!

There may be missing, incomplete or incorrect information on this page as it's still being built! Take information here with a pinch of salt, and feel free to contribute and correct things!

:::

## Overview

These files are used to define explosions and debris used by weapons, ship and solararch entries.

### Vanilla Examples

* `DATA\FX\explosions.ini`

## Syntax

### [Debris]

```ini
nickname = STRING
death_method = STRING
lifetime = FLOAT, FLOAT
linear_drag  = FLOAT
angular_drag = FLOAT, FLOAT, FLOAT
rotation_inertia = INT, INT, INT
trail = STRING
explosion = STRING
```

| Parameter        | Information |
| ---------------- | ----------- |
| nickname         |             |
| death_method     |             |
| lifetime         |             |
| linear_drag      |             |
| angular_drag     |             |
| rotation_inertia |             |
| trail            |             |
| explosion        |             |

### [Explosion]

```ini
[Explosion]
nickname = STRING
lifetime = FLOAT
process = STRING
num_child_pieces = INT
debris_type = STRING, INT
innards_debris_start_time = FLOAT
innards_debris_num = INT
innards_debris_radius = INT
debris_impulse = INT
effect = STRING, FLOAT
innards_debris_object = STRING
```

| Parameter                 | Information |
| ------------------------- | ----------- |
| nickname                  |             |
| lifetime                  |             |
| process                   |             |
| num_child_pieces          |             |
| debris_type               |             |
| innards_debris_start_time |             |
| innards_debris_num        |             |
| innards_debris_radius     |             |
| debris_impulse            |             |
| effect                    |             |
| innards_debris_object     |             |

### [Simple]

```ini
nickname = STRING
DA_archetype = PATH
material_library = PATH
mass = INT
```

| Parameter        | Information |
| ---------------- | ----------- |
| nickname         |             |
| DA_archetype     |             |
| material_library |             |
| mass             |             |