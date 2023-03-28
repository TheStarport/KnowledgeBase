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

### SystemInfo

```ini
[SystemInfo]
space_color = INT, INT, INT
local_faction = STRING
rpop_solar_detection = BOOL
space_farclip = FLOAT

```

| Parameter            | Information                                            |
| -------------------- | ------------------------------------------------------ |
| space_color          |                                                        |
| local_faction        |                                                        |
| rpop_solar_detection |                                                        |
| space_farclip        | Minimum value of 1000. Relates to LOD pop-in distance. |

### EncounterParameters

```ini
[EncounterParameters]
nickname = STRING
filename = PATH
```

| Parameter | Information |
| --------- | ----------- |
| nickname  |             |
| filename  |             |

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

| Parameter | Information |
| --------- | ----------- |
| space     |             |
| danger    |             |
| battle    |             |

### Dust

```ini
[Dust]
spacedust = Dust
```

| Parameter | Information |
| --------- | ----------- |
| spacedust |             |

### Asteroids

```ini
[Asteroids]
file = PATH
zone = STRING
```

| Parameter | Information |
| --------- | ----------- |
| file      |             |
| zone      |             |

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
density_restriction = INT
encounter = STRING
Music = STRING
```

| Parameter             | Information |
| --------------------- | ----------- |
| nickname              |             |
| ids_name              |             |
| ids_info              |             |
| pos                   |             |
| rotate                |             |
| shape                 |             |
| size                  |             |
| spin                  |             |
| property_flags        |             |
| property_fog_color    |             |
| damage                |             |
| visit                 |             |
| spacedust             |             |
| spacedust_maxparticle |             |
| interference          |             |
| drag_modifier         |             |
| edge_fraction         |             |
| attack_ids            |             |
| mission_type          |             |
| comment               |             |
| lane_id               |             |
| tradelane_attack      |             |
| tradelane_down        |             |
| sort                  |             |
| vignette_type         |             |
| toughness             |             |
| density               |             |
| repop_time            |             |
| max_battle_size       |             |
| pop_type              |             |
| relief_time           |             |
| population_additive   |             |
| path_label            |             |
| usage                 |             |
| mission_eligible      |             |
| density_restriction   |             |
| encounter             |             |
| Music                 |             |