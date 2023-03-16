---
title: cameras.ini
---

## Overview

The cameras.ini file defines all cameras used in the game during flight.

## Syntax

Each of the following sections can only be written once, preferably in the order shown.

### [WinCamera]

```ini
[WinCamera] 
fovx = FLOAT
```

| Parameter | Information                                                                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fovx      | Default: 54.432. Determines the field of view (See [field of view](https://en.wikipedia.org/wiki/Field_of_view "w:Field_of_view")) of the camera for windows/GUI. |

### [CockpitCamera]

```ini
[CockpitCamera] 
fovx = FLOAT 
znear = 2.0
```

| Parameter | Information                                                                                                                                                    |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fovx      | Default: 70. Determines the field of view (See [field of view](https://en.wikipedia.org/wiki/Field_of_view "w:Field_of_view")) of the camera for cockpit view. |
| znear     | Default: 2                                                                                                                                                     |

### [ThirdPersonCamera]

```ini
[WinCamera]
fovx = FLOAT
```

| Parameter | Information                                                                                                                                                                |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fovx      | Default: 70. Determines the field of view (See [field of view](https://en.wikipedia.org/wiki/Field_of_view "w:Field_of_view")) of the camera for standard, in-flight view. |

### [TurretCamera]

```ini
[WinCamera] 
fovx = FLOAT
```

| Parameter | Information                                                                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fovx      | Default: 70. Determines the field of view (See [field of view](https://en.wikipedia.org/wiki/Field_of_view "w:Field_of_view")) of the camera for turret view. |

### [RearViewCamera]

```ini
[WinCamera] 
fovx = FLOAT
```

| Parameter | Information                                                                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fovx      | Default: 70. Determines the field of view (See [field of view](https://en.wikipedia.org/wiki/Field_of_view "w:Field_of_view")) of the camera for rear view. |

### [DeathCamera]

```ini
[WinCamera] 
fovx = FLOAT
```

| Parameter | Information                                                                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fovx      | Default: 70. Determines the field of view (See [field of view](https://en.wikipedia.org/wiki/Field_of_view "w:Field_of_view")) of the camera for death sequences. |
