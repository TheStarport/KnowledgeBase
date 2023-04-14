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

| Parameter   | Information                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| nickname    |                                                                                                                        |
| pos         |                                                                                                                        |
| rotate      |                                                                                                                        |
| color       |                                                                                                                        |
| range       |                                                                                                                        |
| type        | Determines the type of light source to use Can be POINT or DIRECTIONAL.                                                |
| direction   |                                                                                                                        |
| atten_curve | References the attenuation curve that is used to change the light intensity based on the distance to the light source. |
| attenuation |                                                                                                                        |
| color_curve |                                                                                                                        |

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
goto = STRING, STRING, STRING
loadout = STRING
pilot = STRING
parent = STRING
```

| Parameter            | Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname             | How this object is referred to elsewhere in the file. If this value is not unique within the system file, strange behavior with targeting will occur.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ids_name             | The string for this object's name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ids_info             | The string for this object's map/selection infocard                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| pos                  | The object's X, Y and Z coordinates in space respectively.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| rotate               | The object's X, Y and Z rotation in space respectively. Range -360 to 360.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ambient_color        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| archetype            | The object's archetype as defined in a [solar](./solar.md) file type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| star                 | If the object is a star, the object's archetype as defined in [stararch.ini](../hardcoded-inis/data/solar/stararch.ini.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| spin                 | Valid in zones, but unfortunately ignored by Freelancer.exe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| msg_id_prefix        | References a `[Sound]` block from a [voices](./voices.md) file to use for the base's name when hailing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| jump_effect          | References a `[JumpGateEffect]` block from a [jump_effect](./jump_effect.md) file. This is only relevant if the object is a jump gate or jump hole.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| atmosphere_range     | The radius of the 'atmosphere burn effect' bubble around the object. This is typically applied to planets and stars.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| burn_color           | Sets the color of the atmosphere burn effect if it is present.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| prev_ring            | If this is a tradelane, references the nickname of the previous tradelane object in the sequence.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| next_ring            | If this is a tradelane, references the nickname of the next tradelane object in the sequence.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ring                 | References the zone to be used for the planetary ring, and the [rings file](./rings.md) to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| base                 | Selects the base from a [universe](./universe.md) to arrive at after docking with the object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| dock_with            | Seems to function identically to the `base` key above. This is usually used in vanilla for docking rings and mooring fixtures.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Ambient              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| visit                | Controls the navmap display of the object: <br />**0:** The default value. Not visited. <br />**1:** Visited, will show on the navamp list even if the system has not been visited. <br />**2:** Unused. <br />**4:** Mineable Zone. <br />**8:** 'Actively' visited. This seems to be used for looted wrecks. <br />**16:** Wreck. <br />**32:** Zone. <br />**64:** Faction. <br />**128:** Hidden, never appears on the navmap.<br /><br />For combinations you need to add the values together. E. g. if you want to show new players the location of a profitable mining zone by default set the zones visit parameter to 5 (1 for visited + 4 minable zone) |
| reputation           | Determines the faction the obhect belongs to. Takes a nickname from [faction_prop.ini](../hardcoded-inis/data/missions/faction_prop.ini.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| tradelane_space_name | References the text string that shows the origin and destination of the tradelane.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| behavior             | This always appears to be NOTHING in vanilla. Possibly unused?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| voice                | Selects a `[Voice]` block from a [voices](./voices.md) file for traffic control to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| space_costume        | Selects the costume of traffic control. References a head and body respectively from a [bodyparts](./bodyparts.md) file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| faction              | Possibly unused.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| difficulty_level     | This is a key used to set the level of the object, and may be unused.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| goto                 | For dockable objects only, The first string is the system that you jump to when you dock successfully, the second string is the object in destination system at which you will arrive, and the final string selects the jump effect from a `[gate_tunnel](./gate_tunnel.md) file.                                                                                                                                                                                                                                                                                                                                                                                 |
| loadout              | Determines the [loadout](./loadouts.md) for the object to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| pilot                | Determines the pilot from [pilots_population.ini](../hardcoded-inis/data/missions/pilots.md) to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| parent               | Sets the parent of the object. If you try to select the object, the parent will be selected instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |



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
tradelane_attack = FLOAT
tradelane_down = INT
sort = FLOAT
vignette_type = STRING
toughness = INT
density = INT
repop_time = FLOAT
max_battle_size = INT
pop_type = STRING
relief_time = FLOAT
population_additive = BOOL
path_label = STRING, INT
usage = STRING
mission_eligible = BOOL
density_restriction = INT, STRING ;repeatable
faction = STRING, FLOAT ;repeatable
encounter = STRING, INT, FLOAT ;repeatable
Music = STRING
```

| Parameter             | Information                                                                                                                                                                                                                                                                                                                                                          |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname              |                                                                                                                                                                                                                                                                                                                                                                      |
| ids_name              |                                                                                                                                                                                                                                                                                                                                                                      |
| ids_info              |                                                                                                                                                                                                                                                                                                                                                                      |
| pos                   |                                                                                                                                                                                                                                                                                                                                                                      |
| rotate                |                                                                                                                                                                                                                                                                                                                                                                      |
| shape                 |                                                                                                                                                                                                                                                                                                                                                                      |
| size                  |                                                                                                                                                                                                                                                                                                                                                                      |
| spin                  |                                                                                                                                                                                                                                                                                                                                                                      |
| property_flags        |                                                                                                                                                                                                                                                                                                                                                                      |
| property_fog_color    |                                                                                                                                                                                                                                                                                                                                                                      |
| damage                |                                                                                                                                                                                                                                                                                                                                                                      |
| visit                 |                                                                                                                                                                                                                                                                                                                                                                      |
| spacedust             |                                                                                                                                                                                                                                                                                                                                                                      |
| spacedust_maxparticle |                                                                                                                                                                                                                                                                                                                                                                      |
| interference          |                                                                                                                                                                                                                                                                                                                                                                      |
| drag_modifier         | Divides your speed in the zone by the listed amount. A value of 2 here would halve your speed. By default this key is tied to interference, but can be fixed with an offset from [Limit Breaking 101](../../FL%20Binaries/limit-breaking-101.md).                                                                                                                    |
| edge_fraction         | Used by nebula zones. Determines how quickly nebula fog fades out in a zone.                                                                                                                                                                                                                                                                                         |
| attack_ids            | Used in population zones to determine which tradelanes to attack. Uses `lane_id` values seperated by commas.                                                                                                                                                                                                                                                         |
| mission_type          | Used by mission vignette zones. Valid options are lawful and unlawful.                                                                                                                                                                                                                                                                                               |
| lane_id               | Used by tradelane zones and referenced by `attack_id`.                                                                                                                                                                                                                                                                                                               |
| tradelane_attack      | Used by patrol paths. May determine the percentage of time a patrol engages a tradelane.                                                                                                                                                                                                                                                                             |
| tradelane_down        | Used for tradelane zones. Determines the percentage of time the tradelane will be offline. This requires appropriate `lane_id` and population zones with `attack_ids` defined.                                                                                                                                                                                       |
| sort                  | Used to determine the priority order of overlapping zones. A higher `sort` value means the zone will take priority. This does not override the loading order of zones.                                                                                                                                                                                               |
| vignette_type         | Used for mission vignette zones. Options are `field`, `exclusion` and `open`                                                                                                                                                                                                                                                                                         |
| toughness             | This probably relates to the NPC toughness key, but may be unused in zones.                                                                                                                                                                                                                                                                                          |
| density               | This determines the number of encounter instances generated by this zone that can be present at the same time.                                                                                                                                                                                                                                                       |
| repop_time            | If the density is lower than the upper bound the repop timer will be active and encounters will spawn. It will reset and stop once the density count is over the limit set. Essentially when the population count is incremented. Testing indicates this value is not absolute, there is pseudo-randomness involved and it may be a minimum rather than a set value. |
| max_battle_size       | May determine the maximum number of ships allowed in an instance at any given time. However, this is set to quite low values in vanilla Freelancer and it's possible it refers to encounter permutations instead. There are even a few cases where this value is set to 0 and NPCs still appear to spawn.                                                            |
| pop_type              | This key appears to be a leftover from development, and is unused. Observed values are `lootable_field`, `nonlootable_ast_field`, `major_tradelane`, `jumpgate`, `base_cluster_law`, `single_base_law`, `extend_law`, `wormhole`, `trade_path`, `attack_patrol`, `lane_patrol` and `Background`. This key is sometimes called a faction value as well.               |
| relief_time           | Guaranteed time to next spawn. This assumes that the current population is below the `density` and `max_battle_size` values. Testing indicates this value is not absolute, there is pseudo-randomness involved and it may be a minimum rather than a set value.                                                                                                      |
| population_additive   | Will encounters from overlapping zones be allowed to spawn in this zone?                                                                                                                                                                                                                                                                                             |
| path_label            | Determines the patrol path this zone belongs to, and which leg of the path the current zone is.                                                                                                                                                                                                                                                                      |
| usage                 | Used for patrol paths. Accepted values are `trade` and `patrol`                                                                                                                                                                                                                                                                                                      |
| mission_eligible      | Determines whether or not missions are allowed to take place in this zone.                                                                                                                                                                                                                                                                                           |
| density_restriction   | Limits the number of encounter instances of a given type to the number provided. This parameter respects the `make_class` field in the encounter block and is largely used incorrectly in vanilla.                                                                                                                                                                   |
| faction               | This key determines which faction will undertake the encounter. The first string references a faction as defined in [faction_prop](../hardcoded-inis/data/missions/faction_prop.ini.md). The second FLOAT value represents the precentage chance the encounter will choose this faction. This value's sum total in zones should never exceed 1.                      |
| encounter             | References an encounter as defined in the `[Encounter]` block at the top of the system file. The first INT value determines the difficulty of the involved pilots. The second FLOAT value represents the precentage chance this encounter will occur. This value's sum total in zones should never exceed 1.                                                         |
| Music                 | Determines the ambient music tracked used in the zone. This is overridden by system danger and combat audio.                                                                                                                                                                                                                                                         |
