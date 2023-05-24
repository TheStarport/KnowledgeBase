---
title: concave
---

## Overview

The concave ini type lists concave objects. This file appears to be unused.

### Vanilla Examples

* `DATA\concave.ini`

## Syntax

### [ConcaveObject]

```ini
[ConcaveObject]
filename = PATH
part = STRING ;optional, repeatable
```

| Parameter | Information                                                 |
| --------- | ----------------------------------------------------------- |
| filename  | The file name of the model (most likely a CMP or 3DB file). |
| part      | Lists the model's sub-parts. Repeated for each part.        |
