---
title: lootprops.ini
---

## Overview

This file governs drop chance of specific gear and commodities if they are equipped on a given ship, as well as 'phantom loot' that can drop from anything. If an entry appears in this file, it needs the `lootable = true` flag.

## Syntax

There are two block types here. Any `mLootProps` blocks should be called before `PhantomLoot` ones.

### [mLootProps]

Gear listed here will only drop if it is actually equipped on a ship. Gear without the `lootable = true` flag defined but specified here may cause crashes.


```ini
[mLootProps]
nickname = string
drop_properties = FLOAT, INT, INT, INT, INT, INT
```

| Parameter       | Information                                                                                                                                                                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| nickname        | The name of the equipment as defined in [equipment](../../../typed-inis/equipment.md).                                                                                                                                                                                                                                                       |
| drop_properties | chance, min_worth, worth_mult, min, max1, max2 <br />**chance** is the percentage the drop will occur (i.e. divided by 100)<br />**min_worth** is the minimum worth you must have for the drop to occur<br />**worth_mult**, see below<br />**min** is the minimum number to drop<br />**max1** and **max2** are the maximum to drop |

### [PhantomLoot]
Gear listed here is able to drop from **any** NPC within the toughness range given.

```ini
[PhantomLoot]
nickname = STRING
toughness_range = INT, INT
percent_chance = FLOAT
num_to_drop = INT, INT
```

| Parameter       | Information                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------- |
| nickname        | The name of the equipment as defined in [equipment](../../../typed-inis/equipment.md).               |
| toughness_range | I think this is the toughness range the player is required to be in for these drops to occur |
| percent_chance  | Precentage chance to drop, 0-100                                                             |
| num_to_drop     | The quantity of the item to drop, with INTs here being minimum and maximum respectively      |

### Additional Information

A thread with a further breakdown of how `drop_properties` works can be found [here](https://the-starport.net/modules/newbb/viewtopic.php?start=0&topic_id=872&viewmode=flat&order=ASC&status=&mode=0).

The forumla can be broken down as follows: (Credit to Adoxa for this one)

```
count = (worth - min_worth) / worth_mult
if (count >= target_count)
  count = target_count
if (count + min > max1)
  count = max1
else
  count += min
if (count >= target_count)
  count = target_count
prob = chance * count
count = floor( prob )
prob -= count
if (rand < prob)
  ++count
if (count >= max2)
  count = max2
  ```
