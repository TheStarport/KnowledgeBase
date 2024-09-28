---
title: mbases.ini
---

## Overview

This rather monolithic file defines the internals of bases, the NPCs present there, and random mission offers. Some attributes of the base relate to how NPCs behave around it in space. Most notably, you need to ensure your base affiliations and patrol paths line up properly.

## Syntax

Blocks should be define in the following order per base. Some blocks can be defined multiple times. 

### [Mbase]

This block can only be defined once per base.

```ini
[Mbase]
nickname = STRING
local_faction = STRING
diff = INT
msg_id_prefix = STRING
```

| Parameter     | Information                                                                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname      | Nickname of the base when it's referred to elsewhere in mBases and in other files, specifically system inis.                                        |
| local_faction | References a faction as defined in [faction_prop.ini](./faction_prop.ini.md). This should match the base affiliation as set in the system ini file. |
| diff          | Possibly the difficulty level of missions offered by the base? Needs more research. It's possible this value is unused.                             |
| msg_id_prefix | The GCS message ID for voice profiles, basically how the base is referred to by NPCs when they hail you/the base/other NPCs                         |

### [MVendor]

This block can only be defined once per base.

```ini
[MVendor]
num_offers = INT, INT
```

| Parameter  | Information                                                                                           |
| ---------- | ----------------------------------------------------------------------------------------------------- |
| num_offers | Integers are MIN and MAX number of missions offered by the mission board vendor here at any one time.  It should be noted that max mission count is not enforced. Eventually the amount of valid or available mission vignettes will limit it. |

### [BaseFaction]

Multiple blocks can be defined. At least one should be included for the faction that owns the base.

```ini
[BaseFaction]
faction = STRING
weight = INT
mission_type = STRING, INT, FLOAT, INT
npc = STRING
```

| Parameter    | Information                                                                                                                                                                                                                                               |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| faction      | References a faction as defined in faction_prop.ini                                                                                                                                                                                                       |
| weight       | The weight value for missions offered by this faction on the job board as well as the distribution of non-fixture NPCs spawned on the station. These values should ideally total to 100 across all `[BaseFaction]` blocks.              |
| mission_type | Values here are Mission type, minimum difficult, maximum difficulty and weight respectively. The only mission type availlable seems to be `DestroyMission`. Please see below for a better explanation of how the min and max difficulty values work here. |
| npc          | Allows an npc as defined in the `[GF_NPC]` block to spawn in the bar here. NPC affiliation should match the faction.                                                                                                                                      |

#### Difficulty Calculation for Job Offers

This is sourced from Skotty's excellent post [here](https://the-starport.net/modules/newbb/viewtopic.php?topic_id=6421&forum=26&post_id=65505#forumpost65505).

The difficulty number displayed in-game when reading a mission offer has a somewhat direct connection to the chosen technical difficulty behind. Apparently those in-game numbers are hard-coded somewhere for specific difficulty values.

Commonly the mission_type parameter can be understood as: `mission_type = DestroyMission, <minDiff>, <maxDiff>, <weight>`

The **weight** is an arbitrary value, used relative to the sum of weights given. E.g. having one faction offer missions with weight=1, and another faction offering with weight=2 makes the second faction's missions appear in 2 out of 3 cases.

**minDiff** and **maxDiff** are important for the calculation of the real Difficulty that will be available for the player. Especially important is to note that maxDiff is not necessarily really the maximum.
The calculations are as follows:

##### Single Player

```
rank_diff = based on internal MissionNum and DATA\MISSIONS\rankdiff.ini

factor = 1.3689^3 = 2.565164201769
diff = rank_diff * factor, where diff is in range of [0, 100]

If diff <= minDiff, then the player gets the message on the job-board to become a better pilot.

If diff >= maxDiff:
    d = maxDiff / factor, where d becomes >= minDiff
    finalDifficulty = maxDiff - cos(rnd * pi/2) * (maxDiff - d), where rnd is a random value in range of [0, 1)
else
    diff = rank_diff / factor, where diff1 is in range of [minDiff, 100]
    finalDifficulty = maxDiff - cos(rnd * pi/2) * (maxDiff - diff), where rnd is a random value  in range of [0, 1)
```

##### Multiplayer

```
rnd is a random value in range of [0, 3)
If rnd is 0:
    diff = maxDiff
else
    diff = maxDiff * 1.3689^(rnd * 2 + 2)
diff is limited to a range of [0, 100]
finalDifficulty = diff - cos(rnd * pi/2) * (diff - minDiff), where rnd is a random value  in range of [0, 1)
```

Looking especially on the first part of the multiplayer-specific calculation shows that maxDiff is not a constant value, but is getting multiplied by a random factor. This can make multiplayer missions go beyond the naively intended levels.

### [GF_NPC]

Multiple blocks can be defined per base.

```ini
[GF_NPC]
nickname = STRING
body = STRING
head = STRING
lefthand = STRING
righthand = STRING
individual_name = INT
affiliation = STRING
voice = STRING
room = STRING
bribe = STRING, INT, INT ;repeatable
rumor = STRING, STRING, INT, INT ;repeatable
rumorknowdb = STRING ;repeatable
rumor_type2 = STRING, STRING, INT, INT ;repeatable
know = INT, INT, INT, INT ;repeatable
knowdb = STRING ;repeatable
```

| Parameter       | Information                                                                                                                                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname        | Internal nickname of the NPC. This is used by the `[BaseFaction]` block                                                                                                                                                                                        |
| body            | Body for the NPC to use as defined in [bodyparts](../../../typed-inis/bodyparts.md).                                                                                                                                                                         |
| head            | Head for the NPC to use as defined in [bodyparts](../../../typed-inis/bodyparts.md).                                                                                                                                                                         |
| lefthand        | Left hand for the NPC to use as defined in [bodyparts](../../../typed-inis/bodyparts.md).                                                                                                                                                                    |
| righthand       | Right hand for the NPC to use as defined in [bodyparts](../../../typed-inis/bodyparts.md).                                                                                                                                                                   |
| individual_name | String name for the NPC to use on mouseover.                                                                                                                                                                                                                   |
| affiliation     | Faction affiliation as defined in [faction_prop.ini](./faction_prop.ini.md)                                                                                                                                                                                    |
| voice           | Voice for the NPC to use as defined in a `[Voice]` block of [voices](../../../typed-inis/voices.md)                                                                                                                                                             |
| room            | Room this NPC will appear in as defined in an `[MRoom]` block further down in mBases.ini.                                                                                                                                                                      |
| bribe           | Allows the NPC to offer a bribe. The first value is the faction, the second is the price per `0.1` reputation points, and the third is the IDS reference for the bribe text. In this bribe text the following placeholders can be used: `%d0` for the price; `%F0v1` for the faction the bribe will get you friendly with; `%Fnv1` for `n` being 1 to 3 – factions that turn unfriendly by buying the bribe. The `v1` in those placeholders are grammatical variations for the faction’s name. |
| rumor           | References two ranks from [rankdiff.ini](rankdiff.ini.md), then an integer between 1 and 3, and finally an IDS reference for the STRING to display in the rumor. The rankdiff values referenced appear to be the rank 'range' where these rumors can appear. The first integer controls the required reputation with the faction to be offered the rumor: `1` means `0.2`, `2` means `0.4` and `3` means `0.6` minimum reputation. `4` defaults to `0.0`. These values [can be changed via offsets in content.dll](../../../../fl-binaries/limit-breaking/reputation.md). It is not known whether other integers are accepted or whether these values control anything else. |
| rumorknowdb     | Unused. The actual link to the object of the rumor is done via [knowledgemap.ini](../interface/knowledgemap.ini.md). | 
| rumor_type2     | Same syntax as `rumor`. The first two parameters appear to be conditions for the rumor to be available. These are typically used in the campaign.                                                                                                                                                                                             |
| know            | Used in conjunction with [knowledgemap.ini](../interface/knowledgemap.ini.md). The first entry is an IDS reference is the text displayed for the offer – omitting " for xxx Credits." (this is added automatically by another IDS reference). The second entry is an IDS reference for the text appearing when you bought the offered information (following a hardcoded IDS reference text about how the information was uploaded to your neural net). The third entry is the price of the information in Credits. The fourth entry is an integer controlling the minimum reputation required to get the offer; the integer being `1` means `0.2`, `2` means `0.4` and `3` means `0.6` minimum reputation. `4` defaults to `0.0`. These values [can be changed via offsets in content.dll](../../../../fl-binaries/limit-breaking/reputation.md). It is not known whether other integers are accepted or whether these values control anything else. |
| knowdb          | Unused. The actual link to the object of the offer is done via [knowledgemap.ini](../interface/knowledgemap.ini.md). |

### [MRoom]

Multiple blocks can be defined per base.

```ini
[MRoom]
nickname = STRING
character_density = INT
fixture = STRING, PATH, PATH, STRING ;repeatable
```

| Parameter         | Information                                                                                                                                                                                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname          | Nickname of the room as referred to elsewhere in mBases.ini                                                                                                                                                                                                                                 |
| character_density | Maximum number of NPCs allowed in the room at any one time (Does **not** include the player)                                                                                                                                                                                                |
| fixture           | Used for rooms where there is an NPC that's always there, like equipment dealers. References an NPC, a hardpoint in the scene (usually defined in a thn script), an animation for the NPC to play and finally the NPC type (Options seem to be bartender, trader, Equipment and ShipDealer) |
