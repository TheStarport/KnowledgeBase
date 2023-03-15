---
title: The Starport Knowledge Base
description: A collection of all knowledge amassed on the game Freelancer
sidebar_position: 1
slug: /
---

## Typed INIs

The location of these INI types is defined in freelancer.ini. They can, for the most part, be placed anywhere within the game directory if the file points to them.

| Name            | Description                                           |
| --------------- | ----------------------------------------------------- |
| asteroids       | Defines the properties of individual asteroid models. |
| asteroid_fields |                                                       |
| bases           |                                                       |
| bodyparts       |                                                       |
| cockpits        |                                                       |
| concave         |                                                       |
| constants       |                                                       |
| costumes        |                                                       |
| debris          |                                                       |
| effect_shapes   |                                                       |
| effects         |                                                       |
| equipment       |                                                       |
| explosions      |                                                       |
| fonts           |                                                       |
| fonts_dir       |                                                       |
| fuses           |                                                       |
| gate_tunnels    |                                                       |
| goods           |                                                       |
| groups          |                                                       |
| HUD             |                                                       |
| igraph          |                                                       |
| intro           |                                                       |
| jump_effect     |                                                       |
| loadouts        |                                                       |
| markets         |                                                       |
| nebula_fields   |                                                       |
| NewCharDB       |                                                       |
| PetalDB         |                                                       |
| rings           |                                                       |
| rooms           |                                                       |
| rtcslider       |                                                       |
| ships           |                                                       |
| solar           |                                                       |
| sounds          |                                                       |
| stars           |                                                       |
| system          |                                                       |
| universe        |                                                       |
| voices          |                                                       |
| WeaponModDB     |                                                       |


## Hardcoded INIs

The location of these INI file types is hardcoded or otherwise unchangable via normal means. They can be broken down into a few distinct categories:

### EXE
| Name           | Description                                                                                                                                                                | Path                 |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Freelancer.ini | Primarily determines which DLLs and called by FLserver.exe and Freelancer.exe and their load order. Also points to and determines load order of typed INI files.           | `EXE\freelancer.ini` |
| dacom.ini      | This file handles configuration of the application's start-time settings and library loading.                                                                              | `EXE\dacom.ini`      |
| dacomsrv.ini   | This file handles configuration of the application's start-time settings and library loading for FLServer.exe specifically. Structure is otherwise identical to dacom.ini. | `EXE\dacomsrv.ini`   |

### DATA

| Name        | Description | Path |
| ----------- | ----------- | ---- |
| cameras.ini |             |      |
| mouse.ini   |             |      |

### AI
| Name           | Description | Path |
| -------------- | ----------- | ---- |
| state_graph.db |             |      |

### Equipment

| Name                        | Description | Path |
| --------------------------- | ----------- | ---- |
| commodities_per_faction.ini |             |      |

### FX

| Name          | Description | Path |
| ------------- | ----------- | ---- |
| lightanim.ini |             |      |

### Interface

| Name               | Description | Path |
| ------------------ | ----------- | ---- |
| buttonmontage.ini  |             |      |
| navbar.ini         |             |      |
| buttontextures.ini |             |      |
| infocardmap.ini    |             |      |
| keylist.ini        |             |      |
| keymap.ini         |             |      |
| knowledgemap.ini   |             |      |
| optlist.ini        |             |      |
| rollover.ini       |             |      |

### Missions

| Name                 | Description | Path |
| -------------------- | ----------- | ---- |
| encounters.ini       |             |      |
| empathy.ini          |             |      |
| faction_prop.ini     |             |      |
| factionsets.ini      |             |      |
| formations.ini       |             |      |
| lootprops.ini        |             |      |
| missions             |             |      |
| mbases.ini           |             |      |
| mshipprops.ini       |             |      |
| news.ini             |             |      |
| npcships.ini         |             |      |
| pilots               |             |      |
| ptough.ini           |             |      |
| rankdiff.ini         |             |      |
| shipclasses.ini      |             |      |
| specific_npc.ini     |             |      |
| voice_properties.ini |             |      |

### RandomMissions

| Name                     | Description | Path |
| ------------------------ | ----------- | ---- |
| diff2money.ini           |             |      |
| killablesolars.ini       |             |      |
| npcranktodiff.ini        |             |      |
| rmlootinfo.ini           |             |      |
| solarformations.ini      |             |      |
| vignettecriticalloot.ini |             |      |
| vignetteparams.ini       |             |      |

### Solar

| Name         | Description | Path |
| ------------ | ----------- | ---- |
| stararch.ini |             |      |

### Universe

| Name                     | Description | Path |
| ------------------------ | ----------- | ---- |
| NoNavMap.ini             |             |      |
| paths                    |             |      |
| missioncreatedsolars.ini |             |      |