# Documentation

Ahoge generates hair with three node types: `ahogeShape`, `nurbopusNode` and `swirlNode`. This reference covers their attributes, the tools used to shape hair, and the commands for scripting and export.

## Core workflow

1. Model or import a NURBS surface for the region you want hair on (head, brow, eyelid…).
2. Create an Ahoge shape from it — hair grows along the surface **V-coordinate**.
3. Tune the strand attributes: [Segments and Density](/documentation/segments-and-density), [Width](/documentation/width), [Color](/documentation/color), [Noise](/documentation/noise), [Spray](/documentation/spray), [Multistrand](/documentation/multistrand), [Clump](/documentation/clump).
4. Shape the result with the interactive tools: [Curve Brush](/documentation/tools/curve-brush), [Surface Brush](/documentation/tools/surface-brush), [Carousel](/documentation/tools/carousel), [Nurbopus](/documentation/nurbopus), [Swirl](/documentation/swirl), [Select](/documentation/select).
5. Combine hair shapes: [Connect / Disconnect](/documentation/connect-disconnect), [Duplicate](/documentation/duplicate).
6. Preview and render: [Viewport](/documentation/viewport), [Arnold](/documentation/arnold), [3Delight and RenderMan](/documentation/renderers).
7. Deliver: [Alembic export](/documentation/alembic), [Unreal Engine export](/documentation/unreal).

## Nodes

The attributes of each node, listed in the order the Attribute Editor shows them:

- [Node types](/documentation/nodes/) — what the three nodes are and how they chain
- [ahogeShape attributes](/documentation/nodes/ahoge-shape) — Seed, Color, General, Width, Noise, Cut, Spray, Multistrand, Clump, Arnold, Viewport, Alembic
- [nurbopusNode attributes](/documentation/nodes/nurbopus-node) — General, Orientation, Randomize
- [swirlNode attributes](/documentation/nodes/swirl-node) — Seed, General, Twist, Curl

## MEL commands

- [Command list](/documentation/commands/) — what Ahoge registers
- [ahogeCmd](/documentation/commands/ahogecmd) — the plug-in command and all of its flags
- [ahoge and run-time commands](/documentation/commands/ahoge-and-runtime-commands) — the menu, the shelf buttons, the hotkeys
- [Context commands](/documentation/commands/context-commands) — read and set tool options from a script

## Tools

Ahoge's interactive tools are Maya context tools:

- [Context tools](/documentation/tools/) — how they fit Maya
- [Curve Brush](/documentation/tools/curve-brush) — sculpt and paint NURBS curves
- [Surface Brush](/documentation/tools/surface-brush) — sculpt NURBS surfaces
- [Carousel](/documentation/tools/carousel) — set the root border and the seam

## Scripting

| Layer | What to use |
|---|---|
| Nodes | `createNode` for `ahogeShape`, `nurbopusNode`, `swirlNode`, then `setAttr` / `connectAttr` — the attributes are the API |
| Export and queries | `ahogeCmd` and its flags |
| Interactive tools | `AhogeCurveBrushTool`, `AhogeSurfaceBrushTool`, `AhogeCarouselTool` (and the `…ToolOptions` variants), plus the matching context commands |
| Menu actions | MEL procs in `ahogeTools.mel` (`ahogeTools_connect`, `ahogeTools_duplicateAhoge`, `ahogeTools_rootPivot`, …) and Python helpers in `ahoge_ui.py` / `ahoge_tools.py` |

Menu items, shelf buttons and hotkeys all end up calling one of those, so anything done in the interface can be done from a script.

## Attributes in depth

- [Segments and Density](/documentation/segments-and-density)
- [Width](/documentation/width)
- [Color](/documentation/color)
- [Noise](/documentation/noise)
- [Spray](/documentation/spray)
- [Multistrand](/documentation/multistrand)
- [Clump](/documentation/clump)
- [Viewport](/documentation/viewport)

## Workflow

- [Create Ahoge hair](/documentation/create)
- [Connect / Disconnect](/documentation/connect-disconnect)
- [Duplicate](/documentation/duplicate)
- [Select](/documentation/select)
- [Convert to Mesh](/documentation/convert)
- [Nurbopus](/documentation/nurbopus)
- [Swirl](/documentation/swirl)
- [Surface Rig](/documentation/surface-rig)
- [Misc tools](/documentation/misc)

## Export and rendering

- [Alembic export](/documentation/alembic)
- [Unreal Engine export](/documentation/unreal)
- [Arnold](/documentation/arnold)
- [3Delight and RenderMan](/documentation/renderers)

::: tip
The authoritative source for Ahoge is the official wiki at
[https://ahoge.wiki.gd/](https://ahoge.wiki.gd/) and the announcements on
[Boosty](https://boosty.to/ahoge). This site reorganizes that information so it
can be browsed quickly and offline.
:::
