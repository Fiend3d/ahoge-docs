# Curve Brush

**Ahoge menu → Curve Brush** · run-time command `AhogeCurveBrushTool` · context command `curveBrushContext`

Maya's annotation for the tool: *Sculpt and paint NURBS curves*. The Curve Brush edits the curves Ahoge builds hair from — it does not edit strands directly, so what you paint is what the hair becomes.

## Brush

| Control | What it does |
|---|---|
| **Radius (px)** | How far the brush reaches on screen. Picks CVs and rig handles |
| **Strength** | How much of the stroke is applied |
| **Relax Strength** | How much of the stroke Relax and Smooth apply, kept apart from Strength |
| **Falloff** | Shape of the falloff curve across the brush radius, from a hard edge to a soft one |

Radius is in **pixels**, not world units: it is a screen-space brush, so it stays the same size when you zoom out.

## Mode

Four modes reshape a curve that already exists, four make a new one.

| Mode | What it does |
|---|---|
| **Grab** | Drag the CVs under the cursor |
| **Relax** | Even the CVs out along the curve, sliding them without reshaping it |
| **Pinch** | Pull the CVs toward the stroke |
| **Grab Rig** | Pose whole curves off a chain of handles rather than brushing the CVs under the cursor |
| **Paint** | Draw a new curve on the mesh or NURBS surface under the stroke. It follows the surface exactly |
| **Screen** | Draw a new curve facing the camera, flat at the depth of wherever the stroke starts |
| **Project** | Draw a new curve lifted off what it was drawn on, by **Curve Height** along **Curve Shape** |
| **Clone** | Make a curve out of the selected ones where you click, turned to the normal there |

**Smooth** — make Relax smooth the curve instead of relaxing it: the CVs are pulled toward their neighbours rather than only sliding along the chain.

**Freeze Root** — hold the first CV, where the curve starts, in place.

**Keep Length** — carry the curve without stretching it: the CVs keep the spacing they have.

**Number of Joints** — segments in the rig chain. The chain has one more handle than this number.

**Single Rig** — build one chain across every selected curve rather than one chain per curve.

## Snap

| Control | What it does |
|---|---|
| **Snap to Geometry** | Put what the brush has hold of onto the live surface. Use **Modify → Make Live** on a mesh or NURBS surface to say which one. A click is enough — the mouse does not have to move. Grab snaps the CVs; Grab Rig snaps its handle chain and the curve follows |
| **Padding** | How far off the live surface the snapped CVs sit, in world units, offset along the surface's own normal |
| **Snap Roots** | Put the root of every selected curve and surface on the live surface |

## Paint

Only the four curve-making modes use these; the panel greys out for the reshaping modes.

| Control | What it does |
|---|---|
| **Smooth Curve** | Even the traced stroke out before it is projected |
| **Root Pivot** | Put the new curve's pivot on its first CV. Off, it sits at the curve centre |
| **Rebuild Curve** | Rebuild the new curve to a fixed number of spans |
| **Rebuild Spans** | How many spans the rebuilt curve is given |
| **Curve Height** | How far Project lifts the curve off what it was drawn on |
| **Project Method** | What the curve is lifted from: **Normal** projects onto a plane along the surface normal, **Screen** along the view direction, **Geometry** onto the geometry itself |
| **Curve Shape** | A ramp over the new curve: where along it Curve Height is applied |
| **Reset Shape → Spline / Linear** | Reset Curve Shape to a smooth ramp from 0 to 1, or a straight one |

## Clone

**Clone Method** — what a click makes: **Copy** stamps the selected curve whose shape is nearest, **Interpolate** blends the selected curves together.

## Display

**Show CVs** — draw the CVs the brush would reach.

## Settings from a script

Every control above is a flag on `curveBrushContext`:

```mel
AhogeCurveBrushTool;
curveBrushContext -s -mode 3 -numJoints 6 -singleRig 1 -freezeRoot 1 "AhogeCurveBrushTool";
```

See [Context commands](/documentation/commands/context-commands) for the flag list and mode indices.

## Related

- [Surface Brush](/documentation/tools/surface-brush) — the same brush language, applied to the source surface
- [Carousel](/documentation/tools/carousel) — set roots and seams before sculpting
- [Surface Rig](/documentation/surface-rig) — the rig handles Grab Rig poses
- [Select](/documentation/select) — root pivots, which Grab and Grab Rig depend on
