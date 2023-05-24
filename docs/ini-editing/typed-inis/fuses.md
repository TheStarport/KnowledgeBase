---
title: fuses
---

:::caution

This page is a work in progress!

There may be missing, incomplete or incorrect information on this page as it's still being built! Take information here with a pinch of salt, and feel free to contribute and correct things!

:::

## Overview

### Vanilla Examples

* `DATA\FX\fuse_freeport7.ini`
* `DATA\FX\fuse.ini`
* `DATA\FX\fuse_suprise_solar.ini`
* `DATA\FX\fuse_li_dreadnought.ini`

## Syntax

### fuse

```ini
[fuse]
name = STRING
lifetime = INT
death_fuse = BOOL
```

| Parameter  | Information |
| ---------- | ----------- |
| name       |             |
| lifetime   |             |
| death_fuse |             |

### ignite_fuse

```ini
[ignite_fuse]
at_t = FLOAT
fuse = STRING
fuse_t = INT
```

| Parameter | Information |
| --------- | ----------- |
| at_t      |             |
| fuse      |             |
| fuse_t    |             |

### destroy_group

```ini
[destroy_group]
at_t = FLOAT
group_name = STRING
fate = STRING
```

| Parameter  | Information |
| ---------- | ----------- |
| at_t       |             |
| group_name |             |
| fate       |             |

### destroy_root

```ini
[destroy_root]
at_t = INT
```

| Parameter | Information |
| --------- | ----------- |
| at_t      |             |

### destroy_hp_attachment

```ini
[destroy_hp_attachment]
at_t = FLOAT
hardpoint = STRING
fate = STRING
```

| Parameter | Information |
| --------- | ----------- |
| at_t      |             |
| hardpoint |             |
| fate      |             |

### start_effect

```ini
[start_effect]
effect = STRING
hardpoint = STRING
at_t = FLOAT
pos_offset = INT, INT, INT
ori_offset = INT, INT, INT
attached = BOOL
```

| Parameter  | Information |
| ---------- | ----------- |
| effect     |             |
| hardpoint  |             |
| at_t       |             |
| pos_offset |             |
| ori_offset |             |
| attached   |             |

### start_cam_particles

```ini
[start_cam_particles]
effect = STRING
at_t = FLOAT
pos_offset = INT, INT, INT
ori_offset = INT, INT, INT
```

| Parameter  | Information |
| ---------- | ----------- |
| effect     |             |
| at_t       |             |
| pos_offset |             |
| ori_offset |             |

### impulse

```ini
[impulse]
at_t = FLOAT
hardpoint = STRING
pos_offset = INT, INT, INT
radius = INT
force = INT
damage = INT
```

| Parameter  | Information |
| ---------- | ----------- |
| at_t       |             |
| hardpoint  |             |
| pos_offset |             |
| radius     |             |
| force      |             |
| damage     |             |