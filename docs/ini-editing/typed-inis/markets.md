---
title: markets
---

:::caution

This page is a work in progress!

There may be missing, incomplete or incorrect information on this page as it's still being built! Take information here with a pinch of salt, and feel free to contribute and correct things!

:::

## Overview

These files determine what is sold and where.

### Vanilla Examples

* `DATA\EQUIPMENT\market_misc.ini`
* `DATA\EQUIPMENT\market_commodities.ini`
* `DATA\EQUIPMENT\market_ships.ini`

## Syntax

### [Loadout]

```ini
[BaseGood]
base = STRING
MarketGood = STRING, INT, FLOAT, INT, INT, BOOL, FLOAT ;MULTIPLE
```

| Parameter  | Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| base       | The nickname of the [Base](./bases.md) entry for this block.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| MarketGood | The values here are as follows: <br /> **STRING**: Equipment or Commodity nickname.<br /> **INT**: The Level required to purcahse the commodity. By default, this only works in SP.<br />**FLOAT**: The minimum reputation required to purchase the item.<br />**INT**: Minimum quantity, this value is unused on its own, but base sells this item only if both this and Maximum Quantity are positive.<br />**INT**: Maximum quantity, this value is unused on its own, but base sells this item only if both this and Minimum Quantity are positive. This value being positive is also responsible for game seeing the base as 'selling' the good on the base list.<br />**BOOL**: Whether or not the commodity displays in the scrolling bar in the colony news service. a value of 1 excludes it from this scroll, a value or 0 includes it.<br />**FLOAT**: Price multiplier applied to the item's value as listed in a [goods](./goods.md) entry. |
