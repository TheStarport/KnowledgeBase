---
title: equipment
---

:::caution

This page is a work in progress!

There may be missing, incomplete or incorrect information on this page as it's still being built! Take information here with a pinch of salt, and feel free to contribute and correct things!

:::

## Overview

These files are used to determine the property of equipment and cover multiple types of equippable gear and objects. Please remember that for a piece of equipment to be visible to the player, it needs a corresponding [Goods](./goods.md) entry.

### Vanilla Examples

* `DATA\EQUIPMENT\weapon_equip.ini`
* `DATA\EQUIPMENT\engine_equip.ini`
* `DATA\EQUIPMENT\light_equip.ini`
* `DATA\EQUIPMENT\misc_equip.ini`

## Syntax

For the most part, blocks in this file type can be defined in any order, but are kept seperate. Typically `[Munition]` blocks are defined before `[Gun]` entries, but it's not been confirmed if this is a requirement.

#### Common Values

```ini
nickname = STRING
ids_name = INT
ids_info = INT
hit_pts = INT
volume = INT
mass = INT
DA_archetype = PATH
material_library = PATH
lootable = false
debris_type = STRING
separation_explosion = STRING
child_impulse = INT
parent_impulse = INT
toughness = INT
loot_appearance = STRING
LODranges = INT, INT, ...
```

| Parameter            | Information |
| -------------------- | ----------- |
| nickname             |             |
| ids_name             |             |
| ids_info             |             |
| hit_pts              |             |
| volume               |             |
| mass                 |             |
| DA_archetype         |             |
| material_library     |             |
| lootable             |             |
| debris_type          |             |
| separation_explosion |             |
| child_impulse        |             |
| parent_impulse       |             |
| toughness            |             |
| loot_appearance      |             |
| LODranges            |             |



There are a number of ini keys that are common to all equipment types, and can be applied to something, more or less regardless of what it is. Where there are ewxceptions, they are noted in the relevant subcategory.

### [Armor]

```ini
[Armor]
hit_pts_scale = FLOAT
```

| Parameter     | Information |
| ------------- | ----------- |
| hit_pts_scale |             |

### [AttachedFX]

```ini
[AttachedFX]
particles = STRING
use_throttle = BOOL
```

| Parameter    | Information |
| ------------ | ----------- |
| particles    |             |
| use_throttle |             |

### [CargoPod]

```ini
[CargoPod]
HP_child = STRING
```

| Parameter | Information |
| --------- | ----------- |
| HP_child  |             |

### [CloakingDevice]

```ini
[CloakingDevice]
HP_child = STRING
power_usage = INT
cloakin_time = INT
cloakout_time = INT
cloakin_fx = STRING
cloakout_fx = STRING
```

| Parameter     | Information |
| ------------- | ----------- |
| HP_child      |             |
| power_usage   |             |
| cloakin_time  |             |
| cloakout_time |             |
| cloakin_fx    |             |
| cloakout_fx   |             |

### [Commodity]

```ini
[Commodity]
units_per_container = INT
pod_appearance = STRING
decay_per_second = INT
```

| Parameter           | Information |
| ------------------- | ----------- |
| units_per_container |             |
| pod_appearance      |             |
| decay_per_second    |             |

### [Countermeasure]

```ini
[CounterMeasure]
units_per_container = INT
one_shot_sound = STRING
const_effect = STRING
lifetime = INT
seeker = STRING
owner_safe_time = INT
force_gun_ori = BOOL
requires_ammo = BOOL
linear_drag = FLOAT
range = INT
diversion_pctg = INT
```

| Parameter           | Information |
| ------------------- | ----------- |
| units_per_container |             |
| one_shot_sound      |             |
| const_effect        |             |
| lifetime            |             |
| seeker              |             |
| owner_safe_time     |             |
| force_gun_ori       |             |
| requires_ammo       |             |
| linear_drag         |             |
| range               |             |
| diversion_pctg      |             |

### [CounterMeasureDropper]

```ini
[CounterMeasureDropper]
HP_child = STRING
explosion_resistance = FLOAT
power_usage = INT
refire_delay = FLOAT
muzzle_velocity = FLOAT
flash_particle_name = STRING
flash_radius = FLOAT
light_anim = STRING
projectile_archetype = STRING
AI_range = INT
```

| Parameter            | Information |
| -------------------- | ----------- |
| HP_child             |             |
| explosion_resistance |             |
| power_usage          |             |
| refire_delay         |             |
| muzzle_velocity      |             |
| flash_particle_name  |             |
| flash_radius         |             |
| light_anim           |             |
| projectile_archetype |             |
| AI_range             |             |

### [Engine]

```ini
[Engine]
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
```

| Parameter                | Information |
| ------------------------ | ----------- |
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

### [Explosion]

`[Explosion]` is not a child of AttachedEquipment, and as such, does not accept most of the common values found at the top of this page.

```ini
[Explosion]
effect = STRING
lifetime = INT, INT
process = STRING
strength = INT
radius = INT
hull_damage = INT
energy_damage = INT
impulse = INT
```

| Parameter     | Information |
| ------------- | ----------- |
| effect        |             |
| lifetime      |             |
| process       |             |
| strength      |             |
| radius        |             |
| hull_damage   |             |
| energy_damage |             |
| impulse       |             |

### [Gun]

```ini
[Gun]
HP_child = STRING
explosion_resistance = FLOAT
hp_gun_type = STRING
damage_per_fire = INT
power_usage = INT
refire_delay = FLOAT
muzzle_velocity = FLOAT
projectile_archetype = STRING
dry_fire_sound = STRING
auto_turret = BOOL
turn_rate = FLOAT
dispersion_angle = FLOAT
use_animation = STRING
gun_elevation = FLOAT
gun_azimuth = FLOAT
```

| Parameter            | Information                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- |
| HP_child             |                                                                                               |
| explosion_resistance |                                                                                               |
| hp_gun_type          |                                                                                               |
| damage_per_fire      |                                                                                               |
| power_usage          |                                                                                               |
| refire_delay         |                                                                                               |
| muzzle_velocity      |                                                                                               |
| projectile_archetype |                                                                                               |
| dry_fire_sound       |                                                                                               |
| auto_turret          |                                                                                               |
| turn_rate            |                                                                                               |
| dispersion_angle     |                                                                                               |
| use_animation        |                                                                                               |
| gun_elevation        | Unused value. Freelancer tests these for validity if they are present, but does not use them. |
| gun_azimuth          | Unused value. Freelancer tests these for validity if they are present, but does not use them. |

### [InternalFX]

```ini
[InternalFX]
use_sound = STRING
```

| Parameter | Information |
| --------- | ----------- |
| use_sound |             |

### [Light]

`[Light]` is not a child of AttachedEquipment, and as such, does not accept most of the common values found at the top of this page.

```ini
[Light]
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

`[LOD]` is not a child of AttachedEquipment, and as such, does not accept most of the common values found at the top of this page.

```ini
[LOD]
obj = STRING
```

| Parameter | Information |
| --------- | ----------- |
| obj       |             |

### [LootCrate]

```ini
[LootCrate]
explosion_arch = STRING
```

| Parameter      | Information |
| -------------- | ----------- |
| explosion_arch |             |


### [Mine]

```ini
explosion_arch = STRING
units_per_container = INT
requires_ammo = BOOL
one_shot_sound = STRING
detonation_dist = INT
lifetime = FLOAT
force_gun_ori = BOOL
owner_safe_time = INT
linear_drag = FLOAT
seek_dist = INT
top_speed = INT
acceleration = INT
const_effect = STRING
```

| Parameter           | Information |
| ------------------- | ----------- |
| explosion_arch      |             |
| units_per_container |             |
| requires_ammo       |             |
| one_shot_sound      |             |
| detonation_dist     |             |
| lifetime            |             |
| force_gun_ori       |             |
| owner_safe_time     |             |
| linear_drag         |             |
| seek_dist           |             |
| top_speed           |             |
| acceleration        |             |
| const_effect        |             |

### [MineDropper]

```ini
[MineDropper]
explosion_resistance = INT
damage_per_fire = INT
power_usage = INT
refire_delay = INT
muzzle_velocity = INT
projectile_archetype = STRING
dry_fire_sound = STRING
```

| Parameter            | Information |
| -------------------- | ----------- |
| explosion_resistance |             |
| damage_per_fire      |             |
| power_usage          |             |
| refire_delay         |             |
| muzzle_velocity      |             |
| projectile_archetype |             |
| dry_fire_sound       |             |


### [Motor]

```ini
[Motor]
lifetime = FLOAT
accel = FLOAT
delay = FLOAT
```

| Parameter | Information |
| --------- | ----------- |
| lifetime  |             |
| accel     |             |
| delay     |             |

### [Munition]

```ini
[Munition]
explosion_arch = STRING
units_per_container = INT
hp_type = STRING
requires_ammo = BOOL
one_shot_sound = STRING
detonation_dist = INT
lifetime = FLOAT
Motor = STRING
force_gun_ori = BOOL
const_effect = STRING
HP_trail_parent = STRING
seeker = STRING
time_to_lock = INT
seeker_range = INT
seeker_fov_deg = INT
max_angular_velocity = FLOAT
```

| Parameter            | Information |
| -------------------- | ----------- |
| explosion_arch       |             |
| units_per_container  |             |
| hp_type              |             |
| requires_ammo        |             |
| one_shot_sound       |             |
| detonation_dist      |             |
| lifetime             |             |
| Motor                |             |
| force_gun_ori        |             |
| const_effect         |             |
| HP_trail_parent      |             |
| seeker               |             |
| time_to_lock         |             |
| seeker_range         |             |
| seeker_fov_deg       |             |
| max_angular_velocity |             |

### [Power]

```ini
[Power]
capacity = INT
charge_rate = INT
thrust_capacity = INT
thrust_charge_rate = INT
```

| Parameter          | Information |
| ------------------ | ----------- |
| capacity           |             |
| charge_rate        |             |
| thrust_capacity    |             |
| thrust_charge_rate |             |

### [RepairKit]

```ini
[RepairKit]
units_per_container = INT
```

| Parameter           | Information |
| ------------------- | ----------- |
| units_per_container |             |

### [Scanner]

```ini
[Scanner]
range = INT
cargo_scan_range = INT
power_usage = INT
```

| Parameter        | Information                                                                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| range            | The range of the scanner. Players and NPCs (if scanners are enabled for them), will not be able to see certain objects on their contacts list beyond this range. |
| cargo_scan_range | The range of the active cargo scan                                                                                                                               |
| power_usage      | Power used when an active scan takes place. Power is deducted once, not over time.                                                                               |

### [ShieldBattery]

```ini
[ShieldBattery]
units_per_container = INT
```

| Parameter           | Information |
| ------------------- | ----------- |
| units_per_container |             |

### [ShieldGenerator]

```ini
[ShieldGenerator]

HP_child = STRING
explosion_resistance = FLOAT
regeneration_rate = FLOAT
max_capacity = FLOAT
hp_type = STRING
hp_shield_type = STRING (multiple)
offline_rebuild_time = FLOAT
offline_threshold = FLOAT
constant_power_draw = FLOAT
rebuild_power_draw = FLOAT
shield_type = STRING
shield_collapse_sound = STRING
shield_collapse_particle = STRING
shield_rebuilt_sound = STRING
shield_hit_effects = FLOAT, STRING
```

| Parameter                | Information |
| ------------------------ | ----------- |
| HP_child                 |             |
| explosion_resistance     |             |
| regeneration_rate        |             |
| max_capacity             |             |
| hp_type                  |             |
| hp_shield_type           |             |
| offline_rebuild_time     |             |
| offline_threshold        |             |
| constant_power_draw      |             |
| rebuild_power_draw       |             |
| shield_type              |             |
| shield_collapse_sound    |             |
| shield_collapse_particle |             |
| shield_rebuilt_sound     |             |
| shield_hit_effects       |             |

### [Shield]

```ini
[Shield]
HP_child = STRING
```

| Parameter | Information |
| --------- | ----------- |
| HP_child  |             |

### [Thruster]

```ini
[Thruster]
HP_child = STRING
explosion_resistance = INT
max_force = INT
particles = STRING
hp_particles = STRING
power_usage = INT
```

| Parameter            | Information |
| -------------------- | ----------- |
| HP_child             |             |
| explosion_resistance |             |
| max_force            |             |
| particles            |             |
| hp_particles         |             |
| power_usage          |             |

### [Tractor]

```ini
[Tractor]
max_length = INT
reach_speed = INT
color = INT, INT, INT
operating_effect = STRING
tractor_complete_snd = STRING
```

| Parameter            | Information |
| -------------------- | ----------- |
| max_length           |             |
| reach_speed          |             |
| color                |             |
| operating_effect     |             |
| tractor_complete_snd |             |
