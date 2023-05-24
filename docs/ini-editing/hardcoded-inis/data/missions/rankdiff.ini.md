---
title: rankdiff.ini
---

## Overview

This file seems to dictate SP story rank pacing. Uncertain of it's exact function. Some function is exposed in Match Job by adoxa, this page probably needs someone with a better understanding of the file to fill it out.

## Syntax

Multiple `rank_diff` keys can be defined.

### [RankDiffDB]

```ini
[RankDiffDB]
rank_diff = STRING, FLOAT
```

| Parameter | Information                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------ |
| rank_diff | The first STRING appears to be referring to a freetime slot between missions. The FLOAT may relate to `toughness`. |
