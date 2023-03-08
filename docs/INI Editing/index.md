---
title: INI Editing
description: A collection of all knowledge amassed on the INI structure
id: ini-editing
slug: ini-editing
---

# Root Folder

* [DATA](DATA)
* [DLLS](DLLS)
* [EXE](EXE)

## Guidelines For Editors
When creating or modifying the database, please follow these guidelines:
* Always list all '''non-repeating''' files in a folder (IE don't list all sound files in the AUDIO folder or all the CMPs), even if some of them aren't used or if how they work is not known yet.
* If two files follow the same syntax (for instance, the market files), it's best to make a single page for all of them and use redirects.
* Alternatively, if a lot of files work the same way (CMP files for instance), it is best to make a page named *.ext (in lowercase).
* Always use the full file/folder name.
* Files must be spelled in full lowercase, while folders are capitalized but not full uppercase.
* In the case two files are named the same but cannot share the same page, include the name of the parent folder(s) until a differentiation is clear, separating folders by a dash (for instance, MDB:data-ships-loadouts.ini).

When creating pages for specific files, please follow this structure:

[examplefile.ext](examplefile)
