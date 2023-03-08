[Return to parent folder (Audio)](../Audio)

# Overview
The following vanilla files in the Audio folder use the same syntax as presented here:

* ambience_sounds.ini
* engine_sounds.ini
* gf_sounds.ini
* interface_sounds.ini
* music.ini
* sounds.ini
* story_sounds.ini

Please note that while having the same section nickname, voices and sounds do not share the same INI syntax.

## Syntax

```ini
[Sound] 
nickname = STRING 
file = FILE 
attenuation = INT ;optional
type = STRING ;optional
range = (INT, INT) ;optional
crv_pitch = INT ;optional
is_2d = BOOL ;optional
pitch_bendable = BOOL ;optional
streamer = BOOL ;optional
```

| Parameter              | Information                                                                                                                                                                       |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| nickname               | The nickname used to refer to the sound in other ini files. This should be unique.                                                                                                |
| file                   | Path to the sound file, relative to the DATA path.                                                                                                                                |
| attenuation (optional) | Range: -infty to 0. Tones down the sound's volume.                                                                                                                                |
| type (optional)        | Can be **ambience**, **interface**, **music** or **voice**. Do not specify if using sounds not fitting in any type (fire sounds, engines, shields and such do not have a type).   |
| range (optional)       | Subvalues: MIN (optional), MAX.<br/>Range: 0 to infty.<br/>Distance through which the sound will be heard. If only one value is given, it is considered to be equivalent to 0, MAX. There is a hardcoded maximum range after which every sound will be stopped, regardless of what is defined here. |
| crv_pitch              | Defines the progression of the pitch for the tonal portion of the audio segment                                                                                                   |
| is_2d                  | Overrides the game's 3d sound settings and forces 2d sound for this entry.                                                                                                        |
| pitch_bendable         | Possibly related to crv_pitch, allowing it to be toggled in the ini. Requires testing                                                                                             |
| streamer               | Is used in interface sounds and certain voices, most likely to denote the lack of a positionable source.                                                                          |
