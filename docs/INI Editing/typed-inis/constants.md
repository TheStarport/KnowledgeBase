---
title: constants
---

## Overview

The constants ini type keeps a lot of standard constants that are used throughout the game. Credits go to *indivisible* for finding the additional constants.

### Vanilla Examples

* `DATA\constants.ini`

## Syntax

Each of the following sections can only be written once, preferably in the order shown. If a parameter is shown as being optional, it means it is not in the file by default and is instead set by hardcoded values within the game's DLLs. Only add optional values as needed.

### [Constants]

```ini
[Constants]
COLLISION_DAMAGE_FACTOR = FLOAT
MUSIC_CROSS_FADE_DELAY = FLOAT
MUZZLE_CONE_ANGLE = FLOAT
PLAYER_COLLISION_GROUP_HIT_PTS_SCALE = FLOAT
PLAYER_ATTACHED_EQUIP_HIT_PTS_SCALE = FLOAT
MAX_PLAYER_AMMO = INT ;optional
FIRE_FAILED_DELAY = FLOAT ;optional
FIRE_FAILED_SOUND = STRING ;optional
SND_CARGO_JETTISONED = STRING ;optional
JETTISONED_CARGO_VELOCITY = FLOAT ;optional
LOOT_UNSEEN_RADIUS = FLOAT ;optional
LOOT_UNSEEN_LIFE_TIME = FLOAT ;optional
LOOT_OWNER_SAFE_TIME = FLOAT ;optional
```

| Parameter                            | Information                                                                                                                                                                                                                                                                                                           |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLLISION_DAMAGE_FACTOR              | Default: 0.5 (0.25 if removed) <br/><br/> Range: 0 to ∞ <br/><br/> Multiplier of an arbitrary collision damage value. The higher this is, the more damage players will get upon colliding with something. NPCs do not seem to be affected by this.                                                                    |
| MUSIC_CROSS_FADE_DELAY               | Default: 10 (30 if removed) <br/><br/> Range: 0 to ∞                                                                                                                                                                                                                                                                  | Time in seconds during which two musics will fade in and out, respectively. It's used in places such as when switching between battle music and space music.                    |
| MUZZLE_CONE_ANGLE                    | Default: 40 (90 if removed) <br/><br/> Range: 0 to 180 <br/><br/> Cone in degrees around which a gun may fire, despite not being able to directly aim at the target. This means projectiles will actually fire from a bent angle when seen from the cannon. Use *force_gun_ori* to override this when defining a Gun. |
| PLAYER_COLLISION_GROUP_HIT_PTS_SCALE | Default: 3 (1 if removed)                                                                                                                                                                                                                                                                                             |
| PLAYER_ATTACHED_EQUIP_HIT_PTS_SCALE  | Default: 5 (1 if removed)                                                                                                                                                                                                                                                                                             |
| MAX_PLAYER_AMMO                      | Default: 50 <br/><br/> Range: 0 to ∞ <br/><br/> Defines the maximum ammunition count a player can have for any ammunition type. Note that this is a per-type limit, so every different missile, mine, cruise disruptor, etc. will have its own limit. Does not affect any other cargo.                                |
| FIRE_FAILED_DELAY                    | Default: 1 <br/><br/> Range: 0 to ∞ <br/><br/> Delay after which the "fire failed" sound will be played. This is used mainly when cruising or in tradelanes to denote the impossibility to fire.                                                                                                                      |
| FIRE_FAILED_SOUND                    | Default: fire_dry <br/><br/> Nickname of the Sound to be played when firing is disabled.                                                                                                                                                                                                                              |
| SND_CARGO_JETTISONED                 | Default: cargo_jettison <br/><br/> Nickname of the Sound to be played when jettisoning cargo.                                                                                                                                                                                                                         |
| JETTISONED_CARGO_VELOCITY            | Default: 10 <br/><br/> Range: 0 to ∞ <br/><br/> Speed at which the cargo will be expelled from the ship.                                                                                                                                                                                                              |
| LOOT_UNSEEN_RADIUS                   | Default: 2500 <br/><br/> Range: 0 to ∞ <br/><br/> Distance over which loot is considered to be "unseen", starting the countdown from the value defined below.                                                                                                                                                         |
| LOOT_UNSEEN_LIFE_TIME                | Default: 60                                                                                                                                                                                                                                                                                                           | Range: 0 to ∞ <br/><br/> Time during which loot will persist despite being "unseen", that is over the distance set above. After this time has elapsed, the loot will disappear. |
| LOOT_OWNER_SAFE_TIME                 | Default: 1 <br/><br/> Range: 0 to ∞                                                                                                                                                                                                                                                                                   |

### [EngineEquipConsts]

```ini
[EngineEquipConsts]
CRUISE_DISRUPT_TIME = INT
MAX_DELTA_FX_THROTTLE = FLOAT
THROTTLE_STEADY_TIME = FLOAT
THROTTLE_ATTEN_MOD_RANGE = FLOAT
DELTA_THROTTLE_ATTEN_MOD_CHANGING = FLOAT
DELTA_THROTTLE_ATTEN_MOD_STEADY = FLOAT
CRUISE_STEADY_TIME = FLOAT
DELTA_CRUISE_ATTEN_MOD_STEADY = FLOAT
CRUISE_ATTEN_MOD_RANGE = FLOAT
MAX_ENGINE_FX_THROTTLE = ? ;optional
CRUISE_DRAG = FLOAT? ;optional
CRUISE_ACCEL_TIME = FLOAT ;optional
CRUISING_SPEED = INT ;optional
```

| Parameter                         | Information                                                                                                                                                               |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CRUISE_DISRUPT_TIME               | Default: 5 <br/><br/> Range: 0 to ∞ <br/><br/> Time during which cruising is disabled after being hit by a cruise disruptor.                                              |
| MAX_DELTA_FX_THROTTLE             | Default: 0.250000                                                                                                                                                         |
| THROTTLE_STEADY_TIME              | Default: 0.500000                                                                                                                                                         |
| THROTTLE\_ATTEN\_MOD_RANGE        | Default: 0.500000                                                                                                                                                         |
| THROTTLE_ATTEN_MOD_RANGE          | Default: 8.000000                                                                                                                                                         |
| DELTA_THROTTLE_ATTEN_MOD_CHANGING | Default: 8.000000                                                                                                                                                         |
| DELTA_THROTTLE_ATTEN_MOD_STEADY   | Default: -1.000000                                                                                                                                                        |
| CRUISE_STEADY_TIME                | Default: 2.000000                                                                                                                                                         |
| DELTA_CRUISE_ATTEN_MOD_STEADY     | Default: -1.000000                                                                                                                                                        |
| CRUISE_ATTEN_MOD_RANGE            | Default: 8.000000                                                                                                                                                         |
| MAX_ENGINE_FX_THROTTLE            | Unknown                                                                                                                                                                   |
| CRUISE_DRAG                       | Default: 1 <br/><br/> Range: -128 to 128 (a short) <br/><br/> Defines the speed-change in cruse mode. Negative values cause a higher sloth, high values a very low sloth. |
| CRUISE_ACCEL_TIME                 | Range: 0 to ∞                                                                                                                                                             | Time during which a ship will accelerate to cruise speed. No matter what the cruising speed is set at, it will always take the time set here to reach it. |
| CRUISING_SPEED                    | Range: 0 to ∞ <br/><br/> Speed when in cruise mode. In order to show the true speed in the game (by default it always shows 300), editing freelancer.exe is necessary.    |

### [ShieldEquipConsts]

```ini
[ShieldEquipConsts]
HULL_DAMAGE_FACTOR = FLOAT
```

| Parameter          | Information                                                                                                                                                                                                                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HULL_DAMAGE_FACTOR | Default: 0.500000 <br/><br/> Range: 0 to ∞ <br/><br/> Multiplier of the hull damage that will be applied to shields. This means that a weapon will actually do `energy_damage = energy_damage + hull_damage * HULL_DAMAGE_FACTOR` with the *energy_damage* value being set in the weapon's section. |

### [PhySysConsts]

```ini
[PhySysConsts]
MATERIAL_FRICTION = FLOAT
MATERIAL_ELASTICITY = FLOAT
DEFAULT_LINEAR_DAMPING = FLOAT
DEFAULT_ANGULAR_DAMPING = FLOAT, FLOAT, FLOAT
RC_MAX_DELTA_ORIENTATION = ? ;optional
RC_MAX_DELTA_POSITION = ? ;optional
GOLEM_ANGULAR_DAMP_FACTOR = ? ;optional
GOLEM_TORQUE_FACTOR = ? ;optional
GOLEM_DAMP_FACTOR = ? ;optional
GOLEM_FORCE_FACTOR = ? ;optional
GOLEM_MAX_TORQUE = ? ;optional
GOLEM_MAX_TRANSLATION_FORCE = ? ;optional
GOLEM_DELTA_ORIENTATION = ? ;optional
GOLEM_MAX_DELTA_POSITION = ? ;optional
GOLEM_CHILD_ANGULAR_DAMP = ? ;optional
GOLEM_CHILD_LINEAR_DAMP = ? ;optional
GOLEM_CHILD_MASS = ? ;optional
RMGR_LOOK_AHEAD_MIN_SECONDS_INTRA = ? ;optional
RMGR_LOOK_AHEAD_MAX_DISTANCE_INTRA = ? ;optional
RMGR_LOOK_AHEAD_MIN_DISTANCE_INTRA = ? ;optional
RMGR_LOOK_AHEAD_MAX_RADIUS_INTRA = ? ; optional
RMGR_LOOK_AHEAD_TIME_INTRA = ? ;optional
RMGR_LOOK_AHEAD_MIN_SECONDS_WORLD = ? ;optional
RMGR_LOOK_AHEAD_MAX_DISTANCE_WORLD = ? ;optional
RMGR_LOOK_AHEAD_MIN_DISTANCE_WORLD = ? ;optional
RMGR_LOOK_AHEAD_MAX_RADIUS_WORLD = ? ;optional
RMGR_LOOK_AHEAD_TIME_WORLD = ? ;optional
MIN_TIME_BETWEEN_COLLISIONS = ? ;optional
ANOM_LIMITS_MAX_ANGULAR_VELOCITY_PER_PSI = ? ;optional
ANOM_LIMITS_MAX_VELOCITY = ? ;optional
MAX_SPAWNED_MINDIST_COUNT = ? ;optional
PHYSICAL_SIM_RATE = ? ;optional
```

| Parameter               | Information                           |
| ----------------------- | ------------------------------------- |
| MATERIAL_FRICTION       | Default: 0.100000                     |
| MATERIAL_ELASTICITY     | Default: 0.900000                     |
| DEFAULT_LINEAR_DAMPING  | Default: 0.500000                     |
| DEFAULT_ANGULAR_DAMPING | Default: 0.200000, 0.200000, 0.200000 |

### [CommConsts]

```ini
[CommConsts]
COMM_PLAYER_FAR_DIST = FLOAT
COMM_PLAYER_FAR_DIST_ATTEN = FLOAT
CHATTER_MAX_DIST = FLOAT
CHATTER_MAX_DIST_ATTEN = FLOAT
CHATTER_START_ATTEN = FLOAT
COMM_CONFLICT_PRIORITY_CUTOFF = INT
WALLA_MAX_DIST = FLOAT
WALLA_MAX_DIST_ATTEN = FLOAT
WALLA_START_ATTEN = FLOAT
WALLA_PRIORITY_CUTOFF = INT
```

| Parameter                     | Information                                                                                                                                          |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| COMM_PLAYER_FAR_DIST          | Default: 6000.000000 <br/><br/> Range: 0 to ∞ <br/><br/> Distance from which a player is considered to be "far" from a communications point of view. |
| COMM_PLAYER_FAR_ATTEN         | Default: 0.000000                                                                                                                                    |
| CHATTER_MAX_DIST              | Default: 3500.000000 <br/><br/> Range: 0 to ∞ <br/><br/> Distance over which players will not hear comms chatter from NPCs.                          |
| CHATTER_MAX_DIST_ATTEN        | Default: -16.000000                                                                                                                                  |
| COMM_CONFLICT_PRIORITY_CUTOFF | Default: -3                                                                                                                                          |
| WALLA_MAX_DIST                | Default: 3500.000000                                                                                                                                 |
| WALLA_MAX_DIST_ATTEN          | Default: -24.000000                                                                                                                                  |
| WALLA_START_ATTEN             | Default: -8.000000                                                                                                                                   |
| WALLA_PRIORITY_CUTOFF         | Default: -3                                                                                                                                          |

### [AsteroidConsts]

```ini
[AsteroidConsts]
MAX_ASTEROID_LOOT_DAMAGE = FLOAT
MAX_LOOT_PER_ASTEROID = INT
```

| Parameter                | Information                                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| MAX_ASTEROID_LOOT_DAMAGE | Default: 20000.000000 <br/><br/> Range: 0 to ∞                                                                               |
| MAX_LOOT_PER_ASTEROID    | Default: 3 <br/><br/> Range: 0 to ∞ <br/><br/> Maximum loot count that can be found in a single asteroid (upon destruction). |

### [ThrusterEquipConsts]

```ini

[ThrusterEquipConsts] ;optional
OUTSIDE_CONE_ATTENUATION = ? ;optional
OUTSIDE_CONE_ANGLE = ? ;optional
INSIDE_CONE_ANGLE = ? ;optional
MIN_VOLUME_FORCE = ? ;optional
MAX_VOLUME_FORCE = ? ;optional
EXTERIOR_SOUND_NAME = STRING ;optional
INTERIOR_SOUND_NAME = STRING ;optional
```

| Parameter                | Information |
| ------------------------ | ----------- |
| OUTSIDE_CONE_ATTENUATION | Unknown     |
| OUTSIDE_CONE_ANGLE       | Unknown     |
| INSIDE_CONE_ANGLE        | Unknown     |
| MIN_VOLUME_FORCE         | Unknown     |
| MAX_VOLUME_FORCE         | Unknown     |
| EXTERIOR_SOUND_NAME      | Unknown     |
| INTERIOR_SOUND_NAME      | Unknown     |
