---
title: faction_prop.ini
---

## Overview

This file describes the attributes of the factions that you encounter in Freelancer, defining their pilot names, ships, costumes and some AI behaviors.

## Syntax

There is no particular order for the parameters inside the blocks.

### [FactionProps]

```ini
[FactionProps]
affiliation = STRING
legality = STRING
nickname_plurality = STRING
msg_id_prefix = STRING
jump_preference = STRING
npc_ship = STRING ;repeatable
voice = STRING ;repeatable
mc_costume = STRING
space_costume = STRING, STRING, ... ;repeatable
firstname_male = INT, INT
firstname_female = INT, INT ;optional
lastname = INT, INT
rank_desig = INT, INT, INT, INT, INT
formation_desig = INT, INT
large_ship_desig = INT ;optional
large_ship_names = INT, INT ;optional
scan_for_cargo = STRING, INT ;optional
scan_announce = BOOL ;optional
scan_chance = FLOAT ;optional
formation = STRING, STRING
```

| Parameter          | Information                                                                                                                                                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| affiliation        | The nickname of the faction, that is defined below                                                                                                                                                                                       |
| legality           | Possible values are lawful and unlawful. This is used by density restriction in system encounter zones                                                                                                                                   |
| nickname_plurality | Suspect this determines how a faction is referred to in a broadcast. (i.e. whether or not the name is pluralised.), but requires further testing                                                                                         |
| msg_id_prefix      | When npcs talk about a faction the use this value to search for the correct sound files.                                                                                                                                                 |
| jump_preference    | Possible values are jumpgate, jumphole or any.                                                                                                                                                                                           |
| npc_ship           | Lists all ships from [npcships.ini](./npcships.ini.md) that are allowed to be used by this faction.                                                                                                                                      |
| voice              | Difference voice files used by pilots of the faction.                                                                                                                                                                                    |
| mc_costume         | The costume used by the mission commission in missions for the faction.                                                                                                                                                                  |
| space_costume      | When the faction communicates you you will see a picture of the npc. This parameter lists all possible looks for this faction.                                                                                                           |
| firstname_male     | Lists all male names for this faction. Uses a range of strings.                                                                                                                                                                          |
| firstname_female   | Lists all female names for this faction. Uses a range of strings.                                                                                                                                                                        |
| lastname           | Lists all lastnames for this faction. When an npc is spawned, a firstname and a lastname will be chosen randomly. Uses a range of strings.                                                                                               |
| rank_desig         | Lists all ranks for this faction. The last two integers define the level breakpoints for the npcs, e. g. all NPCs below the first level breakpoint will have the first rank, etc. There seems to be a hard limit of 3 ranks per faction. |
| formation_desig    | Lists all possible formation designators for this faction, like Omega, Epsilon, etc.                                                                                                                                                     |
| large_ship_desig   | Prefix for the names of large ships. Uses a range of strings.                                                                                                                                                                            |
| large_ship_names   | Lists all possible names for large ships of faction. Uses a range of strings.                                                                                                                                                            |
| scan_for_cargo     | Lists the commodites the faction looks for. The integer seems to be a weight.                                                                                                                                                            |
| scan_announce      | Will the npcs warn you before they scan your cargo.                                                                                                                                                                                      |
| scan_chance        | Percent changes for NPCs to cargo scan you.                                                                                                                                                                                              |
| formation          | Sets the formation from [formations.ini](./formations.ini.md) for each ship type. The first value is called by encounter file types.                                                                                                     |
