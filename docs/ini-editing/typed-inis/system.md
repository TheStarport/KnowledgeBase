---
title: system
---

## Overview

### Vanilla Examples

* `DATA\UNIVERSE\SYSTEMS\BR01\br01.ini`
* `DATA\UNIVERSE\SYSTEMS\LI01\li01.ini`
* `DATA\UNIVERSE\SYSTEMS\KU03\ku03.ini`

## Syntax

Blocks other than `[Light]`, `[Object]` and `[Zone]` should always be called at the top of the file in the below order.

### SystemInfo

```ini
[SystemInfo]
space_color = INT, INT, INT
local_faction = STRING
rpop_solar_detection = BOOL
space_farclip = FLOAT
```

| Parameter            | Information                                                                                                                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| space_color          | Sets the system background color rendered behind any starspheres that are defined. (Integers are red, green and blue respectively.)                                                            |
| local_faction        | Calls a faction as defined in faction_prop. Appears to be present in every system file but unused.                                                                                             |
| rpop_solar_detection | Allows NPCs to spawn inside the bounding box of extremely large models like the Dyson Sphere when set to True.                                                                                 |
| space_farclip        | Minimum value of `1000`. Overrides LOD ranges in the system. used to force ale effects like in Omega-41 to display beyond 17k. Causes graphical glitches to planets when set higher than 150k. |

### Archetype

These entries seem to be used to keep certain objects preloaded and in the memory. Vanilla Freelancer uses those entries exclusively for story-related objects in the system files.

```ini
[Archetype]
ship = STRING ;optional
solar = STRING ;optional
simple = STRING ;optional
equipment = STRING ;optional
snd = STRING ;optional
voice = STRING, STRING ;optional
```

| Paramete  | Information                                                                                                                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ship      | Name of a `[Ship]` to preload. Can be defined multiple times.                                                                                                                                               |
| solar     | Name of a `[Solar]` to preload. Can be defined multiple times.                                                                                                                                              |
| simple    | Name of a `[Simple]` to preload. Can be defined multiple times.                                                                                                                                             |
| equipment | Name of a `[Equipment]` to preload. Can be defined multiple times. Is this read by the game (does not seemt to appear in Freelancer.exe among the others)?                                                  |
| snd       | Name of a `[Sound]` to preload. Can be defined multiple times.                                                                                                                                              |
| voice     | First STRING being a `[Voice]` and the second STRING a related `[Sound]` to preload. Can be defined multiple times. Is this read by the game (does not seemt to appear in Freelancer.exe among the others)? |

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

| Parameter | Information                                                           |
| --------- | --------------------------------------------------------------------- |
| file      | References the [shapes](./effect_shapes.md) file used in this system. |

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

| Parameter | Information                                                                    |
| --------- | ------------------------------------------------------------------------------ |
| color     | Determines the background color of the system when no starspheres are defined. |

### Background

```ini
[Background]
basic_stars = PATH
complex_stars = PATH
nebulae = PATH
```

| Parameter     | Information                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| basic_stars   | Determines the basic starsphere cmp used for the system.                                                     |
| complex_stars | Determines the complex starsphere cmp used for the system. This is rendered on top of the `basic_stars` cmp. |
| nebulae       | Determines the nebulae starsphere used for the system. This is rendered behind the `basic stars` cmp.        |

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

| Parameter   | Information                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| nickname    | The light's unique nickname in the system ini file.                                                                                 |
| pos         | The X, Y and Z coordinates of the light in space.                                                                                   |
| rotate      | The X, Y and Z rotation of the object. Only really relevant with directional light sources here.                                    |
| color       | The RGB color of the light.                                                                                                         |
| range       | The range of the light.                                                                                                             |
| type        | Determines the type of light source to use Can be POINT or DIRECTIONAL.                                                             |
| direction   | For `DIRECTIONAL` light sources, this value determines the direction.                                                               |
| atten_curve | References the attenuation curve that is used to change the light intensity based on the distance to the light source.              |
| attenuation | How quickly the light fades as you move away from it's source.                                                                      |
| color_curve | Appears to determine some property of the light's animation. The string value references a curve from an [igraph](./igraph.md) file |

### Object

```ini
[Object]
nickname = STRING
ids_name = INT ;optional
ids_info = INT ;optional
pos = FLOAT, FLOAT, FLOAT
rotate = FLOAT, FLOAT, FLOAT ;optional
ambient_color = INT, INT, INT ;optional
archetype = STRING
star = STRING ;optional
spin = FLOAT, FLOAT, FLOAT ;optional
msg_id_prefix = STRING ;optional
jump_effect = STRING ;optional
atmosphere_range = INT ;optional
prev_ring = STRING ;optional
next_ring = STRING ;optional
ring = STRING, PATH ;optional
base = STRING ;optional
dock_with = STRING ;optional
ambient = INT, INT, INT ;optional
visit = INT ;optional
reputation = STRING ;optional
tradelane_space_name = STRING ;optional
behavior = STRING ;optional
voice = STRING ;optional
space_costume = STRING, STRING ;optional
faction = STRING ;optional
difficulty_level = INT ;optional 
goto = STRING, STRING, STRING ;optional
loadout = STRING ;optional
pilot = STRING ;optional
parent = STRING ;optional
```

| Parameter            | Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| nickname             | How this object is referred to elsewhere in the file. If this value is not unique within the system file, strange behavior with targeting will occur.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ids_name             | The string for this object's name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ids_info             | The string for this object's map/selection infocard                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| pos                  | The object's X, Y and Z coordinates in space respectively.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| rotate               | The object's X, Y and Z rotation in space respectively. Range -360 to 360.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ambient_color        | Possibly unused? Might determine how systemwide lighting affects the object. Requires testing                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| archetype            | The object's archetype as defined in a [solar](./solar.md) file type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| star                 | If the object is a star, the object's archetype as defined in [stararch.ini](../hardcoded-inis/data/solar/stararch.ini.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| spin                 | A velocity by which the object rotates around its axis. Vanilla Freelancer cancels the spinning when too slow – an EXE hack solves this issue.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| msg_id_prefix        | References a `[Sound]` block from a [voices](./voices.md) file to use for the base's name when hailing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| jump_effect          | References a `[JumpGateEffect]` block from a [jump_effect](./jump_effect.md) file. This is only relevant if the object is a jump gate or jump hole.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| atmosphere_range     | The radius of the 'atmosphere burn effect' bubble around the object. This is typically applied to planets and stars.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| burn_color           | Sets the color of the atmosphere burn effect if it is present.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| prev_ring            | If this is a tradelane, references the nickname of the previous tradelane object in the sequence.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| next_ring            | If this is a tradelane, references the nickname of the next tradelane object in the sequence.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ring                 | References the `[Zone]` to be used for the displayed ring, and the [rings file](./rings.md) to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| base                 | Selects the base from a [universe](./universe.md) this object is assigned with and displays this base-information in space to the player when the object is selected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| dock_with            | Selects a base from a [universe](./universe.md) on which the player/NPC gets on once docked with this object. Does not require the `base` property. Multiple objects in a system can be assigned to `dock_with` the same base. Players will always undock from the first object listed in the system, unless all its docks are occupied (e.g. mooring points used by NPCs). Then the next object with the same `dock_with` is used.                                                                                                                                                                                                                                                                                      |
| ambient              | Possibly unused? Might determine how systemwide lighting affects the object. Requires testing                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| visit                | Controls the navmap display of the object: <br />**0:** The default value. Not visited. <br />**1:** Discovered (just basic base info; no info text for zones) <br />**2:** Unclear (seems only used by knowledgemap.ini). <br />**4:** Mineable Zone; Commodity list of a Base. <br />**8:** Looted Wreck; Zone info; Equipment list of a Base. <br />**16:** Wreck; Ship list of a Base. <br />**32:** Zone. <br />**64:** Faction. <br />**128:** Hidden, never appears on the navmap.<br /><br />For combinations you need to add the values together. E. g. if you want to show new players the location of a profitable mining zone by default set the zones visit parameter to 5 (1 for visited + 4 minable zone) |
| reputation           | Determines the faction the object belongs to. Takes a nickname from [faction_prop.ini](../hardcoded-inis/data/missions/faction_prop.ini.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| tradelane_space_name | References the text string that shows the origin and destination of the tradelane.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| behavior             | This is always `NOTHING`. Required for solars to use their weapons.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| voice                | Selects a `[Voice]` block from a [voices](./voices.md) file for traffic control to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| space_costume        | Selects the costume of traffic control. The first value being a head, the second the body, and the third optionally being a head accessory, respectively from a [bodyparts](./bodyparts.md) file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| faction              | Possibly unused.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| difficulty_level     | This is a key used to set the level of the object, and may be unused.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| goto                 | For dockable objects only, The first string is the system that you jump to when you dock successfully, the second string is the object in destination system at which you will arrive, and the final string selects the jump effect from a `[gate_tunnel](./gate_tunnel.md) file.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| loadout              | Determines the [loadout](./loadouts.md) for the object to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| pilot                | Determines the pilot from [pilots_population.ini](../hardcoded-inis/data/missions/pilots.md) to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| parent               | Sets the parent of the object. If you try to select the object, the parent will be selected instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |



### Zone

Many properties of zones are overriding those of other zones. Their definition order within the system file is relevant for determining which zone takes priority.

```ini
[Zone]
nickname = STRING
ids_name = INT ;optional
ids_info = INT ;optional
pos = FLOAT, FLOAT, FLOAT
rotate = FLOAT, FLOAT, FLOAT ;optional
shape = STRING
size = INT, INT, INT
property_flags = INT ;optional
property_fog_color = INT, INT, INT ;optional 
damage = INT ;optional
visit = FLOAT ;optional
spacedust = STRING ;optional
spacedust_maxparticles = INT ;optional 
interference = FLOAT ;optional
drag_modifier = FLOAT ;optional
edge_fraction = FLOAT ;optional
attack_ids = STRING, ... ;optional
mission_type = STRING, STRING ;optional
comment = STRING ;optional
lane_id = STRING ;optional
tradelane_attack = FLOAT ;optional
tradelane_down = INT ;optional
sort = FLOAT ;optional
vignette_type = STRING ;optional
toughness = INT ;optional
longevity = INT ;optional
density = INT ;optional
repop_time = FLOAT ;optional
max_battle_size = INT ;optional
pop_type = STRING ;optional
relief_time = FLOAT ;optional
population_additive = BOOL ;optional
path_label = STRING, INT ;optional
usage = STRING ;optional
mission_eligible = BOOL ;optional
density_restriction = INT, STRING ;repeatable
encounter = STRING, INT, FLOAT ;repeatable
faction = STRING, FLOAT ;repeatable
music = STRING ;optional
```

| Parameter              | Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname               | The nickname of the zone. This is typically reference by encounter declarations, [asteroid](./asteroid_fields.md) and [nebula](./nebula_fields.md) field files.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ids_name               | The string name of the field displayed ingame.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ids_info               | The string description of the field displated ingame.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| pos                    | The X, Y and Z position of the field. Fields are positioned from their absolute centre. This should be taken into account when positioning rectangular and ellipsoid fields.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| rotate                 | The X, Y and Z rotation of the field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| shape                  | The basic shape of the field. Options are `SPHERE`, `BOX`, `ELLIPSOID`, `CYLINDER` and `RING`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| size                   | The size of the field. For `SPHERE` only one INT is required, determining the radius. For `CYLINDER` only two INTS required – the first marking the radius, the second the height. For `ELLIPSOID` it determines the radius across each axis. For Box it determines the total length across each axis. For `RING` the first value detemines the outer radius, the second the inner radius, and the third being the height.                                                                                                                                                                                                                               |
| property_flags         | Sets the navmap display of the zone. Options are as follows and can be combined by adding them together:  <br /><br />**1:** Object density low<br />**2:** Object density medium<br />**4:** Object density high<br />**8:** Danger density low<br />**16:** Danger density medium<br />**32:** Danger density high<br />**64:** Rock<br />**128:** Debris<br />**256:** Ice<br />**512:** Lava<br />**1024:** Nomad<br />**2048:** Crystal<br />**4096:** Mines<br />**8192:** Badlands<br />**16384:** Gas pockets<br />**32768:** Nebula/Cloud (Enables `property_fog_color`)<br />**65536:** Exclusion<br />**131072:** Exclusion.                  |
| property_fog_color     | Sets the RGB value of the zone nebula and cloud on the navamp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| damage                 | Sets the amount of damage per second done to ships and equipment within the zone. Over a certain threshold, this will trigger a radiation warning.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| visit                  | Sets the bitmask of the visit parameter. Options are as follows and can be combined by adding them together:  <br /><br />**0:** Default value, not visited<br />**1:** Visited. Will show in the navamp, regardless of whether or not a player has visited the system.<br />**2:** Unknown, doesn't appear to be used<br />**4:** Mineable zone<br />**8:** Actively visisted<br />**16:** Wreck<br />**32:** Zone<br />**64:** Faction<br />**128:** Hidden, never appears on the navamp.<br /><br /> Visit values are determined per save! If you're adjusting these and want to see changes, you will need to create a new save/character each time. |
| spacedust              | The nickname of the entry from an [effects](./effects.md) file used for spacedust in this zone. Overrides the system-wide value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| spacedust_maxparticles | Sets the maximum amount of particles allocated for `spacedust` in this zone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| interference           | A sensor range modifier with a range of 0 to 1. For example if you set this to 0.5 if will halve your ship's current sensor range. Triggers the sensor efficiency warning. This also affects NPCs.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| drag_modifier          | Divides your speed in the zone by the listed amount. A value of 2 here would halve your speed. By default this key is tied to interference, but can be fixed with an offset from [Limit Breaking 101](../../fl-binaries/limit-breaking/index.md).                                                                                                                                                                                                                                                                                                                                                                                                        |
| edge_fraction          | Used by nebula zones. Determines how quickly nebula fog fades out in a zone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| attack_ids             | Possibly unused. May be used in population zones to determine which tradelanes to attack. Uses `lane_id` values seperated by commas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| mission_type           | Used by mission vignette zones. Valid options are lawful and unlawful.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| lane_id                | Possibly unused. Used by tradelane zones and referenced by `attack_id`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| tradelane_attack       | Used by patrol paths. May determine the percentage of time a patrol engages a tradelane. There appears to be a set cooldown of several minutes for interceptions, and the interception will occur near the point where the patrol zone intersects with the tradelane zone if this value is set. Seems to function even when `tradelane_down` and `attack_ids` are not set.                                                                                                                                                                                                                                                                               |
| tradelane_down         | Possibly unused. Testing is required to see if this works in conjuction with `lane_id` and `attack_ids`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| sort                   | Unused. Sorting is done by the order of the `[Zone]` entries in the file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| vignette_type          | Used for mission vignette zones. Options are `field`, `exclusion` and `open`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| toughness              | Unused. Toughness of NPCs is defined only by the `encounter` parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| longevity              | Unused.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| density                | This determines a soft maximum of how many ships can be spawned within a zone. If the ship count is less than the density, another encounter can be spawned — even if it may exceed the density value.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| repop_time             | If the current ship count within the zone is less than `density`, the game will try to repopulate the zone for a chance calculated by `(density - ships) / repop_time` every 3 seconds see [`SpacePop` offset](../../fl-binaries/limit-breaking/npcs.md).                                                                                                                                                                                                                                                                                                                                                                                                |
| max_battle_size        | The maxium count of ships within a zone when the player (or NPCs, too?) is in a fight.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| pop_type               | This key appears to be a leftover from development, and is unused. Observed values are `lootable_field`, `nonlootable_ast_field`, `major_tradelane`, `jumpgate`, `base_cluster_law`, `single_base_law`, `extend_law`, `wormhole`, `trade_path`, `attack_patrol`, `lane_patrol` and `Background`. This key is sometimes called a faction value as well.                                                                                                                                                                                                                                                                                                   |
| relief_time            | Time for how long no ships will be respawned after a battle ended or the zone is void of ships. (Needs to be tested better on those conditions)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| population_additive    | When `false`: Any previously defined zones override this one's spawning (e.g. for ambient NPC spawns). For any following zones it overrides their `density` values (e.g. for sun death zones) in turn.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| path_label             | Determines the patrol path this zone belongs to, and which leg of the path the current zone is.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| usage                  | Used for patrol paths. Accepted values are `trade` and `patrol`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| mission_eligible       | Determines whether or not missions are allowed to take place in this zone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| density_restriction    | Limits the number of encounter instances of a given type to the number provided. This parameter respects the `make_class` field in the encounter block and is largely used incorrectly in vanilla.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| encounter              | References an encounter as defined in the `[Encounter]` block at the top of the system file. The first INT value determines the difficulty of the involved pilots. The second FLOAT value represents the precentage chance this encounter will occur. This value's sum total in zones should never exceed 1.                                                                                                                                                                                                                                                                                                                                             |
| faction                | Must follow directly after an `encounter`. It determines which faction will be spawned for the encounter. The first string references a faction as defined in [faction_prop](../hardcoded-inis/data/missions/faction_prop.ini.md). The second FLOAT value represents the precentage chance the encounter will choose this faction. This value's sum total in zones should never exceed 1.                                                                                                                                                                                                                                                                |
| music                  | Overrides the default space music within the zone. Does not override any danger or battle music.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
