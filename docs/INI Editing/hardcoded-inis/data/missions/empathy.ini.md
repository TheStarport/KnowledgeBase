---
title: empathy.ini
---

## Overview

This file determines how a player's actions will impact their reputation with a defined faction.

## Syntax

Multiple `[RepChangeEffects]` blocks can be defined.

### [RepChangeEffects]

```ini
[RepChangeEffects]
group = STRING
event = STRING, FLOAT
empathy_rate = STRING, FLOAT ;repeatable
```

| Parameter    | Information                                                                                                                                                                                                                       |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| group        | The name of the faction as defined in [faction_prop.ini](./faction_prop.ini.md)                                                                                                                                                   |
| event        | How significant a player's actions are for a given event. STRING options are `object_destruction`, `random_mission_success`, `random_mission_failure` and `random_mission_abortion`.                                              |
| empathy_rate | Determines how actions for other factions affect a player's reptuation with this one. STRING is a faction name as defined in [faction_prop.ini](./faction_prop.ini.md), and the FLOAT is a multiplier for second-hand rep change. |
