# Surface Brush

**Ahoge menu → Surface Brush** · run-time command `AhogeSurfaceBrushTool` · context command `surfaceBrushContext`

Maya's annotation for the tool: *Sculpt NURBS surfaces*. The Surface Brush edits the source surface, and the hair that grows from it follows.

## Brush

| Control | What it does |
|---|---|
| **Radius (px)** | How far the brush reaches on screen. Picks CVs, rings and rig handles |
| **Strength** | How much of the stroke is applied. Rig / Transform ignores it |
| **Relax Strength** | How much of the stroke Relax and Smooth apply |
| **Falloff** | Shape of the falloff curve, from a hard edge to a soft one |

## Mode

| Mode | What it does |
|---|---|
| **Grab** | Drag the CVs under the cursor |
| **Relax** | Even the CVs out across the surface, sliding them without reshaping it |
| **Pinch** | Pull the CVs toward the stroke |
| **Move** | Push the surface along its normal, by **Distance** |
| **Flatten** | Flatten the CVs toward the plane at the start of the surface |
| **Rings** | Work whole CV rings at a time rather than the CVs under the cursor |
| **Rig** | Pose the whole surface off a chain of handles |

**Rings Mode** — what the Rings mode does with the rings it picks:

| Mode | What it does |
|---|---|
| **Grab** | Move the picked rings rigidly |
| **Scale** | Drag right to widen the picked rings, left to narrow them |
| **Twist** | Spin the picked rings about the surface axis |
| **Ringify** | Drag right to round the picked rings off |

**Rig Mode** — how the rig handles are posed:

| Mode | What it does |
|---|---|
| **Grab** | Drag the handles inside the brush circle and pose the surface through them |
| **Xform** | Hang a move, rotate and scale gizmo off the nearest handle |

## Options

| Control | What it does |
|---|---|
| **Distance** | How far Move pushes the surface |
| **Number of Joints** | Segments in the rig chain. The chain has one more handle than this number |
| **Smooth** | Make Relax smooth the surface instead of relaxing it |
| **Ignore Backfaces** | Leave CVs on the far side of the surface alone |
| **Freeze Root** | Hold the first ring of CVs, at the start of the surface, in place |

## Snap

| Control | What it does |
|---|---|
| **Snap to Geometry** | Put what the brush has hold of onto the live surface (**Modify → Make Live**) |
| **Padding** | How far off the live surface the snapped CVs sit, in world units |
| **Snap Roots** | Put the root of every selected curve and surface on the live surface |

## Display

**Show CVs** — draw the CVs the brush would reach. The Rings modes draw their own highlight instead.

## Settings from a script

```mel
AhogeSurfaceBrushTool;
surfaceBrushContext -s -mode 5 -ringMode 1 -radius 80 -freezeRoot 1 "AhogeSurfaceBrushTool";
```

See [Context commands](/documentation/commands/context-commands) for the flag list and mode indices.

## Related

- [Curve Brush](/documentation/tools/curve-brush) — the same brush language, applied to curves
- [Carousel](/documentation/tools/carousel) — set the root border and seam before sculpting
- [Surface Rig](/documentation/surface-rig) — the rig the Rig mode poses
