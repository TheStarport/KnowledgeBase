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

Blocks should be called in the order below. Not all blocks are required.

### TexturePanels

```ini
[TexturePanels]
file = PATH
```

| Parameter | Information                                                                                    |
| --------- | ---------------------------------------------------------------------------------------------- |
| file      | This path points to a set of 2d textures used for the band and billboard elements of the field |

### Field

```ini
[Field]
cube_size = INT
fill_dist = INT
diffuse_color = INT, INT, INT
ambient_color = INT, INT, INT0
ambient_increase = INT, INT, INT
empty_cube_frequency = FLOAT
```

| Parameter            | Information                                                                        |
| -------------------- | ---------------------------------------------------------------------------------- |
| cube_size            |                                                                                    |
| fill_dist            |                                                                                    |
| diffuse_color        |                                                                                    |
| ambient_color        |                                                                                    |
| ambient_increase     | RBG light value added to the existing ambient light when a player is in the field. |
| empty_cube_frequency |                                                                                    |

### Exclusion Zones

:::caution

Please note that defining an exclusion here without a corresponding zone in a system file will cause crashes. 

:::

```ini
[Exclusion Zones]
exclusion = STRING
exclude_billboards = BOOL
```

| Parameter          | Information                                                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| exclusion          | References the nickname of a zone defined in a system file. This zone will have no randomly generated asteroids spawned within it. |
| exclude_billboards | Determines whether or not the exclusion zone uses 'billboards', 2d asteroids that fade as the player approaches them               |

### Properties

```ini
[properties]
flag = STRING
```

| Parameter | Information |
| --------- | ----------- |
| flag      | This can be determined multiple times. Appears to apply a tag to the field, uncertain what this is used for.           |

### Cube

```ini
[Cube]
asteroid = STRING, FLOAT, FLOAT, FLOAT, INT, INT, INT
```

| Parameter | Information |
| --------- | ----------- |
| asteroid  |             |

### Band

```ini
[Band]
render_parts = INT
shape = STRING
height = INT
offset_dist = INT
fade = INT, FLOAT, INT, INT
texture_aspect = INT
color_shift = INT, INT, INT
ambient_intensity = INT
vert_increase = INT
```

| Parameter         | Information |
| ----------------- | ----------- |
| render_parts      |             |
| shape             |             |
| height            |             |
| offset_dist       |             |
| fade              |             |
| texture_aspect    |             |
| color_shift       |             |
| ambient_intensity |             |
| vert_increase     |             |

### AsteroidBillboards

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
| size              |             |

### DynamicAsteroids

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