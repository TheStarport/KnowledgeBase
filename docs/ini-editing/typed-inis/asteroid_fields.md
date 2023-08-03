---
title: asteroid_fields
---

:::caution

This page is a work in progress!

There may be missing, incomplete or incorrect information on this page as it's still being built! Take information here with a pinch of salt, and feel free to contribute and correct things!

:::

## Overview

These files govern the properties of asteroid field zones as defined in [system](system.md) files.

### Vanilla Examples

* `DATA\SOLAR\ASTEROIDS\br01_cornwall_rock_asteroid_field.ini`
* `DATA\SOLAR\ASTEROIDS\ku03_ohka_dust_field.ini`
* `DATA\SOLAR\ASTEROIDS\li01_badlands_asteroids.ini`

## Syntax

Not all blocks are required.

### TexturePanels

This is only required when a band or billboard is used within this file.

```ini
[TexturePanels]
file = PATH
```

| Parameter | Information                                                                                    |
| --------- | ---------------------------------------------------------------------------------------------- |
| file      | This path points to a set of 2d textures used for the band and billboard elements of the field. |

### Field

Asteroid fields are made out of repeating cubes in which static asteroids are set. This block can be omitted to spawn no static asteroids.

```ini
[Field]
cube_size = INT
fill_dist = INT
diffuse_color = INT, INT, INT
ambient_color = INT, INT, INT0
ambient_increase = INT, INT, INT
tint_field = INT, INT, INT
empty_cube_frequency = FLOAT
max_alpha = FLOAT
```

| Parameter            | Information                                                                        |
| -------------------- | ---------------------------------------------------------------------------------- |
| cube_size            | The size of a cube of asteroids in meters. |
| fill_dist            | The distance from which asteroids are being drawn in the game. |
| diffuse_color        |  |
| ambient_color        |  |
| ambient_increase     | RBG light value added to the existing ambient light when a player is in the field. |
| tint_field           |  | 
| empty_cube_frequency | A chance percentage between 0 and 1 by which cubes are spawned without asteroids inside. 1 meaning 100% of the cubes are empty. |
| max_alpha            | A value between 0 and 1. Seemingly used only for gas "asteroids". |

### Exclusion Zones

:::caution

Please note that defining an exclusion here without a corresponding zone in a system file will cause crashes. 

:::

Exclusion zones can be used to modify spawning of cubes, dynamic asteroids, and billboards within. Note that cubes are spawned along a globally defined grid, and exclusion zones must be big enough to touch a cube enough to affect it. Only entire cubes of an asteroid field can be modified – no individual asteroids.

```ini
[Exclusion Zones]
exclusion = STRING
exclude_billboards = INT
exclude_dynamic_asteroids = INT
empty_cube_frequency = FLOAT
billboard_count = INT
```

| Parameter          | Information                                                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| exclusion          | References the nickname of a zone defined in a system file. This zone will have no randomly generated asteroids spawned within it. Multiple `exclusion` parameters are allowed. |
| exclude_billboards | `1` for `true`. Relates directly to the previous `exclusion` defined. Determines whether or not the exclusion zone uses 'billboards', 2d asteroids that fade as the player approaches them. |
| exclude_dynamic_asteroids | `1` for `true`. Relates directly to the previous `exclusion` defined.  Disables spawning dynamic asteroids within this exclusion. |
| empty_cube_frequency | Overwrites the fields’ empty_cube_frequency. For normal exclusion zones this value is `1`. |
| billboard_count | Overwrites the fields’ `[AsteroidBillboards]` `count`. |

### Properties

```ini
[properties]
flag = STRING
```

| Parameter | Information |
| --------- | ----------- |
| flag      | This can be determined multiple times. Appears to apply a tag to the field, uncertain what this is used for. Possibly related to NPC pilots `field_targeting` |

### Cube

The cube defines asteroids which are being spawned as static objects within this field in repeating patterns. This block can be omitted.

The grid along which cubes are spawned is related to the global coordinate system. Cubes have an offset of half their cube size from the center point (meaning the inner corners of the central cubes touch each other at exactly 0 0 0).

```ini
[Cube]
xaxis_rotation = INT, INT, INT, INT
yaxis_rotation = INT, INT, INT, INT
zaxis_rotation = INT, INT, INT, INT
asteroid = STRING, FLOAT, FLOAT, FLOAT, INT, INT, INT, mine
```

| Parameter       | Information |
| --------------- | ----------- |
| xaxis_rotation  | Overrides default rotations of a cube along the x-axis (default `0, 90, 180, 270`). Accepts 1 to 4 values. This rotates the entire cube and its contents pseudo-randomly around these values. Combines with every other value of the other axis. |
| yaxis_rotation  | Overrides default rotations of a cube along the y-axis (default `0, 90, 180, 270`). Accepts 1 to 4 values. This rotates the entire cube and its contents pseudo-randomly around these values. Combines with every other value of the other axis. |
| zaxis_rotation  | Overrides default rotations of a cube along the z-axis (default `0, 90, 180, 270`). Accepts 1 to 4 values. This rotates the entire cube and its contents pseudo-randomly around these values. Combines with every other value of the other axis. |
| asteroid        | The STRING refers to an `[Asteroid]` or `[AsteroidMine]` entry. The following 3 FLOATS are the relative positioning within the cube. The range for a single cube is -1 to 1. Anything outside those values causes intersection with neighboring cubes. The last 3 INTs are the rotation of the asteroids in degrees. The ending `mine` is only required for `[AsteroidMine]`, possibly marking them as explosive.|

### Band

The band displays a visual polygon band around the zone from afar to give the impression of a big closed field. Can be omitted.

```ini
[Band]
render_parts = INT
shape = STRING
height = INT
offset_dist = INT
fade = FLOAT, FLOAT, FLOAT, FLOAT
texture_aspect = INT
color_shift = INT, INT, INT
ambient_intensity = INT
vert_increase = INT
cull_mode = INT
```

| Parameter         | Information |
| ----------------- | ----------- |
| render_parts      | Seems unused. |
| shape             | The texture used to render on the band. |
| height            | The height of the band. The texture scales up with it — effectively reducing the count of faces of the band the higher it is depending on the `texture_aspect` and `vert_increase`. |
| offset_dist       | An offset from the edge of the zone by which the band is moved inside the zone – or if negative value being moved outside. |
| fade              | Values relative to `height` defining the range between the band is visible. 1 equals `height`. The first two values define the range between which the band is faded out when coming close to it (fade-out end, fade out start). The last two values define the range between which the band fades out on distance (fade-out start, fade-out end). |
| texture_aspect    | Default `1`. Also determines the width of a single face of the band related to `height`. Higher values stretch the band-faces with the texture along the horizontal axis — effectively stretching the texture will reduce the count of faces the band is rendered with. |
| color_shift       |             |
| ambient_intensity |             |
| vert_increase     | Splits a single textured face of the band into multiple pieces. This effectively increases the smoothness of the band especially for higher `texture_aspect` or `height`. |
| cull_mode         | Defines which sides of the band are rendered. <br /><br />**0:** Inside and outside of the band are rendered.<br />**1:** Only the outside of the exclusion zone band is rendered.<br />**2:** Only the inside of the exclusion zone band is rendered. |

### ExclusionBand

The exclusion band works as normal bands, but specific for exclusion zones. These bands are visible always, not only from within the exclusion zone. Can be omitted. Note: Freelancer has a bug and lighting of exclusion zone bands is inverted; light coming from inside the exclusion zone is visible on the outside-facing band surfaces and vice versa.

```ini
[Band]
zone = STRING
render_parts = INT
shape = STRING
height = INT
offset_dist = INT
fade = INT, FLOAT, INT, INT
texture_aspect = INT
color_shift = INT, INT, INT
ambient_intensity = INT
vert_increase = INT
cull_mode = INT
```

| Parameter         | Information |
| ----------------- | ----------- |
| zone              | The zone name this band is rendered around. |
| render_parts      | Seems unused. |
| shape             | The texture used to render on the band. |
| height            | The height of the band. The texture scales up with it — effectively reducing the count of faces of the band the higher it is depending on the `texture_aspect` and `vert_increase`. |
| offset_dist       | An offset from the edge of the zone by which the band is moved inside the zone – or if negative value being moved outside. |
| fade              | Values relative to `height` defining the range between the band is visible. 1 equals `height`. The first two values define the range between which the band is faded out when coming close to it (fade-out end, fade out start). The last two values define the range between which the band fades out on distance (fade-out start, fade-out end). |
| texture_aspect    | Default `1`. Also determines the width of a single face of the band related to `height`. Higher values stretch the band-faces with the texture along the horizontal axis — effectively stretching the texture will reduce the count of faces the band is rendered with. |
| color_shift       |             |
| ambient_intensity |             |
| vert_increase     | Splits a single textured face of the band into multiple pieces. This effectively increases the smoothness of the band especially for higher `texture_aspect` or `height`. |
| cull_mode         | Defines which sides of the band are rendered. <br /><br />**0:** Inside and outside of the band are rendered.<br />**1:** Only the outside of the exclusion zone band is rendered.<br />**2:** Only the inside of the exclusion zone band is rendered. |

### AsteroidBillboards

Within a zone, cheap sprites with textures are shown to render asteroids further away. Can be omitted.

```ini
[AsteroidBillboards]
count = INT
start_dist = INT
fade_dist_percent = FLOAT
shape = mine_rock_tri
color_shift = FLOAT, FLOAT, FLOAT
ambient_intensity = INT
size = INT, INT
```

| Parameter         | Information |
| ----------------- | ----------- |
| count             |             |
| start_dist        |             |
| fade_dist_percent |             |
| shape             |             |
| color_shift       |             |
| ambient_intensity |             |
| size              | A range between two values which define the size billboards are rendered with. |

### DynamicAsteroids

Dynamic asteroids fly randomly across the inside of a zone. They are client-side and always spawn around the camera position. They can be used to create lootable areas. Can be omitted. Can be defined multiple times?

```ini
[DynamicAsteroids]
asteroid = STRING
count = INT
placement_radius = INT
placement_offset = INT
max_velocity = INT
max_angular_velocity = INT
color_shift = INT, INT, INT
```

| Parameter            | Information |
| -------------------- | ----------- |
| asteroid             |             |
| count                |             |
| placement_radius     |             |
| placement_offset     |             |
| max_velocity         |             |
| max_angular_velocity |             |
| color_shift          |             |


### LootableZone

Within lootable zones, any dynamic asteroid can drop commodities on destruction. This block can be defined multiple times for multiple lootable zones. Can also be entirely omitted.

```ini
[LootableZone]
zone = zone_bw03_img_cobalt_mining_area ; optional
asteroid_loot_container = STRING
asteroid_loot_commodity = STRING
dynamic_loot_container = STRING
dynamic_loot_commodity = STRING
asteroid_loot_count = INT, INT
dynamic_loot_count = INT, INT
asteroid_loot_difficulty = INT
dynamic_loot_difficulty = INT
```

| Parameter                | Information |
| ------------------------ | ----------- |
| zone                     | Name of a zone within the asteroid field to which this lootable zone is limited. If omitted, the lootable zone applies to the entire asteroid field. |
| asteroid_loot_container  | Name of a `[LootCrate]` created when something dropped from an asteroid. Seems unused. |
| asteroid_loot_commodity  | Name of a `[Commodity]` dropped within the `asteroid_loot_container`. Seems unused. |
| asteroid_loot_count      | Random commodity unit count from INT to INT units within the dropped loot container. Seems unused. |
| asteroid_loot_difficulty | Difficulty required to drop loot from an asteroid? Seems unused. |
| dynamic_loot_container   | Name of a `[LootCrate]` created when something dropped from a dynamic asteroid. Seems unused. |
| dynamic_loot_commodity   | Name of a `[Commodity]` dropped within the `asteroid_loot_container`. Seems unused. |
| dynamic_loot_count       | Random commodity unit count from INT to INT units within the dropped loot container. Seems unused. |
| dynamic_loot_difficulty  | Difficulty required to drop loot from a dynamic asteroid? Seems unused. |
