---
title: sounds
---

## Overview

This ini type defines sounds. Please note that while having the same section nickname, voices and sounds do not share the same INI syntax.

### Vanilla Examples

* `DATA\AUIO\ambience_sounds.ini`
* `DATA\AUIO\engine_sounds.ini`
* `DATA\AUIO\gf_sounds.ini`
* `DATA\AUIO\interface_sounds.ini`
* `DATA\AUIO\music.ini`
* `DATA\AUIO\sounds.ini`
* `DATA\AUIO\story_sounds.ini`

## Syntax

```ini
[Sound] 
nickname = STRING 
file = FILE 
attenuation = INT ;optional
type = STRING ;optional
range = INT, INT ;optional
crv_pitch = INT ;optional
is_2d = BOOL ;optional
pitch_bendable = BOOL ;optional
streamer = BOOL ;optional
```

| Parameter              | Information                                                                                                                                                                                                                                                                                         |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname               | The nickname used to refer to the sound in other ini files. This should be unique.                                                                                                                                                                                                                  |
| file                   | Path to the sound file, relative to the DATA path.                                                                                                                                                                                                                                                  |
| attenuation (optional) | Range: -96 to 0. Tones down the sound's volume.                                                                                                                                                                                                                                                  |
| type (optional)        | Can be **ambience**, **interface**, **music** or **voice**. Do not specify if using sounds not fitting in any type (fire sounds, engines, shields and such do not have a type).                                                                                                                     |
| range (optional)       | Subvalues: MIN, MAX (optional).<br/>Range: 1 to infty.<br/>Distance through which the sound will be heard. If only one value is given, the engine calculates the MAX distance based on the given MIN – may not always match the desired perceivable effect.<br/>The game uses an exponential sound model; both values influence the volume over distance. Depending on MIN, the MAX value must not be too small or the sound is being cut perceivably too early. If MAX is large, the sound range is being stretched out further. The exact MIN and MAX values depend on the desired impression on the player, the attenuation, the sound itself, and the target sound environment in the game. <br/>Freelancer’s 3D Sound option influences this heavily. Deactivated 3D Sound requires a far higher MAX value to not have the sound being cut off perceivably.  |
| crv_pitch              | Defines the progression of the pitch for the tonal portion of the audio segment                                                                                                                                                                                                                     |
| is_2d                  | Overrides the game's 3d sound settings and forces 2d sound for this entry.                                                                                                                                                                                                                          |
| pitch_bendable         | Possibly related to crv_pitch, allowing it to be toggled in the ini. Requires testing                                                                                                                                                                                                               |
| streamer               | Is used in interface sounds and certain voices, most likely to denote the lack of a positionable source. Or it may mean it streams the sound directly from disk instead of loading it entirely into memory.                                                                                                                                                                                            |
