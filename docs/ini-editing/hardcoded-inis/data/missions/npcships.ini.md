---
title: npcships.ini
---

## Overview

This file defines NPC ships that are referenced by [faction_prop.ini](./faction_prop.ini.md) or specifcially by [encounters](../../../typed-inis/encounters.md). It defines their shiparch, loadout, pilot, state_graph, difficulty level, and npc_class.

## Syntax

There is no particular order for the sections or the parameters inside them. However each parameter should only be used once per section, since only the last value will be used by Freelancer.

### [NPCShipArch]

```ini
[NPCShipArch]
nickname = STRING
level = STRING
ship_archetype = STRING
loadout = STRING
pilot = STRING
state_graph = STRING
npc_class = COMMA SEPARATED LIST OF STRINGS
```

| Parameter      | Information                                                                                                                                                                                                                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname       | How this entry is referred to elsewhere.                                                                                                                                                                                                                                                                         |
| level          | Range: d1 to dn (whereas `n` is any number between 1 and 255?) Sets the visual level of the NPC and is used for random mission spawn. The title the NPC receives depends on the level set here using the `rank_desig` key in [faction_prop.ini](faction_prop.ini.md).                                            |
| ship_archetype | The STRING is the nickname of the ship from [ships](../../../typed-inis/ships.md) that the NPC will fly.                                                                                                                                                                                                         |
| loadout        | The STRING is the nickname of the loadout from [loadouts](../../../typed-inis/loadouts.md) that the ship will use.                                                                                                                                                                                               |
| pilot          | The STRING is the nickname of the pilot from [pilots_population.ini](./pilots.md) that the NPC will use. Pilots spawned by encounters get their `[JobBlock]` overriden individually.                                                                                                                             |
| state_graph    | The STRING is the name of a state graph from [state_graph.db](../ai/state_graph.db.md).                                                                                                                                                                                                                          |
| npc_class      | Sets classes as used by [shipclasses.ini](./shipclasses.ini.md). The level-key `dn` (whereas `n` is any number > 0) is used to select NPCs for the difficulty in zones/encounters and for random missions. Any ship with `class_fighter` is selected for random mission spawn (`content.dll` offset `0x11CBE8`). |
