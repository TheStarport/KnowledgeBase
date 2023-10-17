---
title: SUR
---

## Overview

Collision hitbox data for rigid models (.cmp and .3db).

It is important to understand the data contained in .sur is meaningless without compound model hierarchy from .cmp as individual part transforms from `Cmpnd` are needed to correctly arrange hitbox hulls.

Be ware some structures contain uncommon bit lengths for numbers.

### Header

| Name      | Type      | Description                  |
| --------- | --------- | ---------------------------- |
| signature | uint32    | Must be 0x73726576 ("vers"). |
| version   | float     | Must be 2.0.                 |
| *parts*   | *varying* |                              |

* There is no counter for parts, so read in loop until file ends.

### Part

| Name         | Type      | Description                     |
| ------------ | --------- | ------------------------------- |
| partId       | uint32    | FLCRC32 hash of object name.    |
| sectionCount | uint32    | Number of sections in the part. |
| *section*    | *varying* |                                 |

* PartId is FLCRC32 hash of `Object name` from parts in `Cmpnd` for multi-part model (.cmp) or 0x0 for single-part model (.3db).
* The exact order of section does not seem to matter but all Freelancer files follow the same order: non-fixed, extent, mesh, hardpoints.

#### Not-Fixed Section

| Name | Type   | Description                  |
| ---- | ------ | ---------------------------- |
| name | uint32 | Must be 0x64786621 ("!fxd"). |

* When present in a part it indicates this part is moveable.
* Root part for .cmp or null part for .3db should always have "not-fixed" section-flag.
* For other parts it should be present if associated compound object joint isn’t of fixed type (Rev, Pris, etc).
* This section has no further data, just own name.

#### Extent Section

| Name    | Type     | Description                  |
| ------- | -------- | ---------------------------- |
| name    | uint32   | Must be 0x73747865 ("exts"). |
| minimum | float[3] | Minimum point coordinates.   |
| maximum | float[3] | Maximum point coordinates.   |

* Bounding box for part, probably used for AABB comparison. Min/max from mesh points.

#### Hardpoints Section

| Name           | Type     | Description                     |
| -------------- | -------- | ------------------------------- |
| name           | uint32   | Must be 0x64697068 ("hpid").    |
| count          | uint32   | Number of hardpointId.          |
| *hardpointIds* | uint32[] | FLCRC32 hash of hardpoint name. |

* The list indicates which hardpoints will have their own hitbox overridden by provided hull matching the same ID. Otherwise attached objects will retain their own hitboxes.
* Vanilla models used boxes for HpWeapon hardpoints, hemispheres for HpTurret hardpoints, and some sort of cylinder for equipment hardpoints such as HpCM, HpThruster.
* Providing hull for HpMount and listing it as hardpoint will override shield bubble for ship.

#### Surfaces Section

Contains header, convex hulls, points array and BSP tree.

| Name      | Type      | Description                                                                                                                                     |
| --------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| name      | uint32    | Must be 0x66727573 ("surf").                                                                                                                    |
| size      | uint32    | Surface section byte length from this offset.                                                                                                   |
| center    | float[3]  | Bounding sphere center offset.                                                                                                                  |
| drag      | float[3]  | A linear drag vector. Must be bigger than 0. This does work together with the `mass` given to the part in `ini` files, e.g. `[CollisionGroup]`. |
| radius    | float     | Bounding sphere radius.                                                                                                                         |
| scale     | uint8     | Bounding sphere multiplier for hull points only.                                                                                                |
| treeEnd   | uint24    | Offset to end of BSP tree.                                                                                                                      |
| treeStart | uint32    | Offset to start of BSP tree.                                                                                                                    |
| unknown2  | float[3]  | Unknown vector.                                                                                                                                 |
| *hulls*   | *varying* | Convex hulls.                                                                                                                                   |
| *points*  | *varying* | Vertices buffer.                                                                                                                                |
| *nodes*   | *varying* | BSP nodes.                                                                                                                                      |

* Surface section size doesn’t include name byte length.
* Bounding sphere encompasses all hull points.
* Bounding sphere with radius * scale encompasses only non-hardpoint hull points.
* Read scale as unsigned byte and divide by 0xFA.
* BSP tree start and end offsets are relative to section offset.

Immediately after section header all convex hulls are listed.

| Name           | Type      | Description                                                             |
| -------------- | --------- | ----------------------------------------------------------------------- |
| offsetToPoints | uint32    | Offset to points block relative to itself.                              |
| partId         | uint32    | Object name hash or offset to node in BSP tree depending on type below. |
| type           | uint8     | Hull type.                                                              |
| refCount       | uint24    | Number of refs in DWORDs (stride of 4 bytes).                           |
| faceCount      | uint16    | Face count.                                                             |
| unknown        | uint16    | Padding?                                                                |
| *faces*        | *varying* |                                                                         |

* Read hulls until offset reaches offsetToPoints.
* Type 4 is regular hull (but is hardpoint if partID is listed in hpid section).
* Type 5 is wrap. Used for grouping multiple hulls, one per mesh. Not present if mesh contains only one hull.
* If hull is wrap its partID instead will be offset to node in BSP tree.
* Reference count is number of triangle point refs + hull header in DWORDs: (12 + triangle.count * 6) / 4.
* Convex hull will always have even number of triangles as simplex is made of four triangles, edge division splits adjacent faces in half while subdividing face replaces one for three.

A hull face is a triangle with three edges.

| Name              | Type     | Description          |
| ----------------- | -------- | -------------------- |
| faceIndex         | uint12   | This face index.     |
| oppositeFaceIndex | uint12   | Opposite face index. |
| unknown           | bit[7]   |                      |
| flag              | bit      | Face flag.           |
| *edges*           | int32[3] |                      |

* Read as many faces as listed in hull header.

Each hull face contains three edges:

| Name           | Type   | Description                                   |
| -------------- | ------ | --------------------------------------------- |
| pointIndex     | uint16 | Point index.                                  |
| adjacentOffset | int15  | DWORD offset to adjacent edge from this edge. |
| flag           | bit    | Edge flag.                                    |

* Face header contains face index (12 bits), opposite face index (12 bits), unknown (7 bits) and flag (1 bit).
* Face/edge flag bit is set on for wrap hulls and unset for any other hulls.
* Opposite index seem not used by game, according to Adoxa. Obj2sur defaults it 1 for all faces except first.
* Every edge is shared by two faces as hulls are not permitted to have holes.
* Every face is 4 DWORDs, adjacent edge offset is by amount of DWORDs from current edge DWORD offset.

Following hulls an array of points are listed:

| Name     | Type     | Description             |
| -------- | -------- | ----------------------- |
| position | float[3] | Point coordinates.      |
| partId   | uint32   | FLCRC32 hash of object. |

* Points are read until nodes start offset.
* Having PartID at every point seem to be redundant given each hull has PartID anyway but that's how it is.

Lastly surface section contains BSP tree where each node is:

| Name        | Type     | Description                     |
| ----------- | -------- | ------------------------------- |
| childOffset | int32    | Offset to right child.          |
| hullOffset  | int32    | Offset to hull.                 |
| center      | float[3] | Bounding box center.            |
| size        | float    | Bounding box uniform base size. |
| scale       | uint8[3] | Bounding box size axes scales.  |
| padding     | uint8    | Unused padding value.           |

* Tree nodes are read until nodes end offset in header.
* Child offset is relative to itself and is 0 for end points.
* Hull offset is relative to itself, negative number, and 0 for branch nodes.
* Read axis multiplier components as unsigned byte, divide 0xFA and scale bounding box base size by them.
* Meshes with only one hull will have no shrinkwrap and only one node.

---

Each hull is expected to be convex, otherwise unpredictable behavior may occur during collisions, ranging from hits not being registered to outright crashing the game. It would appear hulls in Freelancer files are generated by quickhull algorithm. Some modeling software provides tools to generate convex hulls from array of points using this algorithm: MassFX/PhysX in Autodesk 3Ds Max, Convex Tool in Blender, etc. It is recommended to keep number of vertices as few as possible and having them homogeneously spread across mesh seem improve stability, a good number to aim for is 30-40 vertices per convex mesh. Generally avoid running convex tool over actual visible mesh, instead create a much more simplified geometry over the visible mesh and use it instead. Even convex meshes may fail to work in Freelancer if they are too detailed or there are too many of them.

Typically mesh section will contain hull IDs matching that of the part containing mesh section, however additional hulls can be present for hardpoints and sometimes for fixed compound children too, resulting in duplicate hulls: a parent part having hulls for a child part (and those hulls IDs matching child part ID) while child having its own hulls as well. However this isn’t always the case, not every hitbox in Freelancer model seemingly created with this behavior, some do and others not. It could be accounted for different exporter versions producing these duplicates or perhaps something to do with destructible parts. An example of duplicate parent-child hulls can be found in li_elite.sur, Root part containing hulls for wings as well, despite the fact wing parts have hulls of their own.

In a part which has more than one hull a single special hull (type 5) will encase all regular hulls (type 4) and hulls/shrinkwraps of all fixed children the associated compound object has. It would seem to be a case of a hull generated over all points in point buffer of a mesh.

However shrinkwrap hull will not be present if mesh has only one hull and associated compound object doesn’t have fixed children.
