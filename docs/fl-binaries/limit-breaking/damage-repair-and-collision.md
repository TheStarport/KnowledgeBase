---
title: Damage, Repair and Collision Offsets
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

### Damage, Repair and Collision

| Default Value                                                                        | File           | Offset | By    | Description                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------ | -------------- | ------ | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0C -> 00                                                                             | server.dll     | 00960C | M0tah | Fix explosion damage not causing full damage (or no damage) on large ships and bases.                                                                                                        |
| D9 44 24<br/>-><br/>C2 08 00                                                         | server.dll     | 00AFC0 | adoxa | Energy weapons don't damage power.                                                                                                                                                           |
| 1E -> 0E                                                                             | common.dll     | 04B4D2 | adoxa | Exclude cloaking device from total hit points (Part 1).                                                                                                                                      |
| 1E -> 0E                                                                             | common.dll     | 04B582 | adoxa | Exclude cloaking device from total hit points (Part 2).                                                                                                                                      |
| 1E -> 0E                                                                             | common.dll     | 04B63E | adoxa | Exclude cloaking device from total hit points (Part 3).                                                                                                                                      |
| 0.05f                                                                                | server.dll     | 08551C | adoxa | Minimum fraction of damage required in order to use bots/batts (in other words, if your Nanobot heals 1000 damage, you will need to have at least 50 points of damage to be able to repair). |
| E9 -> 00                                                                             | freelancer.exe | 0B3C42 | adoxa | Items with "ids_name = 0" show up in repair list.                                                                                                                                            |
| 0.01f                                                                                | common.dll     | 0EDB44 | w0dk4 | Collision detection min check distance (increasing this will fix issues with the sur collisions on objects > 130k from center of system).                                                    |
| EB 26  ->  8B C8                                                                     | server.dll     | 00A46C | adoxa | Ignore armor when determining radiation damage. (Part 1).                                                                                                                                    |
| 66 81 7C E4 04 5A 13 74 E2 91 EB CE <br/>-><br/> 90 90 90 90 90 90 90 90 90 90 90 90 | server.dll     | 00A494 | adoxa | Ignore armor when determining radiation damage. (Part 2).                                                                                                                                    |
