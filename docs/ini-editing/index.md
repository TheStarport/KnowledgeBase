---
title: INI Editing
description: Index for the INI editing section of this wiki.
id: ini-editing
---

INIs in Freelancer can be broadly divided into two types, typed and hardcoded. Some typed inis have restrictions on how they can be named or where they can be placed. Please check individual ini page entries before moving these from their default locations. Where these can be found or defined is listed below:

## Typed INIs

The location of these INI types is defined in freelancer.ini. They can, for the most part, be placed anywhere within the game directory if the file points to them.

| Name                                               | Description                                                                                                                     | Path defined by |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| [asteroids](./typed-inis/asteroids.md)             | Defines the properties of individual asteroid models.                                                                           | freelancer.ini  |
| [asteroid_fields](./typed-inis/asteroid_fields.md) | Defines the properties of individual asteroid fields.                                                                           | system          |
| [bases](typed-inis/bases.md)                       | Defines the rooms present in bases.                                                                                             | universe        |
| [bodyparts](typed-inis/bodyparts.md)               | Indexes all character bodies: bodies, heads, hands and accessories.                                                             | freelancer.ini  |
| [cockpits](typed-inis/cockpits.md)                 | Defines the properties of first-person view ship cockpits                                                                       | ships           |
| [concave](typed-inis/concave.md)                   | Lists concave objects.                                                                                                          | freelancer.ini  |
| [constants](typed-inis/constants.md)               | Keeps a lot of standard constants that are used throughout the game.                                                            | freelancer.ini  |
| [costumes](typed-inis/costumes.md)                 | Matches together body parts defined in bodyparts.                                                                               | freelancer.ini  |
| [debris](typed-inis/debris.md)                     | Defines debris.                                                                                                                 | freelancer.ini  |
| [effect_shapes](typed-inis/effect_shapes.md)       | Defines effect texture shapes.                                                                                                  | freelancer.ini  |
| [effects](typed-inis/effects.md)                   | Defines effects and their types.                                                                                                | freelancer.ini  |
| [equipment](typed-inis/equipment.md)               | Defines equipment.                                                                                                              | freelancer.ini  |
| [encounters](typed-inis/encounters.md)             | Defines some of the AI and spawning behavior used by random encounter NPCs.                                                     | system          |
| [explosions](typed-inis/explosions.md)             | Defines explosions.                                                                                                             | freelancer.ini  |
| [fonts](typed-inis/fonts.md)                       | Defines the fonts used by the game.                                                                                             | freelancer.ini  |
| [fuses](typed-inis/fuses.md)                       | Defines controlled/multipart explosions, referred to by Freelancer as fuses.                                                    | freelancer.ini  |
| [gate_tunnels](./typed-inis/gate_tunnel.md)        | Defines elements of jump gate and jump hole tunnel effects.                                                                     | freelancer.ini  |
| [goods](typed-inis/goods.md)                       | Defines the sale price and some properties of equipment and ships.                                                              | freelancer.ini  |
| [groups](typed-inis/groups.md)                     | Defines the initial state of the game world, with regards to player faction relationships and locked jump gates and jump holes. | freelancer.ini  |
| [HUD](typed-inis/hud.md)                           | Defines HUD elements.                                                                                                           | freelancer.ini  |
| [igraph](typed-inis/igraph.md)                     | Defines elements of light sources.                                                                                              | freelancer.ini  |
| [intro](typed-inis/intro.md)                       | Defines elements of the game launcher that are largely unused.                                                                  | freelancer.ini  |
| [jump_effect](typed-inis/jump_effect.md)           | Defines elements of jump gate and jump hole tunnel effects.                                                                     | freelancer.ini  |
| [loadouts](typed-inis/loadouts.md)                 | Defines the equipment that is attached to ships and solars.                                                                     | freelancer.ini  |
| [markets](typed-inis/markets.md)                   | Defines the sale location and properties of equipment and ships.                                                                | freelancer.ini  |
| [nebula_fields](typed-inis/nebula_fields.md)       | Defines the properties of individual nebula fields.                                                                             | system          |
| [newchardb](typed-inis/newchardb.md)               | Defines player equipment and situation.                                                                                         | freelancer.ini  |
| [petaldb](typed-inis/petaldb.md)                   | Defines several types of prop model used on bases and in cutscenes.                                                             | freelancer.ini  |
| [rings](typed-inis/rings.md)                       | Defines planetary rings.                                                                                                        | system          |
| [rooms](typed-inis/rooms.md)                       | Defines the content and UI of rooms on bases.                                                                                   | bases           |
| [rtcslider](typed-inis/rtcslider.md)               | Defines the properties of some elements used in cutscenes.                                                                      | freelancer.ini  |
| [ships](typed-inis/ships.md)                       | Defines ships.                                                                                                                  | freelancer.ini  |
| [solar](typed-inis/solar.md)                       | Defines static objects in space that can be placed in a system file.                                                            | freelancer.ini  |
| [sounds](typed-inis/sounds.md)                     | Defines sounds.                                                                                                                 | freelancer.ini  |
| [system](typed-inis/system.md)                     | Defines the contents of individual systems.                                                                                     | universe        |
| [universe](typed-inis/universe.md)                 | Indexes bases and systems and defines some of their properties.                                                                 | freelancer.ini  |
| [voices](typed-inis/voices.md)                     | Defines voices.                                                                                                                 | freelancer.ini  |
| [weaponmoddb](typed-inis/weaponmoddb.md)           | Defines weapon and shield types and determines their effectiveness against one another.                                         | freelancer.ini  |

## Hardcoded INIs

The location of these INI file types is hardcoded or otherwise unchangable via normal means. If an entry in the list below is suffixed with `.ini` the file must match this naming pattern. They can be broken down into a few distinct categories:

### EXE
| Name                                                   | Description                                                                                                                                                                | Path   |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| [freelancer.ini](hardcoded-inis/exe/freelancer.ini.md) | Primarily determines which DLLs and called by FLserver.exe and Freelancer.exe and their load order. Also points to and determines load order of typed INI files.           | `EXE\` |
| [dacom.ini](hardcoded-inis/exe/dacom.ini.md)           | This file handles configuration of the application's start-time settings and library loading.                                                                              | `EXE\` |
| [dacomsrv.ini](hardcoded-inis/exe/dacomsrv.ini.md)     | This file handles configuration of the application's start-time settings and library loading for FLServer.exe specifically. Structure is otherwise identical to dacom.ini. | `EXE\` |

### DATA

| Name                                              | Description                                                              | Path    |
| ------------------------------------------------- | ------------------------------------------------------------------------ | ------- |
| [cameras.ini](hardcoded-inis/data/cameras.ini.md) | Defines all cameras used in the game during flight.                      | `DATA\` |
| [mouse.ini](hardcoded-inis/data/mouse.ini.md)     | Determines the characteristics of the different cursors within the game. | `DATA\` |

### AI
| Name                                                       | Description                                                            | Path       |
| ---------------------------------------------------------- | ---------------------------------------------------------------------- | ---------- |
| [state_graph.db](hardcoded-inis/data/ai/state_graph.db.md) | Determines some elements of AI flight patterns and behavior in combat. | `DATA\AI\` |

### Equipment

| Name                                                                                        | Description                                                                      | Path              |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------------- |
| [commodities_per_faction.ini](hardcoded-inis/data/equipment/commodities_per_faction.ini.md) | Determines which faction NPCs carry which cargo in their holds when appropriate. | `DATA\Equipment\` |

### FX

| Name                                                     | Description                          | Path       |
| -------------------------------------------------------- | ------------------------------------ | ---------- |
| [lightanim.ini](hardcoded-inis/data/fx/lightanim.ini.md) | Determines some lighting animations. | `DATA\FX\` |

### Interface

| Name                                                                      | Description | Path                       |
| ------------------------------------------------------------------------- | ----------- | -------------------------- |
| [buttonmontage.ini](hardcoded-inis/data/interface/buttonmontage.ini.md)   |             | `DATA\Interface\`          |
| [navbar.ini](hardcoded-inis/data/interface/navbar.ini.md)                 |             | `DATA\Interface\Baseside\` |
| [buttontextures.ini](hardcoded-inis/data/interface/buttontextures.ini.md) |             | `DATA\Interface\`          |
| [infocardmap.ini](hardcoded-inis/data/interface/infocardmap.ini.md)       |             | `DATA\Interface\`          |
| [keylist.ini](hardcoded-inis/data/interface/keylist.ini.md)               |             | `DATA\Interface\`          |
| [keymap.ini](hardcoded-inis/data/interface/keymap.ini.md)                 |             | `DATA\Interface\`          |
| [knowledgemap.ini](hardcoded-inis/data/interface/knowledgemap.ini.md)     |             | `DATA\Interface\`          |
| [optlist.ini](hardcoded-inis/data/interface/optlist.ini.md)               |             | `DATA\Interface\`          |
| [rollover.ini](hardcoded-inis/data/interface/rollover.ini.md)             |             | `DATA\Interface\`          |

### Missions

| Name                                                                         | Description                                                                  | Path                 |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------- |
| [empathy.ini](hardcoded-inis/data/missions/empathy.ini.md)                   | Determines how the player's actions will affect their faction relationships. | `DATA\MISSIONS\`     |
| [faction_prop.ini](hardcoded-inis/data/missions/faction_prop.ini.md)         | Defines factions and some of their properties.                               | `DATA\MISSIONS\`     |
| factionsets.ini                                                              | This file is unused.                                                         | `DATA\MISSIONS\`     |
| [formations.ini](hardcoded-inis/data/missions/formations.ini.md)             | Defines formations used by NPCs in space.                                    | `DATA\MISSIONS\`     |
| [lootprops.ini](hardcoded-inis/data/missions/lootprops.ini.md)               | Defines the innate drop properties of equipment.                             | `DATA\MISSIONS\`     |
| [missions](hardcoded-inis/data/missions/missions.ini.md)                         | Defines some script and event elements of single-player missions.            | `DATA\MISSIONS\M**\` |
| [mbases.ini](hardcoded-inis/data/missions/mbases.ini.md)                     | Defines missions and NPCs available at bases.                                | `DATA\MISSIONS\`     |
| [news.ini](hardcoded-inis/data/missions/news.ini.md)                         | Defines the news and where (and when) it is available.                       | `DATA\MISSIONS\`     |
| [npcships.ini](hardcoded-inis/data/missions/npcships.ini.md)                 | Defines NPC pilot types, their ships and loadout.                            | `DATA\MISSIONS\`     |
| [pilots](hardcoded-inis/data/missions/pilots.md)                             | Defines elements of NPC behavior in combat.                                  | `DATA\MISSIONS\`     |
| [ptough.ini](hardcoded-inis/data/missions/ptough.ini.md)                     | Determines player toughness scale and level based on monetary value.         | `DATA\MISSIONS\`     |
| [rankdiff.ini](hardcoded-inis/data/missions/rankdiff.ini.md)                 | Seems to dictate SP story rank pacing.                                       | `DATA\MISSIONS\`     |
| [shipclasses.ini](hardcoded-inis/data/missions/shipclasses.ini.md)           | Defines shipclasses and levels that are called by encounters and missions.   | `DATA\MISSIONS\`     |
| [specific_npc.ini](hardcoded-inis/data/missions/specific_npc.ini.md)         | Determines attributes of specific NPCs found in the single player campaign.  | `DATA\MISSIONS\`     |
| [voice_properties.ini](hardcoded-inis/data/missions/voice_properties.ini.md) | Seems to refer to generic voicelines used by pilots in combat.               | `DATA\MISSIONS\`     |

### RandomMissions

| Name                                                                                       | Description | Path                   |
| ------------------------------------------------------------------------------------------ | ----------- | ---------------------- |
| [diff2money.ini](hardcoded-inis/data/randommissions/diff2money.ini.md)                     |             | `DATA\RANSOMMISSIONS\` |
| [killablesolars.ini](hardcoded-inis/data/randommissions/killablesolars.ini.md)             |             | `DATA\RANSOMMISSIONS\` |
| [npcranktodiff.ini](hardcoded-inis/data/randommissions/npcranktodiff.ini.md)               |             | `DATA\RANSOMMISSIONS\` |
| [rmlootinfo.ini](hardcoded-inis/data/randommissions/rmlootinfo.ini.md)                     |             | `DATA\RANSOMMISSIONS\` |
| [solarformations.ini](hardcoded-inis/data/randommissions/solarformations.ini.md)           |             | `DATA\RANSOMMISSIONS\` |
| [vignettecriticalloot.ini](hardcoded-inis/data/randommissions/vignettecriticalloot.ini.md) |             | `DATA\RANSOMMISSIONS\` |
| [vignetteparams.ini](hardcoded-inis/data/randommissions/vignetteparams.ini.md)             |             | `DATA\RANSOMMISSIONS\` |

### Solar

| Name                                                      | Description    | Path          |
| --------------------------------------------------------- | -------------- | ------------- |
| [stararch.ini](hardcoded-inis/data/solar/stararch.ini.md) | Defines stars. | `DATA\SOLAR\` |

### Universe

| Name                                                                                 | Description                                                                                             | Path             |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- | ---------------- |
| [paths](hardcoded-inis/data/universe/paths.md)                                       | Defines shortest paths used by the autopilot. These files are generated at runtime if they don't exist. | `DATA\UNIVERSE\` |
| [missioncreatedsolars.ini](hardcoded-inis/data/universe/missioncreatedsolars.ini.md) | Defines solars created during single-player missions.                                                   | `DATA\UNIVERSE\` |
