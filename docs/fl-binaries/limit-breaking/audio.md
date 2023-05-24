---
title: Audio Offsets
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

### Audio

| Default Value                    | File              | Offset                                                                              | By    | Description                                                                                                         |
| -------------------------------- | ----------------- | ----------------------------------------------------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------- |
| 00 -> 80                         | soundmanager.dll  | 00A021                                                                              | adoxa | Continue playing Freelancer's audio when Alt-Tabbed (Part 1).                                                       |
| 00 -> 80                         | soundstreamer.dll | 0018A9                                                                              | adoxa | Continue playing Freelancer's audio when Alt-Tabbed (Part 2).                                                       |
| E8 04 95 FD FF -> 90 90 90 90 90 | freelancer.exe    | 18B147                                                                              | BC46  | Disables the UI character typing text sounds completely.                                                            |
| FC -> FF                         | freelancer.exe    | 05AC3D                                                                              | adoxa | Disables the typing effect for the arrival text.                                                                    |
| 01 -> 00                         | freelancer.exe    | 0E111B<br/>0E11AF<br/>0E1A61<br/>0E21CF<br/>0E32B6<br/>0E32CA<br/>0E47B2<br/>0E47C6 | adoxa | Disables the typing effect for the target ship name and sub-target name text elements. All offsets must be changed. |
