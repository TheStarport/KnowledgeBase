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

| Parameter             | Information |
| --------------------- | ----------- |
| nickname              |             |
| glow_ring_effect      |             |
| glow_create_time      |             |
| jump_out_time         |             |
| jump_out_tunnel_time  |             |
| jump_in_tunnel_time   |             |
| jump_in_time          |             |
| kill_time_before_done |             |
| jump_tunnel_effect    |             |
| jump_tunnel           |             |
| jump_ambient          |             |
| jump_background_color |             |
