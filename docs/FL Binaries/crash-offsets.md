---
title: Crash Offsets
---

## Overview

This page attempts to collate the offsets found in [this thread](https://the-starport.net/freelancer/forum/viewtopic.php?topic_id=2987) into a single, searchable database.

## Finding Your Crash Offset

In order to get the offset from a crash:

* Press Win+R, enter 'eventvwr.msc' and hit okay.
* Go to Windows Logs, then Application Logs and search for your crash.
* Under the 'general' tab, note the faulting module name (i.e. common.dll) and the fault offset (i.e. 0x000d21eb).

### common.dll

| File       | Offset  | Found by         | Description                                                                                                                                                             |
| ---------- | ------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| common.dll | af690   | adoxa            | INI_Reader constructor; problem with normal FLHook (uses 1024 bytes of data, but 5480 bytes are required; plugin version uses 8192).                                    |
| common.dll | 5e010   | adoxa            | Part of function Fuse::UnBurn, if that helps                                                                                                                            |
| common.dll | e3f9d   | adoxa            | Memory allocation failure.                                                                                                                                              |
| common.dll | f24a0   | adoxa            | Deliberate segfault (presumably a "this should never happen" scenario).*                                                                                                |
| common.dll | 103141  | Huor             | Related to PhySys::PhyCollisionStateManager::enable_collisions.                                                                                                         |
| common.dll | 603d6   | HeIIoween        | Originates from from IObjInspectImpl::is_targetable: something that shouldn't have been targeted has been targeted.                                                     |
| common.dll | 10dea   | Alex             | Good missing equipment line.                                                                                                                                            |
| common.dll | 91f38   | HeIIoween        | ship_archetype = `<blank>` in players file                                                                                                                              |
| common.dll | 5be63   | Lord of the Hell | Missing exclusion zone, but is called in asteroid/nebula file - look to FlSpew.txt for zone nickname                                                                    |
| common.dll | 25cc9   | Lord of the Hell | Bad surface file                                                                                                                                                        |
| common.dll | 62555   | Gold_Sear        | Occurs when docking with a tradelane that has neither a prev_ring nor a next_ring entry                                                                                 |
| common.dll | f20e3   | Cpt_Rei_Fukai    | Bad thruster model                                                                                                                                                      |
| common.dll | c22fe   | Cpt_Rei_Fukai    | Occurs when you try to load a save game that contains a reputation to a faction that doesn't exist in initialworld.ini                                                  |
| common.dll | aa91a   | Cpt_Rei_Fukai    | Occurs when you try to buy a ship which contains an invalid item in its package. E.g the nickname of the engine does not exist.                                         |
| common.dll | 4aa02   | Cellulanus       | Occurs when an NPC that was using a weapon that's model wasn't actually set to be a gun model is destroyed.                                                             |
| common.dll | 9143    | BC46             | Specified loadout for [MsnSolar] is not defined in loadouts.ini.                                                                                                        |
| common.dll | 62ffbeb | Ruppetthemuppet  | Relates to a bad NPC costume (inconsistent gender choices according to IDA) in mBases.ini                                                                               |
| common.dll | 4fe6c   | drakohen         | CShip::Launch causes a CTD when the client and server don't have matching base nicknames in the [Object] entry in a system INI. The client is the one that has the CTD. |
| common.dll | 45c30   | Ruppetthemuppet  | `[Asteroids]` block has been declared in a system ini file without a valid zone                                                                                         |

*This occured with a bad `rotation_inertia` value (0, 0, 0) in shiparch.ini (-R, 2023-03-13)

### content.dll

| File        | Offset | Found by         | Description                                                                                                                                                                                                                                                                                                          |
| ----------- | ------ | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| content.dll | 490a5  | FriendlyFire     | Related to multiple players/ships suiciding at the same moment into a planet/death zone.                                                                                                                                                                                                                             |
| content.dll | af690  | adoxa            | INI_Reader constructor; problem with normal FLHook (uses 1024 bytes of data, but 5480 bytes are required; plugin version uses 8192).                                                                                                                                                                                 |
| content.dll | 490a5  | HeIIoween        | formation errors, check faction_prop.ini formation values                                                                                                                                                                                                                                                            |
| content.dll | c45a2  | HeIIoween        | Encounter related. Can be patched with 0C458F, 8B0482->33C090                                                                                                                                                                                                                                                        |
| content.dll | 47bc4  | Tiger_MU         | Related to NPCs and/or their chatter. Possibly bad encounter, missing formation from factionprop.ini                                                                                                                                                                                                                 |
| content.dll | 5ccd4  | HeIIoween        | Missing/mistyped formation.                                                                                                                                                                                                                                                                                          |
| content.dll | db0f1  | Lord of the Hell | Patrol encounter attempted to spawn inside a population zone that wasn't a patrol path.                                                                                                                                                                                                                              |
| content.dll | 9100f  | Lord of the Hell | Possible bad tradelane                                                                                                                                                                                                                                                                                               |
| content.dll | 9566d  | Lord of the Hell | Possible bad tradelane                                                                                                                                                                                                                                                                                               |
| content.dll | c465f  | Nova             | Mixed non-patched and 1.1 patched files.                                                                                                                                                                                                                                                                             |
| content.dll | db0f1  | Cpt_Rei_Fukai    | Occurs when you try to spawn a patrol encounter inside of a population zone that is not a patrol path.                                                                                                                                                                                                               |
| content.dll | 55727  | Cpt_Rei_Fukai    | Occurs when an encounter is spawned that contains more permutation lines than formations                                                                                                                                                                                                                             |
| content.dll | f7c2f  | Ruppetthemuppet  | Bad rmlootprops.ini entries.                                                                                                                                                                                                                                                                                         |
| content.dll | c458f  | FriendlyFire     | Patrol encounter contains a faction that is not defined in the related base's BaseFaction entries.                                                                                                                                                                                                                   |
| content.dll | 12e10  | Ruppetthemuppet  | Relates to a bad NPC costume (inconsistent gender choices according to IDA) in mBases.ini                                                                                                                                                                                                                            |
| content.dll | 956e4  | Ruppetthemuppet  | npc_ship in faction_prop.ini listed that does not exist.                                                                                                                                                                                                                                                             |
| content.dll | 6c216  | Ruppetthemuppet  | Seems to be a missing or null patrol path waypoint. This was originally triggered by giving an NPC on patrol in a ship that couldn't vanish by docking the `arrival = all, -tradelane, -object_jump_gate` tag. In cases where the patrol spawned at the end of the path in a docked state, it would cause this crash |
| content.dll | 53b9f  | Ruppetthemuppet  | Bad encounter file (Missing `[EncounterFormation]` or `[Creation]` blocks.)                                                                                                                                                                                                                                          |

### server.dll

| File       | Offset | Found by        | Description                                                                                                         |
| ---------- | ------ | --------------- | ------------------------------------------------------------------------------------------------------------------- |
| server.dll | 078d3  | adoxa           | called as part of pub::SpaceObj::Dock                                                                               |
| server.dll | 14990  | adoxa           | also part of docking, and others (it's a function to swap the sign of a vector)                                     |
| server.dll | 2c267  | adoxa           | seems to be another part of docking, and others                                                                     |
| server.dll | 2c290  | adoxa           | seems to be another part of docking, and others                                                                     |
| server.dll | 76fdf  | HeIIoween       | Related to loading a player. Possibly a corrupt character file.                                                     |
| server.dll | 17f38  | Ruppetthemuppet | Related to a bad ship loadout. Occurs after Loadout::Get (presumably returning NULL), called when a ship is created |
| server.dll | 702064 | Laz             | Triggered by warping to a base that doesn't have a physical presence, but has an mbase and universe entry           |
| server.dll | 2247f  | Ruppetthemuppet | NPC loadout is missing engine.  Attempts to enter cruise, then can't find and crashes.                              |
| server.dll | 0f988  | Ruppetthemuppet | Missing destination jumpgate                                                                                        |


### Miscellaneous

| File           | Offset | Found by         | Description                                                                                                                           |
| -------------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| alchemy.dll    | 0701B  | Gold_Sear        | Rare crash, occurs inconsistently when creating an instant jump fx                                                                    |
| alchemy.dll    | 1f3a6  | Cpt_Rei_Fukai    | Occurs when the `<pairs>` of an effect use numbers that do not exist in the `<fx>` part of the effect.                                |
| dalib.dll      | 04353  | robocop          | Memory allocation failure (in CDPMsgList::Add). It's only asking for 12 bytes, so there must be some serious memory leakage going on. |
| Freelancer.exe | 06100  | adoxa            | Bad wireframe                                                                                                                         |
| Freelancer.exe | 114764 | Gold_Sear        | Occurs when a next_ring does not reference to a tradelane ring                                                                        |
| Freelancer.exe | 58000  | Cpt_Rei_Fukai    | Occurs when a player has got an item equipped that no longer exists, e. g. the weapon was deleted.                                    |
| Freelancer.exe | 54f08  | HeIIoween        | Possible corrupted mbases.ini.                                                                                                        |
| ntdll.dll      | 3ff05  | HeIIoween        | Incompatible d3d8.dll wrapper/converter.                                                                                              |
| ntdll.dll      | 11689  | HeIIoween        | not supported/equipable archetype in players char file.                                                                               |
| ntdll.dll      | 101b3  | Tiger_MU         | Related to NPCs and/or their chatter.                                                                                                 |
| ntdll.dll      | 109d8  | Jeider           | Reason: using inherit in ShieldGenerator                                                                                              |
| rendcomp.dll   | 11163  | Lord of the Hell | bad hash at `<VMeshLibrary>`                                                                                                          |
