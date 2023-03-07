# Alchemy

Strings in ALE structures (astring) are NUL-terminated and prefixed by character count as uint16. Number of characters is always even regardless of actual string length: there will always be one or two NUL bytes at the end of string.

# Alchemy Effect Library
**ALEffectLib\ALEffectLib**

| Name        | Type   | Description           |
| ----------- | ------ | --------------------- |
| version     | float  | Version (1.0 or 1.1). |
| effectCount | uint32 | Effects count.        |

## Effect

| Name            | Type     | Description                             |
| --------------- | -------- | --------------------------------------- |
| name            | astring  | Effect name (ex.: "gf_jumpgate_rings"). |
| unused          | float[4] | Unused floats.                          |
| instanceCount   | uint32   | Node instances count.                   |
| *nodeInstances* |          | Node instances.                         |
| pairCount       | uint32   | Node pair count.                        |
| *nodePairs*     |          | Node pairs.                             |

Each node instance is:

| Name     | Type   | Description                                      |
| -------- | ------ | ------------------------------------------------ |
| flags    | uint32 | 1 for attachment node, 0 for instance node.      |
| name     | uint32 | Node's Node_Name value FLCRC32 (case-sensitive). |
| parentId | int32  | Node instance parent id (32768 for none).        |
| refId    | int32  | Node instance id.                                |

Each node pair is:

| Name     | Type  | Description                                     |
| -------- | ----- | ----------------------------------------------- |
| sourceId | int32 | Pair source node instance (emitter/appearance). |
| targetId | int32 | Pair target node instance (appearance/field).   |

* Unused floats appear only when version is 1.1f.
* CRC pointing to a node in node library CRC of "Node_Name" parameter.
* Node instance ids start with 1.
* Order of node instances in effect is used for draw order (important for non-additive blending appearances).

# Alchemy Node Library
**AlchemyNodeLibrary\AlchemyNodeLibrary**

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

### Transform (0x105)

| Name      | Type     | Description            |
| --------- | -------- | ---------------------- |
| type      | uint16   | Must be 0x0105.        |
| name      | uint32   | Property name.         |
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

# Common node types and properties

## FxNode
_Base class_

Does nothing, but can be used as a dummy to group multiple node instances for nested transformation.

| Name           | Type      | Animated | Description                                              |
| -------------- | --------- | -------- | -------------------------------------------------------- |
| Node_Name      | String    | No       | Node instances reference by CRC32 of this property value. |
| Node_LifeSpan  | Float     | No       | Global node lifespan. By default it is infinite.         |
| Node_Transform | Transform | Yes      | Spatial transformation.                                  |
| Node_ClassName | String    | No       | Unused.                                                  |

## FxEmitter
_Extends FxNode_

| Name                     | Type    | Animated | Description                                                         |
| ------------------------ | ------- | -------- | ------------------------------------------------------------------- |
| Emitter_LODCurve         | Float   | Yes      | Optimization.                                                       |
| Emitter_InitialParticles | Integer | No       | Number of particles spawned initially.                              |
| Emitter_Frequency        | Curve   | Yes      | Particle sawn rate/frequency (units per second).                    |
| Emitter_MaxParticles     | Curve   | Yes      | Maximum particles allowed.                                          |
| Emitter_EmitCount        | Curve   | Yes      | Unknown.                                                            |
| Emitter_InitialLifeSpan  | Curve   | Yes      | Particle lifespan assigned when generated.                          |
| Emitter_Pressure         | Curve   | Yes      | Initial velocity. Must be above 0 for some particles to be visible. |
| Emitter_VelocityApproach | Curve   | Yes      | Inherits velocity of parent object.                                 |

❗ Not to be used directly. Other emitters inherit from it and share these properties.

## FxCubeEmitter
_Extends FxEmitter_

Simple box emitter.

| Name                  | Type  | Animated | Description           |
| --------------------- | ----- | -------- | --------------------- |
| CubeEmitter_Width     | Curve | Yes      | Cube width.           |
| CubeEmitter_Height    | Curve | Yes      | Cube height.          |
| CubeEmitter_Depth     | Curve | Yes      | Cube depth.           |
| CubeEmitter_MinSpread | Curve | Yes      | Minimum spread angle. |
| CubeEmitter_MaxSpread | Curve | Yes      | Maximum spread angle. |

## FxSphereEmitter
_Extends FxEmitter_

Basic sphere. Non-uniform distribution: particles are spawned more frequently towards polars.

| Name                    | Type  | Animated | Description            |
| ----------------------- | ----- | -------- | ---------------------- |
| SphereEmitter_MinRadius | Curve | Yes      | Inner radius (hollow). |
| SphereEmitter_MaxRadius | Curve | Yes      | Outer radius.          |

## FxConeEmitter
_Extends FxEmitter_

Extended version of FxSphereEmitter for cone-like volume.

Also can be used to create rings by making min and max spread equal or in equal distance from 180 degrees. Difference between outer and inner radii is width.

| Name                  | Type  | Animated | Description            |
| --------------------- | ----- | -------- | ---------------------- |
| ConeEmitter_MinRadius | Curve | Yes      | Inner radius (hollow). |
| ConeEmitter_MaxRadius | Curve | Yes      | Outer radius.          |
| ConeEmitter_MinSpread | Curve | Yes      | Minimum spread angle.  |
| ConeEmitter_MaxSpread | Curve | Yes      | Maximum spread angle.  |

## FxAppearance
_Extends FxNode_

| Name                | Type  | Animated | Description |
| ------------------- | ----- | -------- | ----------- |
| Appearance_LODCurve | Float | Yes      |             |

Not to be used directly.

## FxBasicAppearance
_Extends FxAppearance_

| Name                       | Type     | Animated | Description                                             |
| -------------------------- | -------- | -------- | ------------------------------------------------------- |
| BasicApp_TriTexture        | Boolean  | No       | Use triangle mesh.                                      |
| BasicApp_QuadTexture       | Boolean  | No       | Use quad mesh.                                          |
| BasicApp_MotionBlur        | Boolean  | No       | Applies motion blur for non-textured appearances.       |
| BasicApp_Color             | Color    | Yes      | Color tint animation.                                   |
| BasicApp_Alpha             | Float    | Yes      | Color alpha animation.                                  |
| BasicApp_Size              | Float    | Yes      | Mesh size.                                              |
| BasicApp_HtoVAspect        | Float    | Yes      | Horizontal to vertical aspect ratio.                    |
| BasicApp_Rotate            | Float    | Yes      | Rotation animation. Ignored when MotionBlur is enabled. |
| BasicApp_TexName           | String   | No       | Texture name.                                           |
| BasicApp_BlendInfo         | Blending | No       | Color blending mode.                                    |
| BasicApp_UseCommonTexFrame | Boolean  | No       | Use common texture animation.                           |
| BasicApp_TexFrame          | Float    | Yes      | Individual particle texture animation.                  |
| BasicApp_CommonTexFrame    | Curve    | Yes      | Common node texture animation.                          |
| BasicApp_FlipTexU          | Boolean  | No       | Flip texture horizontally.                              |
| BasicApp_FlipTexV          | Boolean  | No       | Flip texture vertically.                                |

## FLDustAppearance
_Extends FxBasicAppearance_

❌ Parameters not used:
* BasicApp_TriTexture
* BasicApp_QuadTexture
* BasicApp_MotionBlur
* BasicApp_HtoVAspect
* BasicApp_Rotate

## FxOrientedAppearance
_Extends FxBasicAppearance_

| Name               | Type  | Animated | Description |
| ------------------ | ----- | -------- | ----------- |
| OrientedApp_Width  | Float | Yes      |             |
| OrientedApp_Height | Float | Yes      |             |

❗ Requires increasing its buffer pool size in Freelancer.ini to enable.

## FxRectAppearance
_Extends FxBasicAppearance_

| Name                     | Type    | Animated | Description |
| ------------------------ | ------- | -------- | ----------- |
| RectApp_CenterOnPos      | Boolean | No       |             |
| RectApp_ViewingAngleFade | Boolean | No       |             |
| RectApp_Scale            | Float   | Yes      |             |
| RectApp_Length           | Float   | Yes      |             |
| RectApp_Width            | Float   | Yes      |             |

❌ Parameters not used:
* BasicApp_TriTexture
* BasicApp_QuadTexture
* BasicApp_Size
* BasicApp_HtoVAspect
* BasicApp_Rotate

## FxPerpAppearance
_Extends FxRectAppearance_

| Name          | Type  | Animated | Description |
| ------------- | ----- | -------- | ----------- |
| BasicApp_Size | Float | Yes      |             |

❌ Parameters not used:
* RectApp_CenterOnPos
* RectApp_Scale
* RectApp_Length
* RectApp_Width

## FLBeamAppearance
_Extends FxRectAppearance_

| Name                       | Type    | Animated | Description |
| -------------------------- | ------- | -------- | ----------- |
| BasicApp_Size              | Float   | Yes      |             |
| BeamApp_DisablePlaceHolder | Boolean | No       |             |
| BeamApp_DupeFirstParticle  | Boolean | No       |             |
| BeamApp_LineAppearance     | Boolean | No       |             |

❌ Parameters not used:
* RectApp_CenterOnPos
* RectApp_ViewingAngleFade

## FxParticleAppearance
_Extends FxAppearance_

| Name                           | Type    | Animated | Description                                      |
| ------------------------------ | ------- | -------- | ------------------------------------------------ |
| ParticleApp_LifeName           | String  | No       | Refers to effect name displayed during lifespan. |
| ParticleApp_DeathName          | String  | No       | Refers to effect name displayed at the end.      |
| ParticleApp_UseDynamicRotation | Boolean | No       | Applies transformation from this node.           |
| ParticleApp_SmoothRotation     | Boolean | No       |                                                  |

## FxMeshAppearance
_Extends FxAppearance_

| Name                         | Type      | Animated | Description                            |
| ---------------------------- | --------- | -------- | -------------------------------------- |
| MeshApp_MeshId               | Integer   | No       | Unknown                                |
| MeshApp_MeshName             | String    | No       | Unknown                                |
| MeshApp_UseParticleTransform | Boolean   | No       | Enables individual particle transform. |
| MeshApp_ParticleTransform    | Transform | Yes      | Individual particle transform?         |

❗ Crashes the game. Unfinished implementation.