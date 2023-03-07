# Alchemy

Alchemy is a particle effects system in Freelancer rendering. Almost all visual effects are made in this system, like weapon projectiles, explosions, engine exhausts and many more.

Alchemy data is presented by two entries in UTF:
* `ALEffectLib` for effect library.
* `AlchemyNodeLibrary` for node library.

Both entries appear in .ale files inside folder entries of same names.

Strings in ALE structures (astring) are NUL-terminated and prefixed by character count as uint16. Number of characters is always even regardless of actual string length: there will always be one or two NUL bytes at the end of string.

* [Alchemy Nodes](./ale-nodes.md)

# Alchemy Effect Library

Effect library contains effect entries which are referenced in effect .ini files via `effect_crc` property of [VisEffect] section.

| Name        | Type   | Description           |
| ----------- | ------ | --------------------- |
| version     | float  | Version (1.0 or 1.1). |
| effectCount | uint32 | Effects count.        |

## Effect

A single effect is comprised of hierarchy of node instances which reference node archetypes in Alchemy node library. These nodes typically fall into three categories: emitters, appearances and fields.

Emitters generate particles (points in space with direction and velocity), appearances visualize particles to be rendered with certain shapes, colors and textures, and fields can affect particles physically like applying gravity force to accelerate particles.

| Name            | Type     | Description                             |
| --------------- | -------- | --------------------------------------- |
| name            | astring  | Effect name (ex.: "gf_jumpgate_rings"). |
| unused          | float[4] | Unused floats.                          |
| instanceCount   | uint32   | Node instances count.                   |
| *nodeInstances* |          | Node instances.                         |
| pairCount       | uint32   | Node pair count.                        |
| *nodePairs*     |          | Node pairs.                             |

* Unused floats appear only when version is 1.1f.

Each node instance is:

| Name     | Type   | Description                                      |
| -------- | ------ | ------------------------------------------------ |
| flags    | uint32 | 1 for attachment node, 0 for instance node.      |
| name     | uint32 | Node's Node_Name value FLCRC32 (case-sensitive). |
| parentId | int32  | Node instance parent id (32768 for none).        |
| refId    | int32  | Node instance id.                                |

* CRC pointing to a node in node library CRC of "Node_Name" parameter.
* Node instance indices start with 1.
* Order of node instances in effect is used for draw order.

Each node pair is:

| Name     | Type  | Description                                     |
| -------- | ----- | ----------------------------------------------- |
| sourceId | int32 | Pair source node instance (emitter/appearance). |
| targetId | int32 | Pair target node instance (appearance/field).   |

# Alchemy Node Library

Node library is a collection of node archetypes. Nodes have type property describing its behavior and list of properties, some of which are fixed values and some are animated. 

| Name      | Type    | Description           |
| --------- | ------- | --------------------- |
| version   | float32 | Version (1.0 or 1.1). |
| nodeCount | uint32  | Node count.           |
| *nodes*   |         | Node archetype.       |

Individual node archetype contains:

| Name         | Type    | Description                           |
| ------------ | ------- | ------------------------------------- |
| name         | astring | Node type (ex.: "FxBasicAppearance"). |
| *properties* |         | Node properties.                      |

Each property:

| Name | Type   | Description                                |
| ---- | ------ | ------------------------------------------ |
| type | uint16 | Property value type.                       |
| name | uint32 | FLCRC32 of property name (case-sensitive). |

* Read node properties until property type is 0.

Type is:

| Value | Name      | Animated |
| ----- | --------- | -------- |
| 0x001 | Boolean   | No       |
| 0x002 | Integer   | No       |
| 0x003 | Float     | No       |
| 0x103 | String    | No       |
| 0x104 | Blending  | No       |
| 0x105 | Transform | Yes      |
| 0x200 | Float     | Yes      |
| 0x201 | Color     | Yes      |
| 0x202 | Curve     | Yes      |

### Boolean (0x1 or 0x8001)

* Contains no data, true/false is determined by most significant bit, i.e. 0x1 is false and 0x8001 is true.

### Integer (0x2)

| Name  | Type   | Description                  |
| ----- | ------ | ---------------------------- |
| value | int32  | Signed integer number value. |

### Float (0x3)

| Name  | Type   | Description               |
| ----- | ------ | ------------------------- |
| value | float  | Float point number value. |

### String (0x103)

| Name  | Type    | Description     |
| ----- | ------- | --------------- |
| value | astring | String value.   |

### Color blending (0x104)

| Name   | Type   | Description                         |
| ------ | ------ | ----------------------------------- |
| source | uint32 | Blending source mode.               |
| target | uint32 | Blending target mode (destination). |

Possible values for source and target are:

| Value | Name                  | Factor                                                                     |
| ----- | --------------------- | -------------------------------------------------------------------------- |
| 1     | D3DBLEND_ZERO         | 0, 0, 0, 0                                                                 |
| 2     | D3DBLEND_ONE          | 1, 1, 1, 1                                                                 |
| 3     | D3DBLEND_SRCCOLOR     | R<sub>s</sub>, G<sub>s</sub>, B<sub>s</sub>, A<sub>s</sub>                 |
| 4     | D3DBLEND_INVSRCCOLOR  | 1 - R<sub>s</sub>, 1 - G<sub>s</sub>, 1 - B<sub>s</sub>, 1 - A<sub>s</sub> |
| 5     | D3DBLEND_SRCALPHA     | A<sub>s</sub>, A<sub>s</sub>, A<sub>s</sub>, A<sub>s</sub>                 |
| 6     | D3DBLEND_INVSRCALPHA  | 1 - A<sub>s</sub>, 1 - A<sub>s</sub>, 1 - A<sub>s</sub>, 1 - A<sub>s</sub> |
| 7     | D3DBLEND_DESTALPHA    | A<sub>d</sub>, A<sub>d</sub>, A<sub>d</sub>, A<sub>d</sub>                 |
| 8     | D3DBLEND_INVDESTALPHA | 1 - A<sub>d</sub>, 1 - A<sub>d</sub>, 1 - A<sub>d</sub>, 1 - A<sub>d</sub> |
| 9     | D3DBLEND_DESTCOLOR    | R<sub>d</sub>, G<sub>d</sub>, B<sub>d</sub>, A<sub>d</sub>                 |
| 10    | D3DBLEND_INVDESTCOLOR | 1 - R<sub>d</sub>, 1 - G<sub>d</sub>, 1 - B<sub>d</sub>, 1 - A<sub>d</sub> |
| 11    | D3DBLEND_SRCALPHASAT  | f, f, f, 1 (f = min(A<sub>s</sub>, 1 - A<sub>d</sub>))                     |

### Transform (0x105)

| Name      | Type     | Description            |
| --------- | -------- | ---------------------- |
| flags     | uint32   |                        |
| translate | curve[3] | Translation animation. |
| rotate    | curve[3] | Rotation animation.    |
| scale     | curve[3] | Scale animation.       |

* Curve type is animated curve structure.
* If most significant byte in flags is 0 skip translate/rotate/scale altogether.

### Animated float (0x200)

| Name          | Type  | Description                          |
| ------------- | ----- | ------------------------------------ |
| easing        | uint8 | Blending value easing type.          |
| keyframeCount | uint8 | Blending keyframe count (1 or more). |
| *keyframes*   |       | Blending keyframes.                  |

Each blending parameter keyframe:

| Name          | Type  | Description                       |
| ------------- | ----- | --------------------------------- |
| key           | float | Parameter key.                    |
| easing        | uint8 | Value easing type.                |
| keyframeCount | uint8 | Value keyframe count (1 or more). |
| *keyframes*   |       | Value keyframes.                  |

Each value keyframe:

| Name  | Type  | Description            |
| ----- | ----- | ---------------------- |
| key   | float | Keyframe key.          |
| value | float | Keyframe number value. |

* Typically animated float key is relative (0.0 to 1.0).

### Animated color (0x201)

| Name          | Type  | Description                          |
| ------------- | ----- | ------------------------------------ |
| easing        | uint8 | Blending value easing type.          |
| keyframeCount | uint8 | Blending keyframe count (1 or more). |
| *keyframes*   |       | Blending keyframes.                  |

Each blending parameter keyframe:

| Name          | Type  | Description                       |
| ------------- | ----- | --------------------------------- |
| key           | float | Parameter key.                    |
| easing        | uint8 | Value easing type.                |
| keyframeCount | uint8 | Value keyframe count (1 or more). |
| *keyframes*   |       | Value keyframes.                  |

Each value keyframe:

| Name  | Type     | Description                 |
| ----- | -------- | --------------------------- |
| key   | float    | Keyframe key.               |
| value | float[3] | Keyframe color value (RGB). |

* Typically animated color key is relative (0.0 to 1.0).

### Animated curve (0x202)

| Name          | Type  | Description                          |
| ------------- | ----- | ------------------------------------ |
| easing        | uint8 | Blending value easing type.          |
| keyframeCount | uint8 | Blending keyframe count (1 or more). |
| *keyframes*   |       |                                      |

Each blending parameter keyframe:

| Name          | Type   | Description                            |
| ------------- | ------ | -------------------------------------- |
| key           | float  | Parameter key.                         |
| defaultValue  | float  | Default value.                         |
| wrapFlags     | uint16 | Wrapping flags for out of bounds keys. |
| keyframeCount | uint16 | Keyframe count (0 or more).            |
| *keyframes*   |        | Value keyframes.                       |

Each value keyframe:

| Name     | Type  | Description              |
| -------- | ----- | ------------------------ |
| key      | float | Keyframe key.            |
| value    | float | Keyframe value.          |
| valueOut | float | Keyframe outgoing value. |
| valueIn  | float | Keyframe incoming value. |

* Typically animated curve key is time (seconds).

### Easing types

| Value | Description |
| ----- | ----------- |
| 1     | Linear.     |
| 2     | Ease in.    |
| 3     | Ease out.   |
| 4     | Ease both.  |
| 5     | Step.       |

### Wrap flags

Determine what happens for out of bounds values.

| Value  | Description    |
| ------ | -------------- |
| 0x0001 | Repeat before. |
| 0x0002 | Mirror before. |
| 0x0004 | Clamp before.  |
| 0x0010 | Repeat after.  |
| 0x0020 | Mirror after.  |
| 0x0040 | Clamp after.   |

---

### Evaluating animated curve value

```ts
/**
 * Evaluate curve value between keyframes.
 * @param w Transition state between keyframes
 * @param a Start keyframe value
 * @param b End keyframe value
 * @param d Delta between start and end keyframe keys
 * @returns 
 */
mixCurve(w: number, a: Vector3, b: Vector3, d: number) {
    const { x: ax, z: av } = a;
    const { x: bx, y: bv } = b;

    d *= .5;

    const a0 = ax + av * d;
    const b0 = bx - bv * d;

    const a1 = lerp(w, ax, a0);
    const b1 = lerp(w, a0, bx);

    const a2 = lerp(w, ax, b0);
    const b2 = lerp(w, b0, bx);

    const a3 = lerp(w, a1, a2);
    const b3 = lerp(w, b1, b2);

    return lerp(w, a3, b3);
}
```

* `lerp` is a generic linear interpolation function.