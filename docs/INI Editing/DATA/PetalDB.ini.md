---
title: PetalDB.ini
---

[Return to parent folder (DATA)](../DATA)

## Overview

The PetalDB.ini file is used to define the models in the game.

## Syntax

### [ObjectTable]

This is the only section within the file and it contains all entries.

```ini
[ObjectTable]
room = STRING, PATH ;repeatable
prop = STRING, PATH ;repeatable
cart = STRING, PATH ;repeatable
```

| Parameter                  | Information                                                                                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| *room* or *prop* or *cart* | The *STRING* value sets the internal nickname of the model. The *PATH* points to the model's location within the game files. Entries are repeatable. |
