---
title: INI
---

## Overview

Freelancer INI files come in two forms: plain-text and binary (BINI).

When reading INI, text or binary, few key aspects are:

* Sections and properties within them are treated as sequence of instructions rather than serialized property lists.
* Properties can have duplicate names in a section and multiple sections can have duplicate names.
* Maintaining order of sections and properties is essential.
* A section property can have up to 256 values separated by comma in text format and explicitly counted in binary.
* Individual values are primitive types: boolean, integers, floats and strings.
* In text format properties within a section without any values are treated as a boolean with value of true.
* Care must be taken when dealing with values from text format - cast them into desired type when queried.

Property named "comment" can be used for comments since BINI does not contain regular INI comments.

## Binary INI (BINI)

Little-endian byte order.

### Header

| Name        | Type      | Description                  |
| ----------- | --------- | ---------------------------- |
| singnature  | uint32    | Must be 0x494E4942 ("BINI"). |
| version     | uint32    | Format version (0x1).        |
| namesOffset | uint32    | Offset to dictionary block.  |
| *sections*  | *varying* |                              |
| *names*     | *varying* |                              |

* Dictionary is a concatenated collection of ASCIIz strings (NUL-terminated ASCII strings).
* Best keep section and property names before string values in dictionary.
* After header read sections until namesOffset.

### Section

| Name          | Type      | Description                        |
| ------------- | --------- | ---------------------------------- |
| nameOffset    | uint16    | Section name offset in dictionary. |
| propertyCount | uint16    | Number of properties as follow.    |
| *properties*  | *varying* |                                    |

### Property

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| nameOffset | uint16    | Property name offset in dictionary. |
| valueCount | uint8     | Number of property values.          |
| *values*   | *varying* |                                     |

### Value

| Name  | Type    | Description     |
| ----- | ------- | --------------- |
| type  | uint8   | Property type.  |
| value | byte[4] | Property value. |

* Binary format limits number of values per property to 256 so it is best not to exceed that in text format.
* Interpret value four bytes based on preceding type:

| Type    | Value | Description                                                                      |
| ------- | ----- | -------------------------------------------------------------------------------- |
| Boolean | 0x0   | Most significant bit in value is boolean.                                        |
| Integer | 0x1   | Value is signed 32-bit integer number.                                           |
| Float   | 0x2   | Value is 32-bit float point number.                                              |
| String  | 0x3   | Value is unsigned 32-bit integer number as offset to string in dictionary block. |
