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

```lua
    {
		0.000, SET_CAMERA, { "Shot02_Monitor_1", "CnB_Camera_00_copy_5" }
	},
```

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

```lua
    {
		0.000, ATTACH_ENTITY, { "CnB_Camera_00_copy_4", "aa_main_object" },
		{
			duration = 43.000,
			offset = { 0, 0, 3 },
			up = Y_AXIS,
			front = NEG_Z_AXIS,
			target_part = "",
			target_type = ROOT,
			flags = LOOK_AT + ENTITY_RELATIVE
		}
	},
```

### CONNECT_HARDPOINT

*object, target*

Connect hardpoints between different objects.

| Property           | Type   | Description              |
| ------------------ | ------ | ------------------------ |
| `duration`         | float  | Connection duration.     |
| `hardpoint`        | string | Source object hardpoint. |
| `parent_hardpoint` | string | Parent object hardpoint. |

```lua
	{
		40.000, CONNECT_HARDPOINTS, { "Prop_glass_green_Bart_Fixt", "Char_li_bartender_Fixture" },
		{
			duration = 6.375,
			hardpoint = "hprightconnect_prop_glass_green",
			parent_hardpoint = "hprightconnect"
		}
	},
```

### START_SOUND

*sound*

Plays an audio effect.

| Property   | Type  | Description                                |
| ---------- | ----- | ------------------------------------------ |
| `duration` | float | Sound effect playback duration.            |
| `flags`    | LOOP  | Repeat sound effect for duration of event. |

```lua
	{
		39.520, START_SOUND, { "sfx_fs_ml_hard03_4" },
		{
			duration = 0.254
		}
	},
```


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

```lua
	{
		39.769, START_MOTION, { "Char_li_bartender_Fixture" },
		{
			animation = "Sc_MLBODY_WLKG_000LV_XA_01",
			duration = 6.607,
			time_scale = 1,
			weight = 1,
			heading = -1,
			event_flags = 2
		}
	},
```

### START_IK

```lua
    {
		42.375, START_IK, { "Char_trent", "Char_Tr_Mk_IKeyes_glass" },
		{
			duration = 2.921,
			end_effector = "Eye IK Left",
			count_to_root = 1,
			target_part = "",
			target_type = ROOT,
			damping = 1,
			up = Y_AXIS,
			front = Z_AXIS,
			point_at = 1,
			move_to = 0,
			transition_duration = 0.300,
			event_flags = 128
		}
	},
```

### START_PSYS

*effect*

Initialize and play particle system effect.

| Property   | Type  | Description                       |
| ---------- | ----- | --------------------------------- |
| `duration` | float | Duration of particle effect life. |

```lua
	{
		22.000, START_PSYS, { "Ship_civ_freighter_1_engine2" },
		{
			duration = 7.000
		}
	},
```

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

```lua
    {
		0.000, START_FOG_PROP_ANIM, { "Layer_Br_08_Bar_hardpoint" },
		{
			duration = 0.100,
			fogprops =
			{
				fogon = Y,
				fogtable = N,
				fogcolor = { 62, 62, 80 },
				fogmode = F_LINEAR,
				fogstart = 0,
				fogend = 1000,
				fogdensity = 0.1
			}
		}
	},
```

### START_SPATIAL_PROP_ANIM

*object*

Animate common object spatial properties (`spatialprops`, i.e. position, orientation, etc). If you want an object to follow a path use the `START_PATH_ANIMATION` event instead.

| Property      | Type   | Description                                   |
| ------------- | ------ | --------------------------------------------- |
| `duration`    | float  | Duration of the animation.                    |
| `target_type` | string | Options are as follows:<br/>`ROOT`<br/>`PART` |

```lua
    {
		149.100, START_SPATIAL_PROP_ANIM, { "Ambi_Roids_solar_badlands_dynamic_03", "Ambi_Roids_solar_badlands_dynamic_03_Target" },
		{
			duration = 60.000,
			target_part = "",
			target_type = ROOT,
			spatialprops =
			{
				pos = { 170.7793, 1584.076, 966.3994 }
			},
			param_curve =
			{
				CLSID = "FreeFormPCurve",
				points =
				{
					{  0.000000,  0.000000,  0.000000,  0.952381 },
					{  1.000000,  1.000000,  0.947368,  0.000000 },
				}
			},
			pcurve_period = -1000
		}
	},
```

### START_LIGHT_PROP_ANIM

*light*

Animate light object properties (`lightprops`). With this event you can adjust light source properties to create various visual effects such as strobe light, fading effects and lightning.

```lua
    {
		6.500, START_LIGHT_PROP_ANIM, { "Ambi_Lt_Decon_Burst" },
		{
			duration = 1.100,
			lightprops =
			{
				diffuse = { 0.729412, 1, 0.729412 },
				ambient = { 0.121569, 0.376471, 0.121569 },
			},
			param_curve =
			{
				CLSID = "FreeFormPCurve",
				points =
				{
					{  0.000000,  0.000000,  0.000000,  0.000000 },
					{  0.243590,  1.000000,  0.000000, -4.250000 },
					{  1.000000,  0.000000,  0.000000,  0.000000 },
				}
			},
			pcurve_period = -1000
		}
	},
```

### START_CAMERA_PROP_ANIM

*camera*

Animate camera object properties (`cameraprops`). Camera-specific properties include adjusting FOV.

```lua
    {
		89.744, START_CAMERA_PROP_ANIM, { "Cam_09_TCI_artifact", "Cam_09_PathPt3_PCOL" },
		{
			duration = 9.553,
			cameraprops =
			{
				fovh = 20
			},
			param_curve =
			{
				CLSID = "FreeFormPCurve",
				points =
				{
					{  0.000000,  0.000000,  0.000000,  0.000000 },
					{  1.000000,  1.000000,  0.000000,  0.000000 },
				}
			},
			pcurve_period = -1000
		}
	},
```

### START_PSYS_PROP_ANIM

*effect*

Animate effect object properties (`psysprops`). There is one property you can control: sparam. Sparam is a float value passed to effects and is used to control certain effects such as glow intensity for engine exhausts, contrails and thrusters. 

Sparam values are typically defined between 0 and 1, where 0 is the engine idle animation and 1 is full cruise. You can also set duration. This is the time it will take the engine to go from its current state to to the sparam value you’ve set. Note that the ‘cruise charge’ animations are baked into the engine trail fx, not the engine fx itself.

```lua
	{
		7.500, START_PSYS_PROP_ANIM, { "rtc_shipdust_2" },
		{
			duration = 0.100,
			psysprops =
			{
				sparam = 0.7
			}
		}
	},
```

### START_FLR_HEIGHT_ANIM

*character, marker*

Animate character floor height. Use this event to animate character vertical position for situations like walking up the stairs or being transported in elevator.

```lua
	{
		75.573, START_FLR_HEIGHT_ANIM, { "char_order_extra_04" },
		{
			duration = 0.000,
			target_type = ROOT,
			floor_height = -10.40001
		}
	},
```

### START_AUDIO_PROP_ANIM

*sound*

Animate sound effect properties (audioprops).

```lua
    {
		66.027, START_AUDIO_PROP_ANIM, { "sfx_fs_mr_hard01_13" },
		{
			duration = 4.000,
			audioprops =
			{
				attenuation = -100
			},
			param_curve =
			{
				CLSID = "FreeFormPCurve",
				points =
				{
					{  0.000000,  0.000000,  0.000000,  0.000000 },
					{  1.000000,  1.000000,  0.000000,  0.000000 },
				}
			},
			pcurve_period = -1000
		}
	},
```

### START_REVERB_PROP_ANIM

*sound*

Animate sound effect reverb properties.

```lua
    {
		0.000, START_REVERB_PROP_ANIM, { "Layer_Hi_02_City_Ambi_Day" },
		{
			duration = 0.100,
			reverbprops =
			{
				
			}
		}
	},
```

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

```lua
	{
		0.000, START_PATH_ANIMATION, { "CnB_Camera_00_copy_1", "Path_1" },
		{
			duration = 30.000,
			start_percent = 0,
			stop_percent = 1,
			offset = { 0, 0, 0 },
			up = Y_AXIS,
			front = NEG_Z_AXIS,
			flags = POSITION,
			param_curve =
			{
				CLSID = "FreeFormPCurve",
				points =
				{
					{  0.000000,  0.000000,  0.000000,  0.000000 },
					{  1.000000,  1.000000,  0.000000,  0.000000 },
				}
			},
			pcurve_period = -1000
		}
	},
```