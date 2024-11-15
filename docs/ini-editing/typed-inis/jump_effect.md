---
title: jumpeffect
---

:::caution

This page is a work in progress!

There may be missing, incomplete or incorrect information on this page as it's still being built! Take information here with a pinch of salt, and feel free to contribute and correct things!

:::

## Overview

### Vanilla Examples

* `DATA\FX\jumpeffect.ini`

## Syntax


### [JumpShipEffect]

```ini
[JumpShipEffect]
jump_out_effect = STRING
jump_in_effect = STRING
```

| Parameter       | Information |
| --------------- | ----------- |
| jump_out_effect |             |
| jump_in_effect  |             |

### [JumpGateEffect]

```ini
[JumpGateEffect]
nickname = STRING
glow_ring_effect = STRING, STRING, ...
glow_ring_hp = STRING, STRING, ...
glow_create_time = INT, INT, ...
jump_out_time = INT
jump_out_tunnel_time = INT
jump_in_tunnel_time = INT
jump_in_time = INT
kill_time_before_done = FLOAT
jump_tunnel_effect = STRING
jump_tunnel = STRING
jump_ambient = INT, INT, INT
jump_background_color = INT, INT, INT
```

| Parameter             | Information                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname              |                                                                                                                                             |
| glow_ring_effect      | Lists the [effects](./effects.md) that should to be played when a ship docks with the jumpgate. Freelancer seems to have a limit of 7 here. |
| glow_create_time      | Lists the time at which the effects are created after a ship begins docking.                                                                |
| jump_out_time         | How long it takes for a ship to enter the tunnel after your ship reaches HpDockMountA.                                                      |
| jump_out_tunnel_time  | The time until Freelancer loads the target system.                                                                                          |
| jump_in_tunnel_time   | The time after loading until a player enters the target system.                                                                             |
| jump_in_time          | The time from when a player exits the tunnel until they arrive at the jumpgate.                                                             |
| kill_time_before_done |                                                                                                                                             |
| jump_tunnel_effect    | References an [effect](./effects.md) used during the jump sequence.                                                                                                                                            |
| jump_tunnel           | References a [gate_tunnel](./gate_tunnel.md) block that determines the jump tunnel used.                                                                                                                                            |
| jump_ambient          | An RGB tint value for the ambient light inside the jump tunnel.                                                                             |
| jump_background_color | An RGB tint value for the 'backgrond' of the jump tunnel.                                                                                   |
