---
title: debris
---

:::caution

This page is a work in progress!

There may be missing, incomplete or incorrect information on this page as it's still being built! Take information here with a pinch of salt, and feel free to contribute and correct things!

:::

## Overview


### Vanilla Examples

* `DATA\FX\explosions.ini`

## Syntax

### Debris

```ini
[Debris]
nickname = STRING
death_method = STRING
lifetime = FLOAT, FLOAT
linear_drag = FLOAT
angular_drag = INT, INT, INT
trail = STRING
explosion = STRING
```

| Parameter    | Information |
| ------------ | ----------- |
| nickname     |             |
| death_method |             |
| lifetime     |             |
| linear_drag  |             |
| angular_drag |             |
| trail        |             |
| explosion    |             |


### Explosion

```ini
[explosion]
nickname = STRING
lifetime = FLOAT, FLOAT
process = STRING
effect = STRING
debris_impulse = INT ;optional
debris_type = STRING, FLOAT ;repeatable, optional
innards_debris_start_time = INT ;optional
innards_debris_num = INT ;optional
innards_debris_radius = INT ;optional
innards_debris_object = STRING ;optional
```

| Parameter                 | Information |
| ------------------------- | ----------- |
| nickname                  |             |
| lifetime                  |             |
| process                   |             |
| effect                    |             |
| debris_impulse            |             |
| debris_type               |             |
| innards_debris_start_time |             |
| innards_debris_num        |             |
| innards_debris_radius     |             |
| innards_debris_object     |             |

### Simple

```ini
[Simple]
nickname = STRING
DA_archetype = PATH
material_library = PATH
Mass = INT
```

| Parameter        | Information |
| ---------------- | ----------- |
| nickname         |             |
| DA_archetype     |             |
| material_library |             |
| Mass             |             |
