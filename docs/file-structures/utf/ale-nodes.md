---
title: Alchemy Nodes
---

## Overview

## Properties

These are the list of known properties used in alchemy node archetypes.

| Name                             | Type           | Description                                                         |
| -------------------------------- | -------------- | ------------------------------------------------------------------- |
| Node_Name                        | String         | Archetype name. Mandatory property.                                 |
| Node_LifeSpan                    | Float          | Node lifespan. Mandatory property.                                  |
| Node_Transform                   | Transform      | Node transform. Mandatory property.                                 |
| ~~Node_ClassName~~               | String         | Unused.                                                             |
| Emitter_LODCurve                 | Animated float | Emitter LOD bias curve.                                             |
| Emitter_InitialParticles         | Integer        | Number of particles spawned initially.                              |
| Emitter_Frequency                | Animated curve | Particle sawn rate/frequency (units per second).                    |
| Emitter_MaxParticles             | Animated curve | Maximum particles allowed.                                          |
| Emitter_EmitCount                | Animated curve | Unknown.                                                            |
| Emitter_InitialLifeSpan          | Animated curve | Particle lifespan assigned when generated.                          |
| Emitter_Pressure                 | Animated curve | Initial velocity. Must be above 0 for some particles to be visible. |
| Emitter_VelocityApproach         | Animated curve | Inherits velocity of parent object.                                 |
| CubeEmitter_Width                | Animated curve | FxCubeEmitter width.                                                |
| CubeEmitter_Height               | Animated curve | FxCubeEmitter height.                                               |
| CubeEmitter_Depth                | Animated curve | FxCubeEmitter depth.                                                |
| CubeEmitter_MinSpread            | Animated curve | FxCubeEmitter minimum spread angle.                                 |
| CubeEmitter_MaxSpread            | Animated curve | FxCubeEmitter maximum spread angle.                                 |
| SphereEmitter_MinRadius          | Animated curve | FxSphereEmitter inner radius (hollow).                              |
| SphereEmitter_MaxRadius          | Animated curve | FxSphereEmitter outer radius.                                       |
| ConeEmitter_MinRadius            | Animated curve | FxConeEmitter inner radius (hollow).                                |
| ConeEmitter_MaxRadius            | Animated curve | FxConeEmitter outer radius.                                         |
| ConeEmitter_MinSpread            | Animated curve | FxConeEmitter minimum spread angle.                                 |
| ConeEmitter_MaxSpread            | Animated curve | FxConeEmitter maximum spread angle.                                 |
| Appearance_LODCurve              | Animated float | Appearance LOD bias curve.                                          |
| BasicApp_TriTexture              | Boolean        | Use triangle mesh.                                                  |
| BasicApp_QuadTexture             | Boolean        | Use quad mesh.                                                      |
| BasicApp_MotionBlur              | Boolean        | Applies motion blur for non-textured appearances.                   |
| BasicApp_Color                   | Animated color | Color tint animation.                                               |
| BasicApp_Alpha                   | Animated float | Color alpha animation.                                              |
| BasicApp_Size                    | Animated float | Mesh size.                                                          |
| BasicApp_HtoVAspect              | Animated float | Horizontal to vertical aspect ratio.                                |
| BasicApp_Rotate                  | Animated float | Rotation animation. Ignored when MotionBlur is enabled.             |
| BasicApp_TexName                 | String         | Texture name.                                                       |
| BasicApp_BlendInfo               | Color blending | Color blending mode.                                                |
| BasicApp_UseCommonTexFrame       | Boolean        | Use common texture animation.                                       |
| BasicApp_TexFrame                | Animated float | Individual particle texture animation.                              |
| BasicApp_CommonTexFrame          | Animated curve | Common node texture animation.                                      |
| BasicApp_FlipTexU                | Boolean        | Flip texture horizontally.                                          |
| BasicApp_FlipTexV                | Boolean        | Flip texture vertically.                                            |
| OrientedApp_Width                | Animated float |                                                                     |
| OrientedApp_Height               | Animated float |                                                                     |
| RectApp_CenterOnPos              | Boolean        |                                                                     |
| RectApp_ViewingAngleFade         | Boolean        | Sprite fades out at steep viewing angle.                            |
| RectApp_Scale                    | Animated float |                                                                     |
| RectApp_Length                   | Animated float |                                                                     |
| RectApp_Width                    | Animated float |                                                                     |
| BeamApp_DisablePlaceHolder       | Boolean        |                                                                     |
| BeamApp_DupeFirstParticle        | Boolean        |                                                                     |
| BeamApp_LineAppearance           | Boolean        |                                                                     |
| ParticleApp_LifeName             | String         | Refers to effect name displayed during lifespan.                    |
| ParticleApp_DeathName            | String         | Refers to effect name displayed at the end.                         |
| ParticleApp_UseDynamicRotation   | Boolean        | Applies transformation from this node.                              |
| ParticleApp_SmoothRotation       | Boolean        |                                                                     |
| ~~MeshApp_MeshId~~               | Integer        | Unknown. Mesh FLCRC? Mesh group start index?                        |
| ~~MeshApp_MeshName~~             | String         | Unknown                                                             |
| ~~MeshApp_UseParticleTransform~~ | Boolean        | Enables individual particle transform?                              |
| ~~MeshApp_ParticleTransform~~    | Transform      | Individual particle transform?                                      |
| RadialField_Approach             | Animated curve |                                                                     |
| RadialField_Attenuation          | Animated float |                                                                     |
| RadialField_Magnitude            | Animated curve |                                                                     |
| RadialField_Radius               | Animated curve |                                                                     |
| CollideField_Height              | Animated curve |                                                                     |
| CollideField_Reflectivity        | Animated curve |                                                                     |
| CollideField_Width               | Animated curve |                                                                     |
| AirField_Approach                | Animated curve |                                                                     |
| AirField_Magnitude               | Animated curve |                                                                     |
| GravityField_Gravity             | Animated curve |                                                                     |
| TurbulenceField_Approach         | Animated curve |                                                                     |
| TurbulenceField_Magnitude        | Animated curve |                                                                     |
| 0x1C65B7B9                       | Boolean        | Duplicate of BeamApp_LineAppearance.                                |
| 0x0BA0B3BB                       | Transform      | Unknown.                                                            |
| 0x03503B61                       | Boolean        | Unknown.                                                            |
| 0x0ABE0402                       | Boolean        | Unknown.                                                            |
| 0xE63AA248                       | Animated curve | Unknown.                                                            |

* ❔ 0xE63AA248 type appears in some FLDustField nodes.
* ❔ 0x0BA0B3BB, 0x03503B61 and 0x0ABE0402 types appear in tail.app (FLBeamAppearance) of gf_tradelaneship01.ale.
* BasicApp_CommonTexFrame can animate textures with multiple sub-textures (i.e. texture count > 1) while BasicApp_TexFrame cannot (will default to last texture). Frame rate property is ignored and depends on playback is controlled by the curve (0.0 - first frame, 1.0 - last frame).

## Nodes

* "FL" prefix in some names is not a typo.

### FxNode

Can be used to group multiple nodes for transformations.

* Node_Name
* Node_LifeSpan
* Node_Transform

### FxCubeEmitter

Cube volume emitter.

* Node_Name
* Node_LifeSpan
* Node_Transform
* Emitter_LODCurve
* Emitter_InitialParticles
* Emitter_Frequency
* Emitter_MaxParticles
* Emitter_EmitCount
* Emitter_InitLifeSpan
* Emitter_Pressure
* Emitter_VelocityApproach
* CubeEmitter_Width
* CubeEmitter_Depth
* CubeEmitter_Height
* CubeEmitter_MinSpread
* CubeEmitter_MaxSpread

### FxSphereEmitter

Sphere volume emitter.

* Node_Name
* Node_LifeSpan
* Node_Transform
* Emitter_LODCurve
* Emitter_InitialParticles
* Emitter_Frequency
* Emitter_MaxParticles
* Emitter_EmitCount
* Emitter_InitLifeSpan
* Emitter_Pressure
* Emitter_VelocityApproach
* SphereEmitter_MinRadius
* SphereEmitter_MaxRadius

### FxConeEmitter

Cone volume emitter.

* Node_Name
* Node_LifeSpan
* Node_Transform
* Emitter_LODCurve
* Emitter_InitialParticles
* Emitter_Frequency
* Emitter_MaxParticles
* Emitter_EmitCount
* Emitter_InitLifeSpan
* Emitter_Pressure
* Emitter_VelocityApproach
* ConeEmitter_MinRadius
* ConeEmitter_MaxRadius
* ConeEmitter_MinSpread
* ConeEmitter_MaxSpread

### FxBasicAppearance

Simple camera-facing billboard sprite.

* Node_Name
* Node_LifeSpan
* Node_Transform
* Appearance_LODCurve
* BasicApp_TriTexture
* BasicApp_QuadTexture
* BasicApp_MotionBlur
* BasicApp_Color
* BasicApp_Alpha
* BasicApp_Size
* BasicApp_HToVAspect
* BasicApp_Rotate
* BasicApp_TexName
* BasicApp_BlendInfo
* BasicApp_UseCommonTexFrame
* BasicApp_TexFrame
* BasicApp_CommonTexFrame
* BasicApp_FlipTexU
* BasicApp_FlipTexV

### FxRectAppearance

* Node_Name
* Node_LifeSpan
* Node_Transform
* Appearance_LODCurve
* BasicApp_MotionBlur
* RectApp_CenterOnPos
* RectApp_ViewingAngleFade
* BasicApp_Color
* BasicApp_Alpha
* RectApp_Scale
* RectApp_Length
* RectApp_Width
* BasicApp_TexName
* BasicApp_BlendInfo
* BasicApp_UseCommonTexFrame
* BasicApp_TexFrame
* BasicApp_CommonTexFrame
* BasicApp_FlipTexU
* BasicApp_FlipTexV

### FxOrientedAppearance

Flat sprite with orientation unaffected by particle direction.

* Node_Name
* Node_LifeSpan
* Node_Transform
* Appearance_LODCurve
* RectApp_ViewingAngleFade
* OrientedApp_Width
* OrientedApp_Height
* BasicApp_Color
* BasicApp_Alpha
* BasicApp_TexName
* BasicApp_BlendInfo
* BasicApp_UseCommonTexFrame
* BasicApp_TexFrame
* BasicApp_CommonTexFrame
* BasicApp_FlipTexU
* BasicApp_FlipTexV

### FxPerpAppearance

Billboard sprite facing perpendicular to its particle direction.

* Node_Name
* Node_LifeSpan
* Node_Transform
* Appearance_LODCurve
* RectApp_ViewingAngleFade
* BasicApp_Color
* BasicApp_Alpha
* BasicApp_Size
* BasicApp_TexName
* BasicApp_BlendInfo
* BasicApp_UseCommonTexFrame
* BasicApp_TexFrame
* BasicApp_CommonTexFrame
* BasicApp_FlipTexU
* BasicApp_FlipTexV

### FLBeamAppearance

Crossing rect appearances forming line segments from particles.

* Node_Name
* Node_LifeSpan
* Node_Transform
* Appearance_LODCurve
* BasicApp_Color
* BasicApp_Alpha
* RectApp_Scale
* RectApp_Width
* BasicApp_TexName
* BasicApp_BlendInfo
* BasicApp_UseCommonTexFrame
* BasicApp_TexFrame
* BasicApp_CommonTexFrame
* BasicApp_FlipTexU
* BasicApp_FlipTexV
* BeamApp_DisablePlaceHolder
* BeamApp_DupeFirstParticle
* BeamApp_LineAppearance

### FLDustAppearance

Billboard sprite which changes transparency with camera motion: when idle sprites are transparent and gain opacity as camera either moves or rotates.

* Node_Name
* Node_LifeSpan
* Node_Transform
* BasicApp_Color
* BasicApp_Alpha
* BasicApp_Size
* BasicApp_TexName
* BasicApp_BlendInfo
* BasicApp_UseCommonTexFrame
* BasicApp_TexFrame
* BasicApp_CommonTexFrame
* BasicApp_FlipTexU
* BasicApp_FlipTexV

### FxParticleAppearance

Appearance which uses other effects in same .ale to visualize.
When alive particles will play effect referenced in `ParticleApp_LifeName` and play `ParticleApp_DeathName` once expired.
`ParticleApp_UseDynamicRotation` will apply rotation from particle orientation.
`ParticleApp_SmoothRotation` toggles spherical linear interpolation for rotation motion.

* Node_Name
* Node_LifeSpan
* Node_Transform
* ParticleApp_LifeName
* ParticleApp_DeathName
* ParticleApp_UseDynamicRotation
* ParticleApp_SmoothRotation

### FxMeshAppearance

❗ Does not work.

* Node_Name
* Node_LifeSpan
* Node_Transform
* MeshApp_MeshId
* MeshApp_MeshName
* MeshApp_UseParticleTransform
* MeshApp_ParticleTransform

### FxRadialField

Attractor/reflector field.

* Node_Name
* Node_LifeSpan
* Node_Transform
* RadialField_Radius
* RadialField_Attenuation
* RadialField_Magnitude
* RadialField_Approach

### FxGravityField

Accelerates particles. Use `Node_Transform` rotation to change direction.

* Node_Name
* Node_LifeSpan
* Node_Transform
* GravityField_Gravity

### FxCollideField

Creates flat surface reflection field.

* Node_Name
* Node_LifeSpan
* Node_Transform
* CollideField_Reflectivity
* CollideField_Width
* CollideField_Height

### FxTurbulenceField

Randomly shake particles.

* Node_Name
* Node_LifeSpan
* Node_Transform
* TurbulenceField_Magnitude
* TurbulenceField_Approach

### FxAirField

Overwrites particle velocity.

* Node_Name
* Node_LifeSpan
* Node_Transform
* AirField_Magnitude
* AirField_Approach

### FLDustField

Keeps particles visualized within its sphere volume only.

* Node_Name
* Node_LifeSpan
* Node_Transform
* SphereEmitter_MaxRadius

### FLBeamField

* Node_Name
* Node_LifeSpan
* Node_Transform
