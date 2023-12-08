---
title: universe
---

:::caution

This page is a work in progress!

There may be missing, incomplete or incorrect information on this page as it's still being built! Take information here with a pinch of salt, and feel free to contribute and correct things!

:::

## Overview


### Vanilla Examples

* `DATA\UNIVERSE\universe.ini`

## Syntax
Entries should be written in the order they are presented here. `[Base]` entries should be loaded before their corresponding `[System]` ones, as Freelancer will look for the bases in a system when it's loaded on launch and will throw a `get_base() failed` error if it's not already been defined.

### Time

```ini
[Time]
seconds_per_day = INT
```

| Parameter | Information                                                                                                                                                                |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Time      | This value does not appear to be used. It's speculated that day/night cycles were planned at some point in Freelancer's development and this value is a lefover from that. |

### Base

```ini
[Base]
nickname = STRING 
system = STRING
strid_name = INT 
file = PATH
autosave_forbidden = BOOL ;optional
BGCS_base_run_by = STRING
terrain_tiny = STRING ;optional
terrain_sml = STRING ;optional
terrain_mdm = STRING ;optional
terrain_lrg = STRING ;optional
terrain_dyna_01 = STRING ;optional
terrain_dyna_02 = STRING ;optional
ship_sml_01 = STRING ;optional
ship_sml_02 = STRING ;optional
ship_sml_03 = STRING ;optional
ship_mdm_01 = STRING ;optional
ship_mdm_02 = STRING ;optional
ship_mdm_03 = STRING ;optional
ship_lrg_01 = STRING ;optional
ship_lrg_02 = STRING ;optional
ship_lrg_03 = STRING ;optional
```

| Parameter          | Information                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname           | The nickname of the base as it's referred to by [mbases](../hardcoded-inis/data/missions/mbases.ini.md) and [system files](./system.md).                                  |
| system             | The nickname of the system the base is located in.                                                                                                                        |
| strid_name         | The string ID name of the base.                                                                                                                                           |
| autosave_forbidden | Prevents autosaving on the base. This appears to be used in story bases players are not meant to return to.                                                               |
| file               | The path to the [bases file](./bases.md) used by this base.                                                                                                               |
| BGCS_base_run_by   | Used for audio when referencing the faction that owns the base. Uses [W02bF codes](https://the-starport.net/freelancer/forum/viewtopic.php?post_id=58554#forumpost58554). |
| terrain_tiny       | Determines the model used by the `$terrain_tiny` variable in `ambi_terrain_static` thorn scripts used for this base.                                                      |
| terrain_sml        | Determines the model used by the `$terrain_sml` variable in `ambi_terrain_static` thorn scripts used for this base.                                                       |
| terrain_mdm        | Determines the model used by the `$terrain_mdm` variable in `ambi_terrain_static` thorn scripts used for this base.                                                       |
| terrain_lrg        | Determines the model used by the `$terrain_lrg` variable in `ambi_terrain_static` thorn scripts used for this base.                                                       |
| terrain_dyna_01    | Determines the model used by the `$terrain_dyna_01` variable in `ambi_terrain_dynamic` thorn scripts used for this base.                                                  |
| terrain_dyna_02    | Determines the model used by the `$terrain_dyna_02` variable in `ambi_terrain_dynamic` thorn scripts used for this base.                                                  |
| ship_sml_01        | Determines the `$ship_sml_01` ship model used in the base's traffic thorn script. This is not used in vanilla but functions as expected.                                  |
| ship_sml_02        | Determines the `$ship_sml_02` ship model used in the base's traffic thorn script. This is not used in vanilla but functions as expected.                                  |
| ship_sml_03        | Determines the `$ship_sml_03` ship model used in the base's traffic thorn script. This is not used in vanilla but functions as expected.                                  |
| ship_mdm_01        | Determines the `$ship_mdm_01` ship model used in the base's traffic thorn script. This is not used in vanilla but functions as expected.                                  |
| ship_mdm_02        | Determines the `$ship_mdm_02` ship model used in the base's traffic thorn script. This is not used in vanilla but functions as expected.                                  |
| ship_mdm_03        | Determines the `$ship_mdm_03` ship model used in the base's traffic thorn script. This is not used in vanilla but functions as expected.                                  |
| ship_lrg_01        | Determines the `$ship_lrg_01` ship model used in the base's traffic thorn script. This is not used in vanilla but functions as expected.                                  |
| ship_lrg_02        | Determines the `$ship_lrg_02` ship model used in the base's traffic thorn script. This is not used in vanilla but functions as expected.                                  |
| ship_lrg_03        | Determines the `$ship_lrg_03` ship model used in the base's traffic thorn script. This is not used in vanilla but functions as expected.                                  |

### System

```ini
[system]
nickname = STRING
file = PATH
pos = FLOAT, FLOAT
msg_id_prefix = STRING
visit = INT ;optional
strid_name = INT ;optional
ids_info = INT ;optional
NavMapScale = FLOAT ;optional
```

| Parameter     | Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nickname      | The nickname of the system, referenced elsewhere in universe, as well as in [mbases.ini](../hardcoded-inis/data/missions/mbases.ini.md) and [system](./system.md) files.                                                                                                                                                                                                                                                                                                                                  |
| file          | The path of the [system](./system.md) file this system uses.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| pos           | The X and Y coordinates of the system on the universe map.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| msg_id_prefix | The [voice](./voices.md) line NPCs use when referring to this system.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| visit         | Controls the navmap display of the system: <br /><br />**0:** The default value. Not visited. <br />**1:** Visited, will show on the navamp list even if the system has not been visited. <br />**2:** Unused. <br />**4:** Mineable Zone. <br />**8:** 'Actively' visited. This seems to be used for looted wrecks. <br />**16:** Wreck. <br />**32:** Zone. <br />**64:** Faction. <br />**128:** Hidden, never appears on the navmap.<br /><br />For combinations you need to add the values together. |
| strid_name    | The string ID name of the system                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ids_info      | The string ID description of the system                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| NavMapScale   | The scale used for the Nav Map. Values used in vanilla seem to be between 1.5 and 4                                                                                                                                                                                                                                                                                                                                                                                                                       |
