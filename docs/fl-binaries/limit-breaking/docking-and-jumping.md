---
title: Docking and Jumping Offsets
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

### Docking and Jumping

| Default Value                                                                | File       | Offset | By    | Description                                                                                                                                                                           |
| ---------------------------------------------------------------------------- | ---------- | ------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1000f                                                                        | common.dll | 18BDB4 | Dev   | Max dock acknowledge distance.                                                                                                                                                        |
| 10000f                                                                       | common.dll | 13F48C | Dev   | Max docking initiation distance.                                                                                                                                                      |
| 1750f                                                                        | common.dll | 1422F0 | M0tah | Minimum distance away from object to automatically engage cruise when using dock or goto.                                                                                             |
| E8 29 C1 FF FF 8B 4C 24 24 8D 54<br/>-><br/>6A 00 89 F9 E8 35 00 00 00 EB 1F | common.dll | 0501B2 | adoxa | Manually launch from docking bay (Part 1).                                                                                                                                            |
| 8B 54 -> EB 20                                                               | server.dll | 022040 | adoxa | Manually launch from docking bay (Part 2).                                                                                                                                            |
| 18f                                                                          | common.dll | 18BDB8 | adoxa | Docking speed.                                                                                                                                                                        |
| 15f                                                                          | common.dll | 06D6CA | fox   | Launching speed (for launch sequences that use strafe like battleships).                                                                                                              |
| 1.0f                                                                         | common.dll | 050527 | adoxa | Relative speed after launching (planet).                                                                                                                                              |
| 0.5f                                                                         | common.dll | 06DE13 | adoxa | Relative speed after launching (station).                                                                                                                                             |
| 60 -> 62                                                                     | common.dll | 063645 | adoxa | F3 docking works with FREIGHTER type (Part 1).                                                                                                                                        |
| 00 -> 02                                                                     | common.dll | 063650 | adoxa | F3 docking works with FREIGHTER type (Part 2).                                                                                                                                        |
| 2000f                                                                        | common.dll | 13E678 | fox   | How far behind a jumpgate a player will be spawned - the player will move from this point to the arrival point near the gate during the respective `[JumpGateEffect]` `jump_in_time`. |
| -350f                                                                        | server.dll | 0231BF | adoxa | Jump gate/hole z-axis entry point adjustment.                                                                                                                                         |
| 500d                                                                         | server.dll | 0876C0 | adoxa | Jump gate/hole x/y-axis entry point adjustment.                                                                                                                                       |
| 74 -> EB                                                                     | server.dll | 173DA  | Laz   | Enable undocking hail in multiplayer.                                                                                                                                                 |
