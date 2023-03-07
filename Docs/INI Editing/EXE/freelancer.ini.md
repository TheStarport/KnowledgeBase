[Return to parent folder (EXE)](../EXE/index.md)

# Overview

This game configuratuion file primarily determines which DLLs and called by FLserver.exe and Freelancer.exe and their load  order. There are a few options in the blocks towards the top of the file that can be used to force some ingame or server settings as well.

## Syntax
Each of the following sections can only be written once, preferably in the order shown.

### [Freelancer]
| Key           | Value              | Multiple | Remark                                                                     |
| ------------- | ------------------ | -------- | -------------------------------------------------------------------------- |
| data path     | directory          | no       | Path to the game data, relative to freelancer.exe                          |
| local_server  | dll                | no       |                                                                            |
| initial_world | Files:InitialWorld | no       | Relative to _data path_                                                    |
| AppGUID       | GUID               | no       | Unique identifier for the Frelancer application. No reason to change this. |

### [Display]
| Key        | Value            | Multiple | Remark |
| ---------- | ---------------- | -------- | ------ |
| fullscreen | 0 / 1            | no       |        |
| size       | integer, integer | no       |        |
| color_bpp  | integer          | no       |        |
| depth_bpp  | integer          | no       |        |

### [Startup]
| Key        | Value      | Multiple | Remark |
| ---------- | ---------- | -------- | ------ |
| movie_file | video file | yes      |        |

### [ListServer]
This block determines the global listing server that Freelancer.exe and FLServer will attempt to register with on load.
| Key      | Value   | Multiple | Remark |
| -------- | ------- | -------- | ------ |
| hostname | ip/name | no       |        |
| port     | integer | no       |        |

### [Server]
This block allows you to pre-fill name and description values for FLServer.exe
| Key           | Value   | Multiple | Remark                                                                             |
| ------------- | ------- | -------- | ---------------------------------------------------------------------------------- |
| name          | string  | no       |                                                                                    |
| description   | string  | no       |                                                                                    |
| death_penalty | integer | no       | Percentage of your cargo (commoditied and unmounted equipment) lost at death in MP |

### [Initial MP DLLs]
Initials DLL files called by FLServer.exe when it starts.
| Key  | Value                                                                    | Multiple | Remark                     |
| ---- | ------------------------------------------------------------------------ | -------- | -------------------------- |
| path | directory                                                                | no       | relative to freelancer.exe |
| DLL  | dll, [string], [LOWEST / BELOW_NORMAL / NORMAL / ABOVE_NORMAL / HIGHEST] | yes      |

### [Initial SP DLLs]
Initial DLL files called when you start a new game or load a game.
| Key  | Value                                                                    | Multiple | Remark                     |
| ---- | ------------------------------------------------------------------------ | -------- | -------------------------- |
| path | directory                                                                | no       | relative to freelancer.exe |
| DLL  | dll, [string], [LOWEST / BELOW_NORMAL / NORMAL / ABOVE_NORMAL / HIGHEST] | yes      |

### [Resources]
String resource files called by Freelancer.exe
| Key | Value | Multiple | Remark |
| --- | ----- | -------- | ------ |
| DLL | dll   | yes      |

### [Data]
Load order for this block is important. For multiplayer, server and client load order must match.

| Key           | Value     | Multiple | Remark                                                     |
| ------------- | --------- | -------- | ---------------------------------------------------------- |
| solar         | path      | yes?     | must be loaded before 'universe'                           |
| universe      | path      | yes?     | must be loaded after 'solars'                              |
| constants     | path      | yes?     |                                                            |
| fonts         | path      | yes      |                                                            |
| fonts_dir     | path      | yes?     |                                                            |
| sounds        | path      | yes      |                                                            |
| voices        | path      | yes      |                                                            |
| explosions    | path      | yes      |                                                            |
| debris        | path      | yes      |                                                            |
| asteroids     | path      | yes      |                                                            |
| equipment     | path      | yes      |                                                            |
| ships         | path      | yes      |                                                            |
| goods         | path      | yes      |                                                            |
| loadouts      | path      | yes      |                                                            |
| bodyparts     | path      | yes      |                                                            |
| costumes      | path      | yes      |                                                            |
| PetalDB       | path      | yes      |                                                            |
| effects       | path      | yes      |                                                            |
| effect_shapes | path      | yes      |                                                            |
| fuses         | path      | yes      |                                                            |
| concave       | path      | yes?     |                                                            |
| intro         | path      | yes      |                                                            |
| gate_tunnels  | path      | yes      |                                                            |
| groups        | path      | yes      |                                                            |
| HUD           | path      | yes      |                                                            |
| jump_effect   | path  yes |          |
| stars         | path      | yes      |                                                            |
| igraph        | path      | yes      |                                                            |
| bases         |           | no       | bases has no filename but the key specifies the load order |
| markets       | path      | yes      |                                                            |
| NewCharDB     | path      | yes      |                                                            |
| WeaponModDB   | path      | yes      |                                                            |
| rtcslider     | path      | yes      |

### [Error]
The block below is non-functional in unmodified copies of Freelancer, and has no effect on FLSpew log output. This function does work correctly in the beta version of the game.

| Key | Value                                                          | Multiple | Remark |
| --- | -------------------------------------------------------------- | -------- | ------ |
| log | filepath / $window / $text, [&lt;error kind&gt;], [&lt;severity level&gt;] | yes      |        |
  
#### Error Type
  
| Key   | Meaning                                                 |
| ----- | ------------------------------------------------------- |
| \-1   | all kinds, distinguish display based on severity        |
| 65536 | 'ignore kind' value                                     |
| 65540 | asserts                                                 |
| 'I'   | incoming packet transmission                            |
| 'O'   | outgoing packet transmission                            |
| 'i'   | instance creation related messages (mass, MOI, equip)   |
| 'r'   | significant attitude/reputation events                  |
| 'a'   | detailed info regarding loading/unloading of archetypes |
| 'c'   | report server-side events sent to contollers            |
| 'm'   | mission-generated messages                              |
| 's'   | log second thread activity                              |
| 'f'   | report file opens/closes                                |
| 'e'   | explosion/fuse messages                                 |
| 'd'   | damage messages                                         |
| 'A'   | reload console command messages                         |
| 'R'   | Render Pipeline                                         |
| 'n'   | SERVER.DLL                                              |
| 'w'   | minor general problems                                  |
  
### Severity Level
| Key  | Meaning                                                      |
| ---- | ------------------------------------------------------------ |
| 0    | Unrecoverable errors                                         |
| 1    | Recoverable errors                                           |
| 2    | Conditions which may indicate a problem, but are handled     |
| 3    | Useful messages that are in release builds.                  |
| 4    | Information useful for debugging or determining program flow |
| 5..n | Higher traces levels indicate more verbose information       |
