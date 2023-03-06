# Overview
This file handles configuration of the application's start-time settings and library loading.

## Syntax
Each of the following sections can only be written once, preferably in the order shown.

### [DACOM]
| Key            | Value   | Multiple | Remark                                                                            |
| -------------- | ------- | -------- | --------------------------------------------------------------------------------- |
| IgnoreDACOMEnv | boolean | no       |                                                                                   |
| DLLPath        | path    | no       | This path determines where dacom.dll looks for the libraries called in this file. |

### [Libraries]
DLL entries under this block are defined as a key with no value. DLLPath, as defined in the [DACOM] block is used to look for these files.

### [System]
Calls values from the Windows API. Entries under this block are defined as a key with no value.

### [Engine]
Calls values from the Windows API. Entries under this block are defined as a key with no value.

### [RenderManager]
Calls values from the Windows API. Entries under this block are defined as a key with no value.

### [TriMesh]
| Key       | Value   | Multiple | Remark |
| --------- | ------- | -------- | ------ |
| tristrips | boolean | no       |        |

### [RenderPipeline]
| Key                       | Value   | Multiple | Remark                                                                                                                                    |
| ------------------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| MGSDB                     | path    | no       | The name of the FLConfigDatabase file, which is used to map graphics cards settings for Freelancer                                        |
| DEVICE_GAMMA              | boolean | no       | Forces gamma control                                                                                                                      |
| TEXTURE_ALLOW_DXT         | boolean | no       | Forces dxtn support                                                                                                                       |
| ALPHAREF                  | integer | no       | d3drenderstate: default alpha ref                                                                                                         |
| ALPHATESTENABLE           | boolean | no       | d3drenderstate: basic alpha test                                                                                                          |
| ALPHAFUNC                 | integer | no       | d3drenderstate: D3DCMP_GREATER                                                                                                            |
| LOCALVIEWER               | boolean | no       | d3drenderstate: specular highlights                                                                                                       |
| zfunc                     | integer | no       | Default z compare func is D3DCMP_LESSEQUAL                                                                                                |
| FPU_PRESERVE              | boolean | no       | Should Direct3D save and restore the FPU state every time it needs to modify the FPU state.                                               |
| MULTITHREADED             | boolean | no       | Request multithread-safe behavior. This causes Direct3D to take the global critical section more frequently.                              |
| HARDWARE_VERTEXPROCESSING | boolean | no       | vertex processing flags are mutually exclusive. regardless of what the user asks for if the device cant support hw-tl the user gets sw-tl |
| MIXED_VERTEXPROCESSING    | boolean | no       |                                                                                                                                           |
| SOFTWARE_VERTEXPROCESSING | boolean | no       |                                                                                                                                           |
| LOCAKABLE_BACKBUFFER      | boolean | no       | Should the device allow the backbuffer to be locked                                                                                       |
| USE_SYSLOCK               | boolean | no       | Should resources (vb, ib, texture) take a windows wide critical lock when in use                                                          |
| HANDLE_SWAPLOSS           | boolean | no       |                                                                                                                                           |
| VIEWSPACE_LIGHTS          | boolean | no       |                                                                                                                                           |
| TEXTURE_CUBEMAPS          | boolean | no       |                                                                                                                                           |

### [TextureLibrary]
| Key                  | Value   | Multiple | Remark                                                                                                      |
| -------------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| TEXTURE_LOD_LOAD_MIN | integer | no       | While this would work for other apps, Freelancer's perfoptions.ini will override whatever setting this has. |

### [SoundManager]
| Key                      | Value   | Multiple | Remark                                           |
| ------------------------ | ------- | -------- | ------------------------------------------------ |
| speakerConfiguration     | integer | no       | set only if you want to override Windows setting |
| createAll2dInSoftware    | boolean | no       |                                                  |
| 3D_SW_Algorithm          | string  | no       |                                                  |
| use2DHW                  | integer | boolean  |                                                  |
| use3DHW                  | integer | boolean  |                                                  |
| maxSoundChannels         | integer | no       |                                                  |
| FORCE_FREQ_CONTROL_TO_SW | boolean | no       |                                                  |
| max3DPan                 | integer | no       |                                                  |

### [Alchemy]
| Key                           | Value   | Multiple | Remark                                                                  |
| ----------------------------- | ------- | -------- | ----------------------------------------------------------------------- |
| Alchemy.maxVertices           | integer | no       | Unused, overridden by particle pools                                    |
| Alchemy.maxIndices            | integer | no       | Unused, overridden by particle pools                                    |
| Alchemy.useMaterialBatcher    | boolean | no       |                                                                         |
| FxBasicAppearance.poolSize    | integer | no       | Maximum number of BasicAppearance particles rendered at any one time    |
| FxRectAppearance.poolSize     | integer | no       | Maximum number of RectAppearance particles rendered at any one time     |
| FxPerpAppearance.poolSize     | integer | no       | Maximum number of PerpAppearance particles rendered at any one time     |
| FxOrientedAppearance.poolSize | integer | no       | Maximum number of OrientedAppearance particles rendered at any one time |
| FLBeamAppearance.poolSize     | integer | no       | Maximum number of BeamAppearance particles rendered at any one time     |
| FLDustAppearance.poolSize     | integer | no       | Maximum number of DustAppearance particles rendered at any one time     |
| FxMeshAppearance.poolSize     | integer | no       | Maximum number of MeshAppearance particles rendered at any one time     |
| MeshAppearance.poolSize       | integer | no       | Maximum number of BasicAppearance particles rendered at any one time    |
| FxParticleAppearance.poolSize | integer | no       | Maximum number of ParticleAppearance particles rendered at any one time |

### [BatchedMaterials]
| Key  | Value  | Multiple | Remark |
| ---- | ------ | -------- | ------ |
| Type | string | no       |        |

### [MaterialMap]
| Key       | Value  | Multiple | Remark                                                                               |
| --------- | ------ | -------- | ------------------------------------------------------------------------------------ |
| DcDtEtTwo | string |          | Predefined material types                                                            |
| EcEtOcOt  | string |          | Predefined material types                                                            |
| DcDtEcEt  | string |          | Predefined material types                                                            |
| name      | string | yes      | All entries here appear to be regexp for a material name to override a material type |