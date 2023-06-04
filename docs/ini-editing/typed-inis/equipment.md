---
title: equipment
---

:::caution

This page is a work in progress!

There may be missing, incomplete or incorrect information on this page as it's still being built! Take information here with a pinch of salt, and feel free to contribute and correct things!

:::

## Overview

These files are used to determine the property of equipment and cover multiple types of equippable gear and objects. Please remmeber that for a piece of equipment to be visible to the player, it needs a corresponding [Goods](./goods.md) entry.

### Vanilla Examples

* `DATA\EQUIPMENT\weapon_equip.ini`
* `DATA\EQUIPMENT\engine_equip.ini`
* `DATA\EQUIPMENT\light_equip.ini`
* `DATA\EQUIPMENT\misc_equip.ini`

## Syntax

For the most part, blocks in this file type can be defined in any order, but are kept seperate. Typically `[Munition]` blocks are defined before `[Gun]` entries, but it's not been confirmed if this is a requirement.

### Common Values

There are a number of ini keys that are common to all equipment types, and can be applied to something, more or less regardless of what it is. Where there are ewxceptions, they are noted in the relevant subcategory.

### [Armor]

### [AttachedFX]

### [CargoPod]

### [CloakingDevice]

### [Commodity]

### [Countermeasure]

### [Engine]

```ini
[Engine]
nickname = STRING
ids_name = INT
ids_info = INT
volume = INT
mass = INT
max_force = INT 
linear_drag = INT
power_usage = INT
reverse_fraction = FLOAT
flame_effect = STRING
trail_effect = STRING
trail_effect_player = STRING
cruise_charge_time = INT
cruise_power_usage = INT
character_start_sound = STRING
character_loop_sound = STRING
character_pitch_range = INT, INT
rumble_sound = STRING
rumble_atten_range = INT, INT
rumble_pitch_range = INT, INT
engine_kill_sound = STRING
cruise_start_sound = STRING
cruise_loop_sound = STRING
cruise_stop_sound = STRING
cruise_disrupt_sound = STRING
cruise_backfire_sound = STRING
indestructible = BOOL
outside_cone_attenuation = INT
inside_sound_cone = INT
outside_sound_cone = INT
lootable = false
```

| Parameter                | Information |
| ------------------------ | ----------- |
| nickname                 |             |
| ids_name                 |             |
| ids_info                 |             |
| volume                   |             |
| mass                     |             |
| max_force                |             |
| linear_drag              |             |
| power_usage              |             |
| reverse_fraction         |             |
| flame_effect             |             |
| trail_effect             |             |
| trail_effect_player      |             |
| cruise_charge_time       |             |
| cruise_power_usage       |             |
| character_start_sound    |             |
| character_loop_sound     |             |
| character_pitch_range    |             |
| rumble_sound             |             |
| rumble_atten_range       |             |
| rumble_pitch_range       |             |
| engine_kill_sound        |             |
| cruise_start_sound       |             |
| cruise_loop_sound        |             |
| cruise_stop_sound        |             |
| cruise_disrupt_sound     |             |
| cruise_backfire_sound    |             |
| indestructible           |             |
| outside_cone_attenuation |             |
| inside_sound_cone        |             |
| outside_sound_cone       |             |
| lootable                 |             |

### [Explosion]

### [Gun]

### [Light]

```ini
[Light]
nickname = STRING
inherit = STRING
glow_color = INT, INT, INT
color = INT, INT, INT
bulb_size = FLOAT
glow_size = INT
flare_cone = INT, INT
intensity = INT
lightsource_cone = INT
avg_delay = FLOAT
blink_duration = FLOAT
min_color = INT, INT, INT
```

| Parameter        | Information |
| ---------------- | ----------- |
| nickname         |             |
| inherit          |             |
| glow_color       |             |
| color            |             |
| bulb_size        |             |
| glow_size        |             |
| flare_cone       |             |
| intensity        |             |
| lightsource_cone |             |
| avg_delay        |             |
| blink_duration   |             |
| min_color        |             |

### [LOD]

### [LootCrate]

### [Motor]

### [Munition]

### [Power]

```ini
[Power]
nickname = STRING
ids_name = INT
ids_info = INT
volume = INT
mass = INT
DA_archetype = PATH
material_library = PATH
capacity = INT
charge_rate = INT
thrust_capacity = INT
thrust_charge_rate = INT
lootable = BOOL
```

| Parameter          | Information |
| ------------------ | ----------- |
| nickname           |             |
| ids_name           |             |
| ids_info           |             |
| volume             |             |
| mass               |             |
| DA_archetype       |             |
| material_library   |             |
| capacity           |             |
| charge_rate        |             |
| thrust_capacity    |             |
| thrust_charge_rate |             |
| lootable           |             |

### [RepairKit]

### [Scanner]

### [ShieldBattery]

### [ShieldGenerator]

### [Shield]

### [Thruster]

### [Tractor]
