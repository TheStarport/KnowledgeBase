---
title: ships
---

:::caution

This page is a work in progress!

There may be missing, incomplete or incorrect information on this page as it's still being built! Take information here with a pinch of salt, and feel free to contribute and correct things!

:::

## Overview


### Vanilla Examples

* `DATA\SHIPS\shiparch.ini`
* `DATA\SHIPS\rtc_shiparch.ini`

## Syntax

### Simple

```ini
[Simple]
nickname = STRING
DA_archetype = PATH
material_library = PATH
LODranges = INT, INT, ...
MinSpecLOD = INT
```

| Parameter        | Information |
| ---------------- | ----------- |
| nickname         |             |
| DA_archetype     |             |
| material_library |             |
| ScreenReset      |             |
| LODranges        |             |
| MinSpecLOD       |             |

### Ship

```ini
[Ship]
ids_name = INT
ids_info = INT
ids_info1 = INT
ids_info2 = INT
ids_info3 = INT
ship_class = INT
nickname = STRING
LODranges = INT, INT, ...
msg_id_prefix = STRING
mission_property = STRING
type = STRING
mass = INT
hold_size = INT
linear_drag = INT
fuse = STRING, FLOAT, FLOAT
max_bank_angle = INT
camera_offset = INT, INT
camera_angular_acceleration = FLOAT
camera_horizontal_turn_angle = INT
camera_vertical_turn_up_angle = INT
camera_vertical_turn_down_angle = INT
camera_turn_look_ahead_slerp_amount = INT
nanobot_limit = INT
shield_battery_limit = INT
hit_pts = INT
DA_archetype = PATH
material_library = PATH
envmap_material = STRING
cockpit = PATH
pilot_mesh = STRING
explosion_arch = STRING
surface_hit_effects = INT, STRING, STRING, STRING
steering_torque = INT, INT, INT
angular_drag = INT, INT, INT
rotation_inertia = INT, INT, INT
nudge_force = INT
strafe_force = INT
strafe_power_usage = INT
bay_door_anim = STRING
bay_doors_open_snd = STRING
bay_doors_close_snd = STRING
HP_bay_surface = STRING
HP_bay_external = STRING
num_exhaust_nozzles = INT
HP_tractor_source = STRING
shield_link = STRING, STRING, STRING
hp_type = STRING, STRING
```

| Parameter                           | Information |
| ----------------------------------- | ----------- |
| ids_name                            |             |
| ids_info                            |             |
| ids_info1                           |             |
| ids_info2                           |             |
| ids_info3                           |             |
| ship_class                          |             |
| nickname                            |             |
| LODranges                           |             |
| msg_id_prefix                       |             |
| mission_property                    |             |
| type                                |             |
| mass                                |             |
| hold_size                           |             |
| linear_drag                         |             |
| fuse                                |             |
| max_bank_angle                      |             |
| camera_offset                       |             |
| camera_angular_acceleration         |             |
| camera_horizontal_turn_angle        |             |
| camera_vertical_turn_up_angle       |             |
| camera_vertical_turn_down_angle     |             |
| camera_turn_look_ahead_slerp_amount |             |
| nanobot_limit                       |             |
| shield_battery_limit                |             |
| hit_pts                             |             |
| DA_archetype                        |             |
| material_library                    |             |
| envmap_material                     |             |
| cockpit                             |             |
| pilot_mesh                          |             |
| explosion_arch                      |             |
| surface_hit_effects                 |             |
| steering_torque                     |             |
| angular_drag                        |             |
| rotation_inertia                    |             |
| nudge_force                         |             |
| strafe_force                        |             |
| strafe_power_usage                  |             |
| bay_door_anim                       |             |
| bay_doors_open_snd                  |             |
| bay_doors_close_snd                 |             |
| HP_bay_surface                      |             |
| HP_bay_external                     |             |
| num_exhaust_nozzles                 |             |
| HP_tractor_source                   |             |
| shield_link                         |             |
| hp_type                             |             |

### CollisionGroup

```ini
[CollisionGroup]
obj = STRING
separable
parent_impulse = INT
child_impulse = INT
dmg_hp = STRING
dmg_obj = STRING
mass = INT
debris_type = STRING
separation_explosion = STRING
type = STRING
hit_pts = INT
root_health_proxy = BOOL
explosion_resistance = FLOAT
```

| Parameter            | Information |
| -------------------- | ----------- |
| obj                  |             |
| separable            |             |
| parent_impulse       |             |
| child_impulse        |             |
| dmg_hp               |             |
| dmg_obj              |             |
| mass                 |             |
| debris_type          |             |
| separation_explosion |             |
| type                 |             |
| hit_pts              |             |
| root_health_proxy    |             |
| explosion_resistance |             |