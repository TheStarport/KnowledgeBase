---
title: hud
---

:::caution

This page is a work in progress!

There may be missing, incomplete or incorrect information on this page as it's still being built! Take information here with a pinch of salt, and feel free to contribute and correct things!

:::

## Overview


### Vanilla Examples

* `DATA\INTERFACE\hud.ini`

## Syntax

### HUD

```ini
[HUD]
shapes = PATH
```

| Parameter | Information |
| --------- | ----------- |
| shapes    |             |

### Receiver

```ini
[Receiver]
action = STRING
shut = FLOAT, FLOAT, FLOAT
open = FLOAT, FLOAT, FLOAT
delay = FLOAT
speaker_rotate = INT, INT, INT
male_speaker_offset = FLOAT, FLOAT, FLOAT
female_speaker_offset = FLOAT, FLOAT, FLOAT
backdrop = STRING
static = INT
win_pos = FLOAT, FLOAT, FLOAT
win_size = FLOAT, FLOAT
btn_pos = FLOAT, FLOAT
fly_time = INT
tool_tip_id = INT
```

| Parameter             | Information |
| --------------------- | ----------- |
| action                |             |
| shut                  |             |
| open                  |             |
| delay                 |             |
| speaker_rotate        |             |
| male_speaker_offset   |             |
| female_speaker_offset |             |
| backdrop              |             |
| static                |             |
| win_pos               |             |
| win_size              |             |
| btn_pos               |             |
| fly_time              |             |
| tool_tip_id           |             |

### Waypoint

This block appears to be empty, unused or lacking any known keys.

### Status

This block appears to be empty, unused or lacking any known keys.

### Target

This block appears to be empty, unused or lacking any known keys.

### Core

This block appears to be empty, unused or lacking any known keys.

### ContactList

This block appears to be empty, unused or lacking any known keys.

### Maneuvers

```ini
[Maneuvers]
maneuver = STRING, INT, INT, PATH, PATH
```

| Parameter | Information |
| --------- | ----------- |
| maneuver  |             |

### Steer

```ini
[Steer]
radius = INT
range = INT
color = INT, INT, INT, INT
size = INT
```

| Parameter | Information |
| --------- | ----------- |
| radius    |             |
| range     |             |
| color     |             |
| size      |             |

### Targetable_Objects

This block appears to be empty, unused or lacking any known keys.

### DamageIndicator

This block appears to be empty, unused or lacking any known keys.

### CruiseProgress

This block appears to be empty, unused or lacking any known keys.
