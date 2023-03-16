---
title: Voices.ini
---

[Return to parent folder (Audio)](../Audio)

## Overview

The following vanilla files in the audio folder use the same syntax as presented here:

* voices_base_female.ini
* voices_base_male.ini
* voices_mission**.ini
* voices_recognizable.ini
* voices_space_female.ini
* voices_space_male.ini

## Syntax

Voices use two different sections to associate voices together. Each Voice section selects a voice and sets the animation that is being used. Every following Sound section defines what sounds will be played with the selected animation for the selected voice.

This means that when the game looks for message `gcs_combat_scream_01-` for voice `atc_leg_f01`, it will first find the Sound section for `gcs_combat_scream_01-` which is listed within a Voice section that extends `atc_leg_f01`. It will then display the animation as defined by the scripts in the Voice section.

### Voice

```ini
[Voice] 
nickname = STRING 
script = STRING 
script = STRING
```

| Parameter  | Information                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| nickname     | Nickname of the voice that is being defined.                                                                       |
| script (1) | Nickname of the head script that should be used while playing the sounds specified for that voice and that action. |
| script (2) | Nickname of the body script that should be used while playing the sounds specified for that voice and that action. |

### Sound

```ini
[Sound] 
msg = STRING 
duration = FLOAT ;optional 
attenuation = INT 
Priority = INT ;optional
```

| Parameter           | Information                                                                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msg                 | Similar to nicknames, they refer to a specific message within a voice [UTF file]. This string is parsed as a hashcode and used as a reference in the related UTF file. |
| duration            | Range: 0 to infty. Sets the voice's message duration.                                                                                                                  |
| attenuation         | Range: -infty to 0. Tones down the sound's volume.                                                                                                                     |
| Priority (optional) | Range: -infty to 0. Sets the sound's priority.                                                                                                                         |