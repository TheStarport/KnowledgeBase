---
title: ptough.ini
---

[Return to parent folder (MISSIONS)](../Missions/index.md)

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
| ptough_graph_pt  | The first INT appears to be a net worth value of some sort, and the second the player's level. It's unknown how/if these values link to the `toughness` stat found in equipment ini blocks.                                       |
