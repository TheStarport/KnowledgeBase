---
title: igraph
---

:::caution

This page is a work in progress!

There may be missing, incomplete or incorrect information on this page as it's still being built! Take information here with a pinch of salt, and feel free to contribute and correct things!

:::

## Overview

The purpose of igraphs is not fully known. Their main usage is found in [LightSource sections], where the *atten_curve* is defined as *DYNAMIC_DIRECTION*, one of the vanilla IGraphs.

### Vanilla Examples

* `DATA\igraph.ini`

## Syntax

### [IGraph]

```ini
[IGraph]
nickname = STRING
type = STRING
point = INT, FLOAT ; repeatable
```

| Parameter | Information                                                                                                                                                                                                                                                                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname  | See the Nickname Resources for more information.                                                                                                                                                                                                                                                                                                        |
| type      | Can either be *FLOAT* or *COLOR*. For the former, each point is a decimal value. For the latter, it is a large negative integer.                                                                                                                                                                                                                        |
| point     | Subvalues: *ID*, *VALUE* <br/><br/> Sets a point in the IGraph. *ID* is an integer that's incremented by 1 for each new value and starts at 1 in most cases (starts at 0 for one). *VALUE* can be a floating point value for *FLOAT* type, a large negative integer for *COLOR* type. It is possible the latter is a color stored in an unknown format. |
