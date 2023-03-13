---
title: DFM
---

[Return to parent folder (File Structures)](../index.md)

## Overview

Deformable (character) models.

| Name      | Type    | Description                                                                                             |
| --------- | ------- | ------------------------------------------------------------------------------------------------------- |
| Fractions | float[] | LOD fractions from range defined in INIs, amount of floats indices how many Mesh* entries are expected. |

## Face groups

| Name             | Type     | Description                                           |
| ---------------- | -------- | ----------------------------------------------------- |
| Material_name    | string   | Name of material to use for this group of mesh faces. |
| Tristrip_indices | uint16[] | Vertex indices of triangles strip.                    |
| Face_indices     | uint16[] | Vertex indices of triangles array.                    |

* `Material_name` must point to material located in material library within same file.
* A face group may use either `Tristrip_indices` for triangle strip or `Face_indices` for simple triangle array.

## Geometry

| Name              | Type     | Description                                          |
| ----------------- | -------- | ---------------------------------------------------- |
| Point_indices     | uint32[] | Element indices for vertex coordinate points.        |
| UV0_indices       | uint32[] | Element indices for UV0 coordinate points.           |
| UV1_indices       | uint32[] | Element indices for UV1 coordiante points.           |
| Points            | float[]  | float[3] per vertex.                                 |
| Point_bone_first  | uint32[] | Start index in bone chains for vertex.               |
| Point_bone_count  | uint32[] | Number of bones affecting vertex.                    |
| Bone_id_chain     | uint32[] | Array of bone indices (max 4) affecting vertex.      |
| Bone_weight_chain | float[]  | Array of bone weights (max 4) affecting vertex.      |
| Vertex_normals    | float[]  | float[3] per vertex.                                 |
| UV0               | float[]  | float[2] per coordinate.                             |
| UV1               | float[]  | float[2] per coordinate.                             |
| Min_du            | float    | Minimum U delta.                                     |
| Max_du            | float    | Maximum U delta.                                     |
| Min_dv            | float    | Minimum V delta.                                     |
| Max_dv            | float    | Maximum V delta.                                     |
| Bone_X_to_U_scale | float    | Bone X position translation scales to Map 1 U.       |
| Bone_Y_to_V_scale | float    | Bone Y position translation scales to Map 1 V.       |
| UV_vertex_count   | uint32   | UV coordinate count.                                 |
| UV_bone_id        | uint32[] | Bone which affects selected vertices UV.             |
| UV_vertex_id      | uint32[] | Vertices affected by bone at UV_bone_id.             |
| UV_default_list   | float    | Default UV coordinates for vertices in UV_vertex_id? |
| UV_plane_distance | float    | Default 1?                                           |

* Bone indices per vertex are: `for (i = Point_bone_first[v], l = i + Point_bone_count[v]; i < l; i++) Bone_id_chain[i]`.
* Bone weights per vertex are: `for (i = Point_bone_first[v], l = i + Point_bone_count[v]; i < l; i++) Bone_weight_chain[i]`.

```
