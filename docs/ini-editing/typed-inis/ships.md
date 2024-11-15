---
title: ships
---

:::caution

This page is a work in progress!

There may be missing, incomplete or incorrect information on this page as it's still being built! Take information here with a pinch of salt, and feel free to contribute and correct things!

:::

## Overview

Although `shiparch.ini` and `rtc_shiparch.ini` are listed as having configurable locations in `freelancer.ini`, ships used by NPCs _must_ be in the default `shiparch.ini` file or crashes may occur.

### Vanilla Examples

* `DATA\SHIPS\shiparch.ini`
* `DATA\SHIPS\rtc_shiparch.ini`

### Ship Handling

Ship handling is dictated by several keys found in the `[Engine]` block from [equipment](./equipment.md), as well as keys attributed to the `[Ship]` entry itself. The `mass` of a ship attenuates any change in speed and influences behaviour when colliding with other objects. `rotation_inertia` operates in much the same manner, but for turning.

`rotation_inertia` should typically be between 10 to 20% of `angular_drag` to avoid strange behaviour from the autopilot.

Where `linear_drag` = the sum of engine and ship `linear_drag` values:
$Strafe\ Speed = strafe\_force/(linear\_drag)$

$Max\ Turn\ Speed = steering\_torque/angular\_drag$

$Top\ Speed = max\_force†/linear\_drag$

†Value is defined in an [equipment](./equipment.md) entry.

## Syntax

### Simple

```ini
[Simple]
nickname = STRING
DA_archetype = PATH
material_library = PATH ;repeatable
LODranges = INT, INT, ...
MinSpecLOD = INT
```

| Parameter        | Information                                                                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname         | How this simple object is referenced elsewhere in the game's files.                                                                                              |
| DA_archetype     | The path to the archetype model to use for the simple. Typically a .3db or .cmp file.                                                                            |
| material_library | The path to a material library (.mat) file that the `DA_archetype` uses. Missing .mat files will cause the ship, or parts of the model to render inconsistently. |
| ScreenReset      |                                                                                                                                                                  |
| LODranges        |                                                                                                                                                                  |
| MinSpecLOD       |                                                                                                                                                                  |

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
fuse = STRING, FLOAT, FLOAT ;repeatable
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
material_library = PATH ;repeatable
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
hp_type = STRING, STRING ;repeatable
```

| Parameter                           | Information                                                                                                                                                                         |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids_name                            | The string ID name of the ship.                                                                                                                                                     |
| ids_info                            | The stat description text used in the ship dealer.                                                                                                                                  |
| ids_info1                           | The 'flavour text' used in a ship's description.                                                                                                                                    |
| ids_info2                           | The stats 'fields' used in the ship infobox when examining it outside the ship dealer. In vanilla this value is typically always `66608`                                            |
| ids_info3                           | The stats 'numbers' used in the ship infobox when examining it outside the ship dealer.                                                                                             |
| ship_class                          | A value between 0 and 3. Determines the ship class displayed in the dealer where 0 = 'Light Fighter', 1 = 'Heavy Fighter', 2 = 'Freighter', 3 = 'Very Heavy Fighter' and 4 =        |
| nickname                            | The internal nickname of the ship, i.e. how this will be referred to elsewhere in the game's INI files.                                                                             |
| LODranges                           |                                                                                                                                                                                     |
| msg_id_prefix                       |                                                                                                                                                                                     |
| mission_property                    | Determines what the ship is able to dock to. Valid options seem to be `can_use_berths` (Which allows the ship to use docking rings), `can_use_med_moors` and `can_use_large_moors`. |
| type                                |                                                                                                                                                                                     |
| mass                                | The mass of the ship. This value attenuates any changes in speed that the ship makes. A higher value results in greater attenuation.                                                |
| hold_size                           | The cargo size of the ship.                                                                                                                                                         |
| linear_drag                         |                                                                                                                                                                                     |
| fuse                                | A fuse applied to the ship. Values here are typically a [`fuse`](./fuses.md), a delay in seconds and a hit_pts threshold for the fuse to trigger.                                   |
| max_bank_angle                      |                                                                                                                                                                                     |
| camera_offset                       |                                                                                                                                                                                     |
| camera_angular_acceleration         |                                                                                                                                                                                     |
| camera_horizontal_turn_angle        |                                                                                                                                                                                     |
| camera_vertical_turn_up_angle       |                                                                                                                                                                                     |
| camera_vertical_turn_down_angle     |                                                                                                                                                                                     |
| camera_turn_look_ahead_slerp_amount |                                                                                                                                                                                     |
| nanobot_limit                       | Determines the maximum number of Nanobots a ship can carry.                                                                                                                         |
| shield_battery_limit                | Determines the maximum number of Shield Batteries a ship can carry.                                                                                                                 |
| hit_pts                             | Determines the ship's maximum hit points.                                                                                                                                           |
| DA_archetype                        | The path to the archetype model to use for the ship. Typically a .3db or .cmp file.                                                                                                 |
| material_library                    | The path to a material library (.mat) file that the `DA_archetype` uses. Missing .mat files will cause the ship, or parts of the model to render inconsistently.                    |
| envmap_material                     |                                                                                                                                                                                     |
| cockpit                             | Path to a [Cockpit](./cockpits.md) ini entry. Determines the properties of the ship's cockpit when in first-person view.                                                            |
| pilot_mesh                          | References a `[Simple]` block to attach at the HpPilot hardpoint.                                                                                                                   |
| explosion_arch                      |                                                                                                                                                                                     |
| surface_hit_effects                 |                                                                                                                                                                                     |
| steering_torque                     |                                                                                                                                                                                     |
| angular_drag                        |                                                                                                                                                                                     |
| rotation_inertia                    |                                                                                                                                                                                     |
| nudge_force                         |                                                                                                                                                                                     |
| strafe_force                        |                                                                                                                                                                                     |
| strafe_power_usage                  |                                                                                                                                                                                     |
| bay_door_anim                       | The animation in the model file to use when opening and closing the cargo bay doors.                                                                                                |
| bay_doors_open_snd                  | The [sound](./sounds.md) played when opening the bay doors.                                                                                                                         |
| bay_doors_close_snd                 | The [sound](./sounds.md) played when closing the bay doors.                                                                                                                         |
| HP_bay_surface                      |                                                                                                                                                                                     |
| HP_bay_external                     |                                                                                                                                                                                     |
| num_exhaust_nozzles                 |                                                                                                                                                                                     |
| HP_tractor_source                   |                                                                                                                                                                                     |
| shield_link                         |                                                                                                                                                                                     |
| hp_type                             |                                                                                                                                                                                     |

### CollisionGroup

```ini
[CollisionGroup]
obj = STRING
separable
parent_impulse = INT ;optional
child_impulse = INT ;optional
dmg_hp = STRING ;optional
dmg_obj = STRING ;optional
fuse = STRING, INT, INT ;optional
group_dmg_hp = STRING ;optional
group_dmg_obj = STRING ;optional
mass = INT
debris_type = STRING
separation_explosion = STRING
type = STRING
hit_pts = INT
root_health_proxy = BOOL
explosion_resistance = FLOAT ;optional
linked_equip = STRING, FLOAT ;optional
```

| Parameter            | Information                                                                                                                                                                                                                                                                                                       |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| obj                  | References a `[Simple]` block defined elsewhere in the Shiparch file.                                                                                                                                                                                                                                             |
| separable            |                                                                                                                                                                                                                                                                                                                   |
| parent_impulse       |                                                                                                                                                                                                                                                                                                                   |
| child_impulse        |                                                                                                                                                                                                                                                                                                                   |
| dmg_hp               |                                                                                                                                                                                                                                                                                                                   |
| dmg_obj              |                                                                                                                                                                                                                                                                                                                   |
| mass                 |                                                                                                                                                                                                                                                                                                                   |
| fuse                 |                                                                                                                                                                                                                                                                                                                   |
| group_dmg_hp         |                                                                                                                                                                                                                                                                                                                   |
| group_dmg_obj        |                                                                                                                                                                                                                                                                                                                   |
| debris_type          |                                                                                                                                                                                                                                                                                                                   |
| separation_explosion |                                                                                                                                                                                                                                                                                                                   |
| type                 |                                                                                                                                                                                                                                                                                                                   |
| hit_pts              | The amount of hitpoints this collision group has.                                                                                                                                                                                                                                                                 |
| root_health_proxy    | Decides whether any damage applied to this collision group is also applied to the root object, too. `true` applies the damage to the root object, `false` does not forward the damage and keeps it just to this group.                                                                                            |
| explosion_resistance | Defines a factor by which damage caused by explosions is multiplied. Defaults to 1. 0 means no explosion damage is applied ever.                                                                                                                                                                                  |
| linked_equip         | When this collision group is being destroyed, it causes damage to a type of equipment on the ship. The first entry accept a defined set of equipment types, which are: scanner, engine, weapon, shield, thruster, power, light, tractor, attached_fx, internal_fx, tradelane, repairdroid, cloaking_device, armor |
