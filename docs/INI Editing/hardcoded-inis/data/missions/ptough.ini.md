---
title: ptough.ini
---

## Overview

This file determines player toughness scale and level based on monetary value. Testing or more information is required to determine what this file reads/is read by

## Syntax

Multiple `ptough_graph_pt` keys can be defined.

### [PlayerToughnessScale]

```ini
[PlayerToughnessScale]
ptough_graph_pt = INT, INT
```

| Parameter | Information                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------------------- |
| ptough_graph_pt | The first INT is the net worth value of the player, and the second the player's level which is being reached then. It's unknown how/if these values link to the `toughness` stat found in equipment ini blocks. |
