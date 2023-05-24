---
title: Server Operation Offsets
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

### Server Operation

| Default Value                                                                            | File                                             | Offset                       | By                          | Description                                                                   |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------- | --------------------------- | ----------------------------------------------------------------------------- |
| 5b                                                                                       | freelancer.exe<br/>freelancer.exe<br/>server.dll | 16835B<br/>169D2B<br/>07417C | Zephyer<br/>adoxa<br/>M0tah | Maximum number of characters per account (ALL offsets must be changed!).      |
| 60d                                                                                      | server.dll                                       | 085530                       | w0dk4                       | Respawn time for any solar object to regain full health once destroyed in MP. |
| 8b                                                                                       | server.dll                                       | 3A068<br/>3A46E              | Unknown                     | Maximum group size (both offsets must be changed).                            |
| 48 -> 50                                                                                 | Freelancer.exe                                   | 1628F4                       | FriendlyFire<br/>adoxa      | Filter out incompatible builds on server by default.                          |
| 51 8D 4C 24 20 51 8D 8C 24 C8 00 00 00<br/>-><br/>40 74 63 48 51 8D 54 E4 20 52 83 E9 08 | Freelancer.exe                                   | 1ACF6A                       | adoxa                       | Prevents IPv6 addresses from being displayed in the server list.              |
