---
title: encounters
---

## Overview

These files are used to define encounter behavior and are called by system ini files when an encounter is defined (i.e. `area_scout.ini`). Be warned that encounters are particularly prone to crashes without spew when there are errors, and are determined across multiple ini files.

### Vanilla Examples

* `DATA\MISSIONS\ENCOUNTERS\area_armored_prisoner.ini`
* `DATA\MISSIONS\ENCOUNTERS\area_armored_prisonerarea_scout.ini`
* `DATA\MISSIONS\ENCOUNTERS\area_armored_prisonerminingp_scavenger.ini`
* `DATA\MISSIONS\ENCOUNTERS\area_armored_prisonerpatrolp_bh_patrol.ini`
* `DATA\MISSIONS\ENCOUNTERS\area_armored_prisonertradelane_trade_transport.ini`
* `DATA\MISSIONS\ENCOUNTERS\area_armored_prisonertradep_trade_freighter_smuggler.ini`

## Syntax

All ini files in this folder follow the same syntax. Multiple [EncounterFormation] blocks can be defined per file. Only a single [Creation] 

### [EncounterFormation]

```ini
[EncounterFormation]
ship_by_class = INT, INT, STRING
pilot_job = STRING
make_class = STRING ;optional
formation_by_class = STRING
behavior = STRING
arrival = all, -tradelane, -object_jump_gate
allow_simultaneous_creation = BOOL
zone_creation_distance = INT
times_to_create = ???
```

| Parameter                   | Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ship_by_class               | This parameter references a class as defined in shipclasses.ini, then a minimum and maximum number of ships to spawn                                                                                                                                                                                                                                                                                                                                                                                                                                |
| pilot_job                   | Determines pilot behavior as specified by a JobBlock in pilots_population.ini                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| make_class                  | Overrides the class tag from shipclasses.ini on the spawned ships just before creation. This can be used in conjunction with a zone's density_restriction to limit what's able to spawn under certain conditions.                                                                                                                                                                                                                                                                                                                                   |
| formation_by_class          | Determines the formation the encounter will use as specified in by the `formation` tag defined in faction_prop.ini The formation capacity limits the number of ships that the encounter should spawn. You can design the encounter to spawn more ships, but those ships will spawn but can’t form and will not move untill attacked.                                                                                                                                                                                                                |
| behavior                    | Determines the behavior of the ships in formation. These values seem to be hardcoded. Known options are `wander, trade, patrol_path`. For detailled information on these, please see the Behavior heading below this table.                                                                                                                                                                                                                                                                                                                         |
| arrival                     | Determines how the formation are allowed to arrive. Known options are `all, cruise, tradelane, object_`.<br />**all**: The object will spawn anywhere in the zone (restrictions permitting)<br />**cruise**: The encounter will spawn at cruise speed. Speed after spawning will be determined be `behavior`<br />**tradelane**: The encounter will be allowed to arrive via a tradelane if there is one present.<br />**object_**: The encounter is able to spawn via an object, i.e. a jump gate, jump hole or base. Usage is `object_jump_gate`. |
| allow_simultaneous_creation | Determines whether ships in the encounter are all created at the same time, or in a sequence. Single encounters will not be reinforced, but the repop_timer will continue to tick. When it reaches 0, the game will 'hold' the next encounter until the current one is destroyed, spawning it the moment the last ship from the current one is no longer present.                                                                                                                                                                                   |
| zone_creation_distance      | Determines minimum distance away from a player this encounter is able to spawn.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| times_to_create             | This value appears to be unused. Suspect it's a leftover from an older build of Freelancer where encounters could be spawned a limited number of times before depleting.                                                                                                                                                                                                                                                                                                                                                                            |

#### Behavior Parameter
This parameter denotes what the flight-pattern behaviour for the entire encounter formation will be, regardless what other parameters suggest. The pilot-job still determines what the behavior will be when the pilot encounters objects or ships belonging to another faction. In general the spawned encounters will disappear by flying out of range according their behaviour pattern.

Behavior will vary depending on whether or not the encounter is called in a patrol path zone or an area zone. Specific behaviors can also be observed around stations, gates and jump holes.

| Behavior                 | Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wander (areazones)       | Ships will fly in a random pattern at normal speed through the zone. They will dissapear when leaving range only, and will not dock or use jumpgates or jump-holes. This behavior can be used in path zones, but will produce undesirable behavior, the pilots will fly typically random patterns within the boundary of the path zone.                                                                                                                                                                                                                                                                                                                                           |
| trade (area zones)       | When encounters with this behavior are spawned near a base, jump gate, jump hole or trade lane ring, they will make use of these if certain conditions are met. (The faction the encounter belongs to needs to be declared in the base's mbases.ini entry and must be friendly enough to dock.) If a player undocks they may find this encounter already present. All ships leaving the station will have populated cargo holds, using commodities chosen from commodity_per_faction.ini. Arriving ships will have empty holds. If spawned away from an interactable object, ships will spawn with empty holds and fly at cruise speed to a random dockable object in the system. |
| trade (path zones)       | Typically trade paths are between dockable objects. A ship defined with this behavior will spawn anywhere along the path, and will try to move one way in either direction at cruise speed. They will typically try to dock at their destination if you follow them all the way there.                                                                                                                                                                                                                                                                                                                                                                                            |
| patrol_path (path zones) | This behavior should **not** be used with an area zone. A ship defined with this behavior will spawn anywhere along the path and follow it one way. When in range and their relief_time has expired, the patrol will finish their current leg(s) and then attempt to dock with a nearby object. If a patrol route forms a closed loop, the ships will continue flying it until they hit their releif time limit.                                                                                                                                                                                                                                                                  |

:::caution Patrol Paths

If you use either trade or patrol_path in an encounter, the patrol routes need to start within a certain distance and end within equipped scanner range of a dockable object that the encounter members are able to dock with, as defined in mbases.ini. Failure to ensure your patrol paths are in the correct places, will result in crashes.

:::

### [Creation]

```ini
[Creation]
permutation = INT, INT
```

| Parameter   | Information                                                                                                                                                                                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| permutation | When multiple [EncounterFormation] blocks are defined, it's possible to use the creation block to weight which encounter spawns. The first value is the ID of the [EncounterFormation], starting at zero in the order it's been defined, the second value is the weighting |
