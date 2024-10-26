---
title: Understanding and editing random missions
---

## Difficulty

A basic requirement and variable for random missions is the Difficulty. It is an arbitrary decimal number in a range of [0, 100] (meaning 0 and 100 are included).

If needed the maximum difficulty can be adjusted by those offsets:

```
content.dll, 1143D4, 100f = maximum value of misn difficulty ~adoxa
content.dll, 1175F0, 100f = maximum value of DestroyMission difficulty (I think; it's part of the StateMachine) ~adoxa
content.dll, 11B22C, 100f = maximum value of rank_diff and generated mission difficulty ~adoxa
```
[Source, adoxa](https://the-starport.com/forums/topic/2636/higher-rank-missions/20)


## Difficulty Calculation for Job Offers (`mBase.ini`)

A key to understand how Difficulty works is the way how it is used and calculated. This is unfortunately not very easy to understand at first.
The main use is within `mBase.ini` where the values are set which difficulty a player can get from a base or NPC.

The difficulty number displayed in-game when reading a mission offer has a somewhat direct connection to the chosen technical difficulty behind. Apparently those in-game numbers are hard-coded somewhere for specific difficulty values.

Commonly the `mission_type` parameter can be understood as:
```ini
mission_type = DestroyMission, <mindiff>, <maxdiff>, <chance>
```

`minDiff` and `maxDiff` are important for the calculation of the real Difficulty that will be available for the player. Especially important is to note that **maxDiff is not necessarily the total maximum**.
The calculations are as follows (in pseudo code):
### Single Player
```c
// rank_diff = based on internal MissionNum and DATA\MISSIONS\rankdiff.ini
// min_diff and max_diff are from mission_type/misn in DATA\MISSIONS\mbases.ini
// 0 <= rnd < 1

factor = 1.3689^3

diff1 = rank_diff / factor
if (diff1 < 0)
    diff1 = 0
if (diff1 > 100)
    diff1 = 100

diff2 = rank_diff * factor
if (diff2 < 0)
    diff2 = 0
if (diff2 > 100)
    diff2 = 100

if (diff2 <= min_diff)
    return 0 // become a better pilot

if (diff2 >= max_diff)
{
    d = max_diff / factor
    if (min_diff >= d)
        d = min_diff
    return max_diff - cos(rnd * pi/2) * (max_diff - d) // cos in RAD
}

if (diff1 < min_diff)
    diff1 = min_diff

return max_diff - cos(rnd * pi/2) * (max_diff - diff1) // cos in RAD
```
### Multi Player
```c
// min_diff and max_diff are from mission_type/misn in DATA\MISSIONS\mbases.ini
// 0 <= rand < 3
// 0 <= rnd < 1

if (rand == 0)
{
    d = max_diff
}
else
{
    factor = 1.3689^(rand * 2 + 2)
    d = max_diff * factor
}
if (d < 0)
    d = 0
if (d > 100)
    d = 100

return d - cos(rnd * pi/2) * (d - min_diff) // cos in RAD
```
[Source, adoxa](https://the-starport.com/forums/topic/2636/higher-rank-missions/7)

Looking especially on the first part of the multiplayer-specific calculation shows that `maxDiff` *is not a total value*, but is getting multiplied by a randomized factor. This can make multiplayer missions of a max difficulty of greater than 8.1101 already reach a total 100 if the randomized numbers are highest.

To understand the influence of the `minDiff` and `maxDiff` values in those calculations I do recommend to look on a graph plot for some simple values.

To limit the difficulty in multiplayer exactly between the `minDiff` and `maxDiff` value, the following patch can be applied on `Content.dll` using [bwpatchw](http://adoxa.altervista.org/misc/dl.php?f=bwpatch-w).
```sh
# Make MP job difficulty exactly between min and max difficulty in mbases.ini.
# Jason Hood (adoxa), 22 February, 2010.
# Fixed 3 June, 2010.

File: content.dll # v1.1
0AAD7A: 89 44 E4 04 D9 44 E4 20 D8 64 E4    [ 99 B9 03 00 00 00 F7 F9 85 D2 74 ]
1C EB 04 66 B8 FB 06 DB 44 E4 04            [ 33 D9 05 30 B2 FB 06 DD 5C 24 04 ]
D8 0D D0 97 39 06 DE C9 D8 44 E4            [ FF D6 99 DD 44 24 04 B9 03 00 00 ]
1C 5E 83 C4 10 C3                           [ 00 F7 F9 8D 54 12 ]
```
[Source, adoxa](https://the-starport.com/forums/topic/2636/higher-rank-missions/10)

## Amount of NPCs created by Difficulty and NPC Level (`npcranktodiff.ini`)

It is possible to define exactly how many NPCs of a specific level are being created for a specific Difficulty. This is handled within the `npcranktodiff.ini`.

A line looks as follows:
```ini
NpcRank = <npc level>, <difficulty for 1 ship>, <difficulty for 2 ships>, <difficulty for 3 ships>, …
```
Important to note:
- Only exactly one line of `NpcRank` is picked for the spawn per wave in a job.
- The amount of spawned ships is determined by the highest Difficulty in that line (e.g. if Difficulty is 5 and the 3rd ship column is 5, then 3 ships get spawned).
- By default the game can handle up to 8 ships per line. To allow for more, see the following.

The game uses a table of weights to define a preference for the amount of ships being spawned. It is as follows:
|Ships|SP|MP|
|-----|--|--|
|1    |0 |0 |
|2    |3 |2 |
|3    |9 |3 |
|4    |6 |9 |
|5    |2 |6 |
|6    |1 |4 |
|7    |1 |2 |
|8    |1 |1 |

[Source, adoxa](https://the-starport.com/forums/topic/2636/higher-rank-missions/22)

The weights here are again relative to their sum. E.g. in multiplayer the sum is 27, so 4 ships get spawned in 9 out of 27 cases (33.3%). As you can see, 1 ship has weight of 0. This means the game never will pick an `NpcRank` where the Difficulty for only the first ship would match.
This table is very important to keep in mind. At any Difficulty picked, there always should be `NpcRank`s defined that cover all those ship counts.
If you notice your job-board being more empty than it should be, it could be that the game tries to pick a ship count which is not provided for the current Difficulty.

This table can be adjusted at the offset `11CC58` in `Content.dll`. First are the weights for singleplayer (starting for 0 ships, 1 ship, 2 ships, etc.) and after that for multiplayer (also starting for 0 ships, 1 ship, …).

If you want to allow `NpcRank`s with more than 8 ships being spawned, you must create your own weight-table.
```
content.dll 0F8A4B 58CCFB->00CBFC = use 30-float array at 12CB08 (created manually!) for SP ship weighting vector ~adoxa
content.dll 0F8A54 7CCCFB->80CBFC = use 30-float array at 12CB88 (created manually!) for MP ship weighting vector ~adoxa
```
[Source, adoxa](https://the-starport.com/forums/topic/2636/higher-rank-missions/22)

## Requirements to have Missions offered on a Base

There are 4 requirements that must be met to have a mission of a specific Difficulty being offered to a player:
- The enemy faction must have an NPC spawn of any unrelated `level`/`difficulty` within at least one mission vignette zone in the system.
- The enemy faction must have at least one `NpcShip` from `npcships.ini` assigned via `faction_prop.ini` that must have the **same** `level` as any Difficulty-matching `NpcRank`, and have `npc_class` `class_fighter`.
- The enemy faction must have at least one `NpcShip` from `npcships.ini` assigned via `faction_prop.ini` that must have the **matching** `npc_class` `diff`-label + `class_fighter` for the matching `NpcRank`. And this `NpcShip` must have a `level` matching ±1.
- There must be at least one `NpcRank` that can spawn ships within the picked Difficulty range.

This sounds quite daunting, so let’s explain this on an example:

We want to have some faction offer missions against `fc_lr_grp` in our system. For this we at first need a mission zone:
```ini
[Zone]
nickname = Zone_destroy_vignette_01
pos = 0, 0, 0
shape = SPHERE
size = 10000
mission_type = unlawful, lawful
vignette_type = open
```
Now we must make sure the enemy spawns within this zone, so it will get selected by the game to be associated with this enemy faction.
```ini
[Zone]
nickname = Zone_destroy_vignette_01_pop
pos = 0, 0, 0
shape = SPHERE
size = 100000
toughness = 19
density = 1
repop_time = 25
max_battle_size = 4
relief_time = 35
encounter = area_scout, 1, 1
faction = fc_lr_grp, 1
```
Now we must find out which Difficulty our mission may have. For this we check in our `mBase.ini`:
```ini
mission_type = DestroyMission, 0, 0.112387, 100
```
With this value we now go into our `npcranktodiff.ini` file and look which line might match. Keep in mind the game has certain weights on how many ships it prefers to spawn (see above chapter). One of the possible `NpcRank`s might be:
```ini
NpcRank = 1, 0.00985, 0.03569, 0.07754, 0.13539, 0.20923, 0.29908, 0.40493, 0.52677
```
With this we know that we want to spawn level 1 NPCs.
Now we must make sure `fc_lr_grp` has at least one ship matching this with an `npc_class` of `class_fighter`:
```ini
[NPCShipArch]
nickname = fc_lr_pi_fighter_d1
loadout = fc_lr_pi_fighter_loadout01
level = d1
ship_archetype = pi_fighter
pilot = pilot_pirate_med
state_graph = FIGHTER
npc_class = unlawful, class_fighter, d1
```
We see that the `level=d1`, matching our `NpcRank`. And we see the `npc_class` contains `d1` and `class_fighter`, so it also can spawn the ship.
Important to know is that one ship with the required level must exist. But it does not need to be the same ship that is being spawned!
The ships that will be spawned are determined by their matching `npc_class` label. Meaning that if your ship has `d1`, but `npc_class` `d100`, it will not be spawned.
You can and must have at least one (but it can be another) ship with a matching `npc_class` `diff`-label for `d1`, and `class_fighter`. Important here is that whatever ship has the matching `npc_class` must match the `level` +1.
So we could say we have a `level` `d2` ship with `npc_class=diff1`, `class_fighter`, it would be able to be spawned. But only if there is another ship defined somewhere that has `level=d1`. This may look like this and still get spawned in our `d1` mission:
```ini
[NPCShipArch]
nickname = fc_lr_pi_fighter_d1-d2
loadout = fc_lr_pi_fighter_loadout01
level = d2
ship_archetype = pi_fighter
pilot = pilot_pirate_med
state_graph = FIGHTER
npc_class = unlawful, class_fighter, d1, d2
```

## Payment by Difficulty (`diff2money.ini`)

Defining payments for specific Difficulties is very easy and straight-forward to be done in `diff2money.ini`.
A line looks as follows:
```ini
Diff2Money = <start difficulty>, <payment>
```
You can add as many or as few of those lines as you like. The payments between each defined Difficulty are linearly interpolated. You should at least provide a line for Difficulty 0 and 100 to allow the game to compute any payments between.
