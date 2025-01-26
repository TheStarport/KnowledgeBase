---
title: missions.ini
---

:::caution

This page is a work in progress!

There may be missing, incomplete or incorrect information on this page as it's still being built! Take information here with a pinch of salt, and feel free to contribute and correct things!

:::

## Overview

These files govern the story mission triggers and consist of a series of triggers, conditions and actions that allow for the creation of complicated, branching missions. A maximum of 14 of these files can be defined by default (From Mission 01a to Mission 13).

### Vanilla Examples

* `DATA\MISSIONS\M01A\m01a.ini`
* `DATA\MISSIONS\M09\m09.ini`
* `DATA\MISSIONS\M11\m11.ini`
  
## Syntax

Multiple blocks may defined in any order.

### [Mission]

This block only seems to be defined once per file.

```ini
[Mission]
mission_title = INT
mission_offer = INT
reward = INT
npc_ship_file = PATH
```

| Parameter     | Information                                                                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mission_title | Seems to be an IDS the determines the name of the mission when it is being offered on a base.                                                             |
| mission_offer | Seems to be the text used when the mission is offered on a base.                                                                                          |
| reward        | The credit reward for completing the mission.                                                                                                             |
| npc_ship_file | References the [npcships.ini](./npcships.ini.md) file used for the mission. Each mission has it's own file located in the same folder as the mission ini. |

### [NPC]

Appears to follow a similar syntax to [specific_npc.ini](./specific_npc.ini.md), but with the addition of the `npc_ship_arch` key.

```ini
[NPC]
nickname = STRING
space_costume = STRING, STRING, STRING
affiliation = STRING
npc_ship_arch = STRING ;optional
individual_name = INT
voice = STRING ;optional
```

| Parameter       | Information                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| nickname        | How this NPC is referenced by `[MsnShip]` blocks                                                           |
| space_costume   | References a `Head`, `Body` and `Accessory` entry from [bodyparts.ini](./../../../typed-inis/bodyparts.md) |
| affiliation     | References a `FactionProps` entry from [faction_prop.ini](./faction_prop.ini.md)                           |
| npc_ship_arch   | References an NpcShipArch from either the [npcships.ini](./npcships.ini.md) file used for the mission.     |
| individual_name | The IDS name displayed in space for this NPC. This can be overridden by the `random_name` key in `MsnShip` |
| voice           | The voice entry used for the NPC from [voices.ini](../../../typed-inis/voices.md)                          |

### [Dialog]

```ini
[Dialog]
nickname = STRING
system = STRING
line = STRING, STRING, STRING, FLOAT, FLOAT
```

| Parameter | Information |
| --------- | ----------- |
| nickname  |             |
| system    |             |
| line      |             |

### [Trigger]

A trigger represents a set of actions to perform when conditions are met.

```ini
[Trigger]
nickname = STRING
repeatable = BOOL
system = STRING
InitState = ENUM ;optional
Cnd_True = ENUM ;optional
Cnd_Destroyed = STRING, INT, ENUM ;optional
Cnd_Timer = FLOAT ;optional
Cnd_CharSelect = STRING, STRING, STRING ;optional
Cnd_CargoScanned = STRING, STRING ;optional
Cnd_CommComplete = STRING ;optional
Cnd_LaunchComplete = STRING, STRING ;optional
Cnd_JumpInComplete = STRING ;optional
Cnd_JumpgateAct = STRING ;optional
Cnd_PlayerLaunch = ENUM ;optional
Cnd_SpaceEnter = STRING ;optional
Cnd_SpaceExit = ENUM ;optional
Cnd_SystemEnter = STRING, ENUM, ... ;optional
Cnd_SystemExit = STRING, ENUM, ... ;optional
Cnd_BaseEnter = STRING ;optional
Cnd_BaseExit = STRING ;optional
Cnd_LocEnter = STRING, STRING ;optional
Cnd_InZone = BOOL, STRING, STRING ;optional
Cnd_InTradelane = BOOL, STRING ;optional
Cnd_InSpace = BOOL ;optional
Cnd_DistShip = ENUM, STRING, STRING, INT ;optional
Cnd_DistVec = ENUM, STRING, INT, INT, INT, INT ;optional
Cnd_DistVecLbL = ENUM, STRING, STRING, INT, INT, INT, INT ;optional
Cnd_DistCircle = STRING, STRING ;optional
Cnd_HealthDec = STRING, FLOAT ;optional
Cnd_EncLaunched = STRING ;optional
Cnd_HasMsn = BOOL ;optional
Cnd_WatchVibe = STRING, STRING, STRING, ENUM ;optional
Cnd_WatchTrigger = STRING, BOOL ;optional
Cnd_TLExited = STRING, ENUM, STRING ;optional
Cnd_TLEntered = STRING, STRING, STRING ;optional
Cnd_TetherBroke = STRING, STRING, INT, INT, INT ;optional
Cnd_ProjHitShipToLbl = STRING, INT, STRING ;optional
Cnd_ProjHit = STRING, INT, STRING ;optional
Cnd_RumorHeard = STRING ;optional
Cnd_PlayerManeuver = STRING, STRING ;optional
Cnd_NPCSystemEnter = STRING, STRING, STRING ;optional
Cnd_MsnResponse = ENUM ;optional
Cnd_LootAcquired = STRING, STRING ;optional
Act_ActTrig = STRING ;optional
Act_DeactTrig = STRING ;optional
Act_ChangeState = ENUM, INT ;optional
Act_SetVibeLbl = STRING, STRING, ENUM ;optional
Act_SetVibeLblToShip = STRING, STRING, ENUM ;optional
Act_SetVibeShipToLbl = STRING, STRING, ENUM ;optional
Act_SetRep = STRING, STRING, FLOAT ;optional
Act_Cloak = STRING, BOOL ;optional
Act_Invulnerable = STRING, BOOL, BOOL, FLOAT ;optional
Act_Destroy = STRING, ENUM ;optional
Act_SetNNObj = STRING, ENUM ;optional
Act_SetNNState = STRING, ENUM ;optional
Act_NNIds = INT, ENUM ;optional
Act_SetNNHidden = STRING, BOOL, BOOL ;optional
Act_GiveObjList = STRING, STRING ;optional
Act_RpopAttClamp = BOOL ;optional
Act_SetOffer = INT ;optional
Act_SetTitle = INT ;optional
Act_AddRTC = PATH ;optional
Act_RemoveRTC = PATH ;optional
Act_RandomPopSphere = INT, INT, INT, INT, ENUM ;optional
Act_Forceland = STRING ;optional
Act_PlayerCanDock = BOOL, STRING ;optional
Act_LockDock = STRING, STRING, ENUM ;optional
Act_PlayerCanTradelane = BOOL, STRING, STRING ;optional
Act_PobjIdle = ENUM ;optional
Act_SpawnShip = STRING, STRING, INT, INT, INT, FLOAT, FLOAT, FLOAT, FLOAT ;optional
Act_SpawnSolar = STRING ;optional
Act_SpawnFormation = STRING, STRING, INT, INT, INT, FLOAT, FLOAT, FLOAT, FLOAT ;optional
Act_EtherComm = STRING, INT, STRING, STRING, INT, STRING, STRING ;optional
Act_SendComm = STRING, STRING, STRING ;optional
Act_StartDialog = STRING ;optional
Act_PlayerEnemyClamp = INT, INT ;optional
Act_PlayMusic = STRING, STRING, STRING, STRING ;optional
Act_AdjHealth = STRING, FLOAT ;optional
Act_NagDistTowards =  ENUM, STRING, STRING, STRING, INT, INT, ENUM ;optional
Act_NagDistLeaving =  ENUM, STRING, STRING, STRING, INT, INT, ENUM ;optional
Act_NagOff = STRING ;optional
Act_NagClamp = BOOL ;optional
Act_MarkObj = STRING, INT ;optional
Act_SetLifetime = STRING, INT ;optional
Act_Save = STRING, INT ;optional
Act_SetInitialPlayerPos = INT, INT, INT, INT, INT, INT, INT ;optional
Act_EnableManeuver = STRING, BOOL ;optional
Act_LockManeuvers = TRUE ;optional
Act_EnableEnc = STRING ;optional
Act_DisableEnc = STRING ;optional
Act_Jumper = STRING, BOOL ;optional
Act_LightFuse = STRING, STRING ;optional
Act_RevertCam = ENUM ;optional
Act_AdjAcct = INT ;optional
Act_GCSClamp = BOOL ;optional
Act_MovePlayer = INT, INT, INT, INT ;optional
Act_RelocateShip = STRING, INT, INT, INT, FLOAT, FLOAT, FLOAT, FLOAT ;optional
Act_RelocateForm = STRING, INT ;optional
Act_CallThorn = PATH, STRING ;optional
Act_PlaySoundEffect = STRING ;optional
Act_SetShipAndLoadout = STRING, STRING ;optional
Act_Popupdialog = INT, INT, STRING ;optional
Act_AddAmbient = PATH, STRING ;optional
Act_RemoveAmbient = PATH ;optional
Act_HostileClamp = BOOL ;optional
Act_DisableTradelane = STRING ;optional
Act_StaticCam = FLOAT, FLOAT, FLOAT, FLOAT, FLOAT, FLOAT, FLOAT ;optional
Act_SpawnShipRel = SSTRING, INT, FLOAT ;optional
Act_SpawnLoot = STRING ;optional
Act_SetVibeOfferBaseHack = STRING ;optional
Act_SetOrient = STRING, INT, INT, INT, INT ;optional
Act_SetFlee = STRING ;optional
Act_RpopTLAttacksEnabled = BOOL ;optional
Act_RepChangeRequest = STRING ;optional
Act_RemoveCargo = STRING ;optional
Act_SetPriority = STRING, ENUM ;optional
Act_PilotParams = STRING ;optional
Act_PlayNN = STRING ;optional
Act_PlayerForm = STRING ;optional
Act_NNPath = INT, INT, STRING, STRING ;optional
Act_NagGreet = STRING, STRING ;optional
Act_GiveNNObjs = ENUM ;optional
Act_DockRequest = STRING ;optional
Act_DisableFriendlyFire = STRING ;optional
Act_DebugMsg = STRING ;optional
```

| Parameter                | Information                                                                                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| nickname                 | How this trigger is referred to elsewhere in the file, typically by `Act_ActTrig`                                                                                              |
| repeatable               | Whether or not this trigger can be fired more than once. This key only needs to be present to work and typically takes `no_params` as a value.                                 |
| system                   | System the trigger will fire in, taken from [Universe.ini](../../../typed-inis/universe.md).                                                                                   |
| InitState                | Enum is `ACTIVE`. Where this key is present the trigger starts in an activated state.                                                                                          |
| Cnd_True                 | Required where there are no other conditions present. Takes a value of `no_params`                                                                                             |
| Cnd_Destroyed            | Trigger requires specified entities to be destroyed. References a `MsnShip`, `MsnSolar`, `label` or `MsnFormation`, an integer (presumably the amount remaining or destroyed, `-1` seems to be used in the case of all entities in the group), and an optional Enum that seems to determine the destroy method.                                                                                                                                                                               |
| Cnd_Timer                | Trigger will count down from it's activation time in seconds before firing.                                                                                                                                                                               |
| Cnd_CharSelect           |                                                                                                                                                                                |
| Cnd_CargoScanned         |                                                                                                                                                                                |
| Cnd_CommComplete         |                                                                                                                                                                                |
| Cnd_LaunchComplete       |                                                                                                                                                                                |
| Cnd_JumpInComplete       |                                                                                                                                                                                |
| Cnd_JumpgateAct          |                                                                                                                                                                                |
| Cnd_PlayerLaunch         |                                                                                                                                                                                |
| Cnd_SpaceEnter           | Takes `no_params`, which means the trigger requires the player to enter space via undocking before firing, or a [system](../../../typed-inis/universe.md), which presumably requires the player to enter space in that specific system to fire.                                                                                                                                                                               |
| Cnd_SpaceExit            |                                                                                                                                                                                |
| Cnd_SystemEnter          |                                                                                                                                                                                |
| Cnd_SystemExit           |                                                                                                                                                                                |
| Cnd_BaseEnter            | Trigger requires the player to dock at a specified base before firing. References a `Base` from [Universe.ini](../../../typed-inis/universe.md).                                                                                                                                                                            |
| Cnd_BaseExit             |                                                                                                                                                                                |
| Cnd_LocEnter             |                                                                                                                                                                                |
| Cnd_InZone               |                                                                                                                                                                                |
| Cnd_InTradelane          |                                                                                                                                                                                |
| Cnd_InSpace              |                                                                                                                                                                                |
| Cnd_DistShip             | Enum options are `INSIDE` or `OUTSIDE` and `TICK_AWAY`, `TICK_ALWAYS` AND `TICK_TOWARDS`                                                                                       |
| Cnd_DistVec              | Trigger requires en entity to be a certain distance from a defined vector. The first value is either `inside` or `outside` and determines whether the entity should be inside the distance defined or outside it to trigger. The second value is the entity, and can be a `MsnShip` or `Player`. The next 3 values are XYZ coordinates, and the next value is a float that defines the required distance. A final `tick_away` value has also been observed here but it's purpose is unclear.|
| Cnd_DistVecLbL           | Seems to behave in the same manner as `Cnd_DistVec`, but for labelled groups.                                                                                                                                   |
| Cnd_DistCircle           |                                                                                                                                                                                |
| Cnd_HealthDec            | Trigger requires a specific `MsnShip` or `MsnSolar` to be at or below a certain health value. The first value is the ship or solar and the second is a percentage value between 0 and 1.                                                                                                                                                                               |
| Cnd_EncLaunched          |                                                                                                                                                                                |
| Cnd_HasMsn               |                                                                                                                                                                                |
| Cnd_WatchVibe            | Enum options are `REP_FRIEND_MAXIMUM`, `REP_FRIEND_THRESHOLD`, `REP_NEUTRAL_FRIENDLY`, `REP_NEUTRAL`, `REP_NEUTRAL_HOSTILE`, `REP_HOSTILE_THRESHOLD` and `REP_HOSTILE_MAXIMUM` |
| Cnd_WatchTrigger         | Enum options are `ON`, `OFF`, `ACTIVE` and `COMPLETE`                                                                                                                          |
| Cnd_TLExited             |                                                                                                                                                                                |
| Cnd_TLEntered            |                                                                                                                                                                                |
| Cnd_TetherBroke          |                                                                                                                                                                                |
| Cnd_ProjHitShipToLbl     |                                                                                                                                                                                |
| Cnd_ProjHit              |                                                                                                                                                                                |
| Cnd_RumorHeard           |                                                                                                                                                                                |
| Cnd_PlayerManeuver       | Enum options are `GOTO`, `DOCK` and `FORMATION`                                                                                                                                |
| Cnd_NPCSystemEnter       |                                                                                                                                                                                |
| Cnd_MsnResponse          | Requires a specific response from an `Act_AddRTC` trigger outcome. Enum options are `REJECT` or `ACCEPT`                                                                                                                                          |
| Cnd_LootAcquired         |                                                                                                                                                                                |
| Act_ActTrig              | References a `Trigger` to activate. Triggers require all included conditions to be true before firing.                                                                                                                                                                                |
| Act_DeactTrig            |                                                                                                                                                                                |
| Act_ChangeState          | Enum options are `FAIL` or `SUCCEED`                                                                                                                                           |
| Act_SetVibeLbl           | Enum options are `REP_FRIEND_MAXIMUM`, `REP_FRIEND_THRESHOLD`, `REP_NEUTRAL_FRIENDLY`, `REP_NEUTRAL`, `REP_NEUTRAL_HOSTILE`, `REP_HOSTILE_THRESHOLD` and `REP_HOSTILE_MAXIMUM` |
| Act_SetVibeLblToShip     | Enum options are `REP_FRIEND_MAXIMUM`, `REP_FRIEND_THRESHOLD`, `REP_NEUTRAL_FRIENDLY`, `REP_NEUTRAL`, `REP_NEUTRAL_HOSTILE`, `REP_HOSTILE_THRESHOLD` and `REP_HOSTILE_MAXIMUM` |
| Act_SetVibeShipToLbl     | Enum options are `REP_FRIEND_MAXIMUM`, `REP_FRIEND_THRESHOLD`, `REP_NEUTRAL_FRIENDLY`, `REP_NEUTRAL`, `REP_NEUTRAL_HOSTILE`, `REP_HOSTILE_THRESHOLD` and `REP_HOSTILE_MAXIMUM` |
| Act_SetRep               | Enum options are `REP_FRIEND_MAXIMUM`, `REP_FRIEND_THRESHOLD`, `REP_NEUTRAL_FRIENDLY`, `REP_NEUTRAL`, `REP_NEUTRAL_HOSTILE`, `REP_HOSTILE_THRESHOLD` and `REP_HOSTILE_MAXIMUM` |
| Act_Cloak                | Toggles a cloak or decloak state on a ship, if it has a cloaking device equipped. The first value is the ship, and the second is the true or false state for the cloak. Be aware NPCs will still chatter when cloaked if they have a voice defined.                                                                                                                                                                               |
| Act_Invulnerable         |                                                                                                                                                                                |
| Act_Destroy              | Destroys a `MsnShip`, `MsnSolar` or `MsnFormation`. The first value is the object to be destroyed, and the second value is the method. Enum options are `EXPLODE` or `SILENT`                                                                                                                                         |
| Act_SetNNObj             | Sets a Neural Net Objective, such as a waypoint or objective text. See the `[NNObjective]` block for further details. Enum options are `OBJECTIVE_HISTORY` or `OBJECTIVE`. Only one objective seems to be able to be set at a time.                                                                                                                            |
| Act_SetNNState           | Enum options are `ACTIVE` or `COMPLETE`                                                                                                                                        |
| Act_NNIds                | Enum opption is `HISTORY`                                                                                                                                                      |
| Act_SetNNHidden          |                                                                                                                                                                                |
| Act_GiveObjList          | Issues an `ObjList` to a `MsnShip`. The first value is the ship or formation to issue this to, and the second is the set of `ObjList` orders to issue.                                                                                                                                                                               |
| Act_RpopAttClamp         |                                                                                                                                                                                |
| Act_SetOffer             |                                                                                                                                                                                |
| Act_SetTitle             |                                                                                                                                                                                |
| Act_AddRTC               | Activates a real-time-cutscene set from a config at a defined path. This can be repeatable if the `repeatable` value is provided as a second parameter.                                                                                                                                                   |
| Act_RemoveRTC            | Unclear, this seems to disable the RTC state created by `Act_AddRTC`, but more testing is required.|
| Act_RandomPopSphere      |                                                                                                                                                                                |
| Act_Forceland            |                                                                                                                                                                                |
| Act_PlayerCanDock        |                                                                                                                                                                                |
| Act_LockDock             | Enum options are `UNLOCK` and `LOCK`                                                                                                                                           |
| Act_PlayerCanTradelane   |                                                                                                                                                                                |
| Act_PobjIdle             |                                                                                                                                                                                |
| Act_SpawnShip            | Spawns a `MsnShip`. Only the first argument is required. Other arguments are an `ObjList`, a set of 3 floats for XYZ coordinates and a set of 4 floats for WXYZ orientation. These will override any values defined in the `MsnShip` entry.                                                                                                                                                                            |
| Act_SpawnSolar           | Spawns a `MsnSolar`                                                                                                                                                                               |
| Act_SpawnFormation       | Spawns a `MsnFormation`. Only the first argument is required. Other arguments are an `ObjList`, a set of 3 floats for XYZ coordinates and a set of 4 floats for WXYZ orientation. These will override any values defined in the `MsnFormation` entry.                                                                                                                                                                                |
| Act_EtherComm            |                                                                                                                                                                                |
| Act_SendComm             |                                                                                                                                                                                |
| Act_StartDialog          |                                                                                                                                                                                |
| Act_PlayerEnemyClamp     |                                                                                                                                                                                |
| Act_PlayMusic            |                                                                                                                                                                                |
| Act_AdjHealth            |                                                                                                                                                                                |
| Act_NagDistTowards       | Enum options are `NAG_ALWAYS` and `NAG_OUT_OF_COMBAT`                                                                                                                          |
| Act_NagDistLeaving       | Enum options are `NAG_ALWAYS` and `NAG_OUT_OF_COMBAT`                                                                                                                          |
| Act_NagOff               |                                                                                                                                                                                |
| Act_NagClamp             |                                                                                                                                                                                |
| Act_MarkObj              |                                                                                                                                                                                |
| Act_SetLifetime          |                                                                                                                                                                                |
| Act_Save                 |                                                                                                                                                                                |
| Act_SetInitialPlayerPos  |                                                                                                                                                                                |
| Act_EnableManeuver       | Enum options are `GOTO`, `DOCK` and `FORMATION`                                                                                                                                |
| Act_LockManeuvers        |                                                                                                                                                                                |
| Act_EnableEnc            |                                                                                                                                                                                |
| Act_DisableEnc           |                                                                                                                                                                                |
| Act_Jumper               |                                                                                                                                                                                |
| Act_LightFuse            |                                                                                                                                                                                |
| Act_RevertCam            |                                                                                                                                                                                |
| Act_AdjAcct              |                                                                                                                                                                                |
| Act_GCSClamp             |                                                                                                                                                                                |
| Act_MovePlayer           |                                                                                                                                                                                |
| Act_RelocateShip         |                                                                                                                                                                                |
| Act_RelocateForm         |                                                                                                                                                                                |
| Act_CallThorn            |                                                                                                                                                                                |
| Act_PlaySoundEffect      | Plays a [sound effect](../../../typed-inis/sounds.md). The sound does not seem to respect volume sliders and is played at full attenuation for the player.                                                                                                                                                                                |
| Act_SetShipAndLoadout    |                                                                                                                                                                                |
| Act_Popupdialog          | Puts a pop-up onto the player's screen. This will pause the game if done in space. The first value is the IDS NAME for the box's title, and the second is the IDS INFO value for the box's content. Enum option is `CLOSE` and seems to be required.                                                                                                                                                         |
| Act_AddAmbient           |                                                                                                                                                                                |
| Act_RemoveAmbient        |                                                                                                                                                                                |
| Act_HostileClamp         |                                                                                                                                                                                |
| Act_DisableTradelane     |                                                                                                                                                                                |
| Act_StaticCam            |                                                                                                                                                                                |
| Act_SpawnShipRel         |                                                                                                                                                                                |
| Act_SpawnLoot            |                                                                                                                                                                                |
| Act_SetVibeOfferBaseHack |                                                                                                                                                                                |
| Act_SetOrient            |                                                                                                                                                                                |
| Act_SetFlee              |                                                                                                                                                                                |
| Act_RpopTLAttacksEnabled |                                                                                                                                                                                |
| Act_RepChangeRequest     |                                                                                                                                                                                |
| Act_RemoveCargo          |                                                                                                                                                                                |
| Act_SetPriority          | Enum options are `NORMAL` and `ALWAYS_EXECUTE`                                                                                                                                 |
| Act_PilotParams          |                                                                                                                                                                                |
| Act_PlayNN               |                                                                                                                                                                                |
| Act_PlayerForm           |                                                                                                                                                                                |
| Act_NNPath               |                                                                                                                                                                                |
| Act_NagGreet             |                                                                                                                                                                                |
| Act_GiveNNObjs           |                                                                                                                                                                                |
| Act_DockRequest          |                                                                                                                                                                                |
| Act_DisableFriendlyFire  |                                                                                                                                                                                |
| Act_DebugMsg             |                                                                                                                                                                                |

### [MsnRandEnc]

```ini
[MsnRandEnc]
nickname = STRING
encounter_type = STRING
attacker_rep_name = STRING
target_ship_name = STRING
activation_type = STRING, INT, INT
formation = STRING, INT, INT, INT, STRING, INT
num_forms = INT, INT
label = STRING
```

| Parameter         | Information |
| ----------------- | ----------- |
| nickname          |             |
| encounter_type    |             |
| attacker_rep_name |             |
| target_ship_name  |             |
| activation_type   |             |
| formation         |             |
| num_forms         |             |
| label             |             |

### [NNObjective]

Represents an objective to display to the player in the form of a waypoint or text objective on-screen.

```ini
[NNObjective]
nickname = STRING
state = ENUM
type = STRING, INT
```

| Parameter | Information                                                          |
| --------- | -------------------------------------------------------------------- |
| nickname  | How this `NNObjective` is referred to elsewhere in the file.                                                                  |
| state     | The initial state of the objective. Enum options are `HIDDEN`, `ACTIVE` and `COMPLETE`                   |
| type      | NNObjectives can have one of three types: <br /><br /> `ids`: This is a string written to the Neural Net Log as an objective and displays the objective on screen. It takes a single string.<br /><br /> `rep_inst`: This marks a specific ship or solar with a marker as if it were set as a destination. This takes two strings to write to the Neural Net Log, a set of XYZ coordinates, and the object to mark. The coordinates may be vestigal and are set to 0 in many instances in vanilla.<br /><br /> `navmarker`: This creates a waypoint at coordinates in space. The values taken are a system, two strings to write to the Neural Net Log, and a set of XYZ coordinates. |

### [ObjList]

Represents a series of orders to provide to an NPC, group of NPCs or formation.

```ini
[ObjList]
nickname = STRING
system = STRING
GotoShip = ENUM, STRING, INT, BOOL, INT
GotoVec = ENUM, INT, INT, INT, INT , BOOL
GotoSpline = ENUM, INT, INT, INT, INT, INT, INT, INT, INT, INT, INT, INT, INT, BOOL
MakeNewFormation = STRING, STRING
Follow = STRING, INT, INT, INT, INT
StayInRange = INT, INT, INT, INT
BreakFormation = ENUM
Avoidance = BOOL
Delay = INT
SetLifetime = STRING, INT
SetPriority = ENUM
Dock = STRING, STRING
Idle = ENUM
```

| Parameter        | Information                                                 |
| ---------------- | ----------------------------------------------------------- |
| nickname         |                                                             |
| system           |                                                             |
| GotoShip         | Enum options are `GOTO`, `GOTO_CRUISE` and `GOTO_NO_CRUISE` |
| GotoVec          | Enum options are `GOTO`, `GOTO_CRUISE` and `GOTO_NO_CRUISE` |
| GotoSpline       | Enum options are `GOTO`, `GOTO_CRUISE` and `GOTO_NO_CRUISE` |
| MakeNewFormation |                                                             |
| Follow           |                                                             |
| StayInRange      |                                                             |
| BreakFormation   | Enum is `no_params`                                         |
| Avoidance        |                                                             |
| Delay            |                                                             |
| SetLifetime      |                                                             |
| SetPriority      | Enum options are `NORMAL` and `ALWAYS_EXECUTE`              |
| Dock             |                                                             |
| Idle             | Enum is `no_params`                                         |

### [MsnSolar]

```ini
[MsnSolar]
nickname = STRING
string_id = INT
position = INT, INT, INT
orientation = INT, INT, INT, INT
radius = INT
archetype = STRING
loadout = STRING
system = STRING
base = STRING
faction = STRING
pilot = STRING
costume = STRING
voice = STRING
visit = INT
label = STRING
```

| Parameter   | Information |
| ----------- | ----------- |
| nickname    |             |
| string_id   |             |
| position    |             |
| orientation |             |
| radius      |             |
| archetype   |             |
| loadout     |             |
| system      |             |
| base        |             |
| faction     |             |
| pilot       |             |
| costume     |             |
| voice       |             |
| visit       |             |
| label       |             |

### [MsnShip]

```ini
[MsnShip]
nickname = STRING
position = INT, INT, INT
rel_pos = INT, INT, INT
orientation = INT, INT, INT, INT
radius = INT
NPC = STRING
random_name = BOOL
jumper = BOOL
arrival_obj = STRING
init_objectives = STRING
cargo = STRING, INT
```

| Parameter       | Information |
| --------------- | ----------- |
| nickname        |             |
| position        |             |
| rel_pos         |             |
| orientation     |             |
| radius          |             |
| NPC             |             |
| random_name     |             |
| jumper          |             |
| arrival_obj     |             |
| init_objectives |             |
| cargo           |             |

### [MsnLoot]

```ini
[MsnLoot]
nickname = STRING
archetype = STRING
string_id = INT
rel_pos_obj = STRING
rel_pos_offset = INT, INT, INT
velocity = INT, INT, INT
equip_amount = INT
health = INT
Can_Jettison = BOOL
```

| Parameter      | Information |
| -------------- | ----------- |
| nickname       |             |
| archetype      |             |
| string_id      |             |
| rel_pos_obj    |             |
| rel_pos_offset |             |
| velocity       |             |
| equip_amount   |             |
| health         |             |
| Can_Jettison   |             |

### [MsnFormation]

```ini
[MsnFormation]
nickname = STRING
position = INT, INT, INT
orientation = FLOAT, FLOAT, FLOAT, FLOAT
formation = STRING
ship = STRING ;multiple
```

| Parameter   | Information |
| ----------- | ----------- |
| nickname    |             |
| position    |             |
| orientation |             |
| formation   |             |
| ship        |             |
