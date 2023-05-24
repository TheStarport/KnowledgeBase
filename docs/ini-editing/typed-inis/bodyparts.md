---
title: bodyparts
---

## Overview
The bodyparts ini type indexes all character bodies: bodies, heads, hands and accessories. All parts are listed independently.

### Vanilla Examples

* `\DATA\CHARACTERSbodyparts.ini`

## Syntax
The bodyparts.ini file is arranged in a specific order: multiple Body sections, Head sections or Hand sections are defined after a DetailSwitchTable section, a PetalAnimations section and a Skeleton section. This means each body/head/hand defined by their respective section will also inherit the properties defined by the preceding DetailSwitchTable, PetalAnimations and Skeleton sections.

For instance, all bodies are defined in this way:
* DetailSwitchTable
* PetalAnimations
* Skeleton
* Body
* Body
* (...)
  
An Animations section MUST be located at the very beginning of the file.

### Animations
```ini
[Animations]
anim = PATH ;repeatable
```
| Parameter | Information                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------- |
| anim      | Refers to a ANM file. There can be multiple anim parameters, as many as there are ANM files to list. |

### DetailSwitchTable
```ini
[DetailSwitchTable]
switch = INT, FLOAT ;repeatable
```
| Parameter | Information                                    |
| --------- | ---------------------------------------------- |
| switch    | Default: 100, 999999 <br/> No further details. |

### PetalAnimations
```ini
[PetalAnimations]
anim = PATH ;repeatable
```
| Parameter | Information                                                                                                                |
| --------- | -------------------------------------------------------------------------------------------------------------------------- |
| anim      | Refers to a ANM file. There can be multiple anim parameters, as many as there are ANM files needed for the following parts |

### Skeleton
```ini
[Skeleton]
sex = STRING
```
| Parameters | Information                                                                    |
| ---------- | ------------------------------------------------------------------------------ |
| sex        | Can either be *male* or *female*, depending on the sex of the following parts. |

### Body | Head | RightHand | LeftHand
```ini
[Body|Head|RightHand|LeftHand]
nickname - STRING
mesh = PATH
```
| Parameters | Information                                                     |
| ---------- | --------------------------------------------------------------- |
| nickname   | See nickname for more information.                              |
| mesh       | Path to the DFM file holding the part's model and texture data. |

### Accessory
```ini
[Accessory]
nickname = STRING
mesh = PATH
hardpoint = STRING
body_hardpoint = STRING
```
| Parameter      | Information                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- |
| nickname       | See nickname for more information.                                                                                        |
| mesh           | Path to the DFM file holding the part's model and texture data.                                                           |
| hardpoint      | Hardpoint of the accessory model at which the accessory attaches to the parent model. See Hardpoint for more information. |
| body_hardpoint | Hardpoint of the parent model to which the accessory is attached. See Hardpoint for more information.                     |