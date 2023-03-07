[Return to parent folder (DATA)](../DATA/index.md)

# Overview

The purpose of IGraphs is not fully known. Their main usage is found in [LightSource sections], where the *atten_curve* is defined as *DYNAMIC_DIRECTION*, one of the vanilla IGraphs.

## Syntax

### [IGraph]
```ini
[IGraph]
nickname = STRING
type = STRING
point = INT, FLOAT ; repeatable
```
| Parameter | Information |
|--|--|
| nickname  | See the Nickname Resources for more information. |
| type | Can either be *FLOAT* or *COLOR*. For the former, each point is a decimal value. For the latter, it is a large negative integer. |
| point | Subvalues: *ID*, *VALUE* <br/><br/> Sets a point in the IGraph. *ID* is an integer that's incremented by 1 for each new value and starts at 1 in most cases (starts at 0 for one). *VALUE* can be a floating point value for *FLOAT* type, a large negative integer for *COLOR* type. It is possible the latter is a color stored in an unknown format.
