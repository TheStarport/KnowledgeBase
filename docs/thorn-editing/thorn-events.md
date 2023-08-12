---
title: Thorn Events
id: thorn-events
---

Every scene minimally contains three objects: scene descriptor itself, monitor object and camera object.

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

Flags property is a bitmask, and values can be combined by using `+` symbol.

### CONNECT_HARDPOINT

*object, target*

Connect hardpoints between different objects.

| Property           | Type   | Description              |
| ------------------ | ------ | ------------------------ |
| `duration`         | float  | Connection duration.     |
| `hardpoint`        | string | Source object hardpoint. |
| `parent_hardpoint` | string | Parent object hardpoint. |

### START_SOUND

*sound*

Plays an audio effect.

| Property   | Type  | Description                                |
| ---------- | ----- | ------------------------------------------ |
| `duration` | float | Sound effect playback duration.            |
| `flags`    | LOOP  | Repeat sound effect for duration of event. |


### START_MOTION

*object*

Play animation script.

For multipart objects (.cmp) animations scripts are typically found embedded in files at Animation/Script node.

Character animations are found in .anm files at `DATA\CHARACTERS\ANIMATIONS`.

| Property      | Type    | Description                           |
| ------------- | ------- | ------------------------------------- |
| `animation`   | string  | Animation sequence name               |
| `duration`    | float   | Duration                              |
| `time_scale`  | float   | Animation time scale (1)              |
| `weight`      | float   | 1                                     |
| `heading`     | float   | \-1                                   |
| `event_flags` | integer | 2 seems to be a loop, 3 is play once? |

### START_IK

### START_PSYS

*effect*

Initialize and play particle system effect.

| Property   | Type  | Description                       |
| ---------- | ----- | --------------------------------- |
| `duration` | float | Duration of particle effect life. |

### START_FOG_PROP_ANIM

*scene*

Animate fog settings of the scene (`fogprops`). By default scenes have no fog so you’ll need to use this event to set fog.

#### fogprops

| Property   | Type       | Description                                                                                                                                         |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fogon`    | boolean    | Toggle fog in scene.                                                                                                                                |
| `fogcolor` | integer[3] | RGB color of the fog                                                                                                                                |
| `fogmode`  | string     | Options are as follows:<br/>`F_LINEAR`: Linear fog fade<br/>`F_EXP`: Exponential fog fade<br/>`F_EXP2`: Unclear what this does<br/>`F_NONE`: Unused |
| `fogstart` | float      | Fog start distance                                                                                                                                  |
| `fogend`   | float      | Fog end distance                                                                                                                                    |

### START_SPATIAL_PROP_ANIM

*object*

Animate common object spatial properties (`spatialprops`, i.e. position, orientation, etc). If you want an object to follow a path use the `START_PATH_ANIMATION` event instead.

| Property      | Type   | Description                                   |
| ------------- | ------ | --------------------------------------------- |
| `duration`    | float  | Duration of the animation.                    |
| `target_type` | string | Options are as follows:<br/>`ROOT`<br/>`PART` |

### START_LIGHT_PROP_ANIM

*light*

Animate light object properties (`lightprops`). With this event you can adjust light source properties to create various visual effects such as strobe light, fading effects and lightning.


### START_CAMERA_PROP_ANIM

*camera*

Animate camera object properties (`cameraprops`). Camera-specific properties include adjusting FOV.

### START_PSYS_PROP_ANIM

*effect*

Animate effect object properties (`psysprops`). There is one property you can control: sparam. Sparam is a float value passed to effects and is used to control certain effects such as glow intensity for engine exhausts, contrails and thrusters. 

Sparam values are typically defined between 0 and 1, where 0 is the engine idle animation and 1 is full cruise. You can also set duration. This is the time it will take the engine to go from its current state to to the sparam value you’ve set. Note that the ‘cruise charge’ animations are baked into the engine trail fx, not the engine fx itself.


### START_FLR_HEIGHT_ANIM

*character, marker*

Animate character floor height. Use this event to animate character vertical position for situations like walking up the stairs or being transported in elevator.

### START_AUDIO_PROP_ANIM

*sound*

Animate sound effect properties (audioprops).

### START_REVERB_PROP_ANIM

*sound*

Animate sound effect reverb properties.

### START_PATH_ANIMATION

*object, path*

Move an object along a path.

| Property      | Type     | Description                                                                                                                                                                                                                          |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| duration      | float    | A                                                                                                                                                                                                                                    |
| start_percent | float    | Start point position in percentage of path length (default: 0.0)                                                                                                                                                                     |
| stop_percent  | float    | End point position in percentage of path length (default: 1.0)                                                                                                                                                                       |
| offset        | float[3] | Additional position offset applied during animation                                                                                                                                                                                  |
| up            | AXIS     | Which axis is “up” (default: Y_AXIS)                                                                                                                                                                                                 |
| front         | AXIS     | Which axis is “front” (default: NEG_Z_AXIS)                                                                                                                                                                                          |
| flags         | string   | Options are as follows<br/>`POSITION`: Use position coordinates in path data<br/>`ORIENTATION`: Use orientation quaternion in path data<br/>`LOOK_AT`: Object will be oriented along the path (ignores orientation quat in path data) |
