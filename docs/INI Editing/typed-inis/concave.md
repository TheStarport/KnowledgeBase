---
title: Concave.ini
---

[Return to parent folder (DATA)](../DATA)

## Overview

The concave.ini file lists concave objects.

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
