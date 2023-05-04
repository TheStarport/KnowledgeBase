---
title: Visual Effect Offsets
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

### Effects

| Default Value                          | File           | Offset | By           | Description                                                                                         |
| -------------------------------------- | -------------- | ------ | ------------ | --------------------------------------------------------------------------------------------------- |
| 10000f                                 | server.dll     | 0A8AF0 | fox          | Range at which fuses for solars activate (and probably other stuff too).                            |
| 1.0f                                   | freelancer.exe | 0F86A3 | w0dk4        | Time in seconds for particle effects to stay after emitter died.                                    |
| 6250000f                               | server.dll     | 086AEC | FriendlyFire | Square of maximum effect draw distance (vis_beam) (note: same offset as MP NPC disappear distance). |
| 74 -> EB                               | freelancer.exe | 111BA5 | adoxa        | Display sun spines within tradelane.                                                                |
| 74 -> EB                               | freelancer.exe | 111C3C | adoxa        | Display sun spines within nebula.                                                                   |
| 74 -> EB                               | freelancer.exe | 111C80 | adoxa        | Display sun spines within asteroid field.                                                           |
| 0D -> 00                               | freelancer.exe | 11C8FB | adoxa        | Display sun spines within nebula (3rd person).                                                      |
| 0D -> 00                               | freelancer.exe | 11C9BB | adoxa        | Display sun spines within nebula (cockpit).                                                         |
| 5F 5E -> EB 6D                         | freelancer.exe | 12D132 | w0dk4        | Activate `[gun]` light_anim entries (Part 1).                                                       |
| 0F 84 49 01 00 00 -> 90 90 90 90 90 90 | freelancer.exe | 12D052 | w0dk4        | Activate `[gun]` light_anim entries (Part 2).                                                       |
| 5B -> 53                               | freelancer.exe | 12D0F6 | w0dk4        | Activate `[gun]` light_anim entries (Part 3).                                                       |
| 03 -> 02                               | freelancer.exe | 12D0F9 | w0dk4        | Activate `[gun]` light_anim entries (Part 4).                                                       |
| CB -> CA                               | freelancer.exe | 12D100 | w0dk4        | Activate `[gun]` light_anim entries (Part 5).                                                       |
| 0F 94 C0 -> B0 01 90                   | freelancer.exe | 131D2B | adoxa        | Activate lightsource_cone.                                                                          |

#### EFT_EXPLOSION_LARGE Type

| Default Value | File           | Offset | By  | Description                                                                                              |
| ------------- | -------------- | ------ | --- | -------------------------------------------------------------------------------------------------------- |
| 100f          | freelancer.exe | 212AF0 | Dev | On-screen radius of effects, affects size-on-screen-based cutoff (make larger to increase cutoff range). |
| 15f           | freelancer.exe | 212AF8 | Dev | Max run time of effects.                                                                                 |
| 100f          | freelancer.exe | 212B00 | Dev | Unknown, likely the first value of pbubble.                                                              |
| 500f          | freelancer.exe | 212B04 | Dev | Visual cutoff range of effects (second value of pbubble).                                                |

#### EFT_WEAPON_LARGE_PROJECTILE Type

| Default Value | File           | Offset | By  | Description                                                           |
| ------------- | -------------- | ------ | --- | --------------------------------------------------------------------- |
| 50f           | freelancer.exe | 212C58 | Dev | On-screen radius of effects.                                          |
| -1f           | freelancer.exe | 212C60 | Dev | Max run time of effects.                                              |
| 100f          | freelancer.exe | 212C68 | Dev | Unknown, likely the first value of pbubble.                           |
| 500f          | freelancer.exe | 212C6C | Dev | Visual cutoff range of effects (second value of pbubble).             |
| 15f           | freelancer.exe | 213158 | Dev | On-screen radius of vis_beam effects.                                 |
| 100f          | freelancer.exe | 213168 | Dev | Unknown, likely the first value of pbubble for vis_beam.              |
| 500f          | freelancer.exe | 21316C | Dev | Default vis_beam cutoff range (second value of pbubble for vis_beam). |

#### EFT_DAMAGE_LARGE_SMOKE Type 

| Default Value | File           | Offset | By  | Description                                               |
| ------------- | -------------- | ------ | --- | --------------------------------------------------------- |
| 20f           | freelancer.exe | 212DE8 | Dev | On-screen radius of effects.                              |
| -1f           | freelancer.exe | 212DF0 | Dev | Max run time of effects.                                  |
| 100f          | freelancer.exe | 212DF8 | Dev | Unknown, likely the first value of pbubble.               |
| 500f          | freelancer.exe | 212DFC | Dev | Visual cutoff range of effects (second value of pbubble). |
