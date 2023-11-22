---
title: lightanim.ini
---

## Overview

This file defines lighting animations typically used by weapons and equipment.

### Vanilla Examples

* `DATA\FX\lightanim.ini`

## Syntax

Multiples of each block may be defined.

### [LightAnim]

```ini
[LightAnim]
name = STRING
frame = FLOAT, FLOAT, FLOAT, FLOAT, FLOAT ;multiples allowed
```

| Parameter | Information                                                                                                    |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| name      | How this entry is referred to in other files.                                                                  |
| frame     | The floats here correspond to time in seconds, Red, Green, Blue and range of the lighting effect respectively. |


