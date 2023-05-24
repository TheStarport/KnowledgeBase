---
title: mouse.ini
---

## Overview

The mouse.ini file is used to define the characteristics of the different cursors within the game.

## Syntax

### [Texture]

```ini
[Texture]
file = PATH
name = STRING
```

| Parameter | Information                                                                         |
| --------- | ----------------------------------------------------------------------------------- |
| file      | Default: screens\cursor.TXM <br/><br/> The file used for all mouse cursor textures. |
| name      | Default: newcursors                                                                 |

### [Shape]

Multiple entries are allowed.

```ini
[Shape]
name = STRING
x = INT
y = INT
w = INT
h = INT
```

| Parameter | Information                                                                                                                  |
| --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| name      | The name of the shape.                                                                                                       |
| x         | Range: 0 to ∞ <br/><br/> The relative X axis position of the shape as it appears in the `[Texture]` *file = PATH* reference. |
| y         | Range: 0 to ∞ <br/><br/> The relative Y axis position of the shape as it appears in the `[Texture]` *file = PATH* reference. |
| w         | Range: 0 to ∞ <br/><br/> The width of the shape as it appears in the `[Texture]` *file = PATH* reference.                    |
| h         | Range: 0 to ∞ <br/><br/> The height of the shape as it appears in the `[Texture]` *file = PATH* reference.                   |

### [Cursor]

Multiple entries are allowed.

```ini
[Cursor]
nickname = STRING
anim = STRING, INT, INT
hotspot = INT, INT
blend = INT
spin = INT ;optional
scale = FLOAT
color = INT, INT, INT, INT ; optional
```

| Parameter | Information                                                                            |
| --------- | -------------------------------------------------------------------------------------- |
| nickname  | The internal name of this entry for use in the game                                    |
| anim      | Range: 0 to ∞ <br/><br/> References an entry from a previous `[Shape]` *name = STRING* |
| hotspot   | Range: 0 to ∞?                                                                         |
| blend     | Default: 4 <br/><br/> Range: 0 to ∞                                                    |
| spin      | Range: 0 to ∞ <br/><br/> Sets the spin speed of the cursor.                            |
| scale     | Range: 0 to ∞ <br/><br/> Most likely sets the scale of the cursor in-game.             |
| color     | Range: 0 to 255                                                                        |
