---
title: specific_npc.ini
---

## Overview

This file determines attributes of specific NPCs found in the single player campaign (bars, scenes, etc). Most of these seem to be referenced in MISSION folder inis.

## Syntax

### [NPC]

```ini
[NPC]
nickname = STRING
base_appr = STRING
individual_name = INT
affiliation = STRING ;optional
voice = STRING ;optional
```

| Parameter       | Information                                                                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname        | How the NPC is referred to in other blocks and game files.                                                                                                                              |
| base_appr       | The appearance of the NPC as defined in [costumes](../../../typed-inis/costumes.md).                                                                                                 |
| individual_name | References a string. This is used in cases where an NPC appears in a bar and is interactable. This field appears to be required, but can be given a string of 1 or 0 if it's not needed |
| affiliation     | This references a faction as defined in [faction_prop.ini](./faction_prop.ini.md)                                                                                                       |
| voice           | References the voice used by the NPC as defined in [voice_properties.ini](./voice_properties.ini.md)                                                                                    |
