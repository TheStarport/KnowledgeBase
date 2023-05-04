---
title: Cargo and Trading Offsets
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

### Cargo and Trading

| Default Value                                                                                                                                  | File           | Offset            | By              | Description                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ----------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 00 -> 01                                                                                                                                       | content.dll    | 0BD2D8            | adoxa           | Allow the `fc_n_grp` faction to drop `[phantom_loot]` loot.                                                                |
| 20f                                                                                                                                            | freelancer.exe | 08AEBE<br/>1D2688 | adoxa<br/>adoxa | Drop cargo dialog timeout (both offsets must be changed).                                                                  |
| 20f                                                                                                                                            | content.dll    | 118130            | adoxa           | Time given to drop cargo.                                                                                                  |
| E8 1C E1 13 00 D9 44 24 20 8B D8 8D B5 08 05 00 00 E8 0B E1 13 00<br/>-><br/>83 EC 10 DD 1C E4 D9 44 E4 30 DD 5C E4 08 8D B5 08 05 00 00 EB 02 | freelancer.exe | 079D9F            | adoxa           | Show cargo space using decimals (string 1179 in resources.dll must have %d (both of them) changed to %g or %.2f) (Part 1). |
| 20 -> 28                                                                                                                                       | freelancer.exe | 079DC3            | adoxa           | Show cargo space using decimals (string 1179 in resources.dll must have %d (both of them) changed to %g or %.2f) (Part 2). |
| 1000000f                                                                                                                                       | freelancer.exe | 1D848C            | fox             | Square of distance from loot that the "tractor all" button appears on HUD / can tractor in loot.                           |
| 1.2f                                                                                                                                           | freelancer.exe | 1C9800            | fox             | Multiplier for width of tractor beams.                                                                                     |
| 1500f                                                                                                                                          | freelancer.exe | 1D8D08            | adoxa           | Maximum distance to initiate trade.                                                                                        |
