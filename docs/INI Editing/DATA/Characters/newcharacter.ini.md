---
title: newcharacter.ini
---

[Return to parent folder (Characters)](../Characters/index.md)

## Overview

The *newcharacter.ini* file is used to define player data in multiplayer servers upon creation of a new character. It is very closely related to *mpnewcharacter.fl* found in the [EXE](../../EXE/index.md) folder.

## Syntax

Each of the following sections can only be written once in the order shown.

> NOTICE: Tinkering with *newcharacter.ini* is often unreliable; Freelancer is very picky with this file and can cause odd bugs if modified.

### Pilot

```ini
[Pilot]
nickname = STRING
body = STRING
comm = STRING
voice = STRING
body.anim = STRING
thumb = PATH
comm.anim = STRING, STRING
```

| Parameter | Information                                                                                                                                                                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname  | Must always match the value of *Pilot* in the [Faction](#faction) section.                                                                                                                                                                                  |
| body      | Reference to a **Costume** (see [costumes.ini](./costumes.ini.md) for available costumes). A male costume is suggested because of differences between the male and female skeletons.                                                                        |
| comm      |
| voice     | Reference to a **Voice** (see [voices_recognizable.ini](../Audio/voices.ini.md) for available voices). It is highly recommended to keep *trent_voice*, since the player's character has additional voice messages not defined in other voices. |
| body.anim | Reference to a set of animations for the body. *Sc_MLBODY_STND_000LV_A_31* is the default and recommended value.                                                                                                                                            |
| thumb     |
| comm.anim |

### Package

```ini
[Package]
nickname = STRING
strid_name = INT
strid_desc = INT
ship = STRING
loadout = STRING
money = INT
```

| Parameter  | Information                                                                                                                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname   | Must always match the value of *Package* in the [Faction](#faction) section.                                                                                                                             |
| strid_name | Empty DLL reference (default is 11051)?                                                                                                                                                                  |
| strid_desc | Empty DLL reference (default is 11551)?                                                                                                                                                                  |
| ship       | Reference to a **Ship** (see [shiparch.ini](../Ships/shiparch.ini.md) for flyable ships).                                                                                                                |
| loadout    | Reference to a **Loadout** (see [loadouts.ini](./../Ships/loadouts.ini.md) in the Ships folder for ship loadouts) Remember the loadout must match the available hardpoints for the *Ship* defined above. |
| money      | Starting money. Cannot be higher than the maximum money limit (see server.dll for the multiplayer limit).                                                                          |

### Faction

```ini
[Faction]
nickname = STRING
rep_group = STRING
base = STRING
Package = STRING
Pilot = STRING
```

| Parameter | Information                                                                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname  | Must always be *new_player*.                                                                                                                        |
| rep_group | Default player reputation, matched from that of an existing faction (see [initialworld.ini](../initialworld.ini.md) for each faction's reputation). |
| base      | Starting base (see [universe.ini](./../Universe/universe.ini.md) for information on the existing bases).                                            |
| Package   | Must always match the *nickname* of the [Package](#package) section.                                                                                |
| Pilot     | Must always match the *nickname* of the [Pilot](#pilot) section.                                                                                    |