---
title: npcships.ini
---

## Overview

This file defines npcships that are referenced by [faction_prop.ini](./faction_prop.ini.md), defines their shiparch, loadout, pilot, state_graph and npc_class

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

| Parameter      | Information                                                                                                                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname       | How this entry is referred to elsewhere.                                                                                                                                                                                   |
| level          | Range: d1 to d25?(Vanilla only uses up to d19) Sets the level of the NPC. The title the NPC receives depends on the level set here: d1-d4: "Rookie", d5-d7: "Veteran", d8-19: "Ace"                                        |
| ship_archetype | The STRING is the nickname of the ship from [ships](../../../typed-inis/ships.mdthat the NPC will fly.                                                                                                                     |
| loadout        | The STRING is the nickname of the loadout from [loadouts](../../../typed-inis/loadouts.md that the ship will use.                                                                                                          |
| pilot          | The STRING is the nickname of the pilot from [pilots_population.ini](./pilots_population.ini.md) that the NPC will use.                                                                                                    |
| state_graph    | Sets the flight behaviour. Possible values are FIGHTER, GUNBOAT, CRUISER and TRANSPORT                                                                                                                                     |
| npc_class      | Sets classes as defined in [shipclasses.ini](./shipclasses.ini.md). Typically these are done in the following order: legality, classes, level. The level in this key is used by zones when calling encounters in a system. |
