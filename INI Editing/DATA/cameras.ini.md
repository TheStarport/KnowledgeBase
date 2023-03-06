[Return to parent folder](..)

# cameras.ini 

The cameras.ini file defines all cameras used in the game during flight.

 ## Syntax 

Each of the following sections can only be written once, preferably in the order shown.

### WinCamera Section
```ini
[WinCamera] 
fovx = FLOAT
```
|Parameter|Information|
|--|--|
|fovx|Default: 54.432. Determines the field of view (See [field of view](https://en.wikipedia.org/wiki/Field_of_view "w:Field_of_view")) of the camera for windows/GUI.|

### CockpitCamera Section
```ini
[CockpitCamera] 
fovx = FLOAT 
znear = 2.0
```
|Parameter|Information|
|--|--|
|fovx|Default: 70. Determines the field of view (See [field of view](https://en.wikipedia.org/wiki/Field_of_view "w:Field_of_view")) of the camera for windows/GUI.|
|znear|Default: 2|

### ThirdPersonCamera Section
```ini
[WinCamera]
fovx = FLOAT
```
|Parameter|Information|
|--|--|
|fovx|Default: 70. Determines the field of view (See [field of view](https://en.wikipedia.org/wiki/Field_of_view "w:Field_of_view")) of the camera for windows/GUI.|

### TurretCamera Section
```ini
[WinCamera] 
fovx = FLOAT
```
|Parameter|Information|
|--|--|
|fovx|Default: 70. Determines the field of view (See [field of view](https://en.wikipedia.org/wiki/Field_of_view "w:Field_of_view")) of the camera for windows/GUI.|

### RearViewCamera Section
```ini
[WinCamera] 
fovx = FLOAT
```
|Parameter|Information|
|--|--|
|fovx|Default: 70. Determines the field of view (See [field of view](https://en.wikipedia.org/wiki/Field_of_view "w:Field_of_view")) of the camera for windows/GUI.|

### DeathCamera Section
```ini
[WinCamera] 
fovx = FLOAT
```
|Parameter|Information|
|--|--|
|fovx|Default: 70. Determines the field of view (See [field of view](https://en.wikipedia.org/wiki/Field_of_view "w:Field_of_view")) of the camera for windows/GUI.|
