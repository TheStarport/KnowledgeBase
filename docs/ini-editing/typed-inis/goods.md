---
title: goods
---

:::caution

This page is a work in progress!

There may be missing, incomplete or incorrect information on this page as it's still being built! Take information here with a pinch of salt, and feel free to contribute and correct things!

:::

## Overview


### Vanilla Examples

* `DATA\EQUIPMENT\goods.ini`
* `DATA\EQUIPMENT\misc_good.ini`
* `DATA\EQUIPMENT\st_good.ini`
* `DATA\EQUIPMENT\weapon_good.ini`

## Syntax

`[Good]` blocks are repeatable.

### [Good]

```ini
[Good]
nickname = STRING
equipment = STRING
msg_id_prefix = STRING
category = STRING
price = INT
combinable = BOOL
good_sell_price = FLOAT
bad_buy_price = FLOAT
bad_sell_price = INT
good_buy_price = INT
shop_archetype = PATH
item_icon = PATH
jump_dist = INT
ship = STRING
hull = STRING
addon = STRING
free_ammo = STRING, INT
ids_name = INT
ids_info = INT
```

| Parameter       | Information                                                                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname        | The nickname of the good, this is typically shared with the `equipment` entry.                                                                                                                                                                  |
| equipment       | This corresponds to the [`equipment`](./equipment.md) entry this good relates to.                                                                                                                                                               |
| msg_id_prefix   | This refers to the audio line used when NPCs refer to the commodity.                                                                                                                                                                            |
| category        | This can be `commodity`, `equipment`, `ship` or `shiphull`. What the value actually does is untested.                                                                                                                                           |
| price           | The base price of the good.                                                                                                                                                                                                                     |
| combinable      | Denotes whether or not the item will create stacks when multiple items are acquired.                                                                                                                                                            |
| good_sell_price | This governs the color of the dot next to the commodity when selling, denoting the threshold from yellow to green.                                                                                                                              |
| bad_buy_price   | This governs the color of the dot next to the commodity when buying, denoting the threshold from yellow to red.                                                                                                                                 |
| bad_sell_price  | This governs the color of the dot next to the commodity when selling, denoting the threshold from yellow to red.                                                                                                                                |
| good_buy_price  | This governs the color of the dot next to the commodity when buying, denoting the threshold from yellow to green. If a commodity is at or above this multiplier, it will also appear on the base infocard as a commodity the base is demanding. |
| shop_archetype  | This value is read, but is not used.                                                                                                                                                                                                            |
| item_icon       | This denotes the path to the .3db icon file the good uses in dealers and in ship cargo.                                                                                                                                                         |
| jump_dist       | This value is read, but is not used.                                                                                                                                                                                                            |
| ship            | Refers to the ship associated with the good entry, if applicable.                                                                                                                                                                               |
| hull            | Refers to the `shiphull` good associated with a ship package.                                                                                                                                                                                   |
| addon           | Refers to additional gear included with a ship package. Typically this means lights, an engine, etc. The syntax here is `EQUIPMENT`, `HARDPOINT`, `QUANTITY`.                                                                                   |
| free_ammo       | Refers to free ammo included with the item. The ammo is in fact not free, and is added to the price of the item.                                                                                                                                |
| ids_name        | The string for this entry's name. This should typically match the associated `equipment` entry.                                                                                                                                                 |
| ids_info        | The string for this entry's infocard. This should typically match the associated `equipment` entry.                                                                                                                                             |
