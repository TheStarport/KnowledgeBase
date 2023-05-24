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

| Parameter    | Information |
| ------------ | ----------- |
| group        | The name of the faction as defined in [faction_prop.ini](./faction_prop.ini.md). |
| event        | How significant a player's actions are for a given event. STRING options are `object_destruction`, `random_mission_success`, `random_mission_failure` and `random_mission_abortion`. The FLOAT defines an absolute change to the repuation of this faction when the event happens. Reputations range from a value of -1 to 1. |
| empathy_rate | Determines how an event affects the reputation with other factions. STRING is a faction name as defined in [faction_prop.ini](./faction_prop.ini.md), and the FLOAT is a multiplier based on the event's reputation change which then causes a second-hand change for this faction. |
