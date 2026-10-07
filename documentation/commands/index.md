# MEL commands

Ahoge's scripting surface is small: **one plug-in command** does the geometry work, **one MEL procedure** opens the interface, and **three context commands** hold the tool settings. Everything on the shelf and in the menu is a call to one of them.

| Name | Kind | What it is |
|---|---|---|
| `ahogeCmd` | plug-in command (`ahoge.mll`) | Closest point on a mesh, convert hair to mesh, groom root UV, legacy mode, Alembic export |
| `ahoge` | MEL procedure | Opens the Ahoge interface and installs the menu |
| `ahogeTools` | MEL procedure | Builds the Ahoge menu |
| `AhogeCurveBrushTool` | run-time command | Activates the Curve Brush |
| `AhogeSurfaceBrushTool` | run-time command | Activates the Surface Brush |
| `AhogeCarouselTool` | run-time command | Activates the Carousel |
| `curveBrushContext` | context command | Curve Brush settings |
| `surfaceBrushContext` | context command | Surface Brush settings |
| `carouselContext` | context command | Carousel settings |
| `ahogeShape`, `nurbopusNode`, `swirlNode` | node types | The hair and its helper nodes |

```mel
// The whole plug-in is one command with flags
ahogeCmd -m "headMesh" -cp 1.0 4.2 -3.7;

// Python goes through maya.cmds
import maya.cmds as cmds
p = cmds.ahogeCmd(mesh="headMesh", closestPoint=(1.0, 4.2, -3.7))
```

Each command and its flags in detail:

- [ahogeCmd](/documentation/commands/ahogecmd)
- [ahoge and the run-time commands](/documentation/commands/ahoge-and-runtime-commands)
- [Context commands](/documentation/commands/context-commands)
