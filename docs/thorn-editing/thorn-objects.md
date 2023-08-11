---
title: Thorn Objects
id: thorn-objects
---

Every scene minimally contains three objects: scene descriptor itself, monitor object and camera object.

Every object has a name that must be unique within the script. More than one using same name will cause glitches and bugs.

These are properties common to most object types:

| Property        | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entity_name`   | string  | The name of the object in the scene.                                                                                                                                                                                                                                                                                                                                                                                                     |
| `type`          | string  | Denotes the object type. Options are as follows:<br/>`SCENE`: Scene descriptor.<br/>`MONITOR`: Target render monitor.<br/>`CAMERA`: Viewport camera.<br/>`LIGHT`: Light source.<br/>`COMPOUND`: Compound mesh (ships, solars, etc).<br/>`DEFORMABLE`: Deformable mesh (characters).<br/>`PSYS`: Particle system effect.<br/>`SOUND`: Sound effect.<br/>`MARKER`: Marker/dummy.<br/>`MOTION_PATH`: Motion path curve (ex: ship fly path). |
| `template_name` | string  | Object template name from catalog specific to certain types.                                                                                                                                                                                                                                                                                                                                                                             |
| `lt_grp`        | integer | Receiving light group.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `srt_grp`       | integer | Render order sorting group. First to last is back to front.                                                                                                                                                                                                                                                                                                                                                                              |
| `usr_flg`       | integer | Special flags.<br/>For compound type if set to 1 the object will be rendered as a static background layer. Used for starscapes, stars and such.<br/>When used in conjunction with starsphere_generic_exclusion or similar, allows lighting/fog to set the nebula colors. (set to 2)                                                                                                                                                      |
| `flags`         | string  | `LIT_DYNAMIC`: Mesh receives dynamic light.<br/>`LIT_AMBIENT`: Mesh receives ambient light.<br/>`HIDDEN`: Object is invisible.                                                                                                                                                                                                                                                                                                           |

Flags can be summed with with `+` symbol.

## spatialprops

| Property   | Type          | Description                                                                            |
| ---------- | ------------- | -------------------------------------------------------------------------------------- |
| `pos`      | float[3]      | Object position (unless attached to another object it is typically relative to scene). |
| `orient`   | {float[3]}[3] | Rotation matrix. Use when setting up object in scene.                                  |
| `q_orient` | float[4]      | Quaternion orientation. Use for animation.                                             |
| `axisrot`  | {float, AXIS} | Single axis object rotation. Use for animation.                                        |

When defining object in scene you should use orient property to set orientation. However in `START_SPATIAL_PROP_ANIM` event you should use q_orient quaternion property for animation. Alternatively if you need to rotate object across single axis you can simply use `axisrot`.

### SCENE

Scene control object. Every cutscene must have only one scene object. Scene object is referenced by certain events.

| Property  | Type | Description                   |
| --------- | ---- | ----------------------------- |
| `up`      | AXIS | Default Y_AXIS.               |
| `front`   | AXIS | Default Z_AXIS.               |
| `ambient` | AXIS | Ambient (unlit/shadow) color. |

### MONITOR

Cutscene render target. Every cutscene must have only one monitor object. Monitor spatial properties are irrelevant, it is a meta object (doesn’t exist in the scene) and is referred only when switching between cameras.

### CAMERA

Viewport camera object. A cutscene may have multiple cameras and use SET_CAMERA event to toggle between them.

| Property    | Type  | Description                                                                                                                                                                    |
| ----------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fovh`      | float | Horizontal Field of View (FOV)                                                                                                                                                 |
| `hvaspect`  | float | Horizontal to vertical aspect ratio. Default is 1.333333 representing 4:3 display aspect ratio the game was designed for. 1.777777 for 16:9 widescreen.                        |
| `nearplane` | float | Frustum near plane cutoff distance. Default to 1 unless you have a scene with very small objects and very close up camera.                                                     |
| `farplane`  | float | Frustum far plane cutoff distance. Object farther away from this distance will be cut off. Be reasonable in setting this value to avoid z-buffer flickering on older hardware. |

### LIGHT

Light source object illuminate scene mesh objects. Be aware that due to the old DirectX version Freelancer uses, a mesh object can receive light from a maximum of six light sources. However you can group light sources using lgt_grp property and objects can specify which group they will receive light from. For example environment scenery can be lit by one group of light sources while characters in it are lit by another group. Light sources in cutscenes can behave slightly differently to `[Lightsource]` objects in systems.

| Property    | Type     | Description                                                                                              |
| ----------- | -------- | -------------------------------------------------------------------------------------------------------- |
| `on`        | boolean  | Toggle switch. You can turn light source on or off.                                                      |
| `color`     | float[3] | Unused                                                                                                   |
| `diffuse`   | float[3] | Diffuse color. This is the actual color tint.                                                            |
| `specular`  | float[3] | Specular intensity.                                                                                      |
| `ambient`   | float[3] | Additional ambient color tint.                                                                           |
| `direction` | float[3] | Unclear what this does.                                                                                  |
| `range`     | float    | Light range.                                                                                             |
| `cutoff`    | float    | Distance from center at which light intensity starts to gradually fall off.                              |
| `type`      | string   | `L_POINT`: Point light source.<br/>`L_DIRECT`: Directional light source<br/>`L_SPOT`: Spot light source. |
| `theta`     | float    | Polar coordinates for directional light source.                                                          |
| `atten`     | float[3] | Attenuation                                                                                              |

### COMPOUND

A generic mesh object such as solar, ship or a static prop. Characters use their own type (see `DEFORMABLE`).

| Property        | Type   | Description                                                                 |
| --------------- | ------ | --------------------------------------------------------------------------- |
| `template_name` | string | Name of object from archetypes depending on catalog specified in userprops. |

#### userprops

| Property   | Type   | Description                            |
| ---------- | ------ | -------------------------------------- |
| `category` | string | Mesh category lookup file (see below). |

Categories used by compound objects:

| Category         | Filename                        |
| ---------------- | ------------------------------- |
| `Prop`           | `DATA\petaldb.ini`              |
| `Room`           | `DATA\petaldb.ini`              |
| `Spaceship`      | `DATA\SHIPS\shiparch.ini`       |
| `Solar`          | `DATA\SOLAR\solararch.ini`      |
| `Asteroid`       | `DATA\SOLAR\asteroidarch.ini`   |
| `Equipment`      | `DATA\EQUIPMENT\prop_equip.ini` |
| `Equipment Cart` | `DATA\petaldb.ini`              |

### DEFORMABLE

Animated character objects (Trent, Juni, etc).

| Category        | Filename | Description                                                       |
| --------------- | -------- | ----------------------------------------------------------------- |
| `template_name` | string   | Name of a character template from `DATA\CHARACTERS\costumes.ini`. |

#### compoundprops

| Property       | Type  | Description                                                                                 |
| -------------- | ----- | ------------------------------------------------------------------------------------------- |
| `floor_height` | float | Floor height for character. Deformable meshes ignore height position in spatial properties. |

#### userprop

| Property   | Type   | Description                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
| `actor`    | string | Name of template from category list. Should match template_name. |
| `category` | string | Mesh category lookup file (see below).                           |

When using `START_MOTION` be aware that certain animations such as walking will make a character modify its position in space and it will be retained once animation is complete. Many animations are specific to single player cutscenes so there might be not a whole lot you can do about them, but there are also a fair amount of generic animations all human characters can use and a number of unused but functional animations (like dancing).

To find character animation names open .anm files in `DATA\CHARACTERS\ANIMATIONS` with UTFEditor. Be aware that certain versions of UTFEditor may crash when opening some nodes in those files. Animations are stored in Animation/Script node. Most script names have two digits at the end of the name, those indicate running time to help you chain them together.

Head, body and hand animations are sometimes separate and can run independently of each other. For example you may run a hands gesture animation on a character while running a different facial expression animation. Despite somewhat clunky data format the animation system in Freelancer is fairly robust.

It’s worth to note that for some reason character placement requires specifying vertical position independently from common spatial properties (see `floor_height`). Animating height placement is also done via separate event: `START_FLR_HEIGHT_ANIM`.


### PSYS

Particle system effect (Alchemy effect).

#### psysprops

| Property | Type  | Description                                                                       |
| -------- | ----- | --------------------------------------------------------------------------------- |
| `sparam` | float | Numerical value passed to effect. Used for engines intensity and such. Default 0. |

Template_name will refer to `[Effect]` nickname attribute in any of the *_ale.ini files found within `DATA\FX` subfolders (ex: engines_ale.ini in `DATA\FX\ENGINES`). Not all effects are listed in `DATA\FX\effects.ini`.

### SOUND

Sound effect. You’ll need to use `START_SOUND` event to play it.

| Property | Type      | Description                                   |
| -------- | --------- | --------------------------------------------- |
| `flags`  | `SPATIAL` | Sound effect is spatial and uses coordinates. |

#### audioprops

| Property      | Type  | Description                   |
| ------------- | ----- | ----------------------------- |
| `attenuation` | float | Sound effect attenuation.     |
| `pan`         | float | Stereo panning. Default is 0. |
| `dmin`        | float |                               |
| `ain`         | float |                               |
| `aout`        | float |                               |
| `atout`       | float |                               |
| `rmix`        | float |                               |

#### userprops

| Property | Type   | Description                               |
| -------- | ------ | ----------------------------------------- |
| category | string | Sound source catalog. Default is “Audio”. |

### MARKER

Dummy placeholder object without visual representation. It can be used as a rotational pivot for other objects or a moving point which a camera looks at while following a path track.

| Property | Type        | Description                                                                                      |
| -------- | ----------- | ------------------------------------------------------------------------------------------------ |
| `flags`  | `REFERENCE` | Marker is a placeholder for other objects to be placed dynamically upon cutscene initialization. |

In certain scripts it serves as a placeholder object, for example a player ship in landing/takeoff base cutscenes. Upon starting a cutscene the game will attach player ship model to that marker if found in the scene.

Some placeholder marker names:

| Name                        | Attachment                                          |
| --------------------------- | --------------------------------------------------- |
| X/Shipcentre/01             | Player 01 ship.                                     |
| Zg/PC/Player/01/A/Stand     | Player 01 costume character in standing  animation. |
| Zs/NPC/Bartender/01/P/Stand | Bar bartender 01 character in standing animation.   |

### MOTION_PATH

Curves are used to move an object along its path. Paths can be open or closed loops.

#### pathprops

| Property  | Type                                | Description                                      |
| --------- | ----------------------------------- | ------------------------------------------------ |
| path_type | string                              | Path type. Default “CV_CROrientationSplinePath”. |
| path_data | flag, {x, y, z}, {x, y, z, w} [...] | Path data: flag, points, quaternions.            |


Only one path type is available: `CV_CROrientationSplinePath`.

First attribute in path_data is a flag specifying whether this is an open path (`“OPEN”`) or a closed loop (`“CLOSED”`).

Each path point consists of a coordinates set and rotation quaternion.

Creating path point data by hand (especially quaternions) is a rather daunting task so I’d recommend to use your favorite 3D modeling software to create smooth paths and export them into plain text that you can use in THN files.
