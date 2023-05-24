---
title: Reputation Offsets
---

## Information

* All offsets are for files from the official 1.1 patch.
* Numbers are in hexadecimal, or suffixed to indicate their type:

| Suffix | Type    | Size                 |
| ------ | ------- | -------------------- |
| f      | float   | 4 bytes              |
| d      | double  | 8 bytes              |
| i      | integer | 4 bytes              |
| b      | byte    | 1 byte (-128 to 127) |

A value like "0F 85 -> 90 E9" means replace the original bytes on the left with the new bytes on the right. (The bytes are given in file order, they don't represent a number like the offset.)

### Reputation

| Default Value                                    | File        | Offset | By        | Description                                                                                                                                                                                             |
| ------------------------------------------------ | ----------- | ------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.9f                                             | common.dll  | 18D5D4 | Dev       | Reputation over which will give you affiliation with that faction (faction name appears in space before your name).                                                                                     |
| 0.6f                                             | content.dll | 1143C8 | fox       | Reputation set by bribes, can not exceed 0.9.                                                                                                                                                           |
| 1.0f                                             | content.dll | 11BD84 | fox       | Reputation at/over which a faction's NPCs will excuse your friendly fire (killing the NPC should still dock rep, however), same as below.                                                               |
| 1.0f                                             | content.dll | 11BD84 | fox       | Reputation at/over which a faction will no longer turn hostile upon seeing its allies turn hostile, same as above.                                                                                      |
| 0.6f                                             | content.dll | 11BD80 | fox       | Reputation over which a faction will be friendly with another faction (such as shooting you if that faction is hostile, etc.).                                                                          |
| 0.2f                                             | content.dll | 12E354 | adoxa     | Reputation needed for lawful factions to show rumors.                                                                                                                                                   |
| 0.4f                                             | content.dll | 12E358 | adoxa     | Reputation needed for unlawful factions to show rumors.                                                                                                                                                 |
| 0.1d                                             | content.dll | 11B930 | adoxa     | Adjustment for maximum reputation.                                                                                                                                                                      |
| -0.6f                                            | content.dll | 11BCF4 | adoxa     | Hostile docking reputation.                                                                                                                                                                             |
| "(group name)"                                   | common.dll  | 143C58 | Bejaymac  | List of groups (in nickname form) of factions that won't show up on your reputation screen - either replace the nicknames or write over them with 00s (DO NOT change the length of the DLL).            |
| 40 -> 00                                         | content.dll | 0CC985 | adoxa     | Jump gates test reputation.                                                                                                                                                                             |
| 0C -> 04                                         | content.dll | 0CC986 | adoxa     | Jump holes test reputation.                                                                                                                                                                             |
| "gd_bh_grp"                                      | content.dll | 114310 | Gold_Sear | In freetime between missions 4, 5, 6 and 7 buying a ship will set your rep with the Bounty Hunters to -0.2; either change the nickname or write it over with 00s (do NOT change the length of the DLL). |
| FF 15 20 36 FB 06<br />-><br />EB 04 90 90 90 90 | content.dll | 006272 | Gold_Sear | In freetime between missions 4, 5, 6 and 7 buying a ship will set your rep with the Bounty Hunters to -0.2; this prevents that (alternative to above).                                                  |
