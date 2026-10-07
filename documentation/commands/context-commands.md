# Context commands

Each Ahoge tool has a Maya **context command** that holds its settings. The Tool Settings window is a front end for these commands: every slider and checkbox reads and writes one flag.

```mel
// query
float $r = `curveBrushContext -q -radius "AhogeCurveBrushTool"`;

// set
curveBrushContext -s -radius 40 "AhogeCurveBrushTool";
```

```python
import maya.cmds as cmds
cmds.curveBrushContext(q=True, radius=True, tool="AhogeCurveBrushTool")
cmds.curveBrushContext(s=True, radius=40, tool="AhogeCurveBrushTool")
```

The tool name argument is the run-time command name: `AhogeCurveBrushTool`, `AhogeSurfaceBrushTool`, `AhogeCarouselTool`.

## `curveBrushContext`

| Flag | Type | Tool Settings control |
|---|---|---|
| `-radius` | float | Radius (px) |
| `-strength` | float | Strength |
| `-relaxStrength` | float | Relax Strength |
| `-falloff` | float | Falloff |
| `-mode` | int | Mode grid, index 0–7 |
| `-numJoints` | int | Number of Joints |
| `-singleRig` | bool | Single Rig |
| `-smooth` | bool | Smooth |
| `-freezeRoot` | bool | Freeze Root |
| `-keepLength` | bool | Keep Length |
| `-snap` | bool | Snap to Geometry |
| `-snapPadding` | float | Padding |
| `-xray` | bool | Show CVs |
| `-paintSmooth` | bool | Smooth Curve |
| `-rootPivot` | bool | Root Pivot |
| `-rebuild` | bool | Rebuild Curve |
| `-rebuildSpans` | int | Rebuild Spans |
| `-paintHeight` | float | Curve Height |
| `-projectMethod` | int | Project Method: `0` Normal · `1` Screen · `2` Geometry |
| `-cloneMethod` | int | Clone Method: `0` Copy · `1` Interpolate |

Mode indices, in the order the Mode grid shows them:

| Index | Mode | Index | Mode |
|---|---|---|---|
| `0` | Grab | `4` | Paint |
| `1` | Relax | `5` | Screen |
| `2` | Pinch | `6` | Project |
| `3` | Grab Rig | `7` | Clone |

## `surfaceBrushContext`

| Flag | Type | Tool Settings control |
|---|---|---|
| `-radius` | float | Radius (px) |
| `-strength` | float | Strength |
| `-relaxStrength` | float | Relax Strength |
| `-falloff` | float | Falloff |
| `-mode` | int | Mode grid, index 0–6 |
| `-ringMode` | int | Rings Mode: `0` Grab · `1` Scale · `2` Twist · `3` Ringify |
| `-rigMode` | int | Rig Mode: `0` Grab · `1` Xform |
| `-distance` | float | Distance |
| `-numJoints` | int | Number of Joints |
| `-smooth` | bool | Smooth |
| `-ignoreBackfaces` | bool | Ignore Backfaces |
| `-freezeRoot` | bool | Freeze Root |
| `-snap` | bool | Snap to Geometry |
| `-snapPadding` | float | Padding |
| `-xray` | bool | Show CVs |

Mode indices: `0` Grab, `1` Relax, `2` Pinch, `3` Move, `4` Flatten, `5` Rings, `6` Rig.

## `carouselContext`

| Flag | Type | Tool Settings control |
|---|---|---|
| `-mode` | int | `0` Root · `1` Seam |
| `-snapToIsoparm` | bool | Snap to Isoparms |

## Example: set up a brush from a script

```mel
global proc hairBrushSetup() {
    AhogeCurveBrushTool;
    curveBrushContext -s -mode 0 -radius 60 -strength 0.6 -falloff 0.5
                      -freezeRoot 1 -keepLength 1 "AhogeCurveBrushTool";
}
```

See [Curve Brush](/documentation/tools/curve-brush), [Surface Brush](/documentation/tools/surface-brush) and [Carousel](/documentation/tools/carousel) for what each control does.
