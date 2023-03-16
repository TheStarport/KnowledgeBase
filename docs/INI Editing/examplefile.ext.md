---
title: Example File
description: An example of what documentation of an ini file should look like
id: examplefile
sidebar_position: 3
---

## Overview

General description goes here. If multiple files link to the same page (through a REDIRECT link), please list all pages that refer to this page.

## Syntax

Notable information about the ini syntax goes here.

### Vanilla Examples

If relevant examples of the filetype in vanilla freelancer should be listed here with their full path:

* `DATA\MISSIONS\ENCOUNTERS\area_armored_prisoner.ini`
* `DATA\MISSIONS\ENCOUNTERS\area_armored_prisonerarea_scout.ini`
* `DATA\MISSIONS\ENCOUNTERS\area_armored_prisonerminingp_scavenger.ini`

**For INI types:**

If there are specificities about how sections are ordered/linked, they should appear here. Each section in the INI should be listed afterwards in this manner:

## ABC Section

```ini
[Section Name]
param = VALUE_TYPE ; comment (if necessary)
```

VALUE_TYPE can be any of the following:

* INT (integer, both positive or negative)
* FLOAT (floating point/decimal value, also positive or negative)
* STRING (text)
* PATH (file path)
* BOOL (true or false)

If subvalues are given, optional subvalues can be expressed in parenthesis (IE: param = A, (B)) to denote the optional character of the value. If subvalues can be repeated endlessly and share the same purpose, one value can be shown, followed by an ellipsis (...) (IE: param = A, B, C, ... with all values following C behaving in the same way as C).

comment can be any of the following:

* optional (the whole parameter is not always necessary)
* repeatable (the whole parameter can be written more than once)

Please avoid writing information in the comment where possible and use the below table instead.

| Parameter     | Information                                                                                                                                                                                                                                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| param         | If a parameter is a number: Range: X to Y (use +-infty for no limit, say -infty to 0).<br/><br/>If a parameter has subvalues (separated by commas): Subvalues: A, B, C. (optional) can be added to any value to denote it is not necessary (IE Subvalues: A (optional), B.)<br/><br/>Description of the parameter. |
| param         | Second param                                                                                                                                                                                                                                                                                                   |
