---
title: Thorn Editing
description: Index for the THN editing section of this wiki.
id: thn-editing
---

:::caution

This section is a work in progress and is being adapted from Treewyrm's THN Scripting Guide.

There may be missing, incomplete or incorrect information on this page as it's still being built! Take information here with a pinch of salt, and feel free to contribute and correct things!

:::

In-game cutscenes such as base landing, takeoff, the single-player campaign story use THN scripts. This section aims to provide you with the knowledge to make your own cutscenes.

Cutscene scripts are quite simple in structure. There are three main sections: **duration**, **objects** and **timeline**. **Duration** specifies how long cutscene lasts. **Objects** are everything from environment scenery to characters in cutscene and visual effects. **Timeline** specifies what events are activated and when during the cutscene playback.

It’s important to note that typically cutscenes operate outside the ‘system scene’ where you pilot your ship, as such there are a number of limitations. It is possible to use THN scripts in conjunction with single-player mission scripts to provide in-game cutscenes. The Freeport 7 introduction cutscene is one such example.

## Getting Started

You’ll need just few tools to work with .thn files. If you wish to see code or modify the original .thn files you’ll need a decompiler such as [Adoxa's Dethorn](http://adoxa.altervista.org/freelancer/tools.html#dethorn) that will produce readable text files, or you can use [this pre-decompiled set of scripts](https://github.com/TheStarport/freelancer-dethorned). Keep in mind you do not need to compile them back into packed binary files, just like with the game's .ini files Freelancer can read both compiled and plain-text.

A decent text editor with LUA syntax highlighting is highly recommended. Although vanilla scripts contain no programmable logic and are merely used as a serialized object/array data format much like JSON relates to JavaScript, it is possible to use a limited set following the syntax for [LUA version 3.2](https://www.lua.org/manual/3.2/manual.html).

## Reference Sheets

- [Thorn Objects](./thorn-objects.md)
- [Thorn Events](./thorn-events.md)


## Parameter curves
Most parameters found in the event and Object and Timeline tables can be animated using curves by adding `param_curve` and `pcurve_period` to event properties.

| Type             | Description                      |
| ---------------- | -------------------------------- |
| FreeFormPCurve   | Free-form tangent interpolation. |
| BumpInPCurve     | Bump in.                         |
| BumpOutPCurve    | Bump out.                        |
| RampDownPCurve   | Ramp down.                       |
| RampUpPCurve     | Ramp up.                         |
| StepPCurve       | No interpolation.                |
| SmoothPCurve     | Smooth interpolation.            |
| ThornLPCurve     | Unclear                              |
| LinearPCurve     | Linear interpolation.            |
| CatmullRomPCurve | Catmull-Rom interpolation.       |

Additionally you can use `pcurve_period` to make animations loop several times throughout the duration of an event. However unlike duration property `pcurve_period` is measured in milliseconds. When set to a negative value the period will match the event duration.

## Mission Scripts
Cutscenes can be called from mission scripts using `Act_CallThorn` function. These are typically used for camera movement.
