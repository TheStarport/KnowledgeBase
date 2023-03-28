---
title: Shortcut Switches
---

[Return to parent folder (FL Binaries)](./index.md)

Options ignore case and start with either '+' or '-'; if relevant, it's noted in brackets.

## freelancer.exe

| Switch | Description                                                                                                                                     |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| b      | Uncertain, something to do with DirectX, possibly windowed mode only (+ sets 3, - sets 4 [default])                                             |
| f      | Forces full screen mode (+ no, - yes [default])                                                                                                 |
| g      | God mode (single player only effectively the same as setting "DIFFICULTY_SCALE = 0" in PerfOptions.ini)                                         |
| m      | width - sets resolution: 1024x768, 800x600, 640x480 (default), 512x384, 320x240                                                                 |
| p      | port - sets the port to use                                                                                                                     |
| q      | Skip machine warnings (same as the option in PerfOptions.ini)                                                                                   |
| s      | ip:port - sets the Server IP and port, causes Freelancer to immediately attempt to connect to the server on load, skipping the menu animations. |
| w      | Forces windowed mode (+ no [default], - yes)                                                                                                    |
| x      | FPU control (+ on, - off [default])                                                                                                             |

## FLServer.exe

| Switch | Description                                                                                                                                     |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| b      | [name] - log packet stats to file. Default name is FLServerBWLog-T.txt (in EXE), where T is a [unix time stamp.](https://www.unixtimestamp.com) |
| c      | use the last configuration (no dialog)                                                                                                          |
| e      | char - unknown                                                                                                                                  |
| h      | refresh - set the refresh rate (1-60, default 20; fractions allowed)                                                                            |
| l      | name - write the console log to file                                                                                                            |
| m      | lines - set the maximum lines (1-100000, default 100000); doesn't seem to have much of an effect                                                |
| p      | port - set the port that FLServer broadcasts on                                                                                                 |
| s      | level - set the degree (severity) of logging (1-7; default 4)                                                                                   |
| t      | trim - set the trim lines (1-(lines-1); default 200); doesn't seem to have much of an effect                                                    |
| x      | FPU control (+ on, - off [default])                                                                                                             |
