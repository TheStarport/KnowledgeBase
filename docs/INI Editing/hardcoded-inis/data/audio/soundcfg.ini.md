---
title: soundcfg.ini
---

## Overview

This file appears to govern how audio behaves in Freelancer globally. The `[reverb]` block can be used to govern how specific sounds behave. It's not clear if this file is called by Freelancer or not, more research is required.

## Syntax

Multiple `[reverb]` blocks may be defined

### CFG

```ini
[Voice] 
ear_doppler_factor = FLOAT
ducking_rtc_down_by = INT
ducking_rtc_down_time = FLOAT
default_crv_pitch = INT
default_crv_attenuation = INT
music_fade_time = INT
cross_fade_silence = INT
cockpit_attenuation = INT
ducking_spaceflight_down_by = INT
ducking_spaceflight_down_time = FLOAT
ducking_spaceflight_up_time = FLOAT
spaceflight_dialogue_pan_range = INT
ducking_comm_down_by = -INT
ducking_comm_down_time = FLOAT
ducking_comm_up_time = FLOAT
master_music = INT
master_ambient = INT
master_interface = INT
master_sfx = INT
master_voice = INT
```

| Parameter                      | Information                                                                                                           |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| ear_doppler_factor             | Strength of the Doppler effect on moving audio sources.                                                               |
| ducking_rtc_down_by            | Strength of compression of the volume of an audio signal whenever another audio signal goes above a certain threshold |
| ducking_rtc_down_time          | Length of time the ducking down effect lasts                                                                          |
| default_crv_pitch              | Defines the progression of the pitch for the tonal portion of the audio segment                                       |
| default_crv_attenuation        | Defines the default curve attenuation.                                                                                |
| music_fade_time                | Defines the fade in/out time for music.                                                                               |
| cross_fade_silence             | Amount of silence in cross-fade when changing music chat                                                              |
| cockpit_attenuation            | Default sound attenuation when in cockpit mode.                                                                       |
| ducking_spaceflight_down_by    | Ducking down level of sounds when in space                                                                            |
| ducking_spaceflight_down_time  | Ducking down duration of sounds when in space                                                                         |
| ducking_spaceflight_up_time    | How quickly ducked down sounds 'bounce back' in space(?)                                                              |
| spaceflight_dialogue_pan_range | Determines the pan range of dialogue when in space                                                                    |
| ducking_comm_down_by           | Ducking down level of comms audio when hailing NPCs                                                                   |
| ducking_comm_down_time         | Ducking down duration of comms audtio when hailing NPCs                                                               |
| ducking_comm_up_time           | How quickly ducked down sounds 'bounce back' in space(?)                                                              |
| master_music                   | Master music volume                                                                                                   |
| master_ambient                 | Master ambient volume                                                                                                 |
| master_interface               | Master interface volume                                                                                               |
| master_sfx                     | Master SFX volume                                                                                                     |
| master_voice                   | Master voice volume                                                                                                   |

### reverb

```ini
[reverb]
nickname = STRING
settings = INT, INT, INT
```

| Parameter | Information                                                                      |
| --------- | -------------------------------------------------------------------------------- |
| nickname  | This appears to refer to an entry in [sounds.ini](../../../typed-inis/sounds.md) |
| settings  | Defines level of reverb, not sure what these integers do? Testing required.      |
