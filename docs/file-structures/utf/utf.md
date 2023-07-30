---
title:  UTF (Universal Tree Format)
---

## Overview

Container file format used to store various assets in Freelancers.
Little-endian byte order.

Freelancer uses UTF in these type of files:

- .utf (audio library, etc)
- .ale (particle effects library)
- .vms (rigid mesh buffer library)
- .3db (single-part rigid model)
- .cmp (compound rigid model)
- .dfm (compound deformable model)
- .sph (simple sphere model)
- .txm (texture library)
- .mat (material library)

### Header

File begins with header block which is always 56 bytes.

| Name               | Type   | Description                                                               |
| ------------------ | ------ | ------------------------------------------------------------------------- |
| signature          | uint32 | Magic bytes, string reads as "UTF ".                                      |
| version            | uint32 | Always 0x101.                                                             |
| treeOffset         | uint32 | Absolute byte offset to tree block.                                       |
| treeSize           | uint32 | Tree byte size.                                                           |
| unusedEntryOffset  | uint32 | Usually is 0.                                                             |
| entrySize          | uint32 | Entry byte size is always 44. Freelancer will crash otherwise.            |
| namesOffset        | uint32 | Absolute byte offset to dictionary block.                                 |
| namesSizeAllocated | uint32 | Dictionary byte size allocated.                                           |
| namesSizeUsed      | uint32 | Dictionary used byte size. Must be equal or less than namesSizeAllocated. |
| dataOffset         | uint32 | Absolute byte offset to data block.                                       |
| unusedOffset       | uint32 | Absolute byte offset to extra data (unused).                              |
| unusedSize         | uint32 | Extra data byte size (unused).                                            |
| filetime           | uint64 | Windows 64-bit FILETIME.                                                  |

- Header is usually followed by entries but not always, some files have dictionary before entries.
- Dictionary is a concatenated collection of ASCIIz strings (NUL-terminated ASCII strings).
- Dictionary reserves first string as empty (i.e. first byte in dictionary block is 0x0). Entries with zero length name are ignored.

### Entry

Each entry in tree block is 44 bytes.

| Name                 | Type   | Description                                    |
| -------------------- | ------ | ---------------------------------------------- |
| nextOffset           | uint32 | Offset to next sibling in tree block.          |
| nameOffset           | uint32 | Offset to entry name in dictionary block.      |
| attributes           | uint32 | File system attributes.                        |
| sharingAttributes    | uint32 | File system sharing attributes (unused).       |
| childOffset          | uint32 | Either offset to first child or to entry data. |
| dataSizeAllocated    | uint32 | Allocated data byte length.                    |
| dataSizeUsed         | uint32 | Actual used data byte length.                  |
| dataSizeUncompressed | uint32 | Uncompressed data byte length (unused).        |
| createTime           | uint32 | File creation timestamp.                       |
| accessTime           | uint32 | File last access timestamp.                    |
| modifyTime           | uint32 | File last modification timestamp.              |

- Tree root entry name should be "/", but other names are possible.
- For attributes see Win32 API dwFileAttributes. In short it should be either 0x80 for file or 0x10 for folder. It is not necessary, however, that all three bytes after the first here are zero, and, in fact, in some vanilla files, they are not.
- When entry is a folder the childOffset points to first child byte offset, relative to treeOffset in header, and dataSize* are all zeroes.
- When entry is a file the childOffset points to data block, relative to dataOffset in header, and dataSize* indicate file size.
- Timestamps are DOS file timestamp, see: [https://blogs.msdn.microsoft.com/oldnewthing/20030905-02/?p=42653](https://blogs.msdn.microsoft.com/oldnewthing/20030905-02/?p=42653)
