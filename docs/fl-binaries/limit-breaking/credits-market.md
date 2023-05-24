---
title: Market Offsets
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

### Credits/Market

| Default Value                                              | File           | Offset                                                                                                                                                                                            | By                  | Description                                                                                                                                           |
| ---------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 05 -> 1A                                                   | freelancer.exe | 0A8004                                                                                                                                                                                            | adoxa               | Show current worth in multiplayer.                                                                                                                    |
| 9999999f                                                   | freelancer.exe | 1CAEE8                                                                                                                                                                                            | Dev                 | Maximum value of any single good.                                                                                                                     |
| 999999999i                                                 | server.dll     | 06F46E<br/>06F475<br/>06F4A6<br/>06F4AD<br/>06F51E<br/>06F525<br/>06FB9B<br/>06FBA3<br/>06FBAE<br/>06FC00<br/>06FC08<br/>06FC1C<br/>07543C<br/>075443<br/>0754E0<br/>0754E7<br/>076426<br/>07642D | adoxa               | Maximum credits that a player can have in MP (All offsets must be changed!).                                                                          |
| 7F000000                                                   | freelancer.exe | 037ECF                                                                                                                                                                                            | adoxa               | Number of items in stock.                                                                                                                             |
| C7 44 24 44 00 00 00 7F<br/>-><br/>89 44 24 44 90 90 90 90 | freelancer.exe | 037ECB                                                                                                                                                                                            | adoxa, M0tah        | Market files control items in stock (MarketGood = item nickname, required level, required rep, minimum, max in stock, full resale, price multiplier). |
| 04 -> 39                                                   | content.dll    | 0A94D4                                                                                                                                                                                            | adoxa               | Disable money-based rank (rank becomes fixed, may instead be manually managed via hooks etc).                                                         |
| 40b                                                        | content.dll    | 0A9D8E                                                                                                                                                                                            | adoxa               | Rank level limit.                                                                                                                                     |
| 7F 0F -> 90 90                                             | content.dll    | 0A9D93                                                                                                                                                                                            | adoxa<br/>Gold_Sear | Ignore rank level limit test, theoretically allowing any number of levels.                                                                            |
