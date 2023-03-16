---
title: cockpits
---

## Overview

These files describe cockpits and turret cameras used by [ships](ships.md).

### Vanilla Examples

* `DATA\COCKPITS\CORSAIR\corsair_elite.ini`
* `DATA\COCKPITS\CORSAIR\civilian_vheavy.ini`
* `DATA\COCKPITS\CORSAIR\r_elite.ini`

## Syntax

One of each block may be defined, extras are ignored

### [Cockpit]

```ini
[Cockpit]
mesh = PATH
int_brightness = FLOAT
head_turn = INT, INT
```

| Parameter      | Information                                                                                  |
| -------------- | -------------------------------------------------------------------------------------------- |
| mesh           | The path to the cockpit model used.                                                          |
| int_brightness | Sets the brightness of the cockpit. Requires testing to confirm value. Has a range of 0 to 1 |
| head_turn      | This value may be unused. Could relate to camera 'turn' when the ship banks                  |

### [CockpitCamera]

```ini
[CockpitCamera]
znear = INT
```

| Parameter | Information                                      |
| --------- | ------------------------------------------------ |
| znear     | Near distance at which objects are not rendered. |


### [TurretCamera]

```ini
[TurretCamera]
tether = FLOAT, FLOAT, FLOAT
yaw_rotate_speed = INT
pitch_rotate_speed = FLOAT
accel_speed = INT
```

| Parameter          | Information                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| tether             | The turret camera location relative to the ship. FLOATs are X, Y and Z coordinates respectively.     |
| yaw_rotate_speed   | Rotation speed in radians per second when moving from side to side                                   |
| pitch_rotate_speed | Rotation speed in radians per second when moving up and down                                         |
| accel_speed        | Acceleration in radians per second squared at which the rotation speed is reached. Requires testing. |
