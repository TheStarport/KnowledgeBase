---
title: Thorn Events
id: thorn-events
---

All events follow exact same structure:
`{ Time, Action, Targets, Properties }`

Time specifies when event will activate, it is measured in seconds elapsed from starting THN script.

Action specifies type of event, such as moving objects, changing camera orientation and so on.

Targets is a set of primary arguments specifying target object(s) for action. Typically these refer to entity_name property. Some events accept multiple targets and order of listed names is important.

Properties is a set of secondary arguments and are specific to each type of action.

Typically every scene must have at least a `SET_CAMERA` event to function.

### SET_CAMERA

*monitor, camera*
Activate camera for scene monitor. Event has no properties.


### SET_SUBTITLE

Doesn’t work. Supposedly it was meant to add text on screen but was never used. Titles that do appear on screen in campaign cutscenes are names of bases and systems where script runs, just like when you enter a system.

### ATTACH_ENTITY

*object, parent*
Connect an object to a target parent object. This forms a hierarchy between objects allowing them to be grouped in various ways. Objects can be attached to sub-parts such as hardpoints.

For example attaching engine effect object to `HpEngine01` hardpoint of a ship object. When the ship object is moved the effect will follow as well.

However objects don’t have to follow others, example of indirect use would be to have camera watching an object by attaching camera to that object with flags set only to `LOOK_AT`. Keep in mind it’ll do so only for a duration of the event.


| Property      | Type     | Description                                                                                                                                                                                                                                  |
| ------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `duration`    | float    | How long an object will be attached to a parent (measured in seconds).                                                                                                                                                                       |
| `offset`      | float[3] | Positional offset                                                                                                                                                                                                                            |
| `up`          | AXIS     | Which axis is “up”                                                                                                                                                                                                                           |
| `front`       | AXIS     | Which axis is “front”                                                                                                                                                                                                                        |
| `target_type` | string   | `ROOT`: Target is root of an object.<br/>`HARDPOINT`: Target is a hardpoint of an object<br/>`PART`: Target is part of multi-part mesh object.                                                                                               |
| `target_type` | string   | Name of attachment target, name of hardpoint or bone, empty if type is `ROOT`.                                                                                                                                                               |
| `flags`       | string   | `POSITION`: Object will follow position of parent.<br/>`ORIENTATION`: Object will inherit orientation of parent.<br/>`LOOT_AT`:Object will orient itself towards parent.<br/>`ENTITY_RELATIVE`<br/>`ORIENTATION_RELATIVE`<br/>`PARENT_CHILD` |

Flags property is a bitmask, and values can be combined by using + symbol.

### CONNECT_HARDPOINT

### START_SOUND

### START_MOTION

### START_IK

### START_PSYS

### START_FOG_PROP_ANIM

### START_SPATIAL_PROP_ANIM

### START_LIGHT_PROP_ANIM

### START_CAMERA_PROP_ANIM

### START_PSYS_PROP_ANIM

### START_FLR_HEIGHT_ANIM

### START_AUDIO_PROP_ANIM

### START_REVERB_PROP_ANIM

### START_PATH_ANIMATION