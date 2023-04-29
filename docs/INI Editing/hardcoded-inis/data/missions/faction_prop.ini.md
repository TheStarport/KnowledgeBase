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

| Parameter          | Information |
| ------------------ | ----------- |
| affiliation        | The nickname of the faction, that is defined below |
| legality           | Possible values are `lawful` and `unlawful`. This is used to describe NPC ships to the player and NPC voices as e.g. normal escorts or pirate raiders (?) |
| nickname_plurality | Suspect this determines how a faction is referred to in a broadcast. (i.e. whether or not the name is pluralised.), but requires further testing. |
| msg_id_prefix      | When npcs talk about a faction they use this value to search for the correct sound files. |
| jump_preference    | Possible values are `jumpgate`, `jumphole` or `any`. |
| npc_ship           | Lists all ships from [npcships.ini](./npcships.ini.md) that are used by this faction. |
| voice              | Difference voice files used by pilots of the faction. Voices differ between male and female. As soon as a male or female voice is present, the game will begin assigning these genders to NPCs. |
| mc_costume         | The costume used by the mission commission in missions for the faction. |
| space_costume      | Defines the looks of an NPC when directly communicating with the player. The first value being a head, the second the body, and the third optionally being a head accessory. Depending on the set-up voices, these space costumes must include male or female variations, or NPCs will not be able to be hailed and never show up with their face to the player. |
| firstname_male     | Lists all male names for this faction. Uses a range of strings. Must be defined depending on the set-up voices, or `Object Unknown` is displayed as name. |
| firstname_female   | Lists all female names for this faction. Uses a range of strings. Must be defined depending on the set-up voices, or `Object Unknown` is displayed as name. |
| lastname           | Lists all lastnames for this faction. When an npc is spawned, a firstname and a lastname will be chosen randomly. Uses a range of strings. |
| rank_desig         | Lists all ranks for this faction. The last two integers define the level breakpoints for the npcs, e. g. all NPCs below the first level breakpoint will have the first rank, etc. There seems to be a hard limit of 3 ranks per faction. |
| formation_desig    | Lists all possible formation designators for this faction, like Omega, Epsilon, etc. Uses a range of strings. |
| large_ship_desig   | Prefix for the names of large ships. |
| large_ship_names   | Lists all possible names for large ships of faction. Uses a range of strings. |
| scan_for_cargo     | Lists the commodites the faction looks for. The integer seems to be a weight that has however no effect? |
| scan_announce      | Whether the npcs warn you before they scan your cargo or not. |
| scan_chance        | Percent changes for NPCs to cargo scan you. |
| formation          | Connects the formations from [formations.ini](./formations.ini.md) with those asked by [encounters](../../../typed-inis/encounters.md). The first value defines the formation asked by the encounter file, the second defines actual formation from the formations.ini file. |
