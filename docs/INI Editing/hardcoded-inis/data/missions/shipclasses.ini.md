---
title: shipclasses.ini
---

## Overview

This file defines shipclasses and levels that are called by [encounters](../../../typed-inis/encounters.md) and missions (In the form of levels). Classes appear to be almost entirely arbitrary, and can be thought of as a series of tags that help determine what is allowed to spawn in an encounter.

## Syntax

This file is rather straightforward. There is no particular order to the keys in each block.

### [ShipClass]

```ini
[ShipClass]
nickname = STRING
member = STRING ;repeatable
```

| Parameter | Information                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------------------- |
| nickname  | How the class is referred to by the game when called in other files.                                       |
| member    | Determines which ships from [npcships.ini](./npcships.ini.md) are members of this class using `npc_class`. |
