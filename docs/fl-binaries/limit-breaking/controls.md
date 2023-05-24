---
title: Control Offsets
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

### Control

| Default Value | File           | Offset | By    | Description                           |
| ------------- | -------------- | ------ | ----- | ------------------------------------- |
| 01 -> 00      | common.dll     | 086542 | adoxa | Auto-level off by default (Part 1).   |
| 01 -> 00      | freelancer.exe | 212700 | adoxa | Auto-level off by default (Part 2).   |
| 94 -> 95      | freelancer.exe | 0DBE10 | adoxa | Disable auto-level toggling.          |
| 01 -> 00      | common.dll     | 07249A | adoxa | Level camera off by default (Part 1). |
| 01 -> 00      | freelancer.exe | 1186E9 | adoxa | Level camera off by default (Part 2). |
| 94 -> 95      | freelancer.exe | 11A1D3 | adoxa | Sisable level camera toggling.        |
| 1.75f         | freelancer.exe | 1C94FC | Syd   | Multiplier of mouse speed.            |