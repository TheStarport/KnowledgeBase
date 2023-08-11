---
title: knowledgemap.ini
---

## Overview

This file contains a set of pairs of specific IDS resources and nicknames of things that can be visited (systems, zones, objects, factions). Whenever the specified IDS resource was displayed to the player the first time under specific conditions, the referenced systems and solar objects will be marked with specified `visit` flags. These conditions are (as far as known): Story mission text pop ups; random mission offer texts; rumor texts; knowledge offer texts; and potentially more not yet known conditions.

### [KnowledgeMapTable]

This block can be defined multiple times.

```ini
[KnowledgeMapTable]
map = INT, STRING, INT ;repeatable
```

| Parameter  | Information                                                                                           |
| ---------- | ----------------------------------------------------------------------------------------------------- |
| map        | The first entry is the IDS reference which triggers this knowledge entry. The second entry is the nickname of whatever shall be set as visited for the player. The third entry is the visit value added to the object: <br />**0:** The default value. Not visited. <br />**1:** Discovered (just basic base info; no info text for zones) <br />**2:** Unclear (seems only used by knowledgemap.ini). <br />**4:** Mineable Zone; Commodity list of a Base. <br />**8:** Looted Wreck; Zone info; Equipment list of a Base. <br />**16:** Wreck; Ship list of a Base. <br />**32:** Zone. <br />**64:** Faction. <br />**128:** Hidden, never appears on the navmap.<br /><br />For combinations you need to add the values together. E. g. if you want to show new players the location of a profitable mining zone by default set the zones visit parameter to 5 (1 for visited + 4 minable zone). |
