# MEL commands

Ahoge provides commands for geometry queries, conversion and export, MEL procedures for its interface, and context commands for tool settings. Use the references below to automate these tasks.

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
// Find the closest point on a mesh
ahogeCmd -m "headMesh" -cp 1.0 4.2 -3.7;
```

The same query in Python:

```python
import maya.cmds as cmds
p = cmds.ahogeCmd(mesh="headMesh", closestPoint=(1.0, 4.2, -3.7))
```

For command syntax, flags and examples, see:

- [ahogeCmd](/documentation/commands/ahogecmd)
- [ahoge and the run-time commands](/documentation/commands/ahoge-and-runtime-commands)
- [Context commands](/documentation/commands/context-commands)
