---
title: system
---

:::caution

This page is a work in progress!

There may be missing, incomplete or incorrect information on this page as it's still being built! Take information here with a pinch of salt, and feel free to contribute and correct things!

:::

## Overview


### Vanilla Examples

* `DATA\UNIVERSE\SYSTEMS\BR01\br01.ini`
* `DATA\UNIVERSE\SYSTEMS\LI01\li01.ini`
* `DATA\UNIVERSE\SYSTEMS\KU03\ku03.ini`

## Syntax

Blocks other than '[Light]', '[Object]' and '[Zone]' should always be called at the top of the file in the below order.

### SystemInfo

```ini
[SystemInfo]
space_color = INT, INT, INT
local_faction = STRING
rpop_solar_detection = BOOL
space_farclip = FLOAT

```

| Parameter            | Information                                                                                                                         |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| space_color          | Sets the system background color rendered behind any starspheres that are defined. (Integers are red, green and blue respectively.) |
| local_faction        | Calls a faction as defined in faction_prop. Appears to be present in every system file but unused.                                  |
| rpop_solar_detection | Unclear what this does.                                                                                                             |
| space_farclip        | Minimum value of 1000. Relates to LOD pop-in distance.                                                                              |

### EncounterParameters

```ini
[EncounterParameters]
nickname = STRING
filename = PATH
```

| Parameter | Information                                                                |
| --------- | -------------------------------------------------------------------------- |
| nickname  | How the below encounter ini is referred to within the current system file. |
| filename  | The path to the [encounter ini file](encounters.md) to be defined here.    |

### TexturePanels

```ini
[TexturePanels]
file = PATH
```

| Parameter | Information |
| --------- | ----------- |
| file      |             |

### Music

```ini
[Music]
space = STRING
danger = STRING
battle = STRING
```

| Parameter | Information                                                                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| space     | References a [sound](sounds.md) that will loop when the game is in an 'idle' state. This value will be overridden by music defined in individual zones. |
| danger    | References a [sound](sounds.md) that will loop when the game is in an 'danger' state.                                                                   |
| battle    | References a [sound](sounds.md) that will loop when the game is in an 'combat' state.                                                                   |

### Dust

```ini
[Dust]
spacedust = Dust
```

| Parameter | Information                                                                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| spacedust | References a dust [effect](effects.md) to be used in space around the player,  This value will be overridden by dust defined in individual zones. |


### Nebula

```ini
[Nebula]
file = PATH
zone = STRING
```

| Parameter | Information                                                         |
| --------- | ------------------------------------------------------------------- |
| file      | Path to a [nebula](nebula_fields.md) file.                          |
| zone      | The zone in this system that will use the above file's information. |


### Asteroids

```ini
[Asteroids]
file = PATH
zone = STRING
```

| Parameter | Information                                                         |
| --------- | ------------------------------------------------------------------- |
| file      | Path to a [asteroid](asteroid_fields.md) file.                      |
| zone      | The zone in this system that will use the above file's information. |

### Ambient

```ini
[Ambient]
color = INT, INT, INT
```

| Parameter | Information |
| --------- | ----------- |
| color     |             |

### Background

```ini
[Background]
basic_stars = PATH
complex_stars = PATH
nebulae = PATH
```

| Parameter     | Information |
| ------------- | ----------- |
| basic_stars   |             |
| complex_stars |             |
| nebulae       |             |

### LightSource

```ini
[LightSource]
nickname = STRING
pos = FLOAT, FLOAT, FLOAT
rotate = FLOAT, FLOAT, FLOAT
color = INT, INT, INT
range = INT
type = STRING
direction = FLOAT, FLOAT, FLOAT
atten_curve = DYNAMIC_DIRECTION
attenuation = FLOAT, FLOAT, FLOAT
color_curve = STRING, FLOAT
```

| Parameter   | Information |
| ----------- | ----------- |
| nickname    |             |
| pos         |             |
| rotate      |             |
| color       |             |
| range       |             |
| type        |             |
| direction   |             |
| atten_curve |             |
| attenuation |             |
| color_curve |             |

### Object

```ini
[Object]
nickname = STRING
ids_name = INT
ids_info = INT
pos = FLOAT, FLOAT, FLOAT
rotate = FLOAT, FLOAT, FLOAT
ambient_color = INT, INT, INT
archetype = STRING
star = STRING
spin = FLOAT, FLOAT, FLOAT
msg_id_prefix = STRING
jump_effect = STRING
atmosphere_range = INT
prev_ring = STRING
next_ring = STRING
ring = STRING, PATH
base = STRING
dock_with = STRING
Ambient = INT, INT, INT
visit = FLOAT
reputation = STRING
tradelane_space_name = STRING
behavior = STRING
voice = STRING
space_costume = STRING, STRING
faction = STRING
difficulty_level = INT 
goto = STRING
loadout = STRING
pilot = STRING
parent = STRING
```

| Parameter            | Information |
| -------------------- | ----------- |
| nickname             |             |
| ids_name             |             |
| ids_info             |             |
| pos                  |             |
| rotate               |             |
| ambient_color        |             |
| archetype            |             |
| star                 |             |
| spin                 |             |
| msg_id_prefix        |             |
| jump_effect          |             |
| atmosphere_range     |             |
| prev_ring            |             |
| next_ring            |             |
| ring                 |             |
| base                 |             |
| dock_with            |             |
| Ambient              |             |
| visit                |             |
| reputation           |             |
| tradelane_space_name |             |
| behavior             |             |
| voice                |             |
| space_costume        |             |
| faction              |             |
| difficulty_level     |             |
| goto                 |             |
| loadout              |             |
| pilot                |             |
| parent               |             |



### Zone

```ini
[Zone]
nickname = STRING
ids_name = INT
ids_info = INT
pos = FLOAT, FLOAT, FLOAT
rotate = FLOAT, FLOAT, FLOAT
shape = STRING
size = INT
spin = FLOAT, FLOAT, FLOAT
property_flags = INT
property_fog_color = INT, INT, INT 
damage = INT
visit = FLOAT
spacedust = STRING
spacedust_maxparticle = INT 
interference = FLOAT
drag_modifier = FLOAT
edge_fraction = FLOAT
attack_ids = STRING, ...
mission_type = STRING, STRING
comment = STRING
lane_id = STRING
tradelane_attack = INT
tradelane_down = INT
sort = FLOAT
vignette_type = STRING
toughness = INT
density = INT
repop_time = INT
max_battle_size = INT
pop_type = STRING
relief_time = INT
population_additive = BOOL
path_label = STRING, INT
usage = STRING
mission_eligible = BOOL
density_restriction = INT, STRING
faction = STRING, FLOAT ;repeatable
encounter = STRING, INT, FLOAT
Music = STRING
```

| Parameter             | Information                                                                                                                                                                                                                                                                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname              |                                                                                                                                                                                                                                                                                                                                                 |
| ids_name              |                                                                                                                                                                                                                                                                                                                                                 |
| ids_info              |                                                                                                                                                                                                                                                                                                                                                 |
| pos                   |                                                                                                                                                                                                                                                                                                                                                 |
| rotate                |                                                                                                                                                                                                                                                                                                                                                 |
| shape                 |                                                                                                                                                                                                                                                                                                                                                 |
| size                  |                                                                                                                                                                                                                                                                                                                                                 |
| spin                  |                                                                                                                                                                                                                                                                                                                                                 |
| property_flags        |                                                                                                                                                                                                                                                                                                                                                 |
| property_fog_color    |                                                                                                                                                                                                                                                                                                                                                 |
| damage                |                                                                                                                                                                                                                                                                                                                                                 |
| visit                 |                                                                                                                                                                                                                                                                                                                                                 |
| spacedust             |                                                                                                                                                                                                                                                                                                                                                 |
| spacedust_maxparticle |                                                                                                                                                                                                                                                                                                                                                 |
| interference          |                                                                                                                                                                                                                                                                                                                                                 |
| drag_modifier         |                                                                                                                                                                                                                                                                                                                                                 |
| edge_fraction         |                                                                                                                                                                                                                                                                                                                                                 |
| attack_ids            |                                                                                                                                                                                                                                                                                                                                                 |
| mission_type          |                                                                                                                                                                                                                                                                                                                                                 |
| comment               |                                                                                                                                                                                                                                                                                                                                                 |
| lane_id               |                                                                                                                                                                                                                                                                                                                                                 |
| tradelane_attack      |                                                                                                                                                                                                                                                                                                                                                 |
| tradelane_down        |                                                                                                                                                                                                                                                                                                                                                 |
| sort                  |                                                                                                                                                                                                                                                                                                                                                 |
| vignette_type         |                                                                                                                                                                                                                                                                                                                                                 |
| toughness             |                                                                                                                                                                                                                                                                                                                                                 |
| density               | This determines the number of encounters generated by this zone that can be present at the same time. It is unlikely that this parameter limits the number of ships present.                                                                                                                                                                    |
| repop_time            | If the density is lower than the upper bound the repop timer will be active and encounters will spawn. It will reset and stop once the density count is over the limit set.                                                                                                                                                                     |
| max_battle_size       | May determines the maximum number of ships allowed in an instance at any given time. However, this is set to quite low values in vanilla Freelancer and it's possible it refers to encounter permutations instead. There are even a few cases where this value is set to 0 and NPCs still appear to spawn.                                      |
| pop_type              | Uncertain precisely what this does. Known options are `lootable_field`, `nonlootable_ast_field`, `major_tradelane`, `jumpgate`, `base_cluster_law`, `single_base_law`, `extend_law`, `wormhole`, `trade_path`, `attack_patrol`, `lane_patrol` and `Background`. This key is sometimes called with faction values as well.                       |
| relief_time           | Determines the latest moment an encounter will dissapear after being spawned, either by docking or leaving the player's range.                                                                                                                                                                                                                  |
| population_additive   | Will encounters from overlapping zones be allowed to spawn in this zone?                                                                                                                                                                                                                                                                        |
| path_label            |                                                                                                                                                                                                                                                                                                                                                 |
| usage                 |                                                                                                                                                                                                                                                                                                                                                 |
| mission_eligible      | Determines whether or not missions are allowed to take place in this zone.                                                                                                                                                                                                                                                                      |
| density_restriction   |                                                                                                                                                                                                                                                                                                                                                 |
| faction               | This key determines which faction will undertake the encounter. The first string references a faction as defined in [faction_prop](../hardcoded-inis/data/missions/faction_prop.ini.md). The second FLOAT value represents the precentage chance the encounter will choose this faction. This value's sum total in zones should never exceed 1. |
| encounter             | References an encounter as defined in the `[Encounter]` block at the top of the system file. The first INT value determines the difficulty of the involved pilots. The second FLOAT value represents the precentage chance this encounter will occur. This value's sum total in zones should never exceed 1.                                    |
| Music                 |                                                                                                                                                                                                                                                                                                                                                 |