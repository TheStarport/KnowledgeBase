---
title: voice_properties.ini
---

## Overview

This file seems to refer to generic voicelines used by pilots in combat.

## Syntax

Multiple instances of `[mVoiceProp]` can be defined.

### [mVoiceProp]

```ini
[mVoiceProp]
voice = STRING
permutation_count = STRING, INT ;multiple
```

| Parameter         | Information                                                                                                                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| voice             | The nickname of the voice as defined in [voices](../../../typed-inis/voices.md)                                                                                                                                                         |
| permutation_count | The STRING appears to reference a `[Sound]` block defined in a voices.ini file. The INT is a permutation count, and may allow Freelancer to select randomly from a number of permutations for this voice from the relevant utf file. |
