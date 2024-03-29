---
title: groups
---

## Overview

The groups ini type has two main purposes:

* Set locked gates in both Singleplayer and Multiplayer
* Set faction affiliations between them and define a few of their basic properties.

### Vanilla Examples

* `DATA\initialworld.ini`

## Syntax

### [locked_gates]

This section can only be used once, preferrably at the top of the file.

```ini
[locked_gates] 
locked_gate = INT ; optional, repeatable 
npc_locked_gate = INT ; optional, repeatable
```

| Parameter       | Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| locked_gate     | Range: +-infty<br/><br/>Locked gates are any dockable objects (jump gate, jump hole, bases) which cannot be used by **both** the *NPC* and *the player*. Docking with them is possible but results in a "Docking denied" message. The value is a hashcode of the gate's nickname.<br/><br/>NOTICE: For multiplayer servers, any locked gate is saved in a player's file **upon creation**! This means if the locked gates are modified, a Player Wipe or the use of a tool which would update locked gate entries on all player files is required. |
| npc_locked_gate | Range: +-infty<br/><br/>Similar to locked gates, NPC locked gates only affect NPCs. They can also be modified without the need for any update on the player files in multiplayer.                                                                                                                                                                                                                                                                                                                                                                  |

### [Group]

This section can be used multiple times.

```ini
[Group]
nickname = STRING
ids_name = INT
ids_info = INT
ids_short_name = INT
rep = FLOAT, STRING ; repeatable
```

| Parameter      | Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| nickname       | See Nickname Resource for more information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ids_name       | See Name Resource for more information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ids_info       | See Infocard Resource for more information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ids_short_name | Same as *ids\_name*, it holds the short name of the faction (Navy VS Liberty Navy).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| rep            | Subvalues: REP, FACTION<br/><br/>Range: -1 to 1. REP sets the faction's stance towards another faction. -0.6 makes the faction **hostile** towards the faction set by the FACTION value. 0.6, on the contrary, makes it friendly. Anything in-between is considered neutral. The exact value is used by NPCs to determine on which side to fight if a friendly faction is attacked by another. This also is the case with players which have an active faction affiliation.<br/><br/>NOTICE: The stance set here is **one-way**. The faction defined by the FACTION value is not affected by the section. For instance, if this section defines the Liberty Navy `[Group] nickname = li_n_grp` With a hostile reputation towards the Outcasts `rep = -0.65, fc_ou_grp` The Outcasts will NOT be hostile towards the Liberty Navy unless the same thing is done in their section `[Group] nickname = fc_ou_grp (...) rep = -0.65, li_n_grp`<br/><br/>NOTICE 2: In most cases, it is generally a good idea to set the faction's stance with itself as 0.91: `[Group] nickname = li_n_grp (...) rep = 0.91, li_n_grp` |
